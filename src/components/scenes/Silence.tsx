"use client"

import { useRef } from "react"
import { silence } from "@/content/film"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"
import { useSilenceScroll } from "@/components/scenes/useSilenceScroll"

const phrases = [silence.lead, ...silence.lines, silence.close]

export function Silence() {
  const reduced = usePrefersReducedMotion()
  const wrap = useRef<HTMLElement>(null)

  useSilenceScroll(wrap, !reduced)

  return (
    <section
      ref={wrap}
      id="silencio"
      className="silence"
      aria-labelledby="silence-heading"
    >
      <div className="silence-stage">
        {phrases.map((phrase, index) => (
          <p
            key={phrase}
            id={index === 0 ? "silence-heading" : undefined}
            data-silence={index === phrases.length - 1 ? "close" : "line"}
            className={index === phrases.length - 1 ? "silence-close" : "silence-line"}
          >
            {phrase}
          </p>
        ))}
      </div>
    </section>
  )
}
