"use client"

import { why } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Why() {
  return (
    <section id="por-que" className="why" aria-labelledby="why-heading">
      <EditorialReveal className="why-head">
        <ChapterIndicator number="08" name={why.kicker} />
        <h2 id="why-heading">{why.headline}</h2>
      </EditorialReveal>
      <div className="why-list">
        {why.items.map((item, index) => (
          <EditorialReveal key={item.num} delay={index * 0.08} className="why-item" y={28}>
            <p className="why-item__num">{item.num}</p>
            <h3 className="why-item__title">{item.title}</h3>
          </EditorialReveal>
        ))}
      </div>
    </section>
  )
}
