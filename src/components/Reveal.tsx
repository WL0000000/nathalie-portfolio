import { useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { useScrollReveal } from '../hooks/useScrollReveal'

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
  const inView = useInView(ref, { immediate })
  const progress = useScrollReveal(ref, { delay, disabled: immediate })

  const style: CSSProperties = immediate
    ? { ['--reveal-delay' as string]: `${delay}ms` }
    : { ['--reveal-progress' as string]: progress }

  const classes = [
    'reveal',
    `reveal--${variant}`,
    immediate ? 'reveal--immediate' : 'reveal--scroll',
    immediate && inView ? 'reveal--visible' : '',
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
