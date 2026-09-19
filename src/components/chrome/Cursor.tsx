"use client"

import { useEffect, useRef } from "react"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

const HOT = "a, button, summary, [role='button'], label, input, textarea, select"
const INSPECT = "img, figure, .hero-photo, .logos-media, .logos-plate"

export function Cursor() {
  const reduced = usePrefersReducedMotion()
  const node = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = node.current
    if (!el || reduced) return

    const root = document.documentElement
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)")
    if (coarse.matches) return

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let shown = false
    let frame = 0

    const draw = () => {
      x += (tx - x) * 0.28
      y += (ty - y) * 0.28
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = window.requestAnimationFrame(draw)
    }

    const onMove = (event: MouseEvent) => {
      tx = event.clientX
      ty = event.clientY

      if (!shown) {
        shown = true
        x = tx
        y = ty
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
        el.classList.add("is-on")
        root.classList.add("has-lupa")
        frame = window.requestAnimationFrame(draw)
      }

      const target = event.target
      if (!(target instanceof Element)) return
      const inspect = Boolean(target.closest(INSPECT))
      el.classList.toggle("is-inspect", inspect)
      el.classList.toggle("is-hot", inspect || Boolean(target.closest(HOT)))
    }

    const onLeave = () => {
      shown = false
      el.classList.remove("is-on", "is-hot", "is-inspect")
      root.classList.remove("has-lupa")
      window.cancelAnimationFrame(frame)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)

    return () => {
      shown = false
      root.classList.remove("has-lupa")
      window.cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <div ref={node} className="logos-lupa" aria-hidden>
      <svg className="logos-lupa__mark" viewBox="0 0 56 56" fill="none">
        <circle className="logos-lupa__glass" cx="20" cy="20" r="12" />
        <circle className="logos-lupa__rim" cx="20" cy="20" r="12" />
        <g className="logos-lupa__gleam-spin">
          <path className="logos-lupa__gleam" d="M12.4 16.2c1.6-2.8 4.4-4.7 7.6-5.2" />
        </g>
        <path className="logos-lupa__handle" d="M29 29 46.5 46.5" />
      </svg>
    </div>
  )
}
