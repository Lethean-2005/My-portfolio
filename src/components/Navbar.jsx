import { useState } from 'react';
import { useLanguage } from '../i18n.jsx';
import vichecal from '../assets/khmer vichecal.png';

export default function Navbar() {
  const { t } = useLanguage();

  const links = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' }
  ];

  const [active, setActive] = useState('#about');
  const [open, setOpen] = useState(false);
  const [cvState, setCvState] = useState('idle');

  const handleDownload = () => {
    if (cvState !== 'idle') return;
    setCvState('loading');
    setTimeout(() => setCvState('done'), 4000);
    setTimeout(() => setCvState('idle'), 5500);
  };

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label="Home">
          <img src="/l1.png" alt="Lethean" className="logo-img" />
        </a>

        <nav className="nav-desktop">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href ? 'active' : ''}
                  onClick={() => handleClick(l.href)}
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a
            href="/cv.pdf"
            download
            className={`btn-talk btn-delivery${cvState === 'loading' ? ' is-loading' : ''}${cvState === 'done' ? ' is-done' : ''}`}
            onClick={handleDownload}
          >
            <span className="btn-delivery-label">Download CV</span>
            <span className="btn-delivery-bike" aria-hidden="true">
              <img src={vichecal} alt="" />
              <span className="btn-delivery-dust" />
              <span className="btn-delivery-dust" />
              <span className="btn-delivery-dust" />
            </span>
            <span className="btn-delivery-done">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Delivered!
            </span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? 'bar bar-1 open' : 'bar bar-1'} />
            <span className={open ? 'bar bar-2 open' : 'bar bar-2'} />
            <span className={open ? 'bar bar-3 open' : 'bar bar-3'} />
          </button>
        </div>
      </div>

      <div className={open ? 'nav-drawer open' : 'nav-drawer'}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => handleClick(l.href)}
              >
                {t.nav[l.key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
