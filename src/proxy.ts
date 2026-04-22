import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

const PUBLIC_PATH_PREFIXES = ['/login', '/forgot-password', '/reset-password'];

const ROUTE_PERMISSIONS: Array<{
  prefix: string;
  anyOf: string[];
}> = [
  { prefix: '/tickets/create', anyOf: ['create_tickets'] },
  { prefix: '/tickets', anyOf: ['view_tickets', 'manage_own_tickets'] },

  { prefix: '/referential/categories', anyOf: ['view_categories'] },
  { prefix: '/referential/divisions', anyOf: ['view_divisions'] },
  { prefix: '/referential/priorities', anyOf: ['view_priorities'] },
  { prefix: '/referential/statuses', anyOf: ['view_statuses'] },
  { prefix: '/referential/types', anyOf: ['view_types'] },

  { prefix: '/permissions/users', anyOf: ['view_users'] },
  { prefix: '/permissions/roles', anyOf: ['view_roles'] },
];

function isPublicPath(pathname: string) {
  return PUBLIC_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function withSecurityHeaders(res: NextResponse) {
  const isProd = process.env.NODE_ENV === 'production';
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: https://api.dicebear.com",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    `script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval'"}`,
    "connect-src 'self'",
    "form-action 'self'",
  ].join('; ');

  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('Referrer-Policy', 'no-referrer');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

  if (isProd) {
    res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  return res;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname === '/favicon.ico' || pathname.includes('.')) {
    return withSecurityHeaders(NextResponse.next());
  }

  if (isPublicPath(pathname)) {
    return withSecurityHeaders(NextResponse.next());
  }

  const sessionToken = request.cookies.get('session')?.value;
  if (!sessionToken) {
    const url = new URL('/login', request.url);
    return withSecurityHeaders(NextResponse.redirect(url));
  }

  try {
    const session = await decrypt(sessionToken);
    const expiresRaw = session?.expires;
    const expires = expiresRaw ? new Date(String(expiresRaw)) : null;
    if (!expires || Number.isNaN(expires.getTime()) || expires <= new Date()) {
      const url = new URL('/login', request.url);
      const res = NextResponse.redirect(url);
      res.cookies.set('session', '', { expires: new Date(0), path: '/' });
      return withSecurityHeaders(res);
    }

    const permissions: string[] = Array.isArray(session.permissions) ? (session.permissions as string[]) : [];
    const rule = ROUTE_PERMISSIONS.find((r) => pathname === r.prefix || pathname.startsWith(`${r.prefix}/`));
    if (rule) {
      const ok = rule.anyOf.some((p) => permissions.includes(p));
      if (!ok) return withSecurityHeaders(NextResponse.redirect(new URL('/dashboard', request.url)));
    }

    return withSecurityHeaders(NextResponse.next());
  } catch {
    const url = new URL('/login', request.url);
    const res = NextResponse.redirect(url);
    res.cookies.set('session', '', { expires: new Date(0), path: '/' });
    return withSecurityHeaders(res);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
