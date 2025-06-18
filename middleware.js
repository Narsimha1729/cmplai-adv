// middleware.js (root of your project)
import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server'; // Not needed in JS, remove this line

export function middleware(request) {
  const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';

  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin') && !isLoginPage;

  // 🚫 Not logged in and trying to access admin page
  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // ✅ Already logged in and visiting /admin/login, redirect to dashboard
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Run middleware on all admin routes
};
