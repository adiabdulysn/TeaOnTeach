import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const roles = await prisma.roles.findMany({
      orderBy: { role_id: 'desc' }
    });
    return NextResponse.json(roles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch roles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role_name, permissions, description } = body;

    const newRole = await prisma.roles.create({
      data: {
        role_name,
        permissions,
        description,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    return NextResponse.json(newRole, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Role name already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create role' }, { status: 500 });
  }
}
