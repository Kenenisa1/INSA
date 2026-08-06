"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import prisma from "../lib/db";
import { ActionResult } from "./post-actions";

export async function updateProfileImageAction(
  imageUrl: string,
): Promise<ActionResult> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { avatarUrl: imageUrl },
    });

    revalidatePath("/profile");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unable to update profile image.",
    };
  }
}
