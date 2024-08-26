import { Button } from "@/components/ui/button"
import { PROVIDERS } from "@/lib/consts"

export default function ProviderButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {PROVIDERS.map((provider) => (
        <form action={provider.action} key={provider.name}>
          <Button
            variant="outline"
            className="w-full"
            type="submit"
          >
            {<provider.icon className="w-5 h-5" />}
            <span className="ml-2">{provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  )
}