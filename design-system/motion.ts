/**
 * LOGOS motion tokens
 * Use with Framer Motion / GSAP. Do not invent durations in components.
 */
export const logosEase = {
  museum: [0.22, 1, 0.36, 1] as const,
  enter: [0.16, 1, 0.3, 1] as const,
  exit: [0.55, 0, 1, 0.45] as const,
  linear: "linear" as const,
  css: {
    museum: "cubic-bezier(0.22, 1, 0.36, 1)",
    enter: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.55, 0, 1, 0.45)",
  },
}

export const logosDuration = {
  tactile: 0.18,
  editorial: 0.7,
  scene: 1.1,
  ritual: 1.6,
  ms: {
    tactile: 180,
    editorial: 700,
    scene: 1100,
    ritual: 1600,
  },
}

export const logosScroll = {
  lerp: 0.075,
  heroPin: 1.5,
  insightPin: 2.5,
  palimpsestPin: 2.0,
  parallax: {
    far: 0.2,
    mid: 0.45,
    near: 0.75,
    type: 0.12,
  },
}

export const logosField = {
  noite: "#0a0908",
  osso: "#e8e0d2",
} as const
