import { useEffect, useMemo, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { useLanguage } from '../i18n.jsx';

import anim1 from '../assets/animation1.mov';
import anim2 from '../assets/animation2.mp4';
import anim3 from '../assets/animation3.mp4';
import anim5 from '../assets/animation5.mp4';
import anim6 from '../assets/animation16.mp4';

const CAROUSEL = [
  { title: 'JavaScript', src: anim1, type: 'video' },
  { title: 'TypeScript', src: anim2, type: 'video' },
  { title: 'Python',     src: anim3, type: 'video' },
  { title: 'Go',         src: anim5, type: 'video' },
  { title: 'Rust',       src: anim6, type: 'video' },
  { title: 'Java',       src: anim1, type: 'video' },
  { title: 'C#',         src: anim2, type: 'video' },
  { title: 'PHP',        src: anim3, type: 'video' },
  { title: 'Ruby',       src: anim5, type: 'video' },
  { title: 'Swift',      src: anim6, type: 'video' },
  { title: 'Kotlin',     src: anim1, type: 'video' },
  { title: 'C++',        src: anim2, type: 'video' }
];

const CARD_WIDTH = 160;
const CARD_HEIGHT = 100;

function Carousel3D() {
  const count = CAROUSEL.length;
  const radius = useMemo(
    () => Math.round(CARD_WIDTH / 2 / Math.tan(Math.PI / count)),
    [count]
  );

  return (
    <div className="hero-3d-scene" aria-hidden="true">
      <div className="hero-3d-ring">
        {CAROUSEL.map((c, i) => (
          <div
            key={c.title}
            className="hero-3d-slot"
            style={{
              width: `${CARD_WIDTH}px`,
              height: `${CARD_HEIGHT}px`,
              marginLeft: `${-CARD_WIDTH / 2}px`,
              marginTop: `${-CARD_HEIGHT / 2}px`,
              transform: `rotateY(${i * (360 / count)}deg) translateZ(${radius}px)`
            }}
          >
            <div className="hero-3d-card">
              {c.type === 'video' ? (
                <video
                  className="hero-3d-card-media"
                  src={c.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img className="hero-3d-card-media" src={c.src} alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    animate(root.querySelectorAll('.hero-anim'), {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      delay: stagger(120, { start: 100 }),
      ease: 'out(3)'
    });
  }, []);

  return (
    <section id="home" className="hero hero-nolana" ref={rootRef}>
      <div className="container hero-nolana-grid">
        <div className="hero-nolana-left">
          <div className="creators-pill hero-anim">
            <div className="creators-avatars" aria-hidden="true">
              <span className="ca a1" />
              <span className="ca a2" />
              <span className="ca a3" />
            </div>
            <span className="creators-text">{t.hero.creators}</span>
          </div>

          <h1 className="hero-title hero-title-nolana hero-anim">
            <span className="title-accent">{t.hero.title1}</span> {t.hero.titleSuffix}
            <br />
            {t.hero.titleLine2}
          </h1>

          <p className="hero-desc hero-desc-mono hero-anim" style={{ whiteSpace: 'pre-line' }}>
            {t.hero.desc}
          </p>

          <div className="hero-ctas-nolana hero-anim">
            <a href="#contact" className="btn-demo">
              {t.hero.bookDemo}
              <span className="btn-demo-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn-contact-pill">
              {t.hero.contactUs}
              <span className="btn-contact-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-nolana-right">
          <Carousel3D />
        </div>
      </div>
    </section>
  );
}
