import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoute = ['/profile']
const publicRoute = ['/dang-nhap']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoute.includes(path)
  const isPublicRoute = publicRoute.includes(path)

  const session = request.cookies.get('sessionToken')

  console.log(path)

  if (isProtectedRoute  && !session) {
    return NextResponse.redirect(new URL('/dang-nhap', request.url))
  }

  if(isPublicRoute && session) {
    console.log('public')
    return NextResponse.redirect(new URL('/profile', request.url))
  }
  
  return  NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:   '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
