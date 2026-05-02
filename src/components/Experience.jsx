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
  if (idx === 0) {
    return (
      <>
        <div className="exp-stack-compact">
          <div className="exp-stack-row">
            <div className="exp-crm-avatars">
              <div className="exp-stack-av exp-stack-av1" />
              <div className="exp-stack-av exp-stack-av2" />
              <div className="exp-stack-av exp-stack-av3" />
            </div>
            <div>
              <div className="exp-stack-headline">Mentors and teammates I worked with</div>
              <div className="exp-stack-delta-line">+250</div>
            </div>
          </div>
        </div>
        <div className="exp-stack-expanded">
          <div className="exp-stack-between" style={{ marginBottom: 14 }}>
            <div className="exp-stack-row">
              <div className="exp-crm-avatars">
                <div className="exp-stack-av exp-stack-av1" />
                <div className="exp-stack-av exp-stack-av2" />
                <div className="exp-stack-av exp-stack-av3" />
                <div className="exp-stack-av exp-stack-av4">+9</div>
              </div>
              <div className="exp-stack-headline">Mentors and teammates I worked with</div>
            </div>
          </div>
          <div className="exp-stack-row" style={{ alignItems: 'flex-end', gap: 10, marginTop: 8 }}>
            <span className="exp-stack-num exp-stack-num-xl">250</span>
            <span className="exp-stack-delta">
              <ArrowUpRight /> 32%
            </span>
          </div>
          <div className="exp-stack-muted" style={{ marginTop: 10 }}>
            Network growth across workshops, internships and CMED projects
          </div>
          <svg className="exp-stack-chart" viewBox="0 0 300 56" preserveAspectRatio="none">
            <defs>
              <linearGradient id="expG1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,42 L40,38 L80,30 L120,32 L160,24 L200,20 L240,14 L300,6 L300,56 L0,56 Z" fill="url(#expG1)" />
            <path d="M0,42 L40,38 L80,30 L120,32 L160,24 L200,20 L240,14 L300,6" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="exp-stack-months" style={{ marginTop: 8 }}>
            <span>Apr</span><span>May</span><span>Jun</span><span className="now">Jul</span>
          </div>
        </div>
      </>
    );
  }
  if (idx === 1) {
    return (
      <>
        <div className="exp-stack-compact">
          <div className="exp-stack-between">
            <div>
              <div className="exp-stack-label">Workshop Hours</div>
              <div className="exp-stack-row" style={{ gap: 10, marginTop: 4 }}>
                <span className="exp-stack-num exp-stack-num-lg">4,820</span>
                <span className="exp-stack-delta">
                  <ArrowUpRight /> 420
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="exp-stack-expanded">
          <div className="exp-stack-tabs">
            <div className="exp-stack-tab active">Overview</div>
            <div className="exp-stack-tab">Workshop</div>
            <div className="exp-stack-tab">Order</div>
          </div>
          <div className="exp-stack-row" style={{ alignItems: 'flex-end', gap: 12, marginTop: 22 }}>
            <span className="exp-stack-num exp-stack-num-xl">4,820</span>
            <span className="exp-stack-delta">
              <ArrowUpRight /> 420
            </span>
          </div>
          <div className="exp-stack-muted" style={{ marginTop: 10 }}>
            Workshop hours delivered this year by around 58%
          </div>
          <svg className="exp-stack-chart" viewBox="0 0 300 56" preserveAspectRatio="none">
            <defs>
              <linearGradient id="expG2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,30 L40,34 L80,22 L120,28 L160,18 L200,22 L240,12 L300,16 L300,56 L0,56 Z" fill="url(#expG2)" />
            <path d="M0,30 L40,34 L80,22 L120,28 L160,18 L200,22 L240,12 L300,16" fill="none" stroke="#0e0e10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="exp-stack-months" style={{ marginTop: 8 }}>
            <span>Apr</span><span>May</span><span>Jun</span><span className="now">Jul</span>
          </div>
        </div>
      </>
    );
  }
  // idx === 2
  return (
    <>
      <div className="exp-stack-compact">
        <div className="exp-stack-between">
          <div>
            <div className="exp-stack-label">Total Projects</div>
            <div className="exp-stack-num exp-stack-num-lg" style={{ marginTop: 4 }}>120</div>
          </div>
          <button type="button" className="exp-stack-export-btn small">
            Export <FileIcon />
          </button>
        </div>
      </div>
      <div className="exp-stack-expanded">
        <div className="exp-stack-between">
          <div className="exp-stack-label">Total Projects · All Programs</div>
          <span className="exp-stack-muted" style={{ fontFamily: "'JetBrains Mono', monospace" }}>2024 — Q3</span>
        </div>
        <div className="exp-stack-num exp-stack-num-xl" style={{ marginTop: 10 }}>120</div>
        <div className="exp-stack-muted" style={{ marginTop: 8 }}>
          Cumulative projects across workshops, internships and CMED
        </div>
        <div className="exp-stack-progress"><span /></div>
        <div className="exp-stack-between" style={{ marginTop: 8 }}>
          <span className="exp-stack-muted">Goal · 200 projects</span>
          <span className="exp-stack-num" style={{ fontSize: 13, color: '#16a34a' }}>60%</span>
        </div>
        <div className="exp-stack-between" style={{ marginTop: 18 }}>
          <span className="exp-stack-muted">Last sync · 2 min ago</span>
          <button type="button" className="exp-stack-export-btn">
            Export Data <FileIcon />
          </button>
        </div>
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

            <div className="exp-crm-ctas">
              <button type="button" className="exp-crm-btn-primary">
                Start 7 Days free trial
              </button>
              <button type="button" className="exp-crm-btn-ghost">
                Learn More <ChevronRight />
              </button>
            </div>

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
