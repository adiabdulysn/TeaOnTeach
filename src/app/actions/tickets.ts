'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import fs from 'fs';
import path from 'path';

// --- Generating Ticket Number (YYYYMMDD-SEQUENCE) ---
export async function generateTicketNumber() {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
  
  // Count how many tickets were created today
  const result: any[] = await prisma.$queryRawUnsafe(
    `SELECT COUNT(*) as count FROM tickets WHERE DATE(created_at) = CURDATE()`
  );
  
  const sequence = (Number(result[0].count) + 1).toString().padStart(4, '0');
  return `${dateStr}-${sequence}`;
}
// --- Fetching Master Data for Filters ---
export async function getTicketFilterData() {
  const [categories, priorities, statuses, divisions, users] = await Promise.all([
    prisma.$queryRawUnsafe(`SELECT * FROM categories ORDER BY category_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM ticket_priorities ORDER BY ticket_priority_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM ticket_statuses ORDER BY ticket_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM divisions ORDER BY division_name ASC`),
    prisma.$queryRawUnsafe(`SELECT user_id, full_name as name FROM users WHERE is_active = 1 ORDER BY full_name ASC`),
  ]);

  return { categories, priorities, statuses, divisions, users };
}


// --- Fetching Master Data for Form ---
export async function getTicketFormData() {
  const [categories, priorities, statuses, types, divisions] = await Promise.all([
    prisma.$queryRawUnsafe(`SELECT * FROM categories ORDER BY category_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM ticket_priorities ORDER BY ticket_priority_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM ticket_statuses ORDER BY ticket_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM ticket_types ORDER BY ticket_type_name ASC`),
    prisma.$queryRawUnsafe(`SELECT * FROM divisions ORDER BY division_name ASC`),
  ]);

  return { categories, priorities, statuses, types, divisions };
}

// --- Ticket Operations ---
export async function getTickets() {
  // Using Raw SQL with JOINs to avoid Prisma Client synchronization issues 
  const result: any[] = await prisma.$queryRawUnsafe(`
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
    ORDER BY t.created_at DESC
  `);

  // Transform raw results to match the expected nested structure in the UI if possible,
  // or update the UI to use the flat result. For simplicity and stability, I'll flatten.
  return result;
}

export async function saveTicket(data: any) {
  const { 
    ticket_subject, 
    ticket_detail, 
    requestor_name, 
    ticket_type_id, 
    category_id, 
    division_id, 
    ticket_priority_id, 
    ticket_status_id,
    created_user_id,
    ticket_start_date,
    ticket_end_date,
    files = [] // Array of { name, type, size, base64 } or similar
  } = data;

  const ticket_number = await generateTicketNumber();

  // 1. Insert Ticket
  const insertResult: any = await prisma.$executeRawUnsafe(
    `INSERT INTO tickets (
      ticket_number, ticket_subject, ticket_detail, requestor_name, 
      ticket_type_id, category_id, division_id, ticket_priority_id, 
      ticket_status_id, created_user_id, created_at, updated_at, ticket_attach,
      ticket_start_date, ticket_end_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?, ?, ?)`,
    ticket_number, ticket_subject, ticket_detail || null, requestor_name,
    Number(ticket_type_id), Number(category_id), Number(division_id), 
    Number(ticket_priority_id), Number(ticket_status_id), BigInt(created_user_id),
    files.length > 0 ? 'Y' : 'N',
    ticket_start_date ? new Date(ticket_start_date) : null,
    ticket_end_date ? new Date(ticket_end_date) : null
  );

  // 2. Get the new ticket_id
  const lastId: any[] = await prisma.$queryRawUnsafe(`SELECT LAST_INSERT_ID() as id`);
  const ticket_id = lastId[0].id;

  // 3. Handle Files
  if (files && files.length > 0) {
    for (const file of files) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `/uploads/tickets/${fileName}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'tickets');
      const fullPath = path.join(uploadDir, fileName);
      
      // Ensure directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      // Save to disk
      const buffer = Buffer.from(file.base64.split(',')[1], 'base64');
      fs.writeFileSync(fullPath, buffer);

      // Save metadata
      await prisma.$executeRawUnsafe(
        `INSERT INTO ticket_documents (ticket_id, file_name, file_path, file_size, file_extension, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
        BigInt(ticket_id), file.name, filePath, file.size, path.extname(file.name).slice(1)
      );
    }
  }

  revalidatePath('/dashboard/tickets');
  return { success: true, ticket_number, ticket_id: ticket_id.toString() };
}

