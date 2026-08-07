import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import FeedView from "@/components/FeedView";
import GlobalNavbar from "@/components/GlobalNavbar";

export const metadata: Metadata = {
  title: "INSA Summer Camp Pulse — Feed",
  description: "Student daily activity feed for the INSA Summer Camp.",
};

export type PostWithMeta = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string | null;
  dayBadge: number;
  createdAt: string;
  author: { name: string | null; role: string; id: string; avatarUrl: string | null };
  tagIds: string[];
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
  comments: Array<{
    id: string;
    content: string;
    createdAt: string;
    author: { name: string | null; role: string; id: string; avatarUrl: string | null };
  }>;
  userReactionType: "LIKE" | "DISLIKE" | null;
};

async function getTags() {
  return prisma.tag.findMany();
}

async function getFeedPosts(userId: string) {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      dayBadge: true,
      createdAt: true,
      author: { select: { id: true, name: true, role: true, avatarUrl: true } },
      tagIds: true,
      reactions: { select: { type: true, userId: true } },
      _count: { select: { comments: true } },
      comments: {
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          content: true,
          createdAt: true,
          author: { select: { id: true, name: true, role: true, avatarUrl: true } },
        },
      },
    },
  });

  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    imageUrl: post.imageUrl,
    dayBadge: post.dayBadge,
    createdAt: post.createdAt.toISOString(),
    author: {
      name: post.author.name,
      role: post.author.role,
      id: post.author.id,
      avatarUrl: post.author.avatarUrl,
    },
    tagIds: post.tagIds,
    likeCount: post.reactions.filter((reaction) => reaction.type === "LIKE")
      .length,
    dislikeCount: post.reactions.filter(
      (reaction) => reaction.type === "DISLIKE",
    ).length,
    commentCount: post._count.comments,
    comments: post.comments.map(c => ({
      id: c.id,
      content: c.content,
      createdAt: c.createdAt.toISOString(),
      author: c.author,
    })),
    userReactionType:
      post.reactions.find((reaction) => reaction.userId === userId)?.type ??
      null,
  }));
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const tags = await getTags();
  const posts = await getFeedPosts(session.user.id);
  const userName = session.user?.name ?? "Camp learner";
  const currentUser = await prisma.user.findUnique({ 
    where: { id: session.user.id }, 
    select: { id: true, name: true, role: true, avatarUrl: true } 
  });

  return (
    <main className="page-wrapper">
      <GlobalNavbar activePage="feed" userName={userName} avatarUrl={currentUser?.avatarUrl} />
      <FeedView 
        tags={tags} 
        posts={posts} 
        currentUser={{
          id: currentUser?.id ?? session.user.id,
          name: currentUser?.name ?? userName,
          role: currentUser?.role ?? "STUDENT"
        }} 
      />
    </main>
  );
}
