import { useEffect, useRef, useState } from 'react';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <path d="M7 17 L17 7 M9 7 L17 7 L17 15" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

const PC_ICON = {
  calendar: (
    <svg viewBox="0 0 24 24" className="exp-pc-mini-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M8 15h2v2H8z" />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 24 24" className="exp-pc-mini-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="6" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24" className="exp-pc-icon exp-pc-icon-folder" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" className="exp-pc-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" className="exp-pc-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
      <path d="M5 21v-7" />
    </svg>
  ),
  bar: (
    <svg viewBox="0 0 24 24" className="exp-pc-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="14" width="4" height="6" rx="1" />
      <rect x="10" y="10" width="4" height="10" rx="1" />
      <rect x="17" y="6" width="4" height="14" rx="1" />
    </svg>
  ),
  listCheck: (
    <svg viewBox="0 0 24 24" className="exp-pc-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
      <path d="M11 6l9 0" />
      <path d="M11 12l9 0" />
      <path d="M11 18l9 0" />
    </svg>
  )
};

const PROJECT_CARDS = [
  {
    status: 'completed', statusLabel: 'Completed',
    title: 'Web Development Workshop',
    desc: 'Intensive bootcamp on full-stack web fundamentals.',
    org: 'Training Workshop', scope: '8-week intensive',
    date: 'Jul 5, 2024', priority: 'High',
    pie: 'green-100', percent: '100%', tasks: '24 / 24 Tasks'
  },
  {
    status: 'active', statusLabel: 'Active',
    title: 'Internship — Ajip Consulting',
    desc: 'Production internship: client features and full-stack delivery.',
    org: 'Software Developer', scope: '6 months',
    date: 'Sep 1, 2025', priority: 'High',
    pie: 'orange-72', percent: '72%', tasks: '18 / 25 Tasks'
  },
  {
    status: 'active', statusLabel: 'Active',
    title: 'CMED Construction Projects',
    desc: 'On-site coordination, schedule and scope across CMED builds.',
    org: 'Full-Stack Web Developer QA', scope: 'Multi-project',
    date: '18 Feb 2026', priority: 'Medium',
    pie: 'green-54', percent: '54%', tasks: '13 / 24 Tasks'
  }
];

function ProjectCard({ data }) {
  const p = data;
  return (
    <article className="exp-pc-card">
      <div className="exp-pc-head">
        {PC_ICON.folder}
        <span className={`exp-pc-badge exp-pc-badge-${p.status}`}>{p.statusLabel}</span>
      </div>
      <h3 className="exp-pc-title">{p.title}</h3>
      <p className="exp-pc-desc">{p.desc}</p>
      <div className="exp-pc-meta">
        {PC_ICON.user}
        <span>{p.org}</span>
        <span className="exp-pc-dot" />
        <span>{p.scope}</span>
      </div>
      <div className="exp-pc-date">
        <span className="exp-pc-date-left">{PC_ICON.flag} {p.date}</span>
        <span className="exp-pc-date-right">{PC_ICON.bar} {p.priority}</span>
      </div>
      <div className="exp-pc-divider" />
      <div className="exp-pc-foot">
        <span className="exp-pc-progress"><span className={`exp-pc-pie exp-pc-pie-${p.pie}`} />{p.percent}</span>
        <span className="exp-pc-tasks">{PC_ICON.listCheck}{p.tasks}</span>
        <div className="exp-pc-avatar" aria-hidden="true">
          <svg viewBox="0 0 30 30">
            <rect width="30" height="30" fill="#475569" />
            <circle cx="15" cy="12" r="4.5" fill="#e2e8f0" />
            <path d="M5 30 C5 22, 25 22, 25 30 Z" fill="#e2e8f0" />
          </svg>
        </div>
      </div>
    </article>
  );
}

const TRUST_LOGOS = [
  { slug: 'hubspot', label: 'HubSpot' },
  { slug: 'zendesk', label: 'Zendesk' },
  { slug: 'github',  label: 'GitHub' },
  { slug: 'gitlab',  label: 'GitLab' },
  { slug: 'docker',  label: 'Docker' },
  { slug: 'figma',   label: 'Figma' },
  { slug: 'postman', label: 'Postman' }
];

const CARD_IDS = ['card-developers', 'card-workshop', 'card-hours'];
const POSITIONS = ['pos-top', 'pos-middle', 'pos-bottom'];
const ALL_POS_CLASSES = ['pos-top', 'pos-middle', 'pos-bottom', 'pos-above', 'pos-below'];

const STAGE = {
  tag: 'Real-world',
  tagline: 'Workshop · Internship · CMED · 2024',
  titlePre: 'My',
  titleMid: 'Potential',
  titleAccent: 'Experiences',
  desc: 'From intensive workshops to production internships and CMED construction projects — every step shaped my craft and delivered real-world impact.',
  overviewLabel: 'Projects',
  overviewValue: '40+'
};

function CardContent({ idx }) {
  const data = PROJECT_CARDS[idx] ?? PROJECT_CARDS[0];
  return (
    <>
      <div className="exp-stack-compact exp-pc-mini">
        <div className="exp-pc-mini-header">
          <div className="exp-pc-mini-pills">
            <span className="exp-pc-mini-pill exp-pc-mini-pill-date">
              {PC_ICON.calendar}
              {data.date}
            </span>
            <span className={`exp-pc-mini-pill exp-pc-mini-pill-status exp-pc-mini-pill-status-${data.status}`}>
              <span className="exp-pc-mini-dot" />
              {data.statusLabel}
            </span>
          </div>
          <button type="button" className="exp-pc-mini-more" aria-label="More options">
            {PC_ICON.dots}
          </button>
        </div>
        <h3 className="exp-pc-mini-title">{data.title}</h3>
        <p className="exp-pc-mini-subtitle">{data.desc}</p>
      </div>
      <div className="exp-stack-expanded exp-stack-expanded-projects">
        <ProjectCard data={data} />
      </div>
    </>
  );
}

