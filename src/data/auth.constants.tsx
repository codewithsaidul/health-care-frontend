import { IFields } from "@/types/form.type";
import { LockIcon, MailIcon } from "lucide-react";


export const loginFields: IFields[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    icon: <MailIcon className="h-4 w-4 text-gray-400" />,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    icon: <LockIcon className="h-4 w-4 text-gray-400" />,
  },
];



export const loginDefaultValues = {
  email: "",
  password: "",
};



export const loginFooter = (
  <p className="text-sm text-gray-500">
    Don&apos;t have an account?{" "}
    <a href="/auth/register" className="text-primary hover:underline">
      Sign Up
    </a>
  </p>
);




export const registerFooter = (
  <p className="text-sm text-gray-500">
    Already have an account?{" "}
    <a href="/auth/register" className="text-primary hover:underline">
      Log In
    </a>
  </p>
);
