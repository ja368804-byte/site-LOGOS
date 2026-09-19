"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { LogoMark } from "@/components/brand/LogoMark"
import { useOverture } from "@/components/chrome/Overture"
import { eras } from "@/content/film"
import { HERO_SRC, wait, waitForCriticalAssets } from "@/lib/motion/overture"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

const STEPS = eras.steps
const TICKS = 41

export function Preloader() {
  const reduced = usePrefersReducedMotion()
  const { reveal } = useOverture()
  const [phase, setPhase] = useState<"in" | "veil" | "out" | "gone">("in")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let cancelled = false
    let frame = 0
    let closed = false

    const duration = reduced ? 420 : 3800
    const veil = reduced ? 80 : 560
    const leave = reduced ? 240 : 1250

    const finish = async (instant: boolean) => {
      if (cancelled || closed) return
      closed = true
      window.clearTimeout(safety)
      setProgress(100)
      if (!instant) {
        setPhase("veil")
        await wait(veil)
        if (cancelled) return
      }
      reveal()
      setPhase("out")
      await wait(leave)
      if (cancelled) return
      setPhase("gone")
    }

    const safety = window.setTimeout(() => {
      void finish(true)
    }, duration + veil + leave + 1500)

    const run = async () => {
      const started = performance.now()

      const tick = (now: number) => {
        if (cancelled) return
        const t = Math.min(1, (now - started) / duration)
        const eased = reduced ? t : t * t * (3 - 2 * t)
        setProgress(Math.round(eased * 1000) / 10)
        if (t < 1) frame = window.requestAnimationFrame(tick)
      }

      frame = window.requestAnimationFrame(tick)

      try {
        await Promise.all([wait(duration), waitForCriticalAssets(HERO_SRC, duration)])
        if (cancelled) return
        setProgress(100)
        await wait(reduced ? 80 : 280)
        if (cancelled) return
        await finish(false)
      } catch {
        await finish(true)
      }
    }

    void run()

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      window.clearTimeout(safety)
    }
  }, [reduced, reveal])

  if (phase === "gone") return null

  const t = Math.min(1, Math.max(0, progress / 100))
  const current = Math.min(STEPS.length - 1, Math.floor(t * (STEPS.length - 0.001)))

  return (
    <div
      className={`preloader is-${phase}${reduced ? " is-reduced" : ""}`}
      role="progressbar"
      aria-live="polite"
      aria-label="LOGOS"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      style={{ ["--preloader-t"]: String(t) } as CSSProperties}
    >
      <div className="preloader-board">
        <p className="sr-only">
          Percurso {STEPS[current]?.title}. {Math.round(progress)}%
        </p>

        <LogoMark className="preloader-brand" sizes="(max-width: 768px) 18vw, 88px" preload />

        <div className="preloader-timeline" aria-hidden>
          <p className="preloader-timeline__kicker">{eras.kicker}</p>
          <p className="preloader-era-now">{STEPS[current]?.title}</p>

          <div className="preloader-timeline__track">
            <div className="preloader-timeline__scale">
              {Array.from({ length: TICKS }, (_, index) => (
                <span
                  key={index}
                  className={`preloader-tick${index % 5 === 0 ? " is-major" : ""}`}
                  style={{ left: `${(index / (TICKS - 1)) * 100}%` }}
                />
              ))}
            </div>

            <span className="preloader-timeline__rail" />
            <span className="preloader-timeline__thread" />
            <span className="preloader-timeline__head" />

            <ol className="preloader-eras">
              {STEPS.map((step, index) => {
                const state = index < current ? "is-passed" : index === current ? "is-current" : ""
                return (
                  <li
                    key={step.id}
                    className={`preloader-era ${state}`.trim()}
                    style={{ left: `${(index / (STEPS.length - 1)) * 100}%` }}
                  >
                    <span className="preloader-era__num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="preloader-era__title">{step.title}</span>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
