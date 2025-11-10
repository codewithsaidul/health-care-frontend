/* eslint-disable @typescript-eslint/no-explicit-any */

import { registerValidationZodSchema } from "@/validation/auth.validation";
import { loginUser } from "./loginUser";

export const registerPatient = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    console.log(formData.get("address"));
    const validationData = {
      name: formData.get("name"),
      address: formData.get("address"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const validatedFields =
      registerValidationZodSchema.safeParse(validationData);

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

    const registerData = {
      password: formData.get("password"),
      email: formData.get("email"),
      patient: {
        name: formData.get("name"),
        contactNumber: formData.get("contactNumber"),
        address: formData.get("address"),
      },
    };

    const newFormData = new FormData();

    newFormData.append("data", JSON.stringify(registerData));

    const res = await fetch(
      "http://localhost:5000/api/v1/users/create-patient",
      {
        method: "POST",
        body: newFormData,
      }
    );

    const result = await res.json();

    if (result.success) {
      await loginUser(_currentState, formData);
    }

    return result;
  } catch (error: any) {
    // Re-throw NEXT_REDIRECT errors so Next.js can handle them
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
  }
};
