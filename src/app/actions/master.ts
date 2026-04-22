'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { requireAnyPermission, requirePermission } from '@/lib/authz';

async function requireMasterAccess(permission: string) {
  return await requirePermission(permission);
}

// --- Categories ---
export async function getCategories() {
  await requireMasterAccess('view_categories');
  return await prisma.$queryRawUnsafe(`SELECT * FROM categories ORDER BY category_id DESC`);
}

export async function saveCategory(data: any) {
  await requireAnyPermission([data?.category_id ? 'edit_categories' : 'create_categories']);
  const { category_id, category_name, color, icon } = data;
  
  if (category_id) {
    // Force to Number to avoid Prisma BigInt/Int issues in raw query
    const id = Number(category_id);
    await prisma.$executeRawUnsafe(
      `UPDATE categories SET category_name = ?, color = ?, icon = ?, updated_at = NOW() WHERE category_id = ?`,
      category_name, color, icon || null, id
    );
  } else {
    await prisma.$executeRawUnsafe(
      `INSERT INTO categories (category_name, color, icon, created_at) VALUES (?, ?, ?, NOW())`,
      category_name, color, icon || null
    );
  }
  revalidatePath('/dashboard/master/categories');
}

export async function deleteCategory(id: number) {
  await requirePermission('delete_categories');
  await prisma.categories.delete({ where: { category_id: id } });
  revalidatePath('/dashboard/master/categories');
}

export async function getCategoryById(id: number) {
  const result: any[] = await prisma.$queryRawUnsafe(`SELECT * FROM categories WHERE category_id = ?`, id);
  return result[0] || null;
}

// --- Divisions ---
export async function getDivisions() {
  await requireMasterAccess('view_divisions');
  return await prisma.divisions.findMany({ orderBy: { division_id: 'desc' } });
}

export async function saveDivision(data: any) {
  await requireAnyPermission([data?.division_id ? 'edit_divisions' : 'create_divisions']);
  if (data.division_id) {
    await prisma.divisions.update({ where: { division_id: data.division_id }, data: { ...data, updated_at: new Date() } });
  } else {
    await prisma.divisions.create({ data: { ...data, created_at: new Date() } });
  }
  revalidatePath('/dashboard/master/divisions');
}

export async function deleteDivision(id: number) {
  await requirePermission('delete_divisions');
  await prisma.divisions.delete({ where: { division_id: id } });
  revalidatePath('/dashboard/master/divisions');
}

export async function getDivisionById(id: number) {
  return await prisma.divisions.findUnique({ where: { division_id: id } });
}

// --- Priorities ---
export async function getPriorities() {
  await requireMasterAccess('view_priorities');
  return await prisma.$queryRawUnsafe(`SELECT * FROM ticket_priorities ORDER BY ticket_priority_id DESC`);
}

export async function savePriority(data: any) {
  await requireAnyPermission([data?.ticket_priority_id ? 'edit_priorities' : 'create_priorities']);
  const { ticket_priority_id, ticket_priority_name, color, icon, is_default } = data;
  const isDefault = is_default ? 1 : 0;

  if (ticket_priority_id) {
    const id = Number(ticket_priority_id);
    await prisma.$executeRawUnsafe(
      `UPDATE ticket_priorities SET ticket_priority_name = ?, color = ?, icon = ?, is_default = ?, updated_at = NOW() WHERE ticket_priority_id = ?`,
      ticket_priority_name, color, icon || null, isDefault, id
    );
  } else {
    await prisma.$executeRawUnsafe(
      `INSERT INTO ticket_priorities (ticket_priority_name, color, icon, is_default, created_at) VALUES (?, ?, ?, ?, NOW())`,
      ticket_priority_name, color, icon || null, isDefault
    );
  }
  revalidatePath('/dashboard/master/priorities');
}

export async function deletePriority(id: number) {
  await requirePermission('delete_priorities');
  await prisma.ticket_priorities.delete({ where: { ticket_priority_id: id } });
  revalidatePath('/dashboard/master/priorities');
}

export async function getPriorityById(id: number) {
  const result: any[] = await prisma.$queryRawUnsafe(`SELECT * FROM ticket_priorities WHERE ticket_priority_id = ?`, id);
  const priority = result[0] || null;
  if (priority) {
    // Convert 1/0 from DB to boolean for Switch component
    priority.is_default = !!priority.is_default;
  }
  return priority;
}

