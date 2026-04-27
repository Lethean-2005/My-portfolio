export default function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Updates']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Guides', 'Blog', 'Support']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact', 'Partners']
    }
  ];

  return (
    <footer id="contact" className="footer footer-nexiron">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              <span className="footer-brand-name">Nexiron</span>
            </div>
            <p className="footer-tagline">
              Nexiron helps teams transform complex data into clear, engaging
              stories — everything you need in one place
            </p>
          </div>

          <div className="footer-links">
            {sections.map((s) => (
              <div key={s.title} className="footer-col">
                <p className="footer-col-title">{s.title}</p>
                <ul>
                  {s.links.map((l) => (
                    <li key={l}>
                      <a href="#">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} Nexiron. All rights reserved</p>
          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
