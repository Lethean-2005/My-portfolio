import { useLanguage } from '../i18n.jsx';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container">
        <h3 className="section-title">{t.services.title}</h3>
        <p className="section-sub">{t.services.sub}</p>

        <div className="cards cards-4">
          {t.services.items.map((s) => (
            <article key={s.title} className="card">
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <div className="chip-list">
                {s.chips.map((c) => (
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
