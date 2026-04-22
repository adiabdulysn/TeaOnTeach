import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '24h';
const JWT_ISSUER = process.env.JWT_ISSUER || 'tea-on-tech';
const JWT_AUDIENCE = process.env.JWT_AUDIENCE || 'tea-on-tech-web';

if (!SECRET_KEY || SECRET_KEY.length < 32) {
  throw new Error(
    'Missing/weak JWT_SECRET. Set JWT_SECRET to a strong random value (>= 32 chars).',
  );
}

const key = new TextEncoder().encode(SECRET_KEY);

const COOKIE_NAME = 'session';

export async function encrypt(payload: Record<string, unknown>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRE)
    .sign(key);
}

export async function decrypt(input: string): Promise<Record<string, unknown>> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
  });
  return payload;
}

export async function login_session(
  user: { user_id: bigint | number | string; user_name: string; role_id: number; permissions?: string | null },
  remember: boolean = false,
) {
  // Create the session
  const duration = remember ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
  const expires = new Date(Date.now() + duration);
  
  // Parse permissions carefully
  let permissionsArr: string[] = [];
  try {
    permissionsArr = JSON.parse(user.permissions || '[]');
  } catch (e) {
    // Fallback for comma separated string
    permissionsArr = user.permissions 
      ? user.permissions.split(',').map((p: string) => p.trim()) 
      : [];
  }

  const session = await encrypt({ 
    user_id: user.user_id.toString(), 
    user_name: user.user_name,
    role_id: user.role_id,
    permissions: permissionsArr,
    expires 
  } as Record<string, unknown>);

  // Save the session in a cookie
  (await cookies()).set(COOKIE_NAME, session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

export async function logout_session() {
  // Destroy the session
  (await cookies()).set(COOKIE_NAME, '', { expires: new Date(0), path: '/' });
}

export async function getSession() {
  const session = (await cookies()).get(COOKIE_NAME)?.value;
  if (!session) return null;
  try {
    const parsed = await decrypt(session);
    const expires = parsed?.expires ? new Date(parsed.expires) : null;
    if (!expires || Number.isNaN(expires.getTime()) || expires <= new Date()) return null;
    return parsed;
  } catch (e) {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME)?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const res = NextResponse.next();
  res.cookies.set({
    name: COOKIE_NAME,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: new Date(String(parsed.expires)),
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  return res;
}
