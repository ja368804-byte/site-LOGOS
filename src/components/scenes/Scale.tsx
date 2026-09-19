"use client"

import { scale } from "@/content/film"
import { StatFigure } from "@/components/film/StatFigure"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Scale() {
  return (
    <section id="escala" className="scale" aria-labelledby="scale-heading">
      <EditorialReveal className="scale-head">
        <ChapterIndicator number="02" name={scale.kicker} />
        <h2 id="scale-heading">{scale.headline}</h2>
      </EditorialReveal>
      <div className="scale-grid">
        {scale.stats.map((stat) => (
          <StatFigure key={stat.id} value={stat.value} pad={stat.pad} label={stat.label} />
        ))}
        <StatFigure
          value={scale.millennia.display}
          label={scale.millennia.label}
          conceptual
          className="stat-figure stat-figure--word"
        />
      </div>
      <p className="scale-axes">{scale.axes.join(" · ")}</p>
    </section>
  )
}
