import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n.jsx';

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

export default function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const total = items.length;
  const explore = t.projects.explore || 'Explore';

  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [userClosed, setUserClosed] = useState(false);
  const [startIdx, setStartIdx] = useState(0);

  const slots = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIdx + i) % total;
    return { ...items[idx], _idx: idx };
  });

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setStartIdx((i) => (i + 1) % total), CYCLE_MS);
    return () => clearInterval(id);
  }, [open, total]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userClosed) setOpen(true);
        } else {
          setOpen(false);
          setUserClosed(false);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [userClosed]);

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
    <section ref={sectionRef} id="projects" className="section section-projects">
      <div className="container">
        <h3 className="section-title">{t.projects.title}</h3>
        <p className="section-sub">{t.projects.sub}</p>
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

            {slots.map((p, i) => (
              <button
                key={p.title}
                type="button"
                className={`proj-card ${POSITION_CLASSES[i]} ${THEMES[p._idx % THEMES.length]}`}
                onClick={(e) => {
                  e.stopPropagation();
                  focusCard(p._idx);
                }}
                tabIndex={open ? 0 : -1}
                aria-label={p.title}
              >
                <span className="proj-card-body">
                  <span className="proj-card-head">
                    <span className="proj-card-num">
                      {String(p._idx + 1).padStart(2, '0')}
                    </span>
                    <span className="proj-card-rule" aria-hidden="true" />
                  </span>
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-desc">{p.desc}</span>
                  <span className="proj-link">
                    {explore}
                    <ArrowRight />
                  </span>
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
    </section>
  );
}
