import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import ProviderButtons from "./providerButtons";

interface AuthFormProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthForm({ title, description, children }: AuthFormProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ProviderButtons />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                O continúa con
              </span>
            </div>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  )
}