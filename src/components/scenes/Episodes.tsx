"use client"

import { episodes } from "@/content/film"
import { EpisodeCard } from "@/components/film/EpisodeCard"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Episodes() {
  return (
    <section id="episodios" className="episodes" aria-labelledby="episodes-heading">
      <EditorialReveal className="episodes-head">
        <ChapterIndicator number="07" name="Episódios" />
        <h2 id="episodes-heading">A temporada</h2>
      </EditorialReveal>
      <div className="episodes-rail">
        {episodes.map(({ id, ...episode }) => (
          <EpisodeCard key={id} {...episode} />
        ))}
      </div>
    </section>
  )
}
