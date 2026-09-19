"use client"

import { useLayoutEffect, type RefObject } from "react"
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap"

export function useHeroScroll(
  wrapper: RefObject<HTMLElement | null>,
  stage: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useLayoutEffect(() => {
    const wrap = wrapper.current
    const root = stage.current
    if (!wrap || !root) return

    if (!enabled) {
      root.setAttribute("data-hero-reduced", "true")
      return
    }

    root.removeAttribute("data-hero-reduced")
    registerGsap()

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root)
      const still = q('[data-hero="still"]')
      const dim = q('[data-hero="dim"]')
      const copy = q('[data-hero="copy"]')
      const cue = q('[data-hero="cue"]')

      gsap.set(still, { scale: 1, transformOrigin: "68% 52%" })
      gsap.set(dim, { opacity: 0 })
      gsap.set(copy, { y: 0, scale: 1, opacity: 1, transformOrigin: "50% 48%" })
      gsap.set(cue, { opacity: 1, y: 0 })

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
        },
      })

      tl.to(cue, { opacity: 0, y: 16, duration: 0.12 }, 0)
        .to(
          copy,
          {
            y: -72,
            scale: 1.14,
            opacity: 0,
            duration: 0.52,
          },
          0,
        )
        .to(still, { scale: 1.22, duration: 1 }, 0)
        .to(dim, { opacity: 0.42, duration: 0.55 }, 0.18)
        .to(dim, { opacity: 0.72, duration: 0.28 }, 0.72)

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)

    return () => ctx.revert()
  }, [enabled, stage, wrapper])
}
