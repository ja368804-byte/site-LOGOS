"use client"

import { sources } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Sources() {
  return (
    <section id="arquivo" className="sources" aria-labelledby="sources-heading">
      <EditorialReveal className="sources-copy">
        <ChapterIndicator number="11" name="Arquivo" />
        <h2 id="sources-heading">
          {sources.headline}
          <span>{sources.headlineRest}</span>
        </h2>
        <p>{sources.body}</p>
      </EditorialReveal>
      <ul className="sources-vestiges">
        {sources.vestiges.map((item, index) => (
          <li key={item}>
            <EditorialReveal delay={index * 0.06}>{item}</EditorialReveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
