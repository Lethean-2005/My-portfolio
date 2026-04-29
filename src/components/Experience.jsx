import { useEffect, useRef, useState } from 'react';

function BriefcaseLogo() {
  return (
    <svg className="exp-logo" width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#ffffff" />
      <path
        d="M 28 44 L 28 72 Q 28 76 32 76 L 68 76 Q 72 76 72 72 L 72 44 Q 72 40 68 40 L 60 40 L 60 36 Q 60 32 56 32 L 44 32 Q 40 32 40 36 L 40 40 L 32 40 Q 28 40 28 44 Z"
        fill="#4f46e5"
      />
      <rect x="42" y="34" width="16" height="2.5" rx="1" fill="#ffffff" />
      <rect x="46" y="55" width="8" height="3" fill="#ffffff" />
    </svg>
  );
}

function WorkshopLogo() {
  return (
    <svg className="exp-logo" width="42" height="42" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#ffffff" />
      <path d="M 22 44 L 50 32 L 78 44 L 50 56 Z" fill="#0d9488" />
      <path d="M 32 50 L 32 60 Q 32 67 50 67 Q 68 67 68 60 L 68 50" fill="#0d9488" />
      <path d="M 76 46 L 76 60" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="76" cy="63" r="3" fill="#0d9488" />
    </svg>
  );
}

function BuildingLogo() {
  return (
    <svg className="exp-logo" width="42" height="42" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#ffffff" />
      <path d="M 30 76 L 30 36 Q 30 32 34 32 L 56 32 Q 60 32 60 36 L 60 76 Z" fill="#ea580c" />
      <path d="M 60 76 L 60 48 Q 60 44 64 44 L 70 44 Q 74 44 74 48 L 74 76 Z" fill="#ea580c" />
      <rect x="36" y="40" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="48" y="40" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="36" y="50" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="48" y="50" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="42" y="60" width="6" height="8" rx="1" fill="#ffffff" />
      <rect x="65" y="52" width="4" height="4" rx="0.5" fill="#ffffff" />
      <rect x="65" y="60" width="4" height="4" rx="0.5" fill="#ffffff" />
    </svg>
  );
}

function BusinessmanLogo() {
  return (
    <svg className="exp-logo" width="42" height="42" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#ffffff" />
      <circle cx="50" cy="36" r="7.5" fill="#5b6dd8" />
      <path
        d="M 37 78 L 37 56 Q 37 52 40 50 L 46 48 L 50 54 L 54 48 L 60 50 Q 63 52 63 56 L 63 78 Z"
        fill="#5b6dd8"
      />
      <path d="M 46 48 L 50 54 L 54 48 L 52.5 60 L 50 64 L 47.5 60 Z" fill="#ffffff" />
    </svg>
  );
}

function AjipLogo() {
  return (
    <svg
      className="exp-logo"
      width="48"
      height="48"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 32 78 L 50 22 L 68 78" />
      <path d="M 40 60 L 60 60" />
    </svg>
  );
}

function Row({ label, side, rowClass, children }) {
  const showLeft = side === 'left';
  const showRight = side === 'right';
  return (
    <div className={`exp-row ${rowClass}`}>
      <div className="exp-side exp-side-left">
        {showLeft && (
          <>
            <span className="exp-side-text">{label}</span>
            <div className="exp-side-line" />
          </>
        )}
      </div>
      <div className="exp-card-area">{children}</div>
      <div className="exp-side exp-side-right">
        {showRight && (
          <>
            <div className="exp-side-line" />
            <span className="exp-side-text">{label}</span>
          </>
        )}
      </div>
    </div>
  );
}

const ROWS = [
  { side: 'left',  label: 'Training Workshop', rowClass: 'exp-row-1', kind: 'workshop' },
  { side: 'right', label: 'Company Visit',     rowClass: 'exp-row-2', kind: 'visit' },
  { side: 'left',  label: 'Internship',        rowClass: 'exp-row-3', kind: 'internship' },
  { side: 'right', label: 'Consulting',        rowClass: 'exp-row-4', kind: 'ajip' },
  { side: 'left',  label: 'Construction',      rowClass: 'exp-row-5', kind: 'cmed' }
];

function CardFor({ kind }) {
  if (kind === 'workshop') {
    return (
      <div className="exp-iso">
        <div className="exp-card exp-card-workshop">
          <WorkshopLogo />
          <div className="exp-label">WORKSHOP</div>
        </div>
      </div>
    );
  }
  if (kind === 'visit') {
    return (
      <div className="exp-iso">
        <div className="exp-card exp-card-visit">
          <BuildingLogo />
          <div className="exp-label">VISIT</div>
          <div className="exp-sublabel">COMPANY</div>
        </div>
      </div>
    );
  }
  if (kind === 'internship') {
    return (
      <div className="exp-iso">
        <div className="exp-card exp-card-internship">
          <BusinessmanLogo />
          <div className="exp-label">INTERNSHIP</div>
        </div>
      </div>
    );
  }
  if (kind === 'ajip') {
    return (
      <div className="exp-iso">
        <div className="exp-card exp-card-ajip">
          <AjipLogo />
          <div className="exp-label">AJIP</div>
          <div className="exp-sublabel">CONSULTING</div>
        </div>
      </div>
    );
  }
  if (kind === 'cmed') {
    return (
      <div className="exp-iso">
        <div className="exp-card exp-card-cmed">
          <div className="exp-label exp-label-dark exp-label-big">CMED</div>
          <div className="exp-sublabel exp-sublabel-dark">Construction</div>
        </div>
      </div>
    );
  }
  return null;
}

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

export default function Experience() {
  const sectionRef = useRef(null);
  const [t, setT] = useState(0);
  const [p, setP] = useState(1);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      rafId = null;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      let nextT;
      let nextP;
      if (scrolled < 0 || scrolled > range) {
        nextT = scrolled < 0 ? 0 : 1;
        nextP = 1;
      } else {
        const raw = scrolled / range;
        // Phase 1 (0 → 0.30): hero text fades + EXPERIENCE card moves to center
        nextT = clamp(raw / 0.3);

        // Phase 2 (0.30 → 1.0): V-shape merge for the 5 cards
        const m = clamp((raw - 0.3) / 0.7);
        if (m < 0.25) nextP = 1 - m / 0.25; // 1 → 0 expanding
        else if (m < 0.75) nextP = 0; // fully expanded
        else nextP = (m - 0.75) / 0.25; // 0 → 1 merging
      }
      setT(nextT);
      setP(nextP);
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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-experience"
      style={{ '--p': p, '--t': t }}
    >
      <div className="exp-sticky">
        <div className="exp-content">
          <div className="exp-stack">
            {ROWS.map((r) => (
              <Row key={r.rowClass} side={r.side} label={r.label} rowClass={r.rowClass}>
                <CardFor kind={r.kind} />
              </Row>
            ))}
          </div>

          <div className="exp-overlay">
            <div className="exp-card-area">
              <div className="exp-iso">
                <div className="exp-card exp-card-experience">
                  <BriefcaseLogo />
                  <div className="exp-label">EXPERIENCE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="exp-hero-text">
          <h2 className="exp-hero-title">
            <span>UNLOCK YOUR MIND'S</span>
            <span>POTENTIAL</span>
          </h2>
          <div className="exp-hero-row">
            <p className="exp-hero-desc">
              Explore the depths of psychology, gain self-awareness, and improve
              mental well-being with expert insights and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
