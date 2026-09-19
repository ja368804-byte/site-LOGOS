export const HERO_SRC = "/media/hero/landscape.png"

export function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export function waitForCriticalAssets(src: string, timeoutMs: number) {
  const fonts = document.fonts?.ready ?? Promise.resolve()

  const hero = new Promise<void>((resolve) => {
    const img = new Image()
    img.decoding = "async"
    img.onload = () => {
      if (typeof img.decode === "function") {
        img.decode().then(() => resolve()).catch(() => resolve())
        return
      }
      resolve()
    }
    img.onerror = () => resolve()
    img.src = src
  })

  const cap = wait(timeoutMs)
  return Promise.race([Promise.all([fonts, hero]).then(() => undefined), cap])
}
