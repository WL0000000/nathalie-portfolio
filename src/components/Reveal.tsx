import { useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
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
  const inView = useInView(ref, { immediate })

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties
  const classes = [
    'reveal',
    `reveal--${variant}`,
    inView ? 'reveal--visible' : '',
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
