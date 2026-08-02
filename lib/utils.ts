import type { Comment } from '@prisma/client';

export function buildCommentTree(comments: (Comment & { author: { name: string | null } })[]) {
  const map = new Map<string, (Comment & { author: { name: string | null }; replies: typeof comments })>();

  const rootComments: Array<(Comment & { author: { name: string | null }; replies: typeof comments })> = [];

  comments.forEach((comment) => {
    map.set(comment.id, { ...comment, replies: [] });
  });

  comments.forEach((comment) => {
    const node = map.get(comment.id);
    if (!node) return;
    if (comment.parentId) {
      const parent = map.get(comment.parentId);
      if (parent) {
        parent.replies.push(node);
      } else {
        rootComments.push(node);
      }
    } else {
      rootComments.push(node);
    }
  });

  return rootComments;
}

export function formatCompactDate(timestamp: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(timestamp);
}
