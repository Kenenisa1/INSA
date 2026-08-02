import type { NextAuthOptions, DefaultSession } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { Role } from "@prisma/client";
import prisma from "./db";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role: Role;
      currentCampDay?: number | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    role?: Role;
    currentCampDay?: number | null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("authorize: missing credentials");
          return null;
        }

        const email = credentials.email.trim().toLowerCase();
        const password = credentials.password;
        console.log("authorize: normalized email", email);

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          console.log("authorize: no user found for email", email);
          return null;
        }

        if (!user.password) {
          console.log("authorize: user has no stored password", email);
          return null;
        }

        const isValid = await bcrypt.compare(password, user.password);
        console.log("authorize: bcrypt.compare result", { email, isValid });

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          currentCampDay: user.currentCampDay,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const extendedUser = user as { currentCampDay?: number | null };
        token.userId = user.id;
        token.role = user.role;
        token.currentCampDay = extendedUser.currentCampDay ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId ?? session.user.id;
        session.user.role = token.role ?? (session.user.role as Role);
        session.user.currentCampDay = token.currentCampDay ?? null;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
