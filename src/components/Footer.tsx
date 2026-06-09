import { navLinks, site } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="header__brand-mark">NW</span>
          <div>
            <p className="footer__name">{site.name}</p>
            <p className="footer__role">{site.title}</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copy">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
