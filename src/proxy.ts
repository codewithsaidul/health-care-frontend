import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

    const token = request.cookies.get('accessToken')?.value;
    console.log("🚀 ~ proxy ~ token:", token)

    const { pathname } = request.nextUrl;


    const protectedRoute = ["/dashboard", "/profile", "/appointments", "/settings"];
    

    const authRoutes = ["/auth"];
    


    const isProtected = protectedRoute.some((path) => pathname.startsWith(path));
   


    const isAuthRoute = authRoutes.some(path =>  pathname.startsWith(path));
   

    if (isProtected && !token) return  NextResponse.redirect(new URL("/auth/login", request.url));


    if (isAuthRoute && token) return  NextResponse.redirect(new URL("/", request.url));


  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', "/auth/:path*", "/auth/login"],
}