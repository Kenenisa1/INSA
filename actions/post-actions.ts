"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import prisma from "../lib/db";
import { CreatePostSchema } from "../lib/validations/post";
import { CommentSchema } from "../lib/validations/interaction";
import { z } from "zod";

export type ActionResult<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

async function createPostActionHandler(
  formData: FormData,
): Promise<ActionResult> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  const tagIds = formData
    .getAll("tagIds")
    .map((value) => String(value).trim())
    .filter(Boolean);

  const payload = {
    title: String(formData.get("title") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
    imageUrl: String(formData.get("imageUrl") ?? "").trim() || undefined,
    dayBadge: Number(formData.get("dayBadge") ?? 1),
    tagIds,
  };

  if (tagIds.length === 0) {
    return { success: false, error: "Please select at least one tag." };
  }

  try {
    const parsed = CreatePostSchema.parse(payload);

    await prisma.post.create({
      data: {
        title: parsed.title,
        content: parsed.content,
        imageUrl: parsed.imageUrl,
        dayBadge: parsed.dayBadge,
        authorId: session.user.id,
        tagIds: parsed.tagIds,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors
        .map((err) => `${err.path.join(".") || "tagIds"}: ${err.message}`)
        .join("; ");
      return { success: false, error: message };
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unable to create post.",
    };
  }
}

export async function createPostAction(
  formData: FormData,
): Promise<ActionResult> {
  "use server";

  return await createPostActionHandler(formData);
}

async function toggleReactionActionHandler(
  postId: string,
  type: "LIKE" | "DISLIKE",
): Promise<ActionResult> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  const existingReaction = await prisma.reaction.findUnique({
    where: { userId_postId: { userId: session.user.id, postId } },
  });

  if (existingReaction) {
    if (existingReaction.type === type) {
      await prisma.reaction.delete({
        where: { userId_postId: { userId: session.user.id, postId } },
      });
    } else {
      await prisma.reaction.update({
        where: { userId_postId: { userId: session.user.id, postId } },
        data: { type },
      });
    }
  } else {
    await prisma.reaction.create({
      data: { postId, userId: session.user.id, type },
    });
  }

  revalidatePath("/");
  revalidatePath(`/post/${postId}`);
  return { success: true };
}

export async function toggleReactionAction(
  postId: string,
  type: "LIKE" | "DISLIKE",
): Promise<ActionResult> {
  "use server";

  return await toggleReactionActionHandler(postId, type);
}

async function createCommentActionHandler(formData: FormData): Promise<
  ActionResult<{
    comment: {
      id: string;
      content: string;
      createdAt: string;
      parentId: string | null;
      author: {
        id: string;
        name: string | null;
        role: string;
      };
    };
  }>
> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  const payload = {
    postId: String(formData.get("postId") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
    parentId: formData.get("parentId")
      ? String(formData.get("parentId")).trim()
      : undefined,
  };

  try {
    const parsed = CommentSchema.parse(payload);

    const comment = await prisma.comment.create({
      data: {
        postId: parsed.postId,
        content: parsed.content,
        parentId: parsed.parentId,
        authorId: session.user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
      },
    });

    revalidatePath("/");
    revalidatePath(`/post/${parsed.postId}`);
    return {
      success: true,
      data: {
        comment: {
          id: comment.id,
          content: comment.content,
          parentId: comment.parentId ?? null,
          createdAt: comment.createdAt.toISOString(),
          author: comment.author,
        },
      },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors
        .map((err) => `${err.path.join(".") || "content"}: ${err.message}`)
        .join("; ");
      return { success: false, error: message };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unable to post comment.",
    };
  }
}

export async function createCommentAction(formData: FormData): Promise<
  ActionResult<{
    comment: {
      id: string;
      content: string;
      createdAt: string;
      parentId: string | null;
      author: {
        id: string;
        name: string | null;
        role: string;
      };
    };
  }>
> {
  "use server";

  return await createCommentActionHandler(formData);
}
