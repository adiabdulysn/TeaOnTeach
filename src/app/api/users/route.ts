import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Password hashing is generally required for users, but for the scope of this demonstration 
// without a specific hashing library requested (like bcryptjs), we'll ingest the password directly.
// IMPORTANT: In production, use bcrypt or argon2 to hash `password`.

export async function GET() {
  try {
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
    const body = await request.json();
    const { user_name, full_name, email, password, role_id, is_active } = body;

    const newUser = await prisma.users.create({
      data: {
        user_name,
        full_name,
        email,
        password, // FIXME: Add bcrypt hashing here
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
