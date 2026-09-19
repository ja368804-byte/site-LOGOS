"use client"

import Image from "next/image"
import { EditorialReveal } from "@/components/film/EditorialReveal"

type BenefitSectionProps = {
  index: string
  title: string
  body: string
  src: string
  position?: string
  reverse?: boolean
  variant?: "cinema" | "split" | "quiet"
}

export function BenefitSection({
  index,
  title,
  body,
  src,
  position = "50% 50%",
  reverse = false,
  variant = "split",
}: BenefitSectionProps) {
  const layout =
    variant === "cinema" ? "benefit--cinema" : variant === "quiet" ? "benefit--quiet" : reverse ? "benefit--reverse" : ""

  return (
    <article className={`benefit ${layout}`.trim()}>
      <div className="benefit__media">
        <Image
          src={src}
          alt=""
          fill
          sizes={variant === "quiet" ? "28vw" : "(max-width: 1023px) 100vw, 52vw"}
          className="benefit__photo"
          style={{ objectPosition: position }}
        />
      </div>
      <EditorialReveal className="benefit__copy">
        <p className="benefit__index">{index}</p>
        <h3 className="benefit__title">{title}</h3>
        <p className="benefit__body">{body}</p>
      </EditorialReveal>
    </article>
  )
}
