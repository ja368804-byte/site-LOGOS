import { cn } from "@/lib/cn"

type ThreadProps = {
  className?: string
}

export function Thread({ className }: ThreadProps) {
  return (
    <div className={cn("logos-thread hidden md:block", className)} aria-hidden>
      <span data-hero="thread-fill" className="logos-thread__fill" />
    </div>
  )
}
