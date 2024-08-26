import { GhostIcon, Github } from 'lucide-react'
import { signInGithub, signInGoogle } from './actions/login'

export const PROVIDERS = [
  {
    name: 'Google',
    icon: GhostIcon,
    action: async () => {
      // Aquí iría la lógica para iniciar sesión con Google
      await signInGoogle()
    }
  },
  // Puedes agregar un segundo proveedor aquí si es necesario
  {
    name: 'Github',
    icon: Github,
    action: async () => {
      await signInGithub()
    }
  }
]