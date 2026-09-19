"use client"

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react"

type OvertureValue = {
  playing: boolean
  revealed: boolean
  skipped: boolean
  reveal: () => void
}

const OvertureContext = createContext<OvertureValue | null>(null)

export function OvertureProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(true)
  const [revealed, setRevealed] = useState(false)

  useLayoutEffect(() => {
    document.documentElement.classList.add("is-preloading")
    document.documentElement.classList.remove("is-revealed")
  }, [])

  const reveal = useCallback(() => {
    const root = document.documentElement
    const cinematic = root.classList.contains("has-cinematic")
    root.classList.add("is-revealed")
    root.classList.remove("is-preloading")
    setRevealed(true)
    setPlaying(false)

    window.setTimeout(() => {
      root.classList.add("is-settled")
      const hash = window.location.hash
      if (!hash) return
      document.querySelector(hash)?.scrollIntoView({ behavior: "auto", block: "start" })
    }, cinematic ? 1280 : 240)
  }, [])

  const value = useMemo(
    () => ({ playing, revealed, skipped: false, reveal }),
    [playing, revealed, reveal],
  )

  return <OvertureContext.Provider value={value}>{children}</OvertureContext.Provider>
}

export function useOverture() {
  const context = useContext(OvertureContext)
  if (!context) {
    return {
      playing: false,
      revealed: true,
      skipped: true,
      reveal: () => undefined,
    }
  }
  return context
}
