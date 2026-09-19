"use client"

import { useLayoutEffect, type RefObject } from "react"
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap"

export function useSilenceScroll(wrap: RefObject<HTMLElement | null>, enabled: boolean) {
  useLayoutEffect(() => {
    const root = wrap.current
    if (!root) return

    if (!enabled) {
      root.setAttribute("data-silence-reduced", "true")
      return
    }

    root.removeAttribute("data-silence-reduced")
    registerGsap()

    const ctx = gsap.context(() => {
      const phrases = root.querySelectorAll<HTMLElement>("[data-silence]")
      gsap.set(phrases, { opacity: 0, y: 16 })
      if (phrases[0]) gsap.set(phrases[0], { opacity: 1, y: 0 })

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      })

      phrases.forEach((phrase, index) => {
        if (index === 0) return
        const prev = phrases[index - 1]
        const at = index / phrases.length
        tl.to(prev, { opacity: 0, y: -14, duration: 0.08 }, at - 0.04)
        tl.to(phrase, { opacity: 1, y: 0, duration: 0.1 }, at)
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)

    return () => ctx.revert()
  }, [enabled, wrap])
}
