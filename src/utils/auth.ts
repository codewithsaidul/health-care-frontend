import { IError } from "@/types/error.types";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      throw {
        error: data?.error || data?.error?.err || "Login Failed!",
        message: data?.message || "Something went wrong during login.",
        success: res.ok,
      } as IError;
    }

    return data;
  } catch (error: unknown) {
    const err = error as IError;
    console.log("🚀 ~ loginUser ~ err:", err);
    let message = "An unexpected error occurred.";

    if (err?.error.code === "P2025") {
      message = "Email does not exist.";
    }

    if (err?.message === "Password is wrong") {
      message = err.message;
    }
    throw message;
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      throw {
        error: data?.error || data?.error?.err || "Login Failed!",
        message: data?.message || "Something went wrong during login.",
        success: res.ok,
      } as IError;
    }

    return {
      isAuthenticated: true,
      user: data.data,
    };
  } catch (error: unknown) {
    const err = error as IError
    console.log("🚀 ~ checkAuthStatus ~ err:", err)
    return {
      isAuthenticated: false,
      user: null,
    };
  }
};
