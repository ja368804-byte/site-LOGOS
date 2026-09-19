"use client"

import { motion } from "framer-motion"
import { useOverture } from "@/components/chrome/Overture"
import { heroCopy } from "@/content/hero"
import { enterEase } from "@/lib/motion/enter"

type HeroTypeProps = {
  reduced: boolean
}

export function HeroType({ reduced }: HeroTypeProps) {
  const { revealed, skipped } = useOverture()
  const show = revealed
  const instant = reduced || skipped
  const rise = reduced ? 0 : 16

  return (
    <div data-hero="copy" className="hero-copy">
      <motion.p
        className="hero-kicker"
        initial={false}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: rise }}
        transition={instant ? { duration: 0 } : { duration: 0.7, ease: enterEase, delay: 0.72 }}
      >
        {heroCopy.lineage}
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={false}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 22 }}
        transition={instant ? { duration: 0 } : { duration: 0.9, ease: enterEase, delay: 0.88 }}
      >
        {heroCopy.titleLines.map((line) => (
          <span key={line} className="hero-title__line">
            {line}
          </span>
        ))}
      </motion.h1>

      <motion.p
        className="hero-lede"
        initial={false}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: rise }}
        transition={instant ? { duration: 0 } : { duration: 0.8, ease: enterEase, delay: 0.94 }}
      >
        {heroCopy.lede}
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={false}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 12 }}
        transition={instant ? { duration: 0 } : { duration: 0.7, ease: enterEase, delay: 1.08 }}
      >
        <a className="hero-action" href={heroCopy.ctaHref}>
          {heroCopy.ctaPrimary}
        </a>
      </motion.div>
    </div>
  )
}
