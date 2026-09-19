"use client"

import { offer } from "@/content/film"
import { EditorialReveal } from "@/components/film/EditorialReveal"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function Offer() {
  return (
    <section id="oferta" className="offer" aria-labelledby="offer-heading">
      <div className="offer-ticket">
        <EditorialReveal className="offer-copy">
          <ChapterIndicator number="12" name={offer.kicker} />
          <h2 id="offer-heading">{offer.headline}</h2>
          <p className="offer-lede">{offer.lede}</p>
          <p className="offer-price" aria-label={offer.price.spoken}>
            <span className="offer-price__currency" aria-hidden>
              {offer.price.currency}
            </span>
            <span className="offer-price__amount" aria-hidden>
              {offer.price.amount}
            </span>
            <span className="offer-price__cents" aria-hidden>
              {offer.price.cents}
            </span>
          </p>
          <p className="offer-price__caption">{offer.priceCaption}</p>
        </EditorialReveal>
        <EditorialReveal className="offer-includes" delay={0.12} y={28}>
          <p className="offer-includes__kicker">{offer.includedKicker}</p>
          <ol className="offer-includes__list">
            {offer.included.map((item) => (
              <li key={item.id} className="offer-include">
                <p className="offer-include__num">{item.num}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </EditorialReveal>
        <EditorialReveal className="offer-action" delay={0.18}>
          <a
            className="offer__cta"
            href={offer.href}
            {...(offer.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {offer.cta}
          </a>
        </EditorialReveal>
      </div>
    </section>
  )
}
