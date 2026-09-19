"use client"

import Image from "next/image"

type EpisodeCardProps = {
  number: string
  title: string
  body: string
  src: string
  position?: string
  category?: string
  alt?: string
}

export function EpisodeCard({
  number,
  title,
  body,
  src,
  position = "50% 50%",
  category,
  alt,
}: EpisodeCardProps) {
  return (
    <article className="episode-card">
      <div className="episode-card__still">
        <Image
          src={src}
          alt={alt ?? title}
          fill
          sizes="(max-width: 767px) 88vw, 28vw"
          className="episode-card__photo"
          style={{ objectPosition: position }}
        />
        <span className="episode-card__veil" aria-hidden />
        <div className="episode-card__overlay">
          <p className="episode-card__num">{number}</p>
          {category ? <p className="episode-card__cat">{category}</p> : null}
          <h3 className="episode-card__title">{title}</h3>
        </div>
      </div>
      <p className="episode-card__body">{body}</p>
    </article>
  )
}
