import { NextAuthOptions, User } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Set admin role for allowed admin emails on first sign-in
      if (user.email) {
        const allowedAdmins = process.env.ALLOWED_ADMINS?.split(',') || []
        if (allowedAdmins.includes(user.email)) {
          await prisma.user.update({
            where: { email: user.email },
            data: { role: 'ADMIN' },
          })
        }
      }
      return true
    },
    async session({ session, user }) {
      if (session.user && user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true, points: true, level: true },
        })
        
        if (dbUser) {
          session.user.role = dbUser.role
          session.user.points = dbUser.points
          session.user.level = dbUser.level
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    error: '/auth/error',
  },
  session: {
    strategy: 'database',
  },
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user || null
}