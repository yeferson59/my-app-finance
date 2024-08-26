'use client'

import { useFormState } from 'react-dom'
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { signUp } from '@/lib/actions/login'
import PasswordField from './passwordField'
import FormField from './formField'
import AuthForm from './authForm'
import ButtonAuth from './buttonAuth'

export function SignUpForm() {
  const [state, formAction] = useFormState(signUp, undefined)
  return (
    <AuthForm
      title='Registro'
      description='Ingrese su datos para crear una cuenta'
    >
      <form action={formAction} className="space-y-4">
        <FormField id='name' label='Nombre' required messages={state?.errors?.name} errorMessage='error-name' />
        <FormField id='lastName' label='Apellido' required messages={state?.errors?.lastName} errorMessage='error-last-name' />
        <FormField id='username' label='Nombre de usuario' required messages={state?.errors?.username} errorMessage='error-username' />
        <FormField id='email' label='Correo electrónico' type='email' required messages={state?.errors?.email} errorMessage='error-email' />
        <PasswordField id='password' label='Contraseña' password={state?.errors?.password} required />
        <ButtonAuth labelSubmit='Registrarse' message={state?.message} send='Registrando...' />
      </form>
    </AuthForm>
  )
}