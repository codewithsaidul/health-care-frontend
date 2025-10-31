"use client";
import { ReusableForm } from "@/components/shared/ReusableForm";
import {
  loginDefaultValues,
  loginFields,
  loginFooter,
} from "@/data/auth.constants";
import { loginUser } from "@/utils/auth";
import { loginSchema } from "@/validation/auth.validation";
import toast from "react-hot-toast";
import z from "zod";

export default function LOginPage() {
  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    const toastId = toast.loading("Logging...")
    try {
      const res = await loginUser(values.email, values.password);
      console.log("🚀 ~ login ~ handleSubmit ~ response:", res.success);

      if (res.success) {
        toast.success(res.message, { id: toastId });
      }
    } catch (error: unknown) {
      const message = error as string
      console.log(typeof error);
      toast.error(message, { id: toastId });
    }
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
