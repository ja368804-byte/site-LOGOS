"use client"

import { useRef } from "react"
import Image from "next/image"
import { aulas, aulasCopy } from "@/content/aulas"

export function Aulas() {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const node = scroller.current
    if (!node) return
    const card = node.querySelector<HTMLElement>(".aulas-card")
    const amount = (card?.offsetWidth ?? 280) + 16
    node.scrollBy({ left: amount * direction, behavior: "smooth" })
  }

  return (
    <section id="aulas" className="aulas" aria-labelledby="aulas-heading">
      <div className="aulas-head">
        <h2 id="aulas-heading" className="aulas-title">
          {aulasCopy.heading}
        </h2>
      </div>

      <div className="aulas-frame">
        <div ref={scroller} className="aulas-scroller">
          {aulas.map((aula) => (
            <a key={aula.id} href={aula.href} className="aulas-card">
              <Image
                src={aula.image.src}
                alt={aula.image.alt}
                fill
                sizes="(max-width: 767px) 58vw, 22vw"
                className="aulas-card__photo"
                style={{ objectPosition: aula.image.position }}
              />
              <span className="aulas-card__veil" aria-hidden />
              <span className="aulas-card__copy">
                <span className="aulas-card__name">{aula.title}</span>
                <span className="aulas-card__sub">{aula.subtitle}</span>
              </span>
            </a>
          ))}
        </div>

        <button
          type="button"
          className="aulas-next"
          aria-label="Ver próximas aulas"
          onClick={() => scrollByCard(1)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
            <path
              d="M9 5.5 15.5 12 9 18.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
