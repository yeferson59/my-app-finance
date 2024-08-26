import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Github,
    credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, request) {
        console.log(credentials, request)
        return {
          id: "1",
          name: "Yeferson",
          email: "yefersontoloza59@gmail.com"
        }
      },
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  pages: {
    signIn: "/auth/sign-in"
  }
})