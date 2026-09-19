"use client"

import { benefits } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Benefits() {
  return (
    <section id="encontros" className="benefits" aria-labelledby="benefits-heading">
      <EditorialReveal className="benefits-head">
        <ChapterIndicator number="10" name={benefits.kicker} />
        <h2 id="benefits-heading">{benefits.headline}</h2>
        <p className="benefits-lead">{benefits.lead}</p>
      </EditorialReveal>
      <div className="benefits-words">
        {benefits.items.map((item, index) => (
          <EditorialReveal key={item.id} delay={index * 0.1} className="benefits-word" y={26}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </EditorialReveal>
        ))}
      </div>
    </section>
  )
}
