'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { login_session, logout_session, getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { sendResetPasswordEmail } from '@/lib/mail';
import crypto from 'crypto';
import { requireSession } from '@/lib/authz';
import { rateLimitOrThrow } from '@/lib/rate-limit';

export async function login(formData: any) {
  const { username, password, remember } = formData;

  try {
    await rateLimitOrThrow(`login:${String(username ?? '').toLowerCase()}`, {
      windowMs: 60_000,
      max: 8,
    });

    const userData = await prisma.users.findFirst({
      where: {
        is_active: true,
        OR: [{ user_name: username }, { email: username }],
      },
      include: { roles: true },
      orderBy: { user_id: 'desc' },
    });

    if (!userData) {
      return { error: 'Invalid username or account inactive' };
    }

    // 2. Verify password
    const isPasswordValid = await bcrypt.compare(String(password ?? ''), userData.password);

    if (!isPasswordValid) {
      return { error: 'Invalid password' };
    }

    // Optional: Auto-upgrade legacy plaintext passwords (if any exist) safely.
    if (!userData.password.startsWith('$2')) {
      const newHash = await bcrypt.hash(String(password ?? ''), 12);
      await prisma.users.update({
        where: { user_id: userData.user_id },
        data: { password: newHash, updated_at: new Date() },
      });
      userData.password = newHash;
    }

    // 3. Create session
    await login_session(
      {
        ...userData,
        permissions: userData.roles?.permissions,
      },
      remember,
    );

    // 4. Update login_at
    await prisma.users.update({
      where: { user_id: userData.user_id },
      data: { login_at: new Date() },
    });

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Login failed' };
  }
}

export async function logout() {
  await logout_session();
  redirect('/login');
}

export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  const user = await prisma.users.findUnique({
    where: { user_id: BigInt(session.user_id) },
    include: { roles: true },
  });

  if (!user) return null;

  let permissionsArr: string[] = [];
  try {
    permissionsArr = JSON.parse(user.roles?.permissions || '[]');
  } catch {
    permissionsArr = user.roles?.permissions
      ? user.roles.permissions.split(',').map((p: string) => p.trim())
      : [];
  }

  return {
    user_id: user.user_id.toString(),
    user_name: user.user_name,
    full_name: user.full_name,
    email: user.email,
    role_name: user.roles?.role_name,
    permissions: permissionsArr,
  };
}

export async function forgotPassword(email: string) {
  try {
    // 1. Find user by email
    const user = await prisma.users.findFirst({
      where: { email },
      select: { user_id: true, email: true },
    });

    if (!user) {
      return { success: true }; // Security: don't reveal if email exists
    }

    // 2. Generate token
    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    
    // 3. Save token to DB
    await prisma.users.update({
      where: { user_id: user.user_id },
      data: { verify_token_hash: tokenHash, verify_token_expires_at: expiresAt },
    });

    // 4. Send Email
    await sendResetPasswordEmail(user.email, token);

    return { success: true };
  } catch (err) {
    console.error('Forgot password error:', err);
    return { error: 'Failed to send reset email' };
  }
}

export async function resetPassword(token: string, newPassword: any) {
  try {
    if (!token || typeof token !== 'string') return { error: 'Invalid or expired reset token' };
    if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 10) {
      return { error: 'Password must be at least 10 characters.' };
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const user = await prisma.users.findFirst({
      where: {
        verify_token_hash: tokenHash,
        verify_token_expires_at: { gt: new Date() },
      },
      select: { user_id: true },
    });

    if (!user) return { error: 'Invalid or expired reset token' };

    // 2. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // 3. Update password and clear token
    await prisma.users.update({
      where: { user_id: user.user_id },
      data: {
        password: hashedPassword,
        verify_token_hash: null,
        verify_token_expires_at: null,
        updated_at: new Date(),
      },
    });

    return { success: true };
  } catch (err) {
    console.error('Reset password error:', err);
    return { error: 'Failed to reset password' };
  }
}

export async function updateUserProfile(data: any) {
  const session = await requireSession();

  try {
    const { full_name, email, user_name } = data;
    const userId = BigInt(session.user_id);

    // 1. Check if user_name is already taken by someone else
    if (user_name) {
      const existing = await prisma.users.findFirst({
        where: { user_name, user_id: { not: userId } },
        select: { user_id: true },
      });
      if (existing) {
        return { error: 'Username is already taken' };
      }
    }

    // 2. Update profile
    await prisma.users.update({
      where: { user_id: userId },
      data: { full_name, email, user_name, updated_at: new Date() },
    });
    return { success: true };
  } catch (error) {
    console.error('Update profile error:', error);
    return { error: 'Failed to update profile' };
  }
}

export async function changeUserPassword(data: any) {
  const session = await requireSession();

  const { currentPassword, newPassword } = data;

  try {
    // 1. Get current user's password hash
    const user = await prisma.users.findUnique({
      where: { user_id: BigInt(session.user_id) },
      select: { password: true },
    });

    if (!user) return { error: 'User not found' };

    // 2. Verify current password
    const isPasswordValid = await bcrypt.compare(String(currentPassword ?? ''), user.password);

    if (!isPasswordValid) {
      return { error: 'Current password is incorrect' };
    }

    if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 10) {
      return { error: 'Password must be at least 10 characters.' };
    }

    // 3. Hash and update new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);
    await prisma.users.update({
      where: { user_id: BigInt(session.user_id) },
      data: { password: hashedNewPassword, updated_at: new Date() },
    });

    return { success: true };
  } catch (error) {
    console.error('Change password error:', error);
    return { error: 'Failed to change password' };
  }
}
