import { footer, navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="header__brand-mark">NW</span>
          <div className="footer__campaign">
            {footer.lines.map((line) => (
              <p key={line} className="footer__campaign-line">
                {line}
              </p>
            ))}
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

        <p className="footer__copy">{footer.authorization}</p>
      </div>
    </footer>
  )
}
