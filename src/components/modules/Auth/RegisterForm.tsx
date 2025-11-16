"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerPatient } from "@/service/auth/RegisterPatient";
import { getInputFieldError } from "@/utils/getInputFieldError";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerPatient, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" type="text" placeholder="John Doe" />
            {getInputFieldError("name", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("name", state)}
              </FieldDescription>
            )}
          </Field>
          {/* Address */}
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="123 Main St"
            />
          </Field>
          {/* Phone Number */}
          <Field>
            <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="text"
              placeholder="+880 19000000"
            />

            {getInputFieldError("contactNumber", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("contactNumber", state)}
              </FieldDescription>
            )}
          </Field>
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
          <Field className="md:col-span-2">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" />

            {getInputFieldError("password", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("password", state)}
              </FieldDescription>
            )}
          </Field>
          {/* Confirm Password */}
          <Field className="md:col-span-2">
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />

            {getInputFieldError("confirmPassword", state) && (
              <FieldDescription className="text-red-600">
                {getInputFieldError("confirmPassword", state)}
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
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:underline cursor-pointer"
              >
                Sign in
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
