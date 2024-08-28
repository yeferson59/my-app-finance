import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import credentials from "next-auth/providers/credentials"
import { SignInFormSchema } from "./lib/definitions/formSchema"
import { getUserVerified } from "./lib/data"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Github,
    credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const { success, data } = await SignInFormSchema.safeParseAsync(credentials)
        if (!success) {
          throw new Error('Credenciales invalidas')
        }
        const { email, password } = data
        const user = await getUserVerified(email, password)
        if (!user) return user
        return user
      }
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