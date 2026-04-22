'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/client';
import { requireAnyPermission, requirePermission, requireSession, isAdmin, sessionPermissions } from '@/lib/authz';
import { saveIncomingFile } from '@/lib/uploads';

// --- Generating Ticket Number (YYYYMMDD-SEQUENCE) ---
export async function generateTicketNumber() {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
  
  // Count how many tickets were created today
  const result: any[] = await prisma.$queryRaw(
    Prisma.sql`SELECT COUNT(*) as count FROM tickets WHERE DATE(created_at) = CURDATE()`,
  );
  
  const sequence = (Number(result[0].count) + 1).toString().padStart(4, '0');
  return `${dateStr}-${sequence}`;
}
// --- Fetching Master Data for Filters ---
export async function getTicketFilterData() {
  await requireSession();
  const [categories, priorities, statuses, divisions, users] = await Promise.all([
    prisma.$queryRaw(Prisma.sql`SELECT * FROM categories ORDER BY category_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM ticket_priorities ORDER BY ticket_priority_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM ticket_statuses ORDER BY ticket_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM divisions ORDER BY division_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT user_id, full_name as name FROM users WHERE is_active = 1 ORDER BY full_name ASC`),
  ]);

  return { categories, priorities, statuses, divisions, users };
}


// --- Fetching Master Data for Form ---
export async function getTicketFormData() {
  await requireSession();
  const [categories, priorities, statuses, types, divisions] = await Promise.all([
    prisma.$queryRaw(Prisma.sql`SELECT * FROM categories ORDER BY category_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM ticket_priorities ORDER BY ticket_priority_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM ticket_statuses ORDER BY ticket_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM ticket_types ORDER BY ticket_type_name ASC`),
    prisma.$queryRaw(Prisma.sql`SELECT * FROM divisions ORDER BY division_name ASC`),
  ]);

  return { categories, priorities, statuses, types, divisions };
}

// --- Ticket Operations ---
export async function getTickets() {
  const session = await requireAnyPermission(['view_tickets', 'manage_own_tickets']);
  const permissions = sessionPermissions(session);
  const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
  const userId = BigInt(session.user_id);

  // Using Raw SQL with JOINs to avoid Prisma Client synchronization issues 
  const result: any[] = await prisma.$queryRaw(Prisma.sql`
    SELECT 
      t.*,
      c.category_name, c.color as category_color, c.icon as category_icon,
      tp.ticket_priority_name, tp.color as priority_color, tp.icon as priority_icon,
      ts.ticket_name as ticket_status_name, ts.color as status_color,
      tt.ticket_type_name,
      d.division_name,
      u.full_name as creator_name,
      uu.full_name as updated_user_name,
      t.requestor_name,
      t.ticket_start_date,
      t.ticket_end_date,
      t.created_at,
      t.updated_at
    FROM tickets t
    LEFT JOIN categories c ON t.category_id = c.category_id
    LEFT JOIN ticket_priorities tp ON t.ticket_priority_id = tp.ticket_priority_id
    LEFT JOIN ticket_statuses ts ON t.ticket_status_id = ts.ticket_status_id
    LEFT JOIN ticket_types tt ON t.ticket_type_id = tt.ticket_type_id
    LEFT JOIN divisions d ON t.division_id = d.division_id
    LEFT JOIN users u ON t.created_user_id = u.user_id
    LEFT JOIN users uu ON t.updated_user_id = uu.user_id
    WHERE t.deleted_at IS NULL
    ${canViewAll ? Prisma.empty : Prisma.sql`AND t.created_user_id = ${userId}`}
    ORDER BY t.created_at DESC
  `);

  return result;
}

