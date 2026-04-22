import { getSession } from '@/lib/auth';

export type Session = {
  user_id: string;
  user_name?: string;
  role_id?: number;
  permissions?: string[];
  expires?: string | Date;
};

export async function requireSession(): Promise<Session> {
  const session = (await getSession()) as Session | null;
  if (!session) throw new Error('Unauthorized');
  return session;
}

export function isAdmin(session: Session) {
  return Number(session.role_id) === 1;
}

export function sessionPermissions(session: Session): string[] {
  return Array.isArray(session.permissions) ? session.permissions : [];
}

export async function requirePermission(permission: string): Promise<Session> {
  const session = await requireSession();
  if (isAdmin(session)) return session;
  const permissions = sessionPermissions(session);
  if (!permissions.includes(permission)) throw new Error('Forbidden');
  return session;
}

export async function requireAnyPermission(permissionsAnyOf: string[]): Promise<Session> {
  const session = await requireSession();
  if (isAdmin(session)) return session;
  const permissions = sessionPermissions(session);
  if (!permissionsAnyOf.some((p) => permissions.includes(p))) throw new Error('Forbidden');
  return session;
}

