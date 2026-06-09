import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  as?: ElementType
  immediate?: boolean
}

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [scrollLinked, setScrollLinked] = useState(false)
  const inView = useInView(ref, {
    immediate,
    rootMargin: '0px 0px 50% 0px',
    threshold: 0,
  })

  useEffect(() => {
    setScrollLinked(CSS.supports('animation-timeline: view()'))
  }, [])

  const rangeShift = delay * 0.07
  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-start': `${-55 + rangeShift}%`,
    '--reveal-end': `${60 + rangeShift}%`,
  } as CSSProperties

  const useObserver = immediate || !scrollLinked
  const classes = [
    'reveal',
    `reveal--${variant}`,
    immediate ? 'reveal--immediate' : 'reveal--scroll',
    useObserver && inView ? 'reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}
