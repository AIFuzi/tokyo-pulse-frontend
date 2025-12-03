import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request

  const token = cookies.get('token')?.value

  const isAuthRoutes =
    nextUrl.pathname.startsWith('/login') ||
    nextUrl.pathname.startsWith('/signup')

  if (token && isAuthRoutes) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