// --- Statuses ---
export async function getStatuses() {
  await requireMasterAccess('view_statuses');
  return await prisma.ticket_statuses.findMany({ orderBy: { ticket_status_id: 'desc' } });
}

export async function saveStatus(data: any) {
  await requireAnyPermission([data?.ticket_status_id ? 'edit_statuses' : 'create_statuses']);
  if (data.ticket_status_id) {
    await prisma.ticket_statuses.update({ where: { ticket_status_id: data.ticket_status_id }, data: { ...data, updated_at: new Date() } });
  } else {
    await prisma.ticket_statuses.create({ data: { ...data, created_at: new Date() } });
  }
  revalidatePath('/dashboard/master/statuses');
}

export async function deleteStatus(id: number) {
  await requirePermission('delete_statuses');
  await prisma.ticket_statuses.delete({ where: { ticket_status_id: id } });
  revalidatePath('/dashboard/master/statuses');
}

export async function getStatusById(id: number) {
  return await prisma.ticket_statuses.findUnique({ where: { ticket_status_id: id } });
}

// --- Ticket Types ---
export async function getTypes() {
  await requireMasterAccess('view_types');
  return await prisma.ticket_types.findMany({ orderBy: { ticket_type_id: 'desc' } });
}

export async function saveType(data: any) {
  await requireAnyPermission([data?.ticket_type_id ? 'edit_types' : 'create_types']);
  if (data.ticket_type_id) {
    await prisma.ticket_types.update({ where: { ticket_type_id: data.ticket_type_id }, data: { ...data, updated_at: new Date() } });
  } else {
    await prisma.ticket_types.create({ data: { ...data, created_at: new Date() } });
  }
  revalidatePath('/dashboard/master/types');
}

export async function deleteType(id: number) {
  await requirePermission('delete_types');
  await prisma.ticket_types.delete({ where: { ticket_type_id: id } });
  revalidatePath('/dashboard/master/types');
}

export async function getTypeById(id: number) {
  return await prisma.ticket_types.findUnique({ where: { ticket_type_id: id } });
}

// --- Users & Roles ---
import bcrypt from 'bcryptjs';

export async function getRoles() {
  await requirePermission('view_roles');
  return await prisma.roles.findMany({ orderBy: { role_name: 'asc' } });
}

export async function getUsers() {
  await requirePermission('view_users');
  const users = await prisma.users.findMany({
    include: { roles: true },
    orderBy: { user_id: 'desc' }
  });
  
  // Convert BigInt to string for safe client-side consumption
  return users.map(user => ({
    ...user,
    user_id: user.user_id.toString(),
    password: '' // Never send password back
  }));
}

export async function getUserById(id: string) {
  await requirePermission('view_users');
  const user = await prisma.users.findUnique({
    where: { user_id: BigInt(id) },
    include: { roles: true }
  });
  
  if (!user) return null;
  
  return {
    ...user,
    user_id: user.user_id.toString(),
    password: '' // Clear for безопасности in forms
  };
}

export async function saveUser(data: any) {
  await requireAnyPermission([data?.user_id ? 'edit_users' : 'create_users']);
  const { user_id, user_name, full_name, email, password, role_id, is_active } = data;
  
  const userData: any = {
    user_name,
    full_name,
    email,
    role_id: Number(role_id),
    is_active: !!is_active,
    updated_at: new Date()
  };

  // Only hash and update password if provided
  if (password && password.trim() !== '') {
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(password, salt);
  }

  if (user_id) {
    await prisma.users.update({
      where: { user_id: BigInt(user_id) },
      data: userData
    });
  } else {
    // For new users, if password is missing (should be caught by form validation), 
    // we use a default or error out. But form rules will handle this.
    await prisma.users.create({
      data: {
        ...userData,
        created_at: new Date()
      }
    });
  }
  
  revalidatePath('/dashboard/settings/users');
}

export async function deleteUser(id: string) {
  await requirePermission('delete_users');
  await prisma.users.delete({
    where: { user_id: BigInt(id) }
  });
  revalidatePath('/dashboard/settings/users');
}
