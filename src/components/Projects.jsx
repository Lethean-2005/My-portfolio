import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n.jsx';
import khmerFolderPattern from '../assets/khmer patthern.jpg';

const POSITION_CLASSES = [
  'proj-card-far-left',
  'proj-card-left',
  'proj-card-center',
  'proj-card-right',
  'proj-card-far-right'
];

const VISIBLE = 5;
const CENTER_SLOT = 2;
const CYCLE_MS = 4500;

const THEMES = ['theme-black', 'theme-white', 'theme-red'];

const ArrowRight = () => (
  <svg
    width="9"
    height="9"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const TECH_ICONS = {
  PHP: 'php',
  'PHP (MVC)': 'php',
  MySQL: 'mysql',
  Bootstrap: 'bootstrap',
  Jira: 'jira',
  Laravel: 'laravel',
  'Vue.js': 'vuedotjs',
  'Chart.js': 'chartdotjs',
  HTML: 'html5',
  CSS: 'css3',
  JavaScript: 'javascript',
  GitHub: 'github',
  Python: 'python',
  'Telegram API': 'telegram',
  SASS: 'sass',
  Netlify: 'netlify',
  Figma: 'figma',
  React: 'react',
  Docker: 'docker',
  Vite: 'vite',
  TypeScript: 'typescript',
  Tailwind: 'tailwindcss'
};

function ChipLogo({ name }) {
  const slug = TECH_ICONS[name];
  if (!slug) return null;
  return (
    <img
      className="proj-card-chip-logo"
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      aria-hidden="true"
    />
  );
}

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

export default function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const total = items.length;
  const explore = t.projects.explore || 'Explore';

  const sectionRef = useRef(null);
  const [p, setP] = useState(0);
  const [open, setOpen] = useState(false);
  const [userClosed, setUserClosed] = useState(false);
  const [startIdx, setStartIdx] = useState(0);
  const [cardIdx, setCardIdx] = useState(0);

  const slots = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIdx + i) % total;
    return { ...items[idx], _idx: idx };
  });

  // Scroll-driven progress (0 → 1)
  useEffect(() => {
    let rafId = null;
    const update = () => {
      rafId = null;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      let next;
      if (scrolled < 0) next = 0;
      else if (scrolled > range) next = 1;
      else next = clamp(scrolled / range);
      setP(next);
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Auto-open folder once scroll passes 60%
  useEffect(() => {
    if (userClosed) return;
    setOpen(p > 0.6);
  }, [p, userClosed]);

  // Cycle cards while folder is open
  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setStartIdx((i) => (i + 1) % total), CYCLE_MS);
    return () => clearInterval(id);
  }, [open, total]);

  // Cycle the Growup card content through each project (3s per rotation)
  useEffect(() => {
    const id = setInterval(() => setCardIdx((i) => (i + 1) % total), 3000);
    return () => clearInterval(id);
  }, [total]);

  const current = items[cardIdx] || items[0];

  const focusCard = (idx) =>
    setStartIdx((idx - CENTER_SLOT + total) % total);

  const toggleFolder = () => {
    if (open) {
      setOpen(false);
      setUserClosed(true);
    } else {
      setOpen(true);
      setUserClosed(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-projects"
      style={{ '--p': p }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="cardNotch" clipPathUnits="objectBoundingBox">
            <path d="M0.04,0 H0.6 A0.025,0.04 0 0 1 0.625,0.04 V0.18 A0.025,0.04 0 0 0 0.65,0.22 H0.96 A0.04,0.04 0 0 1 1,0.26 V0.96 A0.04,0.04 0 0 1 0.96,1 H0.04 A0.04,0.04 0 0 1 0,0.96 V0.04 A0.04,0.04 0 0 1 0.04,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="proj-sticky">
        {/* === Growup hero (intro) === */}
        <div className="growup-hero" aria-hidden={p > 0.55}>
          <div className="growup-left">
            <h2 className="growup-headline">
              Simplify your all<br />transactions with us.
            </h2>
            <p className="growup-lead">
              From easy money management, to travel perks and investments. Open your
              account in a flash.
            </p>
            <div className="growup-ctas">
              <button type="button" className="growup-btn-primary">Get a free account</button>
              <button type="button" className="growup-btn-ghost">
                Get a demo
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="growup-trust">
              <div className="growup-trust-item">
                <div className="growup-trust-rating">
                  <span style={{ fontWeight: 600 }}>Excellent 4.9 out of 5</span>
                  <span className="growup-stars">★★★★★</span>
                </div>
              </div>
              <div className="growup-trust-item">
                <svg className="growup-laurel" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                  <path d="M8 6 C 4 12, 4 18, 8 24 M8 24 C 10 22, 12 22, 14 23 M8 18 C 10 16, 12 16, 13 17 M8 12 C 10 10, 12 10, 13 11" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M22 6 C 26 12, 26 18, 22 24 M22 24 C 20 22, 18 22, 16 23 M22 18 C 20 16, 18 16, 17 17 M22 12 C 20 10, 18 10, 17 11" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="15" cy="15" r="3" fill="#ffffff" />
                </svg>
                <div>
                  <div style={{ fontWeight: 600 }}>The world's best</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>digital bank · 2023</div>
                </div>
              </div>
            </div>
          </div>

          <div className="growup-card-wrap">
            <div className="growup-credit-card growup-folder">
              <svg
                className="growup-folder-shape"
                viewBox="0 0 360 240"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="growupFolderPattern"
                    patternUnits="userSpaceOnUse"
                    width="360"
                    height="240"
                  >
                    <image
                      href={khmerFolderPattern}
                      x="0"
                      y="0"
                      width="360"
                      height="240"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                  <linearGradient id="growupFolderOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4A12" stopOpacity="0.88" />
                    <stop offset="100%" stopColor="#DB2F00" stopOpacity="0.82" />
                  </linearGradient>
                </defs>
                <path
                  d="M 18 0 L 130 0 Q 146 0 152 14 L 162 32 Q 168 44 184 44 L 342 44 Q 360 44 360 62 L 360 222 Q 360 240 342 240 L 18 240 Q 0 240 0 222 L 0 18 Q 0 0 18 0 Z"
                  fill="url(#growupFolderPattern)"
                />
                <path
                  d="M 18 0 L 130 0 Q 146 0 152 14 L 162 32 Q 168 44 184 44 L 342 44 Q 360 44 360 62 L 360 222 Q 360 240 342 240 L 18 240 Q 0 240 0 222 L 0 18 Q 0 0 18 0 Z"
                  fill="url(#growupFolderOrange)"
                />
              </svg>

              <div className="growup-folder-content" key={cardIdx}>
                <div className="growup-card-top">
                  <div className="growup-brand">
                    <span>{current.title}</span>
                  </div>
                </div>
                <div className="growup-card-mid">
                  <div className="growup-balance-label">Project</div>
                  <div className="growup-balance">#{String(cardIdx + 1).padStart(2, '0')}</div>
                  <div className="growup-card-num">{current.chips.join(' • ').toUpperCase()}</div>
                </div>
                <div className="growup-card-bottom">
                  <div className="growup-card-name">{current.desc.toUpperCase()}</div>
                  <div className="growup-card-exp">{cardIdx + 1}/{total}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Project folder (final phase) === */}
        <div className="container proj-folder-container">
          <div className="proj-stage">
            <div
              role="button"
              tabIndex={0}
              className={`file ${open ? 'is-open' : ''}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFolder();
                }
              }}
              aria-label={t.projects.title}
              aria-expanded={open}
            >
              <span className="work-5" aria-hidden="true" />
              <span className="work-4" aria-hidden="true" />
              <span className="work-3" aria-hidden="true" />
              <span className="work-2" aria-hidden="true" />

              {slots.map((proj, i) => (
                <button
                  key={proj.title}
                  type="button"
                  className={`proj-card ${POSITION_CLASSES[i]} ${THEMES[proj._idx % THEMES.length]}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    focusCard(proj._idx);
                  }}
                  tabIndex={open ? 0 : -1}
                  aria-label={proj.title}
                >
                  <span className="proj-card-body">
                    <span className="proj-card-head">
                      <span className="proj-card-num">
                        {String(proj._idx + 1).padStart(2, '0')}
                      </span>
                      <span className="proj-card-rule" aria-hidden="true" />
                      {proj.date && <span className="proj-card-date">{proj.date}</span>}
                    </span>
                    <span className="proj-title">{proj.title}</span>
                    {proj.role && <span className="proj-card-role">{proj.role}</span>}
                    <span className="proj-desc">{proj.desc}</span>
                    {proj.chips && proj.chips.length > 0 && (
                      <span className="proj-card-tags">
                        {proj.chips.map((chip) => (
                          <span key={chip} className="proj-card-tag">
                            <ChipLogo name={chip} />
                            {chip}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                </button>
              ))}

              <span
                className="work-1"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFolder();
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
