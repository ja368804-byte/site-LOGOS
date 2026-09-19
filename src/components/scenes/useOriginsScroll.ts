"use client"

import { useLayoutEffect, type RefObject } from "react"
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap"
import { applyMotionMode } from "@/lib/motion/prefers"

export function useOriginsScroll(
  wrapper: RefObject<HTMLElement | null>,
  stage: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useLayoutEffect(() => {
    const wrap = wrapper.current
    const root = stage.current
    if (!wrap || !root) return

    applyMotionMode()

    if (!enabled) {
      root.setAttribute("data-origins-reduced", "true")
      return
    }

    root.removeAttribute("data-origins-reduced")
    registerGsap()

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root)
      const still = q('[data-origins="still"]')
      const original = q('[data-origins="original"]')
      const kicker = q('[data-origins="kicker"]')
      const headline = q('[data-origins="headline"]')
      const body = q('[data-origins="body"]')
      const chapter = q('[data-origins="chapter"]')
      const copy = q('[data-origins="copy"]')

      gsap.set(still, { opacity: 0, scale: 1.08, yPercent: 2, force3D: true })
      gsap.set(original, { opacity: 0, y: 20 })
      gsap.set(kicker, { opacity: 0, y: 20 })
      gsap.set(headline, { opacity: 0, y: 30 })
      gsap.set(body, { opacity: 0, y: 15 })
      gsap.set(chapter, { opacity: 0, y: 10 })
      gsap.set(copy, { y: 22 })

      const cine = "power1.inOut"

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.05,
        },
      })

      tl.to(still, { opacity: 1, scale: 1, yPercent: 0, duration: 0.2, ease: cine }, 0)
        .to(chapter, { opacity: 1, y: 0, duration: 0.12, ease: cine }, 0.08)
        .to(original, { opacity: 1, y: 0, duration: 0.1, ease: cine }, 0.12)
        .to(kicker, { opacity: 1, y: 0, duration: 0.12, ease: cine }, 0.18)
        .to(headline, { opacity: 1, y: 0, duration: 0.16, ease: cine }, 0.26)
        .to(body, { opacity: 1, y: 0, duration: 0.14, ease: cine }, 0.36)
        .to(copy, { y: 0, duration: 0.3, ease: cine }, 0.12)
        .to({}, { duration: 0.2 }, 0.5)
        .to(original, { opacity: 0, y: -12, duration: 0.1, ease: "power1.in" }, 0.7)
        .to(kicker, { opacity: 0, y: -16, duration: 0.1, ease: "power1.in" }, 0.72)
        .to(body, { opacity: 0, y: -14, duration: 0.1, ease: "power1.in" }, 0.74)
        .to(headline, { opacity: 0, y: -20, duration: 0.12, ease: "power1.in" }, 0.76)
        .to(copy, { y: -12, duration: 0.14, ease: "power1.in" }, 0.72)
        .to(chapter, { opacity: 0, y: -8, duration: 0.1, ease: "power1.in" }, 0.78)
        .to(still, { scale: 1.04, opacity: 0.5, yPercent: -1.2, duration: 0.22, ease: cine }, 0.78)

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)

    return () => ctx.revert()
  }, [enabled, stage, wrapper])
}
