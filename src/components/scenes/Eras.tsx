"use client"

import { useEffect, useRef, useState } from "react"
import { eras } from "@/content/film"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"
import { useMillenniaScroll } from "@/components/scenes/useMillenniaScroll"

export function Eras() {
  const reduced = usePrefersReducedMotion()
  const wrap = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)")
    const update = () => setWide(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useMillenniaScroll(wrap, track, !reduced && wide, { fade: true })

  return (
    <section ref={wrap} id="percurso" className="eras" aria-labelledby="eras-heading">
      <div className="eras-stage">
        <div className="eras-copy">
          <ChapterIndicator number="03" name={eras.kicker} />
          <h2 id="eras-heading">{eras.headline}</h2>
        </div>
        <div ref={track} className="eras-track">
          {eras.steps.map((step, index) => (
            <article key={step.id} className="eras-step">
              <p className="eras-step__num">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="eras-step__title">{step.title}</h3>
              <span className="eras-step__line" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
