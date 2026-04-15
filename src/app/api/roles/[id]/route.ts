import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const role = await prisma.roles.findUnique({
      where: { role_id: parseInt(id) }
    });
    if (!role) return NextResponse.json({ error: 'Role not found' }, { status: 404 });
    return NextResponse.json(role);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch role' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    const { role_name, permissions, description } = body;
    const { id } = await params;

    const updatedRole = await prisma.roles.update({
      where: { role_id: parseInt(id) },
      data: {
        role_name,
        permissions,
        description,
        updated_at: new Date()
      }
    });
    return NextResponse.json(updatedRole);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.roles.delete({
      where: { role_id: parseInt(id) }
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.code === 'P2003') {
       return NextResponse.json({ error: 'Cannot delete role as it is assigned to users.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to delete role' }, { status: 500 });
  }
}
