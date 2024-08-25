import { SignInForm } from "@/components/form/signInForm";
import { SignUpForm } from "@/components/form/signUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInForm />
      <SignUpForm />
    </main>
  );
}