export async function getTicketSummary() {
    // 1. Get total tickets
    const totalResult: any[] = await prisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM tickets`);
    const total = Number(totalResult[0]?.count || 0);

    // 2. Get counts grouped by status (including statuses with 0 tickets)
    const stats: any[] = await prisma.$queryRawUnsafe(`
        SELECT 
            ts.ticket_status_id,
            ts.ticket_name as name,
            ts.color,
            COUNT(t.ticket_id) as count
        FROM ticket_statuses ts
        LEFT JOIN tickets t ON ts.ticket_status_id = t.ticket_status_id
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
    const hasFilter = !!month && !!year;

    // A sub-select that returns ticket_ids matching the date filter.
    // Used in LEFT JOINs so we still show all rows from the left table.
    const filteredTickets = hasFilter
        ? `(SELECT * FROM tickets WHERE YEAR(created_at) = ${year} AND MONTH(created_at) = ${month})`
        : `tickets`;

    const [
        totalResult,
        statusStats,
        priorityStats,
        divisionStats,
        categoryStats,
        dailyTrend,
        recentTickets,
    ] = await Promise.all([
        // Total count for the period
        prisma.$queryRawUnsafe(`
            SELECT COUNT(*) as count FROM tickets
            WHERE 1=1
            ${hasFilter ? `AND YEAR(created_at) = ${year} AND MONTH(created_at) = ${month}` : ''}
        `),

        // By status — LEFT JOIN with filtered set so statuses with 0 tickets still appear
        prisma.$queryRawUnsafe(`
            SELECT ts.ticket_name as name, ts.color, COUNT(t.ticket_id) as count
            FROM ticket_statuses ts
            LEFT JOIN ${filteredTickets} t ON ts.ticket_status_id = t.ticket_status_id
            GROUP BY ts.ticket_status_id, ts.ticket_name, ts.color
            ORDER BY ts.ticket_status_id ASC
        `),

        // By priority
        prisma.$queryRawUnsafe(`
            SELECT tp.ticket_priority_name as name, tp.color, COUNT(t.ticket_id) as count
            FROM ticket_priorities tp
            LEFT JOIN ${filteredTickets} t ON tp.ticket_priority_id = t.ticket_priority_id
            GROUP BY tp.ticket_priority_id, tp.ticket_priority_name, tp.color
            ORDER BY tp.ticket_priority_id ASC
        `),

        // By division
        prisma.$queryRawUnsafe(`
            SELECT d.division_name as name, COUNT(t.ticket_id) as count
            FROM divisions d
            LEFT JOIN ${filteredTickets} t ON d.division_id = t.division_id
            GROUP BY d.division_id, d.division_name
            ORDER BY count DESC
            LIMIT 8
        `),

        // By category
        prisma.$queryRawUnsafe(`
            SELECT c.category_name as name, c.color, COUNT(t.ticket_id) as count
            FROM categories c
            LEFT JOIN ${filteredTickets} t ON c.category_id = t.category_id
            GROUP BY c.category_id, c.category_name, c.color
            ORDER BY count DESC
            LIMIT 8
        `),

        // Daily trend
        hasFilter
            ? prisma.$queryRawUnsafe(`
                SELECT DATE(created_at) as date, COUNT(*) as count
                FROM tickets
                WHERE YEAR(created_at) = ${year} AND MONTH(created_at) = ${month}
                GROUP BY DATE(created_at)
                ORDER BY date ASC
            `)
            : prisma.$queryRawUnsafe(`
                SELECT DATE(created_at) as date, COUNT(*) as count
                FROM tickets
                WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 13 DAY)
                GROUP BY DATE(created_at)
                ORDER BY date ASC
            `),

        // 5 most recent tickets
        prisma.$queryRawUnsafe(`
            SELECT t.ticket_id, t.ticket_number, t.ticket_subject, t.requestor_name,
                   ts.ticket_name as status_name, ts.color as status_color,
                   tp.ticket_priority_name, tp.color as priority_color,
                   t.created_at
            FROM tickets t
            LEFT JOIN ticket_statuses ts ON t.ticket_status_id = ts.ticket_status_id
            LEFT JOIN ticket_priorities tp ON t.ticket_priority_id = tp.ticket_priority_id
            WHERE 1=1
            ${hasFilter ? `AND YEAR(t.created_at) = ${year} AND MONTH(t.created_at) = ${month}` : ''}
            ORDER BY t.created_at DESC
            LIMIT 5
        `),
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

    // 1. Fetch main ticket info with relations
    const ticketResult: any[] = await prisma.$queryRawUnsafe(`
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
        WHERE t.ticket_id = ?
    `, BigInt(id));

    if (!ticketResult.length) return null;

    // 2. Fetch Initial Documents
    const documents = await prisma.$queryRawUnsafe(
        `SELECT * FROM ticket_documents WHERE ticket_id = ?`, 
        BigInt(id)
    );

    // 3. Fetch Replies with their documents
    const replies: any[] = await prisma.$queryRawUnsafe(`
        SELECT 
            tr.*,
            ts.ticket_name as status_name, ts.color as status_color,
            u.full_name as user_name,
            u.user_name as user_username
        FROM ticket_replys tr
        LEFT JOIN ticket_statuses ts ON tr.ticket_status_id = ts.ticket_status_id
        LEFT JOIN users u ON tr.pic_user_id = u.user_id
        WHERE tr.ticket_id = ?
        ORDER BY tr.created_at ASC
    `, BigInt(id));

    // 4. Fetch reply documents for these replies
    const replyIds = replies.map(r => r.ticket_reply_id);
    let allReplyDocs: any[] = [];
    if (replyIds.length) {
        allReplyDocs = await prisma.$queryRawUnsafe(`
            SELECT * FROM ticket_reply_documents WHERE ticket_reply_id IN (${replyIds.join(',')})
        `);
    }

    return {
        ...ticketResult[0],
        documents: (documents as any[]).map(d => ({ ...d, ticket_document_id: d.ticket_document_id.toString() })),
        replies: replies.map(r => ({ 
            ...r, 
            ticket_reply_id: r.ticket_reply_id.toString(),
            documents: allReplyDocs.filter(d => d.ticket_reply_id === r.ticket_reply_id)
        }))
    };
}

export async function saveTicketReply(data: any) {
    const { ticket_id, ticket_status_id, pic_user_id, reply_description, files = [] } = data;

    // 1. Insert Reply
    await prisma.$executeRawUnsafe(
        `INSERT INTO ticket_replys (
            ticket_id, ticket_status_id, pic_user_id, reply_description, created_at, ticket_attch
        ) VALUES (?, ?, ?, ?, NOW(), ?)`,
        BigInt(ticket_id), Number(ticket_status_id), BigInt(pic_user_id), reply_description,
        files.length > 0 ? 'Y' : 'N'
    );

    const lastId: any[] = await prisma.$queryRawUnsafe(`SELECT LAST_INSERT_ID() as id`);
    const reply_id = lastId[0].id;

    // 2. Handle Files
    if (files && files.length > 0) {
        for (const file of files) {
            const fileName = `${Date.now()}-${file.name}`;
            const filePath = `/uploads/replies/${fileName}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'replies');
            const fullPath = path.join(uploadDir, fileName);
            
            // Ensure directory exists
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            
            const buffer = Buffer.from(file.base64.split(',')[1], 'base64');
            fs.writeFileSync(fullPath, buffer);

            await prisma.$executeRawUnsafe(
                `INSERT INTO ticket_reply_documents (ticket_reply_id, file_name, file_path, file_size, file_extension, created_at, updated_at)
                 VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
                BigInt(reply_id), file.name, filePath, file.size, path.extname(file.name).slice(1)
            );
        }
    }

    // 3. Update Ticket Status
    await prisma.$executeRawUnsafe(
        `UPDATE tickets SET ticket_status_id = ?, updated_at = NOW() WHERE ticket_id = ?`,
        Number(ticket_status_id), BigInt(ticket_id)
    );

    revalidatePath(`/dashboard/tickets/${ticket_id}`);
    revalidatePath('/dashboard/tickets');
    return { success: true };
}

export async function deleteTicket(id: string) {
    await prisma.$executeRawUnsafe(`DELETE FROM tickets WHERE ticket_id = ?`, BigInt(id));
    revalidatePath('/dashboard/tickets');
    return { success: true };
}

export async function closeTicket(ticket_id: string) {
    // Find the "Close" status (flexible name match)
    const closeStatuses: any[] = await prisma.$queryRawUnsafe(
        `SELECT ticket_status_id FROM ticket_statuses WHERE LOWER(ticket_name) LIKE '%close%' LIMIT 1`
    );

    if (!closeStatuses.length) {
        throw new Error('No "Close" status found. Please create one in Status master data.');
    }

    const closeStatusId = Number(closeStatuses[0].ticket_status_id);

    await prisma.$executeRawUnsafe(
        `UPDATE tickets SET ticket_status_id = ?, updated_at = NOW(), updated_user_id = 1 WHERE ticket_id = ?`,
        closeStatusId, BigInt(ticket_id)
    );

    revalidatePath(`/dashboard/tickets/${ticket_id}`);
    revalidatePath('/dashboard/tickets');
    return { success: true };
}
