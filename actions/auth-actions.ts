"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import prisma from "../lib/db";
import { RegisterSchema, RegisterInput } from "../lib/validations/auth";

export async function registerUserAction(
  form: FormData,
): Promise<{ success: boolean; error?: string }> {
  const values = {
    name: form.get("name")?.toString().trim() ?? "",
    email: form.get("email")?.toString().trim().toLowerCase() ?? "",
    password: form.get("password")?.toString() ?? "",
    role: (form.get("role")?.toString() as RegisterInput["role"]) ?? "STUDENT",
  };

  const result = RegisterSchema.safeParse(values);
  if (!result.success) {
    const message = result.error.errors
      .map((error) => error.message)
      .join(", ");
    return { success: false, error: message };
  }

  try {
    const existing = await prisma.user.findUnique({
      where: { email: result.data.email },
    });
    if (existing) {
      return {
        success: false,
        error: "A user with this email already exists.",
      };
    }

    const hashedPassword = await bcrypt.hash(result.data.password, 10);
    await prisma.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashedPassword,
        role: result.data.role,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.";
    return { success: false, error: message };
  }

  redirect("/login?registered=1");
  return { success: true };
}
