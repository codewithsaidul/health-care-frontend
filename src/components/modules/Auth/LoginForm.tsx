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
import { getInputFieldError } from "@/utils/getInputFieldError";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginForm({ redirectPath }: { redirectPath?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* hidden inpit field if redirect path is avaible */}
      {redirectPath && (
        <input type="hidden" name="redirect" value={redirectPath} />
      )}

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

            {getInputFieldError("email", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("email", state)}
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
            {getInputFieldError("password", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("password", state)}
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
