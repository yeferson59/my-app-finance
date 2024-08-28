"use server"

import { signIn } from "@/auth"
import { SignInFormSchema, SignUpFormSchema } from "../definitions/formSchema"
import { SignInForm, SignUpForm } from "../definitions/type"
import { AuthError } from "next-auth"
import { getUserByEmail } from "../data"
import db from "../supabase/supabase"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { bcrypt } from "../encrypt"

export async function signUp(prevState: SignUpForm, formData: FormData) {
  const { success, data, error } = SignUpFormSchema.safeParse(Object.fromEntries(formData))
  if (!success) return { errors: error.flatten().fieldErrors }
  const userFound = await getUserByEmail(data.email)
  if (userFound) return { message: 'Correo ya existente' }
  const { name, lastName, email, password, username } = data
  const hash = await bcrypt.hash(password, 15)
  const { error: errorDb } = await db.schema("next_auth").from("users").insert({
    name: name,
    last_name: lastName,
    username: username,
    email: email,
    password: hash
  })
  if (errorDb) return { message: 'Ocurrio un error' }
  await signIn("credentials", {
    email,
    password
  })

  revalidatePath('/auth/sign-in')
  redirect('/dashboard')
}

export async function signInGoogle() {
  try {
    const res = await signIn("google")
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error("Error authentication")
    }
    throw error
  }
}

export async function signInGithub() {
  try {
    await signIn("github")
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error("Error authentication")
    }
    throw error
  }
}
export async function signInAction(prevState: SignInForm, formData: FormData) {
  const { success, data, error } = SignInFormSchema.safeParse(Object.fromEntries(formData))
  if (!success) return { errors: error.flatten().fieldErrors }
  try {
    await signIn("credentials", data)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Credenciales invalidas' }
        default:
          return { message: 'Ocurrió un error' }
      }
    }
    throw error
  }
}