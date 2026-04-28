import { useState } from 'react';
import { useLanguage } from '../i18n.jsx';

const POSITION_CLASSES = [
  'proj-card-far-left',
  'proj-card-left',
  'proj-card-center',
  'proj-card-right',
  'proj-card-far-right'
];

export default function Projects() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const items = t.projects.items.slice(0, 5);

  // Center the most important project, fan the others outward.
  const slots = [items[4], items[2], items[0], items[1], items[3]];
  const explore = t.projects.explore || 'Explore';

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <h3 className="section-title">{t.projects.title}</h3>
        <p className="section-sub">{t.projects.sub}</p>

        <div className="proj-stage">
          <button
            type="button"
            className={`file ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            onMouseLeave={() => setOpen(false)}
            aria-label={t.projects.title}
          >
            <span className="work-5" aria-hidden="true" />
            <span className="work-4" aria-hidden="true" />
            <span className="work-3" aria-hidden="true" />
            <span className="work-2" aria-hidden="true" />

            {slots.map((p, i) =>
              p ? (
                <span key={p.title} className={`proj-card ${POSITION_CLASSES[i]}`}>
                  <span className="proj-card-image" aria-hidden="true" />
                  <span className="proj-card-body">
                    <span className="proj-title">{p.title}</span>
                    <span className="proj-desc">{p.desc}</span>
                    <span className="proj-link">{explore} →</span>
                  </span>
                </span>
              ) : null
            )}

            <span className="work-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
