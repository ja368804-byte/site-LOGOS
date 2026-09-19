"use client"

import Image from "next/image"

type DocumentaryCardProps = {
  title: string
  src: string
  position?: string
  href?: string
  alt?: string
}

export function DocumentaryCard({ title, src, position = "50% 50%", href = "#temporada", alt }: DocumentaryCardProps) {
  return (
    <a href={href} className="doc-card">
      <Image
        src={src}
        alt={alt ?? `Produção sobre ${title}`}
        fill
        sizes="(max-width: 767px) 88vw, 58vw"
        className="doc-card__photo"
        style={{ objectPosition: position }}
      />
      <span className="doc-card__veil" aria-hidden />
      <span className="doc-card__light" aria-hidden />
      <span className="doc-card__title">{title}</span>
    </a>
  )
}
