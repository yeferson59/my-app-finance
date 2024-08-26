export type SignUpForm = | {
  errors?: {
    name?: string[];
    lastName?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
  }
  message?: string
} | undefined

export type SignInForm = | {
  errors?: {
    email?: string[];
    password?: string[];
  }
  message?: string
} | undefined