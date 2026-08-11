import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function useLenis() {
  useEffect(() => {
    if (lenisInstance) return

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      if (lenisInstance) {
        lenisInstance.raf(time)
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // @ts-ignore
    window.lenis = lenisInstance

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy()
        lenisInstance = null
      }
    }
  }, [])
}