export default function Experience() {
  const stackRef = useRef(null);
  const [cycle, setCycle] = useState(0);
  // React-managed position class for each card (driven by state, not DOM).
  const [positions, setPositions] = useState(['pos-top', 'pos-middle', 'pos-bottom']);
  // Which card index (if any) currently has transitions disabled (used during the snap step).
  const [noAnimIdx, setNoAnimIdx] = useState(null);
  // Ghost overlay for the visible slide-up exit during a wrap.
  // When set, an extra card is rendered that animates from pos-top → pos-above.
  const [ghostIdx, setGhostIdx] = useState(null);
  const [ghostPos, setGhostPos] = useState('pos-top');
  const prevCycleRef = useRef(0);

  // Whenever cycle changes, run the wrap if needed.
  // - Real wrap card: instantly teleports to pos-below, slides up to pos-bottom (fills bottom slot, no dark gap)
  // - Ghost overlay: rendered at pos-top, animates to pos-above (the visible "slide off the top" effect)
  // Both happen at the same time so there's no empty bottom slot moment.
  useEffect(() => {
    if (cycle === prevCycleRef.current) return;
    prevCycleRef.current = cycle;

    const desired = CARD_IDS.map((_, idx) => POSITIONS[(idx - cycle + 3000) % 3]);
    const wrapIdx = positions.findIndex((p, i) => p === 'pos-top' && desired[i] === 'pos-bottom');

    if (wrapIdx === -1) {
      setPositions(desired);
      return;
    }

    // Step 1 — instantly: snap real wrap card to pos-below (no anim) so it can slide up to pos-bottom from below.
    setNoAnimIdx(wrapIdx);
    setPositions((prev) => {
      const next = prev.slice();
      next[wrapIdx] = 'pos-below';
      return next;
    });
    // Show the ghost at pos-top (no anim, instant placement).
    setGhostIdx(wrapIdx);
    setGhostPos('pos-top');

    // Step 2 (next frame) — re-enable anim and animate everyone:
    // real wrap card: pos-below → pos-bottom (slides up into bottom slot)
    // ghost: pos-top → pos-above (slides up off the top)
    // other cards: animate to their new positions concurrently
    const t1 = setTimeout(() => {
      setNoAnimIdx(null);
      setPositions(desired);
      setGhostPos('pos-above');
    }, 30);

    // Step 3 — clean up the ghost after the slide-up animation completes
    const t2 = setTimeout(() => {
      setGhostIdx(null);
      setGhostPos('pos-top');
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cycle]);

  // Auto-cycle every 5s with pause-on-hover
  useEffect(() => {
    let timer = setInterval(() => setCycle((c) => c + 1), 5000);
    const frame = stackRef.current?.closest('.exp-stack-frame');
    if (!frame) return () => clearInterval(timer);

    const stop = () => clearInterval(timer);
    const start = () => {
      stop();
      timer = setInterval(() => setCycle((c) => c + 1), 5000);
    };
    frame.addEventListener('mouseenter', stop);
    frame.addEventListener('mouseleave', start);
    return () => {
      clearInterval(timer);
      frame.removeEventListener('mouseenter', stop);
      frame.removeEventListener('mouseleave', start);
    };
  }, []);

  const cls = (idx, base) =>
    `${base} exp-stack-card ${positions[idx]} ${noAnimIdx === idx ? 'no-anim' : ''}`;

  return (
    <section id="experience" className="exp-crm exp-crm-dark">
      <div className="exp-crm-sticky">
        <div className="exp-crm-grid">
          {/* ===== Left column ===== */}
          <div className="exp-crm-left">
            <span className="exp-crm-tagline">
              <span className="exp-crm-tagline-pill">{STAGE.tag}</span>
              {STAGE.tagline}
              <ChevronRight />
            </span>

            <h2 className="exp-crm-title">
              {STAGE.titlePre} {STAGE.titleMid}<br />
              <span className="exp-crm-title-accent">{STAGE.titleAccent}</span>
            </h2>

            <p className="exp-crm-desc">{STAGE.desc}</p>

            <p className="exp-crm-trust">More than 100+ companies trusted us</p>

            <div className="exp-crm-logos-viewport">
              <div className="exp-crm-logos-strip">
                {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                  <span key={`${logo.slug}-${i}`} className="exp-crm-logo" aria-hidden={i >= TRUST_LOGOS.length}>
                    <img
                      src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`}
                      alt=""
                      aria-hidden="true"
                    />
                    <span>{logo.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right column — animated stack ===== */}
          <div className="exp-crm-right">
            <div className="exp-stack-frame">
              <div className="exp-stack" ref={stackRef}>
                <div className={cls(0, '')} id="card-developers">
                  <CardContent idx={0} />
                </div>
                <div className={cls(1, '')} id="card-workshop">
                  <CardContent idx={1} />
                </div>
                <div className={cls(2, '')} id="card-hours">
                  <CardContent idx={2} />
                </div>

                {/* Ghost overlay — visible slide-up exit during the wrap */}
                {ghostIdx !== null && (
                  <div
                    className={`exp-stack-card exp-stack-ghost ${ghostPos}`}
                    aria-hidden="true"
                  >
                    <CardContent idx={ghostIdx} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
