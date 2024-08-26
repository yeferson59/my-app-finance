"use server"

import { signIn } from "@/auth"
import { SignInFormSchema, SignUpFormSchema } from "../definitions/formSchema"
import { SignInForm, SignUpForm } from "../definitions/type"
import { AuthError } from "next-auth"

export async function signUp(prevState: SignUpForm, formData: FormData) {
  const { success, data, error } = SignUpFormSchema.safeParse(Object.fromEntries(formData))
  if (!success) return { errors: error.flatten().fieldErrors }
  console.log(data)
  return { message: 'Registro exitoso' }
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
  await signIn("credentials", data)
  return { message: 'Registro exitoso' }
}