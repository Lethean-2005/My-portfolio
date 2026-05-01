import { useEffect, useRef, useState } from 'react';
import portrait from '../assets/profile.wmCzdpqk.png';
import statsScreenshot from '../assets/screenshot-stats.png';
import khmerPattern1 from '../assets/khmer pathern1.jpg';

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

function CloudIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <g fill="#75d6ff">
        <path d="M10.8 42.9c-.5 1.5-.1 3 1 3.4c1.1.4 2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5" />
        <path d="M13.2 57.4c.6-1.8.7-4.1.2-6.9c-2.1 1.8-3.6 3.7-4.2 5.5c-.5 1.5-.1 3 1 3.4c1.1.4 2.5-.5 3-2" />
        <path d="M51.5 37.4c-2.1 1.8-3.6 3.7-4.2 5.5c-.5 1.5-.1 3 1 3.4c1.1.4 2.4-.5 3-2c.5-1.7.6-4.1.2-6.9" />
        <path d="M38.2 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2 1.9-3.5 3.8-4.2 5.5" />
        <path d="M46.9 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5" />
        <path d="M18.6 55.9c-.5 1.5-.1 3 1 3.4s2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5" />
      </g>
      <path
        d="M24.5 31.9l-4.9 16.2h12.5L27.9 62l16.5-20.2H32.5l2.9-9.9z"
        fill="#ffce31"
      />
      <path
        fill="#ffffff"
        d="M18.2 32.5c-.8 0-1.6-.1-2.4-.4c-3.1-1-5.3-3.9-5.3-7.2c0-2.2 1-4.3 2.6-5.7c.4-.4.9-.7 1.4-1l.5-1.8c1.3-4.4 5.4-7.5 10-7.5c.5 0 .9 0 1.5.1c.4.1.8.1 1.2.3l.2-.4c1.9-3.3 5.4-5.4 9.2-5.4C43 3.5 47.7 8.2 47.7 14v1c.4.2.9.4 1.3.6c2.8 1.6 4.5 4.6 4.5 7.8c0 4.2-2.9 7.8-7 8.8c-.7.2-1.4.2-2 .2H18.2z"
      />
      <path
        fill="#b6c1d1"
        d="M37.1 5c5 0 9 4 9 8.9v.7c-2.1.2-4 1-5.4 2.3c1.1-.6 2.4-1 3.7-1c.5 0 1 .1 1.5.1c.8.2 1.6.5 2.3.9c2.3 1.3 3.8 3.7 3.8 6.5c0 3.6-2.5 6.5-5.8 7.3c-.7.2-1.2.3-1.8.3H18.2c-.7 0-1.3-.1-1.9-.3c-2.4-.8-4.2-3.1-4.2-5.8c0-1.8.8-3.5 2.1-4.6c.6-.5 1.3-.9 2-1.2c.6-.2 1.3-.3 2-.3c2 0 3.7.9 4.9 2.4h.1c-1.3-2.4-3.7-4.1-6.6-4.3c1.1-3.7 4.5-6.4 8.5-6.4c.4 0 .9 0 1.3.1c.8.1 1.6.3 2.3.7c2.7 1.2 4.7 3.7 5.1 6.8V18c0-3.4-1.8-6.5-4.5-8.3C30.8 6.9 33.8 5 37.1 5"
      />
    </svg>
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
        </defs>
      </svg>

      <main className="hero-card">
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

            <div className="weather-card">
              <svg
                className="weather-card-bg"
                fill="none"
                viewBox="0 0 342 175"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="weatherPatternFill" patternUnits="userSpaceOnUse" width="342" height="175">
                    <image
                      href={khmerPattern1}
                      x="0"
                      y="0"
                      width="342"
                      height="175"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                  <linearGradient
                    id="weatherGrad"
                    gradientUnits="userSpaceOnUse"
                    y2="128"
                    x2="354.142"
                    y1="128"
                    x1="0"
                  >
                    <stop stopColor="#5936B4" stopOpacity="0.78" />
                    <stop stopColor="#362A84" stopOpacity="0.85" offset="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#weatherPatternFill)"
                  d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                />
                <path
                  fill="url(#weatherGrad)"
                  d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                />
              </svg>
              <p className="weather-main-text">
                <CountUp target={20} suffix="+" />
              </p>
              <div className="weather-info">
                <div className="weather-info-left">
                  <p className="weather-text-gray">Web · Mobile · Bots</p>
                  <p>Phnom Penh, Cambodia</p>
                </div>
                <p className="weather-info-right">Projects</p>
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

            <div className="weather-card-wide" aria-hidden="true">
              <svg
                className="weather-card-wide-bg"
                fill="none"
                viewBox="0 0 342 175"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="weatherWidePatternFill" patternUnits="userSpaceOnUse" width="342" height="175">
                    <image
                      href={khmerPattern1}
                      x="0"
                      y="0"
                      width="342"
                      height="175"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                  <linearGradient
                    id="weatherWideGrad"
                    gradientUnits="userSpaceOnUse"
                    y2="128"
                    x2="354.142"
                    y1="128"
                    x1="0"
                  >
                    <stop stopColor="#5936B4" stopOpacity="0.78" />
                    <stop stopColor="#362A84" stopOpacity="0.85" offset="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#weatherWidePatternFill)"
                  d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                />
                <path
                  fill="url(#weatherWideGrad)"
                  d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                />
              </svg>
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
