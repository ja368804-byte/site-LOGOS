"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { originsCopy, originsMedia } from "@/content/origins"
import { usePointerParallax } from "@/lib/motion/usePointerParallax"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"
import { useOriginsScroll } from "@/components/scenes/useOriginsScroll"

const originsParallax = { imageX: 8, imageY: 6, copyX: 12, copyY: 9 }

export function Origins() {
  const reduced = usePrefersReducedMotion()
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

  const parallaxOn = !reduced && finePointer
  const { imageX, imageY, copyX, copyY, onMove, onLeave } = usePointerParallax(
    parallaxOn,
    originsParallax,
  )

  useOriginsScroll(wrap, stage, !reduced)

  return (
    <section
      ref={wrap}
      id="origens"
      className="origins"
      aria-labelledby="origins-heading"
    >
      <div
        ref={stage}
        className="origins-stage"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div data-origins="still" className="origins-still">
          <motion.div className="origins-still__live" style={{ x: imageX, y: imageY }}>
            <Image
              src={originsMedia.src}
              alt={originsMedia.alt}
              fill
              sizes="100vw"
              className="origins-photo"
            />
          </motion.div>
        </div>

        <div className="origins-overlay" aria-hidden />

        <p data-origins="chapter" className="origins-chapter">
          <span className="origins-chapter__num">{originsCopy.chapterNum}</span>
          <span className="origins-chapter__name">{originsCopy.chapter}</span>
        </p>

        <motion.div data-origins="copy" className="origins-copy" style={{ x: copyX, y: copyY }}>
          <p data-origins="original" className="origins-original">
            {originsCopy.original}
          </p>
          <p data-origins="kicker" className="origins-kicker">
            {originsCopy.chapter}
          </p>
          <h2 data-origins="headline" id="origins-heading" className="origins-headline">
            {originsCopy.headline}
          </h2>
          <p data-origins="body" className="origins-body">
            {originsCopy.body}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
