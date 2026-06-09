import { useEffect, useState, type RefObject } from 'react'

type UseScrollRevealOptions = {
  delay?: number
  disabled?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { delay = 0, disabled = false }: UseScrollRevealOptions = {},
) {
  const [progress, setProgress] = useState(disabled ? 1 : 0)

  useEffect(() => {
    if (disabled) {
      setProgress(1)
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setProgress(1)
      return
    }

    let ticking = false

    const update = () => {
      const element = ref.current
      if (!element) {
        ticking = false
        return
      }

      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      const stagger = delay * 0.2
      const start = viewport * 1.2 + stagger
      const end = viewport * 0.12
      const range = start - end
      const next =
        range <= 0 ? 1 : Math.min(1, Math.max(0, (start - rect.top) / range))

      setProgress(next)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [delay, disabled, ref])

  return progress
}
