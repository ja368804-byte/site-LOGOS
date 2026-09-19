import Image from "next/image"
import { brandMark } from "@/content/brand"

type LogoMarkProps = {
  className?: string
  title?: string
  preload?: boolean
  sizes?: string
}

export function LogoMark({
  className,
  title = brandMark.alt,
  preload = false,
  sizes = "116px",
}: LogoMarkProps) {
  return (
    <span className={["logos-mark", className].filter(Boolean).join(" ")}>
      <Image
        src={brandMark.src}
        alt={title}
        width={brandMark.width}
        height={brandMark.height}
        className="logos-mark-img"
        preload={preload}
        sizes={sizes}
      />
    </span>
  )
}
