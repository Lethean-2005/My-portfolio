const cities = [
  {
    name: 'Prague',
    cls: 'city-a',
    desc:
      'Botanical Coffee Shop in Prague offers a serene oasis with its lush green and artisanal coffee.'
  },
  {
    name: 'Berlin',
    cls: 'city-b',
    desc:
      "Berlin's dynamic coffee culture features innovative shops where baristas experiment with new brewing techniques."
  },
  {
    name: 'Vienna',
    cls: 'city-c',
    desc:
      "Vienna's coffee scene blends historic cafés and modern spots, all dedicated to perfecting the art of coffee making."
  }
];

export default function Cities() {
  return (
    <section id="locations" className="section">
      <div className="container">
        <div className="cities">
          {cities.map((c) => (
            <article key={c.name} className={`city ${c.cls}`}>
              <div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
              <a href={`#${c.name.toLowerCase()}`} className="city-nav">
                <span className="dot">→</span>
                Navigate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
