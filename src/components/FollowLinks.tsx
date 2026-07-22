import { followLinks } from '../data/content'

function FollowIcon({ icon }: { icon: string }) {
  if (icon === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.1 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.4 31.4 0 0 0 .5-5.1 31.4 31.4 0 0 0-.5-5.1ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h12a1 1 0 0 1 1 1v12a2 2 0 0 0 2 2H5a1 1 0 0 1-1-1V5Z" />
      <path d="M17 9h2a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2" />
      <path d="M7 8h6M7 12h6M7 16h4" />
    </svg>
  )
}

/** Full card list — used inside the Get Involved section. */
export function FollowLinks() {
  return (
    <>
      <h3 className="follow__title">Follow along &amp; in the news</h3>
      <div className="follow__links">
        {followLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`follow__card follow__card--${link.icon}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="follow__icon" aria-hidden="true">
              <FollowIcon icon={link.icon} />
            </span>
            <span className="follow__text">
              <span className="follow__label">{link.label}</span>
              <span className="follow__name">{link.title}</span>
              <span className="follow__detail">{link.detail}</span>
            </span>
            <span className="follow__arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </>
  )
}

/** Compact pills — used under the hero card. */
export function FollowLinksCompact() {
  return (
    <div className="follow-pills">
      {followLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`follow-pill follow-pill--${link.icon}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="follow-pill__icon" aria-hidden="true">
            <FollowIcon icon={link.icon} />
          </span>
          {link.icon === 'youtube' ? 'Watch on YouTube' : 'Read the news story'}
        </a>
      ))}
    </div>
  )
}
