"use client"

import { motion } from "framer-motion"
import { enterTransition } from "@/lib/motion/enter"

type HeroCueProps = {
  reduced: boolean
}

export function HeroCue({ reduced }: HeroCueProps) {
  return (
    <motion.p
      data-hero="cue"
      className="hero-cue"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduced ? { duration: 0 } : enterTransition.cue}
    >
      <span className="hero-cue__label">Explore</span>
      <span className="hero-cue__line" aria-hidden />
    </motion.p>
  )
}
