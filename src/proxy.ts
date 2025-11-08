import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./types/user.types";

const roleBasedRoutes = {
  ADMIN: ["/dashboard/admin"],
  DOCTOR: ["/dashboard/doctor"],
  PATIENT: [
    "/dashboard/patient",
    "/appointments/patient",
    "/medical-records/patient",
  ],
};

const authRoutes = ["/auth/*", "/auth/login", "/auth/register"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  console.log("🚀 ~ proxy ~ token:", accessToken);

  const { pathname } = request.nextUrl;

  if (!accessToken && !refreshToken && !authRoutes.includes(pathname))
    return NextResponse.redirect(
      new URL(`/auth/login?redirect=${pathname}`, request.url)
    );

  let user: IUser | null = null;


  if (accessToken) {
    try {
      user = jwtDecode(accessToken);
    } catch (error) {
      console.log("🚀 ~ proxy ~ error:", error);
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (!user && refreshToken) {
    try {
      const refreshRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
          credentials: "include",
        }
      );
      if (refreshRes.ok) {
        const newAccessToken = request.cookies.get("accessToken")?.value;
        user = jwtDecode(newAccessToken!);
        return NextResponse.next();
      } else {
        const response = NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url)
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
    } catch (err) {
      console.log("Error refreshing token:", err);
      const response = NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL(`/`));
  }

  if (user) {
    const allowedRoutes = user ? roleBasedRoutes[user.role] : [];
    if (allowedRoutes && allowedRoutes.some((r) => pathname.startsWith(r))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/unauthorized`, request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
