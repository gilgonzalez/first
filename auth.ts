
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirige al usuario a la ruta que deseas después del login
      return baseUrl + '/admin/shop'
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user)
      console.log(account)
      return true
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token)
      console.log(user)
      console.log(account)
      console.log(profile)
      console.log(isNewUser)
      return token
    },
    async session({ session, token, user }) {
      console.log(session)
      console.log(token)
      console.log(user)
      return session
    }
  }
});
