"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import prisma from "../lib/db";
import { QuestionSchema, AnswerSchema } from "../lib/validations/qa";

export type ActionResult<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

async function createQuestionActionHandler(
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
    tagIds,
  };

  const parsed = QuestionSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.errors.map((issue) => issue.message).join(" "),
    };
  }

  await prisma.question.create({
    data: {
      title: parsed.data.title,
      content: parsed.data.content,
      tagIds: parsed.data.tagIds,
      authorId: session.user.id,
    },
  });

  revalidatePath("/questions");
  return { success: true };
}

export async function createQuestionAction(
  formData: FormData,
): Promise<ActionResult> {
  return await createQuestionActionHandler(formData);
}

async function createAnswerActionHandler(
  formData: FormData,
): Promise<ActionResult> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  const payload = {
    questionId: String(formData.get("questionId") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
  };

  const parsed = AnswerSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.errors.map((issue) => issue.message).join(" "),
    };
  }

  await prisma.answer.create({
    data: {
      questionId: parsed.data.questionId,
      content: parsed.data.content,
      authorId: session.user.id,
    },
  });

  revalidatePath("/questions");
  revalidatePath(`/questions/${parsed.data.questionId}`);
  return { success: true };
}

export async function createAnswerAction(
  formData: FormData,
): Promise<ActionResult> {
  return await createAnswerActionHandler(formData);
}

async function resolveAnswerActionHandler(
  questionId: string,
  answerId: string,
): Promise<ActionResult> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: "Authentication required." };
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });
  if (!question) {
    return { success: false, error: "Question not found." };
  }

  const isQuestionAuthor = question.authorId === session.user.id;
  const isTrainerOrAdmin =
    session.user.role === "TRAINER" || session.user.role === "ADMIN";
  if (!isQuestionAuthor && !isTrainerOrAdmin) {
    return {
      success: false,
      error: "You do not have permission to mark this answer as accepted.",
    };
  }

  const answer = await prisma.answer.findUnique({ where: { id: answerId } });
  if (!answer || answer.questionId !== questionId) {
    return {
      success: false,
      error: "Answer does not match the selected question.",
    };
  }

  await prisma.$transaction([
    prisma.answer.updateMany({
      where: { questionId, isAccepted: true },
      data: { isAccepted: false },
    }),
    prisma.answer.update({
      where: { id: answerId },
      data: { isAccepted: true },
    }),
    prisma.question.update({
      where: { id: questionId },
      data: { isResolved: true },
    }),
  ]);

  revalidatePath("/questions");
  revalidatePath(`/questions/${questionId}`);
  return { success: true };
}

export async function resolveAnswerAction(
  questionId: string,
  answerId: string,
): Promise<ActionResult> {
  return await resolveAnswerActionHandler(questionId, answerId);
}
