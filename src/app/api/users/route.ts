import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { requirePermission } from '@/lib/authz';

export async function GET() {
  try {
    await requirePermission('view_users');
    const users = await prisma.users.findMany({
      include: {
        roles: true // Include the role relationship to get the role_name
      },
      orderBy: { user_id: 'desc' }
    });
    
    // We should never return passwords to the client in a real app,
    // so we map them out before sending.
    const safeUsers = users.map(user => {
      const { password, ...userWithoutPassword } = user;
      // Convert BigInt to string to avoid JSON serialization errors
      return {
        ...userWithoutPassword,
        user_id: user.user_id.toString(),
      };
    });

    return NextResponse.json(safeUsers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await requirePermission('create_users');
    const body = await request.json();
    const { user_name, full_name, email, password, role_id, is_active } = body;

    if (!password || typeof password !== 'string' || password.length < 10) {
      return NextResponse.json({ error: 'Password must be at least 10 characters.' }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await prisma.users.create({
      data: {
        user_name,
        full_name,
        email,
        password: passwordHash,
        role_id: parseInt(role_id),
        is_active: is_active ?? true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    // Strip password and serialize BigInt
    const { password: _, user_id, ...safeUser } = newUser;
    return NextResponse.json({ ...safeUser, user_id: user_id.toString() }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create user', details: error.message }, { status: 500 });
  }
}
