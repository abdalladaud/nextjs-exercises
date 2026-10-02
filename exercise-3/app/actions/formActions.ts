"use server";

export async function submitForm(
  previousState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  console.log("Email:", email);

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters.",
    };
  }

  return {
    success: true,
    message: `Hello, ${firstName} ${lastName}!`,
  };
}