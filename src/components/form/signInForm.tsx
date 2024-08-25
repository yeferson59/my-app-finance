import { AuthForm } from './authForm'
import { FormField } from './formField'
import { PasswordField } from './passwordField'

async function signIn(prevState: any, formData: FormData) {
  'use server'
  // Aquí iría la lógica real de inicio de sesión
  console.log('Datos del formulario:', Object.fromEntries(formData))
  return { message: 'Inicio de sesión exitoso' }
}

export function SignInForm() {
  return (
    <AuthForm
      title="Iniciar Sesión"
      description="Accede a tu cuenta"
      submitLabel="Iniciar Sesión"
      action={signIn}
    >
      <FormField id="email" label="Correo electrónico" type="email" required />
      <PasswordField id="password" label="Contraseña" required />
    </AuthForm>
  )
}