export async function saveTicket(data: any) {
  const session = await requirePermission('create_tickets');
  const userId = BigInt(session.user_id);

  const { 
    ticket_subject, 
    ticket_detail, 
    requestor_name, 
    ticket_type_id, 
    category_id, 
    division_id, 
    ticket_priority_id, 
    ticket_status_id,
    ticket_start_date,
    ticket_end_date,
    files = [] // Array of { name, type, size, base64 } or similar
  } = data;

  const ticket_number = await generateTicketNumber();

  // 1. Insert Ticket
  await prisma.$executeRaw(
    Prisma.sql`INSERT INTO tickets (
        ticket_number, ticket_subject, ticket_detail, requestor_name,
        ticket_type_id, category_id, division_id, ticket_priority_id,
        ticket_status_id, created_user_id, created_at, updated_at, ticket_attach,
        ticket_start_date, ticket_end_date
      ) VALUES (
        ${ticket_number}, ${ticket_subject}, ${ticket_detail || null}, ${requestor_name},
        ${Number(ticket_type_id)}, ${Number(category_id)}, ${Number(division_id)}, ${Number(ticket_priority_id)},
        ${Number(ticket_status_id)}, ${userId}, NOW(), NOW(), ${files.length > 0 ? 'Y' : 'N'},
        ${ticket_start_date ? new Date(ticket_start_date) : null}, ${ticket_end_date ? new Date(ticket_end_date) : null}
      )`,
  );

  // 2. Get the new ticket_id
  const lastId: any[] = await prisma.$queryRaw(Prisma.sql`SELECT LAST_INSERT_ID() as id`);
  const ticket_id = lastId[0].id;

  // 3. Handle Files
  if (files && files.length > 0) {
    for (const file of files) {
      const saved = saveIncomingFile(file, 'tickets');
      await prisma.ticket_documents.create({
        data: {
          ticket_id: BigInt(ticket_id),
          original_name: saved.originalName,
          storage_name: saved.storageName,
          file_path: saved.storageRelPath,
          file_size: saved.size,
          file_extension: saved.extension,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });
    }
  }

  revalidatePath('/tickets');
  return { success: true, ticket_number, ticket_id: ticket_id.toString() };
}

export async function updateTicket(ticket_id: string, data: any) {
  const session = await requirePermission('edit_tickets');
  const permissions = sessionPermissions(session);
  const canEditAny = isAdmin(session) || permissions.includes('edit_tickets');
  const canManageOwn = permissions.includes('manage_own_tickets');

  const userId = BigInt(session.user_id);
  const ticketId = BigInt(ticket_id);

  if (!canEditAny) {
    if (!canManageOwn) throw new Error('Forbidden');
    const ticket = await prisma.tickets.findUnique({
      where: { ticket_id: ticketId },
      select: { created_user_id: true },
    });
    if (!ticket || BigInt(ticket.created_user_id) !== userId) throw new Error('Forbidden');
  }

  const {
    ticket_subject,
    ticket_detail,
    requestor_name,
    ticket_type_id,
    category_id,
    division_id,
    ticket_priority_id,
    ticket_status_id,
    ticket_start_date,
    ticket_end_date,
  } = data ?? {};

  await prisma.tickets.update({
    where: { ticket_id: ticketId },
    data: {
      ticket_subject,
      ticket_detail: ticket_detail ?? null,
      requestor_name,
      ticket_type_id: Number(ticket_type_id),
      category_id: Number(category_id),
      division_id: Number(division_id),
      ticket_priority_id: Number(ticket_priority_id),
      ticket_status_id: Number(ticket_status_id),
      ticket_start_date: ticket_start_date ? new Date(ticket_start_date) : null,
      ticket_end_date: ticket_end_date ? new Date(ticket_end_date) : null,
      updated_user_id: userId,
      updated_at: new Date(),
    },
  });

  revalidatePath(`/tickets/${ticket_id}`);
  revalidatePath('/tickets');
  return { success: true };
}

export async function getTicketSummary() {
    const session = await requireAnyPermission(['view_tickets', 'manage_own_tickets']);
    const permissions = sessionPermissions(session);
    const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
    const userId = BigInt(session.user_id);

    // 1. Get total tickets
    const totalResult: any[] = await prisma.$queryRaw(Prisma.sql`
        SELECT COUNT(*) as count FROM tickets 
        WHERE deleted_at IS NULL
        ${canViewAll ? Prisma.empty : Prisma.sql`AND created_user_id = ${userId}`}
    `);
    const total = Number(totalResult[0]?.count || 0);

    // 2. Get counts grouped by status (including statuses with 0 tickets)
    const stats: any[] = await prisma.$queryRaw(Prisma.sql`
        SELECT 
            ts.ticket_status_id,
            ts.ticket_name as name,
            ts.color,
            COUNT(t.ticket_id) as count
        FROM ticket_statuses ts
        LEFT JOIN (
            SELECT * FROM tickets 
            WHERE deleted_at IS NULL 
            ${canViewAll ? Prisma.empty : Prisma.sql`AND created_user_id = ${userId}`}
        ) t ON ts.ticket_status_id = t.ticket_status_id
        GROUP BY ts.ticket_status_id, ts.ticket_name, ts.color
        ORDER BY ts.ticket_status_id ASC
    `);
    
    // Transform Raw SQL numeric types (BigInt) to Number
    const dynamicStatuses = stats.map(s => ({
        name: s.name,
        color: s.color,
        count: Number(s.count)
    }));

    return { 
        total,
        statuses: dynamicStatuses
    };
}

export async function getDashboardData(month?: number, year?: number) {
    const session = await requireAnyPermission(['view_tickets', 'manage_own_tickets']);
    const permissions = sessionPermissions(session);
    const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
    const userId = BigInt(session.user_id);

    const hasFilter = !!month && !!year;
    if (hasFilter) {
        const m = Number(month);
        const y = Number(year);
        if (!Number.isInteger(m) || m < 1 || m > 12) throw new Error('Invalid month');
        if (!Number.isInteger(y) || y < 2000 || y > 2100) throw new Error('Invalid year');
    }

    const ownerFilter = canViewAll ? Prisma.empty : Prisma.sql`AND t.created_user_id = ${userId}`;
    const monthYearFilter = hasFilter
        ? Prisma.sql`AND YEAR(t.created_at) = ${Number(year)} AND MONTH(t.created_at) = ${Number(month)}`
        : Prisma.empty;

    const [
        totalResult,
        statusStats,
        priorityStats,
        divisionStats,
        categoryStats,
        dailyTrend,
        recentTickets,
    ] = await Promise.all([
        prisma.$queryRaw(
            Prisma.sql`
                SELECT COUNT(*) as count
                FROM tickets t
                WHERE t.deleted_at IS NULL
                ${ownerFilter}
                ${monthYearFilter}
            `,
        ),

        // By status — LEFT JOIN with filtered set so statuses with 0 tickets still appear
        prisma.$queryRaw(
            Prisma.sql`
                SELECT ts.ticket_name as name, ts.color, COUNT(t.ticket_id) as count
                FROM ticket_statuses ts
                LEFT JOIN tickets t
                    ON ts.ticket_status_id = t.ticket_status_id
                    AND t.deleted_at IS NULL
                    ${ownerFilter}
                    ${monthYearFilter}
                GROUP BY ts.ticket_status_id, ts.ticket_name, ts.color
                ORDER BY ts.ticket_status_id ASC
            `,
        ),

        // By priority
        prisma.$queryRaw(
            Prisma.sql`
                SELECT tp.ticket_priority_name as name, tp.color, COUNT(t.ticket_id) as count
                FROM ticket_priorities tp
                LEFT JOIN tickets t
                    ON tp.ticket_priority_id = t.ticket_priority_id
                    AND t.deleted_at IS NULL
                    ${ownerFilter}
                    ${monthYearFilter}
                GROUP BY tp.ticket_priority_id, tp.ticket_priority_name, tp.color
                ORDER BY tp.ticket_priority_id ASC
            `,
        ),

        // By division
        prisma.$queryRaw(
            Prisma.sql`
                SELECT d.division_name as name, COUNT(t.ticket_id) as count
                FROM divisions d
                LEFT JOIN tickets t
                    ON d.division_id = t.division_id
                    AND t.deleted_at IS NULL
                    ${ownerFilter}
                    ${monthYearFilter}
                GROUP BY d.division_id, d.division_name
                ORDER BY count DESC
                LIMIT 8
            `,
        ),

        // By category
        prisma.$queryRaw(
            Prisma.sql`
                SELECT c.category_name as name, c.color, COUNT(t.ticket_id) as count
                FROM categories c
                LEFT JOIN tickets t
                    ON c.category_id = t.category_id
                    AND t.deleted_at IS NULL
                    ${ownerFilter}
                    ${monthYearFilter}
                GROUP BY c.category_id, c.category_name, c.color
                ORDER BY count DESC
                LIMIT 8
            `,
        ),

        // Daily trend
        prisma.$queryRaw(
            Prisma.sql`
                SELECT DATE(t.created_at) as date, COUNT(*) as count
                FROM tickets t
                WHERE t.deleted_at IS NULL
                ${ownerFilter}
                ${hasFilter ? monthYearFilter : Prisma.sql`AND t.created_at >= DATE_SUB(CURDATE(), INTERVAL 13 DAY)`}
                GROUP BY DATE(t.created_at)
                ORDER BY date ASC
            `,
        ),

        prisma.$queryRaw(
            Prisma.sql`
                SELECT t.ticket_id, t.ticket_number, t.ticket_subject, t.requestor_name,
                       ts.ticket_name as status_name, ts.color as status_color,
                       tp.ticket_priority_name, tp.color as priority_color,
                       t.created_at
                FROM tickets t
                LEFT JOIN ticket_statuses ts ON t.ticket_status_id = ts.ticket_status_id
                LEFT JOIN ticket_priorities tp ON t.ticket_priority_id = tp.ticket_priority_id
                WHERE t.deleted_at IS NULL
                ${ownerFilter}
                ${monthYearFilter}
                ORDER BY t.created_at DESC
                LIMIT 5
            `,
        ),
    ]);

    const total = Number((totalResult as any[])[0]?.count || 0);
    const normalize = (arr: any[]) => arr.map(r => ({ ...r, count: Number(r.count) }));

    // Build trend map
    const trendMap: Record<string, number> = {};
    (dailyTrend as any[]).forEach((r: any) => {
        const d = new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        trendMap[d] = Number(r.count);
    });

    let trend: { date: string; count: number }[] = [];
    if (hasFilter) {
        // Fill every calendar day of the selected month
        const daysInMonth = new Date(year!, month!, 0).getDate();
        trend = Array.from({ length: daysInMonth }, (_, i) => {
            const d = new Date(year!, month! - 1, i + 1);
            const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            return { date: label, count: trendMap[label] || 0 };
        });
    } else {
        trend = Array.from({ length: 14 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (13 - i));
            const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            return { date: label, count: trendMap[label] || 0 };
        });
    }

    return {
        total,
        statusStats:   normalize(statusStats   as any[]),
        priorityStats: normalize(priorityStats as any[]),
        divisionStats: normalize(divisionStats as any[]),
        categoryStats: normalize(categoryStats as any[]),
        trend,
        recentTickets: (recentTickets as any[]).map(r => ({
            ...r,
            ticket_id:  r.ticket_id.toString(),
            created_at: r.created_at
                ? new Date(r.created_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
                : null,
        })),
    };
}

// --- Interaction & Attachment Logic ---

export async function getTicketDetail(id: string) {
    const session = await requireAnyPermission(['view_tickets', 'manage_own_tickets']);
    const permissions = sessionPermissions(session);
    const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
    const userId = BigInt(session.user_id);

    const ticketId = BigInt(id);

    // 1. Fetch main ticket info with relations
    const ticketResult: any[] = await prisma.$queryRaw(
        Prisma.sql`
            SELECT 
                t.*,
                c.category_name, c.color as category_color, c.icon as category_icon,
                tp.ticket_priority_name, tp.color as priority_color, tp.icon as priority_icon,
                ts.ticket_name as status_name, ts.color as status_color,
                tt.ticket_type_name,
                d.division_name,
                u.full_name as creator_name,
                u.user_name as creator_username
            FROM tickets t
            LEFT JOIN categories c ON t.category_id = c.category_id
            LEFT JOIN ticket_priorities tp ON t.ticket_priority_id = tp.ticket_priority_id
            LEFT JOIN ticket_statuses ts ON t.ticket_status_id = ts.ticket_status_id
            LEFT JOIN ticket_types tt ON t.ticket_type_id = tt.ticket_type_id
            LEFT JOIN divisions d ON t.division_id = d.division_id
            LEFT JOIN users u ON t.created_user_id = u.user_id
            WHERE t.ticket_id = ${ticketId}
            LIMIT 1
        `,
    );

    if (!ticketResult.length) return null;

    if (!canViewAll) {
        const owner = BigInt(ticketResult[0].created_user_id);
        if (owner !== userId) throw new Error('Forbidden');
    }

    // 2. Fetch Initial Documents
    const documents = await prisma.ticket_documents.findMany({
        where: { ticket_id: ticketId },
        orderBy: { ticket_document_id: 'asc' },
    });

    // 3. Fetch Replies with their documents
    const replies: any[] = await prisma.$queryRaw(
        Prisma.sql`
            SELECT 
                tr.*,
                ts.ticket_name as status_name, ts.color as status_color,
                u.full_name as user_name,
                u.user_name as user_username
            FROM ticket_replys tr
            LEFT JOIN ticket_statuses ts ON tr.ticket_status_id = ts.ticket_status_id
            LEFT JOIN users u ON tr.pic_user_id = u.user_id
            WHERE tr.ticket_id = ${ticketId}
            ORDER BY tr.created_at ASC
        `,
    );

    // 4. Fetch reply documents for these replies
    const replyIds = replies.map((r) => BigInt(r.ticket_reply_id));
    const allReplyDocs = replyIds.length
        ? await prisma.ticket_reply_documents.findMany({
              where: { ticket_reply_id: { in: replyIds } },
              orderBy: { ticket_reply_document_id: 'asc' },
          })
        : [];

    return {
        ...ticketResult[0],
        documents: (documents as any[]).map((d) => ({
            ...d,
            ticket_document_id: d.ticket_document_id.toString(),
            file_name: (d as any).original_name ?? (d as any).file_name,
            file_path: `/api/attachments/ticket/${d.ticket_document_id.toString()}`,
        })),
        replies: replies.map(r => ({ 
            ...r, 
            ticket_reply_id: r.ticket_reply_id.toString(),
            documents: allReplyDocs
                .filter((d: any) => d.ticket_reply_id === r.ticket_reply_id)
                .map((d: any) => ({
                    ...d,
                    ticket_reply_document_id: d.ticket_reply_document_id.toString(),
                    file_name: d.original_name ?? d.file_name,
                    file_path: `/api/attachments/reply/${d.ticket_reply_document_id.toString()}`,
                })),
        }))
    };
}

export async function saveTicketReply(data: any) {
    const { ticket_id, ticket_status_id, reply_description, files = [] } = data;

    const session = await requirePermission('reply_tickets');
    const permissions = sessionPermissions(session);
    const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
    const canManageOwn = permissions.includes('manage_own_tickets');
    const userId = BigInt(session.user_id);
    const ticketId = BigInt(ticket_id);

    // Enforce ticket visibility and block replies on closed tickets (server-side)
    const ticketMeta: any[] = await prisma.$queryRaw(
        Prisma.sql`
            SELECT t.created_user_id, ts.ticket_name as status_name
            FROM tickets t
            LEFT JOIN ticket_statuses ts ON t.ticket_status_id = ts.ticket_status_id
            WHERE t.ticket_id = ${ticketId} AND t.deleted_at IS NULL
            LIMIT 1
        `,
    );
    if (!ticketMeta.length) throw new Error('Ticket not found');

    const owner = BigInt(ticketMeta[0].created_user_id);
    if (!canViewAll) {
        if (!canManageOwn || owner !== userId) throw new Error('Forbidden');
    }

    const statusName = String(ticketMeta[0].status_name ?? '').toLowerCase();
    const isClosed = ['close', 'closed', 'cancel', 'cancelled'].some((w) => statusName.includes(w));
    if (isClosed) throw new Error('Ticket is closed');

    // 1. Insert Reply
    await prisma.$executeRaw(
        Prisma.sql`INSERT INTO ticket_replys (
                ticket_id, ticket_status_id, pic_user_id, reply_description, created_at, ticket_attch
            ) VALUES (
                ${ticketId}, ${Number(ticket_status_id)}, ${userId}, ${reply_description ?? null}, NOW(), ${files.length > 0 ? 'Y' : 'N'}
            )`,
    );

    const lastId: any[] = await prisma.$queryRaw(Prisma.sql`SELECT LAST_INSERT_ID() as id`);
    const reply_id = lastId[0].id;

    // 2. Handle Files
    if (files && files.length > 0) {
        for (const file of files) {
            const saved = saveIncomingFile(file, 'replies');
            await prisma.ticket_reply_documents.create({
                data: {
                    ticket_reply_id: BigInt(reply_id),
                    original_name: saved.originalName,
                    storage_name: saved.storageName,
                    file_path: saved.storageRelPath,
                    file_size: saved.size,
                    file_extension: saved.extension,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            });
        }
    }

    // 3. Update Ticket Status
    await prisma.$executeRaw(
        Prisma.sql`UPDATE tickets
            SET ticket_status_id = ${Number(ticket_status_id)}, updated_at = NOW(), updated_user_id = ${userId}
            WHERE ticket_id = ${ticketId}`,
    );

    revalidatePath(`/tickets/${ticket_id}`);
    revalidatePath('/tickets');
    return { success: true };
}

export async function deleteTicket(id: string) {
    const session = await requireAnyPermission(['delete_tickets', 'manage_own_tickets']);
    const permissions = sessionPermissions(session);
    const canDeleteAny = isAdmin(session) || permissions.includes('delete_tickets');
    const canManageOwn = permissions.includes('manage_own_tickets');
    const userId = BigInt(session.user_id);
    const ticketId = BigInt(id);

    // Check ownership if not admin
    if (!canDeleteAny) {
        if (!canManageOwn) throw new Error('Forbidden');
        const ticket = await prisma.tickets.findUnique({
            where: { ticket_id: ticketId },
            select: { created_user_id: true },
        });
        if (!ticket || BigInt(ticket.created_user_id) !== userId) throw new Error('Forbidden');
    }

    await prisma.$executeRaw(Prisma.sql`UPDATE tickets SET deleted_at = NOW() WHERE ticket_id = ${ticketId}`);
    revalidatePath('/tickets');
    return { success: true };
}

export async function closeTicket(ticket_id: string) {
    const session = await requirePermission('close_tickets');
    const permissions = sessionPermissions(session);
    const canCloseAny = isAdmin(session) || permissions.includes('close_tickets');
    const canManageOwn = permissions.includes('manage_own_tickets');
    const userId = BigInt(session.user_id);
    const ticketId = BigInt(ticket_id);

    // Optional: Only Admin or the Original Creator can close their own ticket
    // If you want ONLY admins to close tickets, change this logic.
    if (!canCloseAny) {
        if (!canManageOwn) throw new Error('Forbidden');
        const ticket = await prisma.tickets.findUnique({
            where: { ticket_id: ticketId },
            select: { created_user_id: true },
        });
        if (!ticket || BigInt(ticket.created_user_id) !== userId) throw new Error('Forbidden');
    }

    // Find the "Close" status (flexible name match)
    const closeStatuses: any[] = await prisma.$queryRaw(
        Prisma.sql`SELECT ticket_status_id FROM ticket_statuses WHERE LOWER(ticket_name) LIKE '%close%' LIMIT 1`,
    );

    if (!closeStatuses.length) {
        throw new Error('No "Close" status found. Please create one in Status master data.');
    }

    const closeStatusId = Number(closeStatuses[0].ticket_status_id);

    await prisma.$executeRaw(
        Prisma.sql`UPDATE tickets
            SET ticket_status_id = ${closeStatusId}, updated_at = NOW(), updated_user_id = ${userId}
            WHERE ticket_id = ${ticketId}`,
    );

    revalidatePath(`/tickets/${ticket_id}`);
    revalidatePath('/tickets');
    return { success: true };
}

export async function deleteTicketReply(reply_id: string) {
    const session = await requireSession();
    const userId = BigInt(session.user_id);
    const replyId = BigInt(reply_id);

    // 1. Fetch reply to check ownership and get ticket_id for revalidation
    const reply = await prisma.ticket_replys.findUnique({
        where: { ticket_reply_id: replyId },
        select: { pic_user_id: true, ticket_id: true },
    });

    if (!reply) throw new Error('Reply not found');

    const isOwner = BigInt(reply.pic_user_id) === userId;
    const canDeleteAny = isAdmin(session) || sessionPermissions(session).includes('delete_tickets');

    if (!isOwner && !canDeleteAny) {
        throw new Error('Forbidden: You can only delete your own replies.');
    }

    // 2. Delete related documents first
    await prisma.ticket_reply_documents.deleteMany({
        where: { ticket_reply_id: replyId },
    });

    // 3. Delete the reply
    await prisma.ticket_replys.delete({
        where: { ticket_reply_id: replyId },
    });

    revalidatePath(`/tickets/${reply.ticket_id.toString()}`);
    return { success: true };
}
