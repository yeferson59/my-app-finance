"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";

export default function ButtonAuth({ labelSubmit, message, send }: { labelSubmit: string, message?: string, send: string }) {
  const { pending } = useFormStatus()
  return (
    <CardFooter className="flex flex-col items-start">
      <Button type="submit" className="w-full" aria-disabled={pending} >
        {
          pending ? send : labelSubmit
        }
      </Button>
      {message && (
        <p className="mt-2 text-sm text-green-600">{message}</p>
      )}
    </CardFooter>
  );
}