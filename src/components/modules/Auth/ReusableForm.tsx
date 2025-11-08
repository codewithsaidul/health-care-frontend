"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IForm } from "@/types/form.type";
import Link from "next/link";

export function ReusableForm({
  fields,
  headerTitle,
  headerDescription,
  containerClassName,
  footer,
  buttonTitle,
}: IForm) {
  const [showPasswordFields, setShowPasswordFields] = useState<
    Record<string, boolean>
  >({});

  const togglePassword = (name: string) => {
    setShowPasswordFields((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-xl p-8 space-y-6",
        containerClassName
      )}
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">H</span>
          </div>
          <span className="font-bold text-xl text-foreground">HealthCare</span>
        </Link>
        <h2 className="text-3xl font-bold text-gray-900">{headerTitle}</h2>
        {headerDescription && (
          <p className="text-gray-600">{headerDescription}</p>
        )}
      </div>

      {/* Form */}
      <form className="space-y-4">
        <FieldGroup>
          <div className="space-y-4">
            {fields.map((field) => (
              <Field key={field.name}>
                <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
                <div className="relative">
                  {field.icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {field.icon}
                    </div>
                  )}
                  <Input
                    id={field.name}
                    name={field.name}
                    type={
                      field.type === "password"
                        ? showPasswordFields[field.name]
                          ? "text"
                          : "password"
                        : field.type
                    }
                    placeholder={field.placeholder}
                    className={field.icon ? "pl-10 pr-12" : "pr-12"}
                  />
                  {field.type === "password" && (
                    <button
                      type="button"
                      onClick={() => togglePassword(field.name)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPasswordFields[field.name] ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              </Field>
            ))}
          </div>

          <FieldGroup>
            <Field>
              <Button className="w-full mt-2" type="submit">
                {buttonTitle}
              </Button>
              {/* Footer */}
              {footer && (
                <FieldDescription className="px-6 text-center">
                  {footer}
                </FieldDescription>
              )}
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  );
}
