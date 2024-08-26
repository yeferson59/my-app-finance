'use client'

import { useFormState } from 'react-dom'
import { signInAction } from '@/lib/actions/login'
import AuthForm from './authForm'
import FormField from './formField'
import PasswordField from './passwordField'
import ButtonAuth from './buttonAuth'

export function SignInForm() {
  const [state, formAction] = useFormState(signInAction, undefined)
  return (
    <AuthForm
      title='Iniciar sessión'
      description='Accede a tu cuenta'
    >
      <form action={formAction} className="space-y-4">
        <FormField id='email' label='Correo electrónico' type='email' required messages={state?.errors?.email} errorMessage='error-email' />
        <PasswordField id='password' label='Contraseña' password={state?.errors?.password} required />
        <ButtonAuth labelSubmit='Iniciar sesión' message={state?.message} send='Iniciando...' />
      </form>
    </AuthForm>
  )
}