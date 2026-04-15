import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './lib/auth';

// Add paths that don't require authentication
const publicPaths = ['/login', '/forgot-password', '/reset-password', '/api/public'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignore static assets and next internal paths
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }
  
  // Check if path is public
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  
  // Get session cookie
  const session = request.cookies.get('session')?.value;

  // 1. If trying to access protected path without session
  if (!session && !isPublicPath && pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 2. If trying to access login with active session
  if (session && isPublicPath) {
    try {
        const decoded = await decrypt(session);
        if (decoded && new Date(decoded.expires) > new Date()) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    } catch (e) {
        // Token invalid, let them stay on login
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
