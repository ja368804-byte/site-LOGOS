import { cn } from "@/lib/cn"

type GrainProps = {
  className?: string
}

export function Grain({ className }: GrainProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-[8]", className)} aria-hidden>
      <span className="logos-grain block h-full w-full" />
    </div>
  )
}
