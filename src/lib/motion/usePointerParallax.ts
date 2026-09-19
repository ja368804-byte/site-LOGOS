"use client"

import { useCallback } from "react"
import { useSpring, type MotionValue } from "framer-motion"

type Parallax = {
  imageX: MotionValue<number>
  imageY: MotionValue<number>
  copyX: MotionValue<number>
  copyY: MotionValue<number>
  onMove: (event: React.MouseEvent<HTMLElement>) => void
  onLeave: () => void
}

type ParallaxAmount = {
  imageX?: number
  imageY?: number
  copyX?: number
  copyY?: number
}

const imageSpring = { stiffness: 32, damping: 28, mass: 1.1 }
const copySpring = { stiffness: 40, damping: 32, mass: 1 }
const defaultAmount = { imageX: 8, imageY: 6, copyX: 2, copyY: 2 }

export function usePointerParallax(enabled: boolean, amount: ParallaxAmount = {}): Parallax {
  const imageRange = amount.imageX ?? defaultAmount.imageX
  const imageYRange = amount.imageY ?? defaultAmount.imageY
  const copyRange = amount.copyX ?? defaultAmount.copyX
  const copyYRange = amount.copyY ?? defaultAmount.copyY
  const imageX = useSpring(0, imageSpring)
  const imageY = useSpring(0, imageSpring)
  const copyX = useSpring(0, copySpring)
  const copyY = useSpring(0, copySpring)

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!enabled) return
      const rect = event.currentTarget.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      imageX.set(px * imageRange)
      imageY.set(py * imageYRange)
      copyX.set(px * copyRange)
      copyY.set(py * copyYRange)
    },
    [copyRange, copyX, copyY, copyYRange, enabled, imageRange, imageX, imageY, imageYRange],
  )

  const onLeave = useCallback(() => {
    imageX.set(0)
    imageY.set(0)
    copyX.set(0)
    copyY.set(0)
  }, [copyX, copyY, imageX, imageY])

  return { imageX, imageY, copyX, copyY, onMove, onLeave }
}
