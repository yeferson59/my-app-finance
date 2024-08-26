'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

interface PasswordFieldProps {
  id: string;
  label: string;
  required?: boolean;
  password?: string[]
}

export default function PasswordField({ id, label, required = false, password, ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          required={required}
          aria-invalid={!!password}
          aria-describedby={password ? "email-error" : undefined}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <EyeIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
      </div>
      {password && (
        <p id="password-error" className="text-sm text-red-500">{password[0]}</p>
      )}
    </div>
  )
}