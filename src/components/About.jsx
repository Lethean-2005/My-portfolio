import { useEffect, useRef, useState } from 'react';
import portrait from '../assets/profile.wmCzdpqk.png';
import statsScreenshot from '../assets/screenshot-stats.png';

function CountUp({ target = 20, suffix = '+', duration = 1600 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-class">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="notchTopLeft" clipPathUnits="objectBoundingBox">
            <path d="M0.3,0 H0.93 A0.07,0.07 0 0 1 1,0.07 V0.85 A0.07,0.07 0 0 1 0.93,1 H0.07 A0.07,0.07 0 0 1 0,0.85 V0.55 A0.05,0.05 0 0 1 0.05,0.5 H0.2 A0.05,0.05 0 0 0 0.25,0.45 V0.05 A0.05,0.05 0 0 1 0.3,0 Z" />
          </clipPath>
          <filter id="morphGoo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <main className="hero-card">
        <div className="yellow-bg" aria-hidden="true">
          <svg viewBox="0 0 1180 380" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="yellowGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1180" y2="380">
                <stop offset="0" stopColor="#ff8a3d" />
                <stop offset="0.55" stopColor="#ff5722" />
                <stop offset="1" stopColor="#b32f0a" />
              </linearGradient>
              <radialGradient id="yellowGlow1" cx="30%" cy="60%" r="50%">
                <stop offset="0" stopColor="#ff8a3d" stopOpacity="0.8" />
                <stop offset="1" stopColor="#ff8a3d" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="yellowGlow2" cx="75%" cy="35%" r="55%">
                <stop offset="0" stopColor="#ff5722" stopOpacity="0.55" />
                <stop offset="1" stopColor="#ff5722" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              fill="url(#yellowGrad)"
              d="M 0,260 C 0,230 30,220 80,215 C 220,200 380,180 560,160 L 1060,40 C 1130,30 1180,55 1180,110 V 330 C 1180,365 1160,380 1110,380 H 70 C 25,380 0,365 0,330 V 260 Z"
            />
            <path
              fill="url(#yellowGlow1)"
              d="M 0,260 C 0,230 30,220 80,215 C 220,200 380,180 560,160 L 1060,40 C 1130,30 1180,55 1180,110 V 330 C 1180,365 1160,380 1110,380 H 70 C 25,380 0,365 0,330 V 260 Z"
            />
            <path
              fill="url(#yellowGlow2)"
              d="M 0,260 C 0,230 30,220 80,215 C 220,200 380,180 560,160 L 1060,40 C 1130,30 1180,55 1180,110 V 330 C 1180,365 1160,380 1110,380 H 70 C 25,380 0,365 0,330 V 260 Z"
            />
          </svg>
        </div>

        <section className="class-hero">
          <div className="class-left">
            <div className="class-eyebrow">My Information</div>
            <h1 className="class-headline">
              Hi, I'M Lethean Seourn
            </h1>
            <p className="class-desc">
              I am a Full-Stack Developer focused on building high-performance web
              applications and automation tools. With a strong foundation in React,
              Angular, and Node.js, I bridge the gap between complex backend
              architecture and clean, minimalist user interfaces. Whether I am
              architecting PostgreSQL databases, developing innovative Telegram bots,
              or streamlining systems through modern UI layouts, my goal is to
              deliver scalable solutions that are both technically powerful and
              elegantly designed.
            </p>

            <div className="morph-card">
              <div className="morph-blob morph-blob-1" />
              <div className="morph-blob morph-blob-2" />
              <div className="morph-blob morph-blob-3" />
              <div className="morph-content">
                <div className="morph-count"><CountUp target={20} suffix="+" /></div>
                <div className="morph-label">
                  <span>Project</span>
                  <span>Complete</span>
                </div>
              </div>
            </div>
          </div>

          <div className="class-right">
            <div className="class-circle-text">
              <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="ringPath" d="M 220,220 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
                </defs>
                <text>
                  <textPath href="#ringPath" startOffset="0">
                    JOIN OUR BOOTCAMP • HELPS YOU GAIN SKILLS RELEVANT FOR JOBS • OVER 1000 STUDENTS •
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="class-photo">
              <img src={portrait} alt="Portrait" loading="lazy" />
            </div>

            <aside className="class-stats class-stats-image">
              <img src={statsScreenshot} alt="Stats" />
            </aside>
          </div>
        </section>

        <div className="class-brands">
          <div className="class-brands-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="class-brands-row" aria-hidden={dup === 1 ? 'true' : undefined}>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/jira/ffffff" alt="" aria-hidden="true" />
                  <span>Jira</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/git/ffffff" alt="" aria-hidden="true" />
                  <span>Git</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/github/ffffff" alt="" aria-hidden="true" />
                  <span>GitHub</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/gitlab/ffffff" alt="" aria-hidden="true" />
                  <span>GitLab</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/docker/ffffff" alt="" aria-hidden="true" />
                  <span>Docker</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/figma/ffffff" alt="" aria-hidden="true" />
                  <span>Figma</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/postman/ffffff" alt="" aria-hidden="true" />
                  <span>Postman</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/swagger/ffffff" alt="" aria-hidden="true" />
                  <span>Swagger</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/postgresql/ffffff" alt="" aria-hidden="true" />
                  <span>PostgreSQL</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/mysql/ffffff" alt="" aria-hidden="true" />
                  <span>MySQL</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/sqlite/ffffff" alt="" aria-hidden="true" />
                  <span>SQLite</span>
                </div>
                <div className="class-brand">
                  <img src="https://cdn.simpleicons.org/stackoverflow/ffffff" alt="" aria-hidden="true" />
                  <span>Stack Overflow</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
