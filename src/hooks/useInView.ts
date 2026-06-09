import { useEffect, useState, type RefObject } from 'react'

type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
  immediate?: boolean
}

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseInViewOptions = {},
) {
  const { threshold = 0.12, rootMargin = '0px 0px 8% 0px', immediate = false } =
    options
  const [inView, setInView] = useState(immediate)

  useEffect(() => {
    if (immediate) {
      const frame = requestAnimationFrame(() => setInView(true))
      return () => cancelAnimationFrame(frame)
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [immediate, threshold, rootMargin, ref])

  return inView
}
