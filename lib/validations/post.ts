import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(5).max(120),
  content: z.string().min(20),
  imageUrl: z.string().url().optional().nullable(),
  dayBadge: z.number().int().min(1).max(30),
  tagIds: z.array(z.string()).min(1).max(5),
});

export type CreatePostInput = z.infer<typeof CreatePostSchema>;
