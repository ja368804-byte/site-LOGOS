type ChapterIndicatorProps = {
  number: string
  name: string
  className?: string
}

export function ChapterIndicator({ number, name, className }: ChapterIndicatorProps) {
  return (
    <p className={className ?? "chapter-indicator"}>
      <span className="chapter-indicator__num">{number}</span>
      <span className="chapter-indicator__name">{name}</span>
    </p>
  )
}
