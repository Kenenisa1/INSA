import { z } from 'zod';

export const QuestionSchema = z.object({
  title: z.string().min(8),
  content: z.string().min(15),
  tagIds: z.array(z.string()).min(1),
});

export const AnswerSchema = z.object({
  questionId: z.string().min(1),
  content: z.string().min(10),
});

export type QuestionInput = z.infer<typeof QuestionSchema>;
export type AnswerInput = z.infer<typeof AnswerSchema>;