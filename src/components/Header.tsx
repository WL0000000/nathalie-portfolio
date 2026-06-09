import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__brand" onClick={closeMenu}>
          <span className="header__brand-mark">NW</span>
          <span className="header__brand-text">{site.name}</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary header__cta" onClick={closeMenu}>
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
