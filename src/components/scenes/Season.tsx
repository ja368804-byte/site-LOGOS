"use client"

import Image from "next/image"
import { season } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Season() {
  return (
    <section id="temporada" className="season" aria-labelledby="season-heading">
      <div className="season-still">
        <Image
          src={season.src}
          alt={season.alt}
          fill
          sizes="100vw"
          className="season-photo"
        />
        <div className="season-overlay" aria-hidden />
      </div>
      <EditorialReveal className="season-copy">
        <p className="season-original">{season.original}</p>
        <ChapterIndicator number="06" name={season.season} />
        <h2 id="season-heading">{season.title}</h2>
        <p className="season-tagline">{season.tagline}</p>
        <p className="season-meta">
          <span>{season.season}</span>
          <span>{season.episodes}</span>
          <span>{season.fields}</span>
        </p>
      </EditorialReveal>
    </section>
  )
}
