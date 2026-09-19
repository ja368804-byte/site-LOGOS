export function prefersReducedMotion() {
  if (typeof window === "undefined") return false

  const forced = new URLSearchParams(window.location.search).get("motion")
  if (forced === "1") return false
  if (forced === "0") return true

  return false
}

export function applyMotionMode() {
  if (typeof document === "undefined") return prefersReducedMotion()
  const reduced = prefersReducedMotion()
  document.documentElement.classList.toggle("motion-reduced", reduced)
  document.documentElement.classList.toggle("has-cinematic", !reduced)
  return reduced
}
