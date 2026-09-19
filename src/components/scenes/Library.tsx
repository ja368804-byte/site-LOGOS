"use client"

import { useRef } from "react"
import { library } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"
import { useMillenniaScroll } from "@/components/scenes/useMillenniaScroll"

export function Library() {
  const reduced = usePrefersReducedMotion()
  const wrap = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useMillenniaScroll(wrap, track, !reduced, {
    start: "top 18%",
    end: "bottom top",
    scrub: 0.85,
  })

  return (
    <section ref={wrap} id="biblioteca" className="library" aria-labelledby="library-heading">
      <EditorialReveal className="library-head">
        <ChapterIndicator number="04" name="O universo" />
        <h2 id="library-heading">
          {library.headline}
          <span>{library.headlineRest}</span>
        </h2>
      </EditorialReveal>
      <div className="library-rail">
        <div ref={track} className="library-rail__track">
          {library.works.map((work) => (
            <a key={work.id} href="#temporada" className="lib-name">
              {work.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
