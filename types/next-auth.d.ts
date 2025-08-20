import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image?: string
      role: "STUDENT" | "TEACHER" | "ADMIN" | "TUTOR"
      points: number
      level: number
    }
  }

  interface User {
    role: "STUDENT" | "TEACHER" | "ADMIN" | "TUTOR"
    points: number
    level: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "STUDENT" | "TEACHER" | "ADMIN" | "TUTOR"
  }
}