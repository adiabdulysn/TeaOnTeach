import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAnyPermission, requireSession, isAdmin, sessionPermissions } from '@/lib/authz';
import { resolveStoragePath, getMimeType } from '@/lib/uploads';
import fs from 'fs';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireSession();
  await requireAnyPermission(['view_tickets', 'manage_own_tickets']);

  const session = await requireSession();
  const permissions = sessionPermissions(session);
  const canViewAll = isAdmin(session) || permissions.includes('view_tickets');
  const canManageOwn = permissions.includes('manage_own_tickets');

  const { id } = await params;
  const docId = BigInt(id);

  const doc = await prisma.ticket_reply_documents.findUnique({
    where: { ticket_reply_document_id: docId },
    select: { file_path: true, original_name: true, ticket_reply_id: true },
  });
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (!canViewAll) {
    if (!canManageOwn) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    const reply = await prisma.ticket_replys.findUnique({
      where: { ticket_reply_id: doc.ticket_reply_id },
      select: { ticket_id: true },
    });
    if (!reply) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const ticket = await prisma.tickets.findUnique({
      where: { ticket_id: reply.ticket_id },
      select: { created_user_id: true },
    });
    if (!ticket || BigInt(ticket.created_user_id) !== BigInt(session.user_id)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  const fullPath = resolveStoragePath(doc.file_path);
  if (!fs.existsSync(fullPath)) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const data = fs.readFileSync(fullPath);
  const ext = doc.original_name.split('.').pop() || '';
  const contentType = getMimeType(ext);
  const isViewable = contentType.startsWith('image/') || contentType === 'application/pdf';

  return new NextResponse(data, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `${isViewable ? 'inline' : 'attachment'}; filename="${encodeURIComponent(doc.original_name)}"`,
      'Cache-Control': 'private, max-age=3600',
      'Content-Security-Policy': "img-src 'self' data: blob: https://api.dicebear.com",
    },
  });
}

