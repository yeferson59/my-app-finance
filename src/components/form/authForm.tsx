'use client'

import { useFormState } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

interface AuthFormProps {
  title: string;
  description: string;
  submitLabel: string;
  action: (prevState: any, formData: FormData) => Promise<any>;
  children: React.ReactNode;
}

export default function AuthForm({ title, description, submitLabel, action, children }: AuthFormProps) {
  const [state, formAction] = useFormState(action, { message: '' })

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          {children}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Button type="submit" className="w-full">{submitLabel}</Button>
          {state.message && (
            <p className="mt-2 text-sm text-green-600">{state.message}</p>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}