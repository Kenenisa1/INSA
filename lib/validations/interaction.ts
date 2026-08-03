import { z } from 'zod';

export const ReactionSchema = z.object({
  postId: z.string().min(1),
  type: z.enum(['LIKE', 'DISLIKE']),
});

export const CommentSchema = z.object({
  postId: z.string().min(1),
  content: z.string().min(3).max(500),
  parentId: z.string().optional(),
});

export type CommentInput = z.infer<typeof CommentSchema>;
export type ReactionInput = z.infer<typeof ReactionSchema>;