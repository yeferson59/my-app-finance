import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  messages?: string[];
  errorMessage?: string
}

export default function FormField({ id, label, type = "text", required = false, messages, errorMessage }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} required={required} aria-invalid={!!messages} aria-describedby={messages ? errorMessage : undefined} />
      {messages && (
        <p id="email-error" className="text-sm text-red-500">{messages[0]}</p>
      )}
    </div>
  )
}