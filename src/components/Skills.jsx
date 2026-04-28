import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n.jsx';

function BarLogo({ skill }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="bar-tag-fallback"
        style={{ background: skill.color }}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      className="bar-tag-logo"
      src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`}
      alt=""
      aria-hidden="true"
      onError={() => setFailed(true)}
    />
  );
}

const SKILLS = [
  { name: 'React', value: 95, color: '#61DAFB', slug: 'react', tag: 'Frontend' },
  { name: 'Vue.js', value: 78, color: '#4FC08D', slug: 'vuedotjs', tag: 'Frontend' },
  { name: 'JavaScript', value: 92, color: '#F7DF1E', slug: 'javascript', tag: 'Code' },
  { name: 'TypeScript', value: 85, color: '#3178C6', slug: 'typescript', tag: 'OOP' },
  { name: 'Node.js', value: 86, color: '#339933', slug: 'nodedotjs', tag: 'API' },
  { name: 'Python', value: 75, color: '#FFD43B', slug: 'python', tag: 'Algo' },
  { name: 'HTML5 / CSS3', value: 94, color: '#E44D26', slug: 'html5', tag: 'Markup' },
  { name: 'PHP', value: 80, color: '#777BB4', slug: 'php', tag: 'Backend' },
  { name: 'Laravel', value: 76, color: '#FF2D20', slug: 'laravel', tag: 'Framework' },
  { name: 'MySQL', value: 82, color: '#00758F', slug: 'mysql', tag: 'Database' },
  { name: 'Figma', value: 88, color: '#A259FF', slug: 'figma', tag: 'Design' },
  { name: 'WordPress', value: 80, color: '#21759B', slug: 'wordpress', tag: 'CMS' },
  { name: 'Power BI', value: 72, color: '#F2C811', slug: 'powerbi', tag: 'Analytics' },
  { name: 'Git / GitHub', value: 90, color: '#F05032', slug: 'git', tag: 'VCS' },
  { name: 'Jira', value: 75, color: '#0052CC', slug: 'jira', tag: 'PM' },
  { name: 'AWS', value: 70, color: '#FF9900', slug: 'amazonwebservices', tag: 'Cloud' },
  { name: 'Linux', value: 78, color: '#FCC624', slug: 'linux', tag: 'OS' },
  { name: 'Docker', value: 75, color: '#2496ED', slug: 'docker', tag: 'Container' },
  { name: 'Postman', value: 80, color: '#FF6C37', slug: 'postman', tag: 'API' },
  { name: 'Netlify / Vercel', value: 82, color: '#00C7B7', slug: 'netlify', tag: 'Deploy' },
  { name: 'AI Tools', value: 85, color: '#10A37F', slug: 'openai', tag: 'AI' }
];

export default function Skills() {
  const { t } = useLanguage();
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCenterIdx((i) => (i + 1) % SKILLS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const visible = [
    {
      ...SKILLS[(centerIdx - 1 + SKILLS.length) % SKILLS.length],
      pos: 'left'
    },
    { ...SKILLS[centerIdx], pos: 'center' },
    { ...SKILLS[(centerIdx + 1) % SKILLS.length], pos: 'right' },
    {
      ...SKILLS[(centerIdx + 2) % SKILLS.length],
      pos: 'far-right'
    }
  ];

  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-headline" style={{ whiteSpace: 'pre-line' }}>
            {t.skills.headline}
          </h2>

          <div className="skills-aside">
            <p className="skills-desc">{t.skills.desc}</p>
            <div className="skills-actions">
              <a href="#cv" className="skills-btn">
                <span aria-hidden="true">⬇</span> {t.skills.downloadCv}
              </a>
              <a href="#contact" className="skills-btn">
                <span aria-hidden="true">✉</span> {t.skills.contactMe}
              </a>
            </div>
          </div>
        </div>

        <div className="skills-body">
          <div className="skills-stats">
            <div className="sk-stat">
              <p className="sk-stat-num">%92</p>
              <p className="sk-stat-label">{t.skills.avgLevel}</p>
            </div>
            <div className="sk-stat">
              <p className="sk-stat-num">x15+</p>
              <p className="sk-stat-label">{t.skills.projectsShipped}</p>
            </div>
          </div>

          <div className="skills-carousel" role="list">
            {visible.map((skill) => {
              const isActive = skill.pos === 'center';
              const posClass =
                skill.pos === 'far-right' ? 'bar-far-right' : `bar-${skill.pos}`;
              return (
                <div
                  key={`${skill.name}-${skill.pos}-${centerIdx}`}
                  role="listitem"
                  className={`bar ${posClass} ${isActive ? 'is-active' : ''}`}
                  style={{ '--bar-color': skill.color }}
                >
                  <p className="bar-num">{skill.value}</p>
                  {isActive && (
                    <div className="bar-tag">
                      <BarLogo skill={skill} />
                      {skill.name}
                    </div>
                  )}
                  <svg
                    className="bar-svg"
                    viewBox="0 0 80 220"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id={`grad-${skill.name.replace(/\W/g, '')}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor={skill.color} stopOpacity="0.95" />
                        <stop offset="100%" stopColor={skill.color} stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <polygon
                      className="bar-face bar-top"
                      points="0,30 15,15 75,15 60,30"
                      fill={isActive ? `url(#grad-${skill.name.replace(/\W/g, '')})` : 'none'}
                    />
                    <polygon
                      className="bar-face bar-side"
                      points="60,30 75,15 75,205 60,220"
                      fill={isActive ? `url(#grad-${skill.name.replace(/\W/g, '')})` : 'none'}
                    />
                    <polygon
                      className="bar-face bar-front"
                      points="0,30 60,30 60,220 0,220"
                      fill={isActive ? `url(#grad-${skill.name.replace(/\W/g, '')})` : 'none'}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
