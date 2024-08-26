import { z } from "zod"

export const SignUpFormSchema = z.object({
  name: z.string()
    .min(1, "Nombre requerido")
    .max(40, "Nombre debe tener máximo 40 caracteres")
    .trim(),
  lastName: z.string()
    .min(1, "Apellido requerido")
    .max(40, "Apellido debe tener máximo 40 carácteres")
    .trim(),
  username: z.string()
    .min(3, "Nombre de usuario debe tener almenos 3 carácteres")
    .max(25, "Nombre de usuario debe tener máximo 25 carácteres")
    .regex(/^[a-zA-Z0-9_]+$/, "Nombre de usuario solamente puede tener letras, numeros y raya piso")
    .trim(),
  email: z.string()
    .min(1, "Correo electrónico requerido")
    .email("Correo electronico inválido")
    .max(70, "No puede contener más de 18 caracteres de longitud")
    .trim(),
  password: z.string()
    .min(8, "Contraseña debe tener minimo 8 carácteres")
    .regex(/[A-Z]/, "Contraseña debe tener almenos una mayuscula")
    .regex(/[a-z]/, "Contraseña debe tener almenos una minuscula")
    .regex(/[0-9]/, "Contraseña debe tener almenos un numero")
    .regex(/[@$!%*?&#]/, "Contraseña debe tener almenos un (@, $, !, %, *, ?, &, #)")
    .max(18, "No puede contener más de 18 caracteres de longitud")
    .trim()
})

export const SignInFormSchema = SignUpFormSchema.omit({
  name: true,
  lastName: true,
  username: true
}) 