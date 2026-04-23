import { useLanguage } from '../i18n.jsx';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <h3 className="section-title">{t.skills.title}</h3>
        <p className="section-sub">{t.skills.sub}</p>

        <div className="cards cards-4">
          {t.skills.groups.map((g) => (
            <article key={g.title} className="card">
              <h3 className="card-title">{g.title}</h3>
              <div className="chip-list">
                {g.chips.map((c) => (
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
