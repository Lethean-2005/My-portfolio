import { useLanguage } from '../i18n.jsx';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">{t.projects.title}</h3>
        <p className="section-sub">{t.projects.sub}</p>

        <div className="cards cards-3">
          {t.projects.items.map((p) => (
            <article key={p.title} className="card">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="chip-list">
                {p.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
