import db from "./supabase/supabase";

export async function getUserByEmail(email: string) {
  const { error, data } = await db.schema("next_auth").from("users").select("*").eq("email", email)
  if (error) return
  const user = data[0]
  return user
}