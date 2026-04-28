import { useLanguage } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer footer-nexiron">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              <span className="footer-brand-name">{t.footer.brand}</span>
            </div>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-links">
            {t.footer.sections.map((s) => (
              <div key={s.title} className="footer-col">
                <p className="footer-col-title">{s.title}</p>
                <ul>
                  {s.links.map((l) => (
                    <li key={l}>
                      <a href="#">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {t.footer.brand}. {t.footer.copy}</p>
          <div className="footer-legal">
            <a href="#">{t.footer.terms}</a>
            <a href="#">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
