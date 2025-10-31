"use client"
import { ReusableForm } from "@/components/shared/ReusableForm";
import {
  loginDefaultValues,
  loginFields,
  loginFooter,
} from "@/data/auth.constants";
import { loginSchema } from "@/validation/auth.validation";
import z from "zod";

export default function LOginPage() {
  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log("🚀 ~ Main Login ~ handleSubmit ~ values:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4">
      <ReusableForm
        fields={loginFields}
        formSchema={loginSchema}
        defaultValues={loginDefaultValues}
        headerTitle="Welcome Back"
        headerDescription="Login to your account to continue"
        containerClassName="w-full max-w-2xl"
        footer={loginFooter}
        buttonTitle="Login"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
