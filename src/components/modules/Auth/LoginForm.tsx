"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/service/auth/loginUser";
import { getFieldError } from "@/utils/getFieldError";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginUser, null);


  console.log("🚀 ~ LoginForm ~ state:", state);

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="m@example.com"
            />

            {getFieldError("email", state) && (
              <FieldDescription className="text-red-600">
                {getFieldError("email", state)}
              </FieldDescription>
            )}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            {getFieldError("password", state) && (
              <FieldDescription className="text-red-600">
                {getFieldError("password", state)}
              </FieldDescription>
            )}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Log In"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:underline cursor-pointer"
              >
                Sign up
              </Link>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <Link
                href="/forget-password"
                className="text-primary hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
