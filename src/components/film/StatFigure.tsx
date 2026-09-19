"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { enterEase } from "@/lib/motion/enter"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

type StatFigureProps = {
  value: number | string
  label: string
  pad?: number
  conceptual?: boolean
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function formatValue(value: number, pad: number) {
  return String(value).padStart(pad, "0")
}

export function StatFigure({ value, label, pad = 2, conceptual = false, className }: StatFigureProps) {
  const reduced = usePrefersReducedMotion()
  const numeric = typeof value === "number"
  const target = numeric ? value : 0
  const [count, setCount] = useState(reduced || !numeric ? target : 0)
  const started = useRef(reduced || !numeric)

  const playCount = () => {
    if (started.current || reduced || !numeric) return
    started.current = true
    const start = performance.now()
    const duration = 1200
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setCount(Math.round(easeOutCubic(t) * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  const display = conceptual || !numeric ? String(value) : formatValue(count, pad)

  return (
    <motion.div
      className={className ?? "stat-figure"}
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={playCount}
      transition={reduced ? { duration: 0 } : { duration: 0.9, ease: enterEase }}
      style={{ transformOrigin: "left bottom" }}
    >
      <p className="stat-figure__value" aria-label={`${display} ${label}`}>
        {display}
      </p>
      <p className="stat-figure__label">{label}</p>
    </motion.div>
  )
}
