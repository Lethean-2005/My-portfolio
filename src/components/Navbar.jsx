import { useState } from 'react';
import logoGif from '../assets/logogif.gif';
import { useLanguage } from '../i18n.jsx';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();

  const links = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' }
  ];

  const [active, setActive] = useState('#about');
  const [open, setOpen] = useState(false);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  const toggleLang = () => setLang(lang === 'en' ? 'km' : 'en');

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label="Home">
          <img src={logoGif} alt="Lethean" />
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
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
            title={lang === 'en' ? 'Switch to Khmer' : 'Switch to English'}
          >
            {lang === 'en' ? 'ខ្មែរ' : 'EN'}
          </button>
          <a href="#contact" className="btn-talk">
            {t.nav.talk}
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
