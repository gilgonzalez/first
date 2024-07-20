
import prisma from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";  
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, auth } = NextAuth(req => {
  if (req) {
    // do something with the request
  }
  return { 
    adapter: PrismaAdapter(prisma),
    providers: [ GitHub, Google ],
    callbacks: {
      async redirect({ url, baseUrl }) {
        return baseUrl + '/admin/shop';
      },
      async signIn({ user, account, profile, email, credentials }) {
        console.log('SignIn Callback');
        return true;
      },
      async session({ session, token, user }) {
        console.log('Session Callback');
        console.log({session})
        return session;
      },
      async jwt({ token, user, account, profile, trigger }) {
        console.log('JWT Callback Executed');
        return token;
      },
    }
  }
})