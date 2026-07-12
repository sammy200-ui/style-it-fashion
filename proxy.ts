import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check for our fake session cookie
  const session = request.cookies.get('sirus_session');

  // If the user does not have a session, redirect to the signup page
  if (!session) {
    const loginUrl = new URL('/signup', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all protected routes. For now, this is:
     * - /analyzer (The compliance preview dashboard)
     * - /upload (The upload step, if it becomes a separate route)
     * - /admin/* (Future admin routes)
     */
    '/analyzer/:path*',
    '/upload/:path*',
    '/admin/:path*'
  ],
};
