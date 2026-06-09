type BackdropVariant = 'hero' | 'muted' | 'work' | 'contact'

type SectionBackdropProps = {
  variant: BackdropVariant
}

export function SectionBackdrop({ variant }: SectionBackdropProps) {
  return (
    <div
      className={`section-backdrop section-backdrop--${variant}`}
      aria-hidden="true"
    >
      <span className="backdrop-orb backdrop-orb--1" />
      <span className="backdrop-orb backdrop-orb--2" />
      {variant !== 'work' && <span className="backdrop-orb backdrop-orb--3" />}
      {(variant === 'muted' || variant === 'work') && (
        <span className="backdrop-grid" />
      )}
    </div>
  )
}
