/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { UserRole } from "@/types/user.types";
import { getDefaultDashboardRoute, isValidRedirectForRole } from "@/utils/auth";
import { loginSchema } from "@/validation/auth.validation";
import { parse } from "cookie";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const redirectTo = formData.get("redirect") || null;
    let accessTokenObject = null;
    let refreshTokenObject = null;
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validatedFields = loginSchema.safeParse(loginData);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const setAuthCookie = res.headers.getSetCookie();

    if (setAuthCookie && setAuthCookie.length > 0) {
      setAuthCookie.forEach((cookie) => {
        const parseCookie = parse(cookie);

        if (parseCookie["accessToken"]) {
          accessTokenObject = parseCookie;
        }
        if (parseCookie["refreshToken"]) {
          refreshTokenObject = parseCookie;
        }
      });
    } else {
      throw new Error("No cookies set in response");
    }

    if (!accessTokenObject) {
      throw new Error("Authentication tokens are missing");
    }

    if (!refreshTokenObject) {
      throw new Error("Authentication tokens are missing");
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessTokenObject["accessToken"], {
      httpOnly: true,
      maxAge: parseInt(accessTokenObject["Max-Age"]) || 3 * 24 * 60 * 60 * 1000,
      sameSite: accessTokenObject["SameSite"] || "none",
      path: accessTokenObject["Path"] || "/",
      secure: true,
    });

    cookieStore.set("refreshToken", refreshTokenObject["refreshToken"], {
      httpOnly: true,
      maxAge:
        parseInt(refreshTokenObject["Max-Age"]) || 30 * 24 * 60 * 60 * 1000,
      sameSite: refreshTokenObject["SameSite"] || "none",
      path: refreshTokenObject["Path"] || "/",
      secure: true,
    });

    const verifiedToken: JwtPayload | string = jwt.verify(
      accessTokenObject["accessToken"],
      process.env.JWT_SECRET as string
    );

    if (typeof verifiedToken === "string") {
      throw new Error("Invalid token");
    }

    const userRole: UserRole = verifiedToken.role;

    if (redirectTo) {
      const requestedPath = redirectTo.toString();
      if (isValidRedirectForRole(requestedPath, userRole)) {
        redirect(requestedPath);
      } else {
        redirect(getDefaultDashboardRoute(userRole));
      }
    }

    redirect(getDefaultDashboardRoute(userRole));
  } catch (error) {
    console.log(error);
    return { error: "Login failed" };
  }
};
