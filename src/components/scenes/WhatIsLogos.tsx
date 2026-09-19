"use client"

import { motion } from "framer-motion"
import { whatIs } from "@/content/film"
import { enterEase } from "@/lib/motion/enter"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"
import { ChapterIndicator } from "@/components/film/ChapterIndicator"

export function WhatIsLogos() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="logos" className="whatis" aria-labelledby="whatis-heading">
      <ChapterIndicator number="05" name="A marca" />
      <p className="whatis-kicker">{whatIs.kicker}</p>
      <h2 id="whatis-heading">{whatIs.headline}</h2>
      <p className="whatis-body">{whatIs.body}</p>
      <p className="whatis-stance">{whatIs.stance}</p>
      <div className="whatis-constellation">
        <ul className="whatis-words">
          {whatIs.words.map((word, index) => (
            <motion.li
              key={word}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 0.22, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={reduced ? { duration: 0 } : { duration: 0.85, delay: index * 0.14, ease: enterEase }}
            >
              {word}.
            </motion.li>
          ))}
        </ul>
        <motion.p
          className="whatis-mark"
          initial={reduced ? false : { opacity: 0, scale: 0.94, letterSpacing: "0.48em" }}
          whileInView={{ opacity: 1, scale: 1, letterSpacing: "0.28em" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.72, ease: enterEase }}
        >
          LOGOS.
        </motion.p>
      </div>
    </section>
  )
}
