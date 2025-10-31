"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IForm } from "@/types/form.type";

export function ReusableForm({
  fields,
  formSchema,
  defaultValues,
  onSubmit,
  header,
  footer,
  buttonTitle,
}: IForm) {
  const [showPasswordFields, setShowPasswordFields] = useState<
    Record<string, boolean>
  >({});


  type FormValues = z.infer<typeof formSchema>
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const togglePassword = (name: string) => {
    setShowPasswordFields((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const onSubmitHandler = (values: FormValues) => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log("Form submitted:", values);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">{header.title}</h2>
        {header.description && (
          <p className="text-gray-600">{header.description}</p>
        )}
      </div>

      {/* Form */}
      <ShadForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-4">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: controllerField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      {field.icon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {field.icon}
                        </div>
                      )}
                      <Input
                        {...controllerField}
                        type={
                          field.type === "password"
                            ? showPasswordFields[field.name]
                              ? "text"
                              : "password"
                            : field.type
                        }
                        placeholder={field.placeholder}
                        className="pl-10 pr-12"
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button className="w-full mt-2" type="submit">
            {buttonTitle}
          </Button>
        </form>
      </ShadForm>

      {/* Footer */}
      {footer && <div className="text-center">{footer}</div>}
    </div>
  );
}
