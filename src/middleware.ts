import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRequest } from './utils/fetch-client';
import { whoIAmAPI } from './services/auth';
import { cookies } from 'next/headers';
import { IWhoIAmResponse } from './interfaces/IUser';

const protectedRoute = ['/profile'];
const publicRoute = ['/dang-nhap'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  // console.log('sstk:', sessionToken);
  // const result = whoIAmAPI();

  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  //   Cookie: `sessionToken=${sessionToken}`,
  // });

  const result = (await getRequest(
    `http://localhost:8080/admin/api/auth/profile`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `sessionToken=${sessionToken?.value}`,
      },
    }
  )) as IWhoIAmResponse;

  // console.log('rs:', result);

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoute.includes(path);
  const isPublicRoute = publicRoute.includes(path);

  // const session = request.cookies.get('sessionToken')

  // console.log(path)

  if (isProtectedRoute && !result.name) {
    return NextResponse.redirect(new URL('/dang-nhap', request.url));
  }

  if (isPublicRoute && result.name) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
