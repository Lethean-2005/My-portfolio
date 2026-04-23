const products = [
  {
    name: 'Marsha',
    desc: 'Cherry, truffle, Blueberry, Kakao.',
    price: '$12 – $39',
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
  },
  {
    name: 'Gogogu',
    desc: 'Cherry, truffle, Blueberry, Kakao.',
    price: '$12 – $39',
    img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80'
  },
  {
    name: 'V60 Dripper',
    desc: 'Cherry, truffle, Blueberry, Kakao.',
    price: '$49',
    img: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80'
  },
  {
    name: 'Ethio Roast',
    desc: 'Floral, citrus notes, medium body.',
    price: '$18 – $42',
    img: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80'
  }
];

export default function Products() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="products-head">
          <h2 className="section-title">
            Unnecessarily
            <br />
            Good Good(s)
          </h2>
          <a href="#shop" className="btn-pill dark">
            Shop All
            <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <article key={p.name} className="product">
              <div className="product-image">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <button className="product-heart" aria-label="Save">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10-.83.52-2.18.52-3 0z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="product-info">
                <div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: 8
                  }}
                >
                  <div className="product-price">{p.price}</div>
                  <button className="product-cart" aria-label="Add to cart">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
