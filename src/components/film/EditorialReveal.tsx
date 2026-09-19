"use client"

import { motion } from "framer-motion"
import { enterEase } from "@/lib/motion/enter"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

type EditorialRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function EditorialReveal({
  children,
  className,
  delay = 0,
  y = 22,
}: EditorialRevealProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduced ? { duration: 0 } : { duration: 0.9, delay, ease: enterEase }}
    >
      {children}
    </motion.div>
  )
}
