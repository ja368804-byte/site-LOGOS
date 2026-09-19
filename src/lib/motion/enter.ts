import type { Transition } from "framer-motion"

export const enterEase = [0.22, 1, 0.36, 1] as const
export const imageEase = [0.16, 1, 0.3, 1] as const

export const enterTransition = {
  image: {
    duration: 1.4,
    ease: imageEase,
    delay: 0,
  } satisfies Transition,
  wordmark: {
    duration: 0.7,
    ease: enterEase,
    delay: 0.2,
  } satisfies Transition,
  nav: {
    duration: 0.65,
    ease: enterEase,
    delay: 0.34,
  } satisfies Transition,
  original: {
    duration: 0.7,
    ease: enterEase,
    delay: 0.52,
  } satisfies Transition,
  title: {
    duration: 0.9,
    ease: enterEase,
    delay: 0.72,
  } satisfies Transition,
  slogan: {
    duration: 0.8,
    ease: enterEase,
    delay: 0.96,
  } satisfies Transition,
  meta: {
    duration: 0.9,
    ease: enterEase,
    delay: 1.08,
  } satisfies Transition,
  cta: {
    duration: 0.7,
    ease: enterEase,
    delay: 1.18,
  } satisfies Transition,
  cue: {
    duration: 0.75,
    ease: enterEase,
    delay: 1.38,
  } satisfies Transition,
  header: {
    duration: 0.7,
    ease: enterEase,
    delay: 0.2,
  } satisfies Transition,
} as const
