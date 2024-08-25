import { AuthForm } from './authForm'
import { FormField } from './formField'
import { PasswordField } from './passwordField'

async function signUp(prevState: any, formData: FormData) {
  'use server'
  // Aquí iría la lógica real de registro
  console.log('Datos del formulario:', Object.fromEntries(formData))
  return { message: 'Registro exitoso' }
}

export function SignUpForm() {
  return (
    <AuthForm
      title="Registro"
      description="Crea una nueva cuenta"
      submitLabel="Registrarse"
      action={signUp}
    >
      <FormField id="name" label="Nombre" required />
      <FormField id="lastName" label="Apellido" required />
      <FormField id="username" label="Nombre de usuario" required />
      <FormField id="email" label="Correo electrónico" type="email" required />
      <PasswordField id="password" label="Contraseña" required />
    </AuthForm>
  )
}