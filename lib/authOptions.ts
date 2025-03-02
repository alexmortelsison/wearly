import { NextAuthOptions, DefaultSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      role: "admin" | "user";
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as "admin" | "user"; // Assign role
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
        token.role = adminEmails.includes(user.email || "") ? "admin" : "user";
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
