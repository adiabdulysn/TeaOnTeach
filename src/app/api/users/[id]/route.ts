import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    const { id } = await params;
    const { user_name, full_name, email, role_id, is_active, password } = body;

    const dataToUpdate: any = {
      user_name,
      full_name,
      email,
      role_id: parseInt(role_id),
      is_active,
      updated_at: new Date()
    };

    if (password && password.trim() !== '') {
       // FIXME: hash password here if resetting it
       dataToUpdate.password = password;
    }

    const updatedUser = await prisma.users.update({
      where: { user_id: BigInt(id) },
      data: dataToUpdate
    });
    
    const { password: _, user_id, ...safeUser } = updatedUser;
    return NextResponse.json({ ...safeUser, user_id: user_id.toString() });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.users.delete({
      where: { user_id: BigInt(id) }
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
