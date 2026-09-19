"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LogoMark } from "@/components/brand/LogoMark"
import { useOverture } from "@/components/chrome/Overture"
import { enterEase } from "@/lib/motion/enter"
import { usePrefersReducedMotion } from "@/lib/motion/usePrefersReducedMotion"

export function Nav() {
  const reduced = usePrefersReducedMotion()
  const { revealed, skipped } = useOverture()
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const instant = reduced || skipped
  const show = revealed

  return (
    <header className="logos-nav">
      <motion.a
        href="#hero"
        className="logos-wordmark"
        aria-label="LOGOS"
        initial={false}
        animate={
          show
            ? { opacity: 1, y: 0, scale: reduced || !compact ? 1 : 0.92 }
            : { opacity: 0, y: reduced ? 0 : -8, scale: 1 }
        }
        transition={
          instant
            ? { duration: 0 }
            : {
                opacity: { duration: 0.72, ease: enterEase, delay: 0.92 },
                y: { duration: 0.72, ease: enterEase, delay: 0.92 },
                scale: { duration: 0.48, ease: enterEase },
              }
        }
      >
        <LogoMark sizes="(max-width: 767px) 88px, 116px" preload />
      </motion.a>
      <motion.nav
        className="logos-nav__links"
        aria-label="Principal"
        initial={false}
        animate={
          show
            ? { opacity: 1, y: reduced ? 0 : 0 }
            : { opacity: 0, y: reduced ? 0 : -8 }
        }
        transition={
          instant
            ? { duration: 0 }
            : { duration: 0.65, ease: enterEase, delay: 1.02 }
        }
      >
        <a href="#temporada">Temporada</a>
        <a href="#oferta">Entrar na Logos</a>
      </motion.nav>
    </header>
  )
}
