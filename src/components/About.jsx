import { useLanguage } from '../i18n.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <h3 className="section-title">{t.about.title}</h3>
        <p className="about-intro">{t.about.intro}</p>

        <p className="approach-label">{t.about.approachLabel}</p>
        <div className="approach-row">
          {t.about.approach.map((item, i) => (
            <div key={item} className="approach-pill">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="stats">
          {t.about.stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
