import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}

export default function FormField({ id, label, type = "text", required = false }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} required={required} />
    </div>
  )
}