"use client"

import { useLayoutEffect, type RefObject } from "react"
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion/gsap"
import { applyMotionMode } from "@/lib/motion/prefers"

type RailScrollOptions = {
  start?: string
  end?: string
  scrub?: number
  fade?: boolean
}

function travel(rail: HTMLElement) {
  const last = rail.lastElementChild as HTMLElement | null
  const frame = rail.parentElement?.clientWidth ?? window.innerWidth
  const end = last ? last.offsetLeft + last.offsetWidth : rail.scrollWidth
  return Math.max(0, end - frame)
}

export function useMillenniaScroll(
  wrap: RefObject<HTMLElement | null>,
  track: RefObject<HTMLElement | null>,
  enabled: boolean,
  options: RailScrollOptions = {},
) {
  const start = options.start ?? "top top"
  const end = options.end ?? "bottom bottom"
  const scrub = options.scrub ?? 0.85
  const fade = options.fade ?? false

  useLayoutEffect(() => {
    const root = wrap.current
    const rail = track.current
    if (!root || !rail || !enabled) return

    applyMotionMode()
    registerGsap()

    let ctx: ReturnType<typeof gsap.context> | undefined
    let cancelled = false

    const play = () => {
      if (cancelled) return
      ctx?.revert()
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start,
            end,
            scrub,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(rail, { x: 0 }, { x: () => -travel(rail), ease: "none" }, 0)

        if (fade) {
          const stage = rail.parentElement
          if (stage) tl.to(stage, { opacity: 0, ease: "none" }, 0.78)
        }
      }, root)
      ScrollTrigger.refresh()
    }

    play()
    document.fonts?.ready.then(() => {
      if (!cancelled) play()
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [enabled, end, fade, scrub, start, track, wrap])
}
