'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { login_session, logout_session, getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { sendResetPasswordEmail } from '@/lib/mail';
import crypto from 'crypto';

export async function login(formData: any) {
  const { username, password, remember } = formData;

  try {
    // 1. Find user by username OR email
    const userResult: any[] = await prisma.$queryRawUnsafe(
      `SELECT u.*, r.role_name, r.permissions 
       FROM users u 
       JOIN roles r ON u.role_id = r.role_id 
       WHERE (u.user_name = ? OR u.email = ?) AND u.is_active = 1 
       LIMIT 1`,
      username, username
    );

    if (!userResult || userResult.length === 0) {
      return { error: 'Invalid username or account inactive' };
    }

    const userData = userResult[0];

    // 2. Verify password
    let isPasswordValid = false;
    if (userData.password.startsWith('$2')) {
      isPasswordValid = await bcrypt.compare(password, userData.password);
    } else {
      isPasswordValid = password === userData.password;
    }

    if (!isPasswordValid) {
      return { error: 'Invalid password' };
    }

    // 3. Create session
    await login_session(userData, remember);

    // 4. Update login_at
    await prisma.$executeRawUnsafe(
      `UPDATE users SET login_at = NOW() WHERE user_id = ?`,
      userData.user_id
    );

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred' };
  }
}

export async function logout() {
  await logout_session();
  redirect('/login');
}

export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  const result: any[] = await prisma.$queryRawUnsafe(
    `SELECT u.user_id, u.user_name, u.full_name, u.email, r.role_name, r.permissions 
     FROM users u 
     JOIN roles r ON u.role_id = r.role_id 
     WHERE u.user_id = ? LIMIT 1`,
    BigInt(session.user_id)
  );

  if (!result.length) return null;
  
  const user = result[0];
  return {
    ...user,
    user_id: user.user_id.toString(),
    permissions: user.permissions ? user.permissions.split(',').map((p: string) => p.trim()) : []
  };
}

export async function forgotPassword(email: string) {
  try {
    // 1. Find user by email
    const users: any[] = await prisma.$queryRawUnsafe(
      `SELECT user_id, email FROM users WHERE email = ? LIMIT 1`,
      email
    );

    if (users.length === 0) {
      return { success: true }; // Security: don't reveal if email exists
    }

    const user = users[0];

    // 2. Generate token
    const token = crypto.randomBytes(32).toString('hex');
    
    // 3. Save token to DB
    await prisma.$executeRawUnsafe(
      `UPDATE users SET verify_token = ? WHERE user_id = ?`,
      token, user.user_id
    );

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
    // 1. Find user by token
    const users: any[] = await prisma.$queryRawUnsafe(
        `SELECT user_id FROM users WHERE verify_token = ? LIMIT 1`,
        token
    );

    if (users.length === 0) {
        return { error: 'Invalid or expired reset token' };
    }

    const user = users[0];

    // 2. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 3. Update password and clear token
    await prisma.$executeRawUnsafe(
        `UPDATE users SET password = ?, verify_token = NULL WHERE user_id = ?`,
        hashedPassword, user.user_id
    );

    return { success: true };
  } catch (err) {
    console.error('Reset password error:', err);
    return { error: 'Failed to reset password' };
  }
}

export async function updateUserProfile(data: any) {
  const session = await getSession();
  if (!session) return { error: 'Not authenticated' };

  try {
    const { full_name, email, user_name } = data;
    const userId = BigInt(session.user_id);

    // 1. Check if user_name is already taken by someone else
    if (user_name) {
      const existing: any[] = await prisma.$queryRawUnsafe(
        `SELECT user_id FROM users WHERE user_name = ? AND user_id != ? LIMIT 1`,
        user_name, userId
      );
      if (existing.length > 0) {
        return { error: 'Username is already taken' };
      }
    }

    // 2. Update profile
    await prisma.$executeRawUnsafe(
      `UPDATE users SET full_name = ?, email = ?, user_name = ?, updated_at = NOW() WHERE user_id = ?`,
      full_name, email, user_name, userId
    );
    return { success: true };
  } catch (error) {
    console.error('Update profile error:', error);
    return { error: 'Failed to update profile' };
  }
}

export async function changeUserPassword(data: any) {
  const session = await getSession();
  if (!session) return { error: 'Not authenticated' };

  const { currentPassword, newPassword } = data;

  try {
    // 1. Get current user's password hash
    const users: any[] = await prisma.$queryRawUnsafe(
      `SELECT password FROM users WHERE user_id = ? LIMIT 1`,
      BigInt(session.user_id)
    );

    if (users.length === 0) return { error: 'User not found' };

    const user = users[0];

    // 2. Verify current password
    let isPasswordValid = false;
    if (user.password.startsWith('$2')) {
      isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    } else {
      isPasswordValid = currentPassword === user.password;
    }

    if (!isPasswordValid) {
      return { error: 'Current password is incorrect' };
    }

    // 3. Hash and update new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await prisma.$executeRawUnsafe(
      `UPDATE users SET password = ?, updated_at = NOW() WHERE user_id = ?`,
      hashedNewPassword, BigInt(session.user_id)
    );

    return { success: true };
  } catch (error) {
    console.error('Change password error:', error);
    return { error: 'Failed to change password' };
  }
}
