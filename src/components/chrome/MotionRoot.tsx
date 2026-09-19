"use client"

import { useLayoutEffect, type ReactNode } from "react"
import { MotionConfig } from "framer-motion"
import { OvertureProvider } from "@/components/chrome/Overture"
import { Cursor } from "@/components/chrome/Cursor"
import { applyMotionMode } from "@/lib/motion/prefers"

export function MotionRoot({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    applyMotionMode()
  }, [])

  return (
    <MotionConfig reducedMotion="never">
      <OvertureProvider>
        {children}
        <Cursor />
      </OvertureProvider>
    </MotionConfig>
  )
}
