"use client"

import { faq } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Faq() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <EditorialReveal className="faq-head">
        <ChapterIndicator number="13" name="Perguntas" />
        <h2 id="faq-heading">Antes de entrar</h2>
      </EditorialReveal>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>
              {item.q}
              <span className="faq-item__mark" aria-hidden />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
