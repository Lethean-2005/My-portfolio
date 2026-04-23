export default function Greenies() {
  return (
    <section className="section">
      <div className="container">
        <div className="greenies-grid">
          <div className="greenies-media">
            <button className="play-btn" aria-label="Play video">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="section-title" style={{ marginBottom: 14 }}>
              From Greenies to Delight.
            </h2>
            <p className="greenies-copy">
              <em>All in the name of coffee.</em>
              <br />
              It doesn't have to taste that way. But it does. It's not your
              typical. It's unnecessarily good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
