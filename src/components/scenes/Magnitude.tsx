"use client"

import { magnitude } from "@/content/film"
import { StatFigure } from "@/components/film/StatFigure"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Magnitude() {
  return (
    <section id="magnitude" className="magnitude" aria-labelledby="magnitude-heading">
      <EditorialReveal className="magnitude-head">
        <ChapterIndicator number="09" name={magnitude.kicker} />
        <h2 id="magnitude-heading" className="sr-only">
          A temporada em números
        </h2>
      </EditorialReveal>
      <div className="magnitude-grid">
        {magnitude.items.map((item) => (
          <StatFigure
            key={item.id}
            value={item.value}
            pad={"pad" in item ? item.pad : 2}
            label={item.label}
            conceptual={"conceptual" in item ? item.conceptual : false}
            className="stat-figure stat-figure--xl"
          />
        ))}
      </div>
    </section>
  )
}
