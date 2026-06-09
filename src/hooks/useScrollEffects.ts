import { useEffect } from 'react'

export function useScrollEffects() {
  useEffect(() => {
    let ticking = false

    const update = () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}`,
      )
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
