"use client"

import Image from "next/image"
import { finale } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"

export function Finale() {
  return (
    <section id="encerramento" className="finale" aria-labelledby="finale-heading">
      <div className="finale-artifact">
        <Image src={finale.src} alt={finale.alt} fill sizes="42vw" className="finale-photo" />
      </div>
      <EditorialReveal className="finale-copy">
        <p id="finale-heading" className="finale-line">
          {finale.line}
        </p>
        <p className="finale-mark">{finale.wordmark}</p>
        <p className="finale-tag">{finale.tagline}</p>
        <a className="finale-cta" href="#oferta">
          {finale.cta}
        </a>
      </EditorialReveal>
    </section>
  )
}
