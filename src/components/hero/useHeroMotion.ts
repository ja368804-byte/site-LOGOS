"use client"

import { useEffect, useState, type MouseEvent, type RefObject } from "react"
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

const pointerSpring = { stiffness: 38, damping: 24, mass: 1.2 }

export function useHeroMotion(target: RefObject<HTMLElement | null>, reduced: boolean) {
  const [finePointer, setFinePointer] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setFinePointer(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [1, 1, 1.06, 1.06])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 16])
  const dim = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [0, 0.1, 0.4, 0.68])

  const originalOpacity = useTransform(scrollYProgress, [0, 0.1, 0.26], [1, 0.35, 0])
  const metaOpacity = useTransform(scrollYProgress, [0, 0.12, 0.32], [1, 0.4, 0])
  const metaX = useTransform(scrollYProgress, [0, 0.32], [0, -10])
  const actionsOpacity = useTransform(scrollYProgress, [0, 0.16, 0.36], [1, 0.3, 0])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06, 0.16], [1, 0.35, 0])

  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.7, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.25, 0.55], [0, -15, -40])

  const sloganOpacity = useTransform(scrollYProgress, [0, 0.28, 0.52], [1, 0.82, 0])
  const sloganY = useTransform(scrollYProgress, [0, 0.5], [0, -22])

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const imagePointerX = useSpring(pointerX, pointerSpring)
  const imagePointerY = useSpring(pointerY, pointerSpring)
  const copyPointerX = useTransform(imagePointerX, (value) => value * 0.25)
  const copyPointerY = useTransform(imagePointerY, (value) => value * 0.28)

  const pointerEnabled = finePointer && !reduced

  function onPointerMove(event: MouseEvent<HTMLElement>) {
    if (!pointerEnabled) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 8)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 6)
  }

  function onPointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return {
    reduced,
    imageScale,
    imageY,
    dim,
    originalOpacity,
    metaOpacity,
    metaX,
    actionsOpacity,
    cueOpacity,
    titleOpacity,
    titleY,
    sloganOpacity,
    sloganY,
    imagePointerX,
    imagePointerY,
    copyPointerX,
    copyPointerY,
    onPointerMove,
    onPointerLeave,
  }
}

export type HeroMotion = ReturnType<typeof useHeroMotion>
