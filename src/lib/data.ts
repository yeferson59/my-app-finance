import { bcrypt } from "./encrypt";
import db from "./supabase/supabase";

export async function getUserByEmail(email: string) {
  const { error, data } = await db.schema("next_auth").from("users").select("*").eq("email", email)
  if (error) return
  const user = data[0]
  return user
}

export async function getUserVerified(email: string, password: string) {
  const user = await getUserByEmail(email)
  if (!user) {
    throw new Error('User not exist')
  }
  const { password: hash } = user
  if (!hash) return null
  const isUser = await bcrypt.compare(password, hash)
  if (!isUser) return null
  return user
}