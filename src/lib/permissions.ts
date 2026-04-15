import { getSession } from './auth';

/**
 * Checks if the current session has a specific permission.
 * Usage: if (await hasPermission('create_tickets')) { ... }
 */
export async function hasPermission(permissionName: string): Promise<boolean> {
  const session = await getSession();
  if (!session || !session.permissions) return false;
  
  // The permissions are stored as an array of strings in the session JWT
  const permissions = Array.isArray(session.permissions) 
    ? session.permissions 
    : [];
    
  return permissions.includes(permissionName);
}

/**
 * Checks if the session has ANY of the provided permissions.
 */
export async function hasAnyPermission(permissionNames: string[]): Promise<boolean> {
  const session = await getSession();
  if (!session || !session.permissions) return false;
  
  const permissions = Array.isArray(session.permissions) ? session.permissions : [];
  return permissionNames.some(p => permissions.includes(p));
}
