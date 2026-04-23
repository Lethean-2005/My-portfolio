import profile from '../assets/unnamed.jpg';
import { useLanguage } from '../i18n.jsx';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h3 className="hero-title">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h3>
          <p className="hero-desc">{t.hero.desc}</p>

          <a href="#cv" className="btn-primary">
            {t.hero.cv}
          </a>

          <div className="hero-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 11.01-4.14 2.07 2.07 0 01-.01 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.67 5.58.67 11.86c0 5.02 3.23 9.28 7.72 10.78.56.1.77-.24.77-.54v-2.1c-3.14.69-3.8-1.32-3.8-1.32-.52-1.31-1.27-1.66-1.27-1.66-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.19 1.75 1.19 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.5-.28-5.13-1.26-5.13-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.14 1.17a10.8 10.8 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.64 5.31-5.15 5.59.41.36.78 1.06.78 2.14v3.17c0 .3.21.65.78.54 4.49-1.5 7.72-5.75 7.72-10.78C23.33 5.58 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Lethean portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
