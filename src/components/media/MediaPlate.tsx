import Image from "next/image"
import { cn } from "@/lib/cn"

type MediaPlateProps = {
  src: string
  alt: string
  docket?: string
  sizes: string
  variant?: "bleed" | "plate"
  className?: string
  mediaClassName?: string
  objectPosition?: string
  fetchPriority?: "high" | "low" | "auto"
}

export function MediaPlate({
  src,
  alt,
  docket,
  sizes,
  variant = "plate",
  className,
  mediaClassName,
  objectPosition = "50% 50%",
  fetchPriority = "low",
}: MediaPlateProps) {
  const media =
    variant === "bleed" ? (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        fetchPriority={fetchPriority}
        className={cn("logos-media", mediaClassName)}
        style={{ objectPosition }}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={960}
        height={1200}
        sizes={sizes}
        fetchPriority={fetchPriority}
        className={cn("h-full w-full object-cover", mediaClassName)}
        style={{ objectPosition }}
      />
    )

  return (
    <figure className={cn(variant === "plate" ? "logos-plate bg-noite" : "hero-bleed", className)}>
      {media}
      {docket ? (
        <figcaption className="logos-docket pointer-events-none absolute bottom-3 left-3 z-10">{docket}</figcaption>
      ) : null}
    </figure>
  )
}
