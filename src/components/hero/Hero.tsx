"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { HeroType } from "@/components/hero/HeroType"
import { useOverture } from "@/components/chrome/Overture"
import { useHeroScroll } from "@/components/hero/useHeroScroll"
import { heroMedia } from "@/content/hero"
import { imageEase } from "@/lib/motion/enter"
import { usePointerParallax } from "@/lib/motion/usePointerParallax"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const { revealed } = useOverture()
  const wrap = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [finePointer, setFinePointer] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    const update = () => setFinePointer(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useHeroScroll(wrap, stage, !reduced && revealed)

  const parallaxOn = !reduced && finePointer
  const { imageX, imageY, onMove, onLeave } = usePointerParallax(parallaxOn)

  return (
    <section ref={wrap} id="hero" className="hero" aria-label="Abertura LOGOS">
      <div ref={stage} className="hero-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
        <div data-hero="still" className="hero-still">
          <motion.div
            className="hero-still__live"
            style={{ x: imageX, y: imageY }}
            initial={{ opacity: 1, scale: reduced ? 1 : 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 2.2, ease: imageEase }}
          >
            <Image
              src={heroMedia.archive.src}
              alt={heroMedia.archive.alt}
              fill
              sizes="100vw"
              fetchPriority="high"
              className="hero-photo"
            />
          </motion.div>
        </div>

        <div className="hero-overlay" aria-hidden />
        <div data-hero="dim" className="hero-dim" aria-hidden />
        <HeroType reduced={reduced} />
        <span data-hero="cue" className="hero-cue" aria-hidden />
      </div>
    </section>
  )
}
