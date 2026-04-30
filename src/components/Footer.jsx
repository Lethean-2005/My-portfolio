import { useState } from 'react';
import { useLanguage } from '../i18n.jsx';

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.5 5.5c-.8.4-1.7.6-2.6.7a4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.7 4.1A12.7 12.7 0 0 1 2 4.6a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 19.5a12.8 12.8 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6a9.2 9.2 0 0 0 2.3-2.3l-.5-.3z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
      <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Help Center', 'API Reference', 'Community', 'Tutorials']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies', 'Compliance']
  }
];

const SOCIALS = [
  { name: 'Twitter',  Icon: TwitterIcon,  href: '#' },
  { name: 'GitHub',   Icon: GitHubIcon,   href: '#' },
  { name: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/Lethean_Seourn' },
  { name: 'YouTube',  Icon: YouTubeIcon,  href: '#' }
];

const META_LINKS = ['Status', 'Sitemap', 'Accessibility'];

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="footer footer-playflow">
      <div className="container">
        <div className="footer-pf-grid">
          <div className="footer-pf-brand">
            <div className="footer-pf-logo">
              <span className="footer-pf-brand-name">{t.footer.brand}</span>
            </div>
            <p className="footer-pf-tagline">
              Making work feel like play. The delightfully simple platform trusted by 2,000+ teams worldwide.
            </p>
            <div className="footer-pf-socials">
              {SOCIALS.map(({ name, Icon, href }) => (
                <a key={name} href={href} className="footer-pf-social" aria-label={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title} className="footer-pf-col">
              <p className="footer-pf-col-title">{c.title}</p>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-pf-trust">
          <div className="footer-pf-badges">
            <span className="footer-pf-badge">
              <ShieldIcon /> SOC 2 Certified
            </span>
            <span className="footer-pf-badge">
              <LockIcon /> GDPR Compliant
            </span>
            <span className="footer-pf-badge">
              <span className="footer-pf-stars" aria-hidden="true">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </span>
              4.9/5 Rating
            </span>
          </div>

          <form className="footer-pf-subscribe" onSubmit={handleSubmit}>
            <input
              type="email"
              className="footer-pf-input"
              placeholder="Get product updates..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="footer-pf-btn">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-pf-bottom">
          <p className="footer-pf-copy">
            © {year} {t.footer.brand}. Made with <HeartIcon /> In Cambodia
          </p>
          <ul className="footer-pf-meta">
            {META_LINKS.map((l, i) => (
              <li key={l}>
                {i > 0 && <span className="footer-pf-meta-sep">•</span>}
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
