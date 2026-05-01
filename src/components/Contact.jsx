import { useState } from 'react';
import vichecal from '../assets/khmer vichecal.png';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState('idle');

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitState !== 'idle') return;
    setSubmitState('loading');
    setTimeout(() => setSubmitState('done'), 4000);
    setTimeout(() => {
      setSubmitState('idle');
      setForm({ name: '', company: '', email: '', budget: '', message: '' });
    }, 5500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
      </div>

      <div className="contact-main">
        <div className="contact-copy">
          <p className="contact-lede">
            Let's unlock together the next level of <strong>possibilities</strong>. Reach out.
          </p>

          <div className="contact-info-block">
            <span className="contact-label">Social Media</span>
            <span className="contact-social-icons">
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/lethean.seourn/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="https://t.me/Lethean_Seourn" aria-label="Telegram" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 496 512" fill="currentColor">
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                </svg>
              </a>
            </span>
          </div>

          <div className="contact-info-row">
            <div className="contact-info-block">
              <span className="contact-label">Get in Touch</span>
              <span className="contact-value">
                <a href="mailto:lethean.seourn@gmail.com">lethean.seourn@gmail.com</a>
              </span>
            </div>
            <div className="contact-info-block">
              <span className="contact-label">Location</span>
              <span className="contact-value">Phnom Penh — Cambodia</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <input
              type="text"
              id="contact-name"
              placeholder=" "
              value={form.name}
              onChange={update('name')}
              required
            />
            <label htmlFor="contact-name">Name</label>
          </div>
          <div className="contact-field">
            <input
              type="text"
              id="contact-company"
              placeholder=" "
              value={form.company}
              onChange={update('company')}
            />
            <label htmlFor="contact-company">Company</label>
          </div>
          <div className="contact-field">
            <input
              type="email"
              id="contact-email"
              placeholder=" "
              value={form.email}
              onChange={update('email')}
              required
            />
            <label htmlFor="contact-email">Email</label>
          </div>
          <div className="contact-field">
            <select
              id="contact-budget"
              value={form.budget}
              onChange={update('budget')}
              data-empty={form.budget ? 'false' : 'true'}
            >
              <option value="" disabled hidden></option>
              <option value="5-10k">$5K — $10K</option>
              <option value="10-25k">$10K — $25K</option>
              <option value="25-50k">$25K — $50K</option>
              <option value="50k+">$50K+</option>
            </select>
            <label htmlFor="contact-budget">Budget</label>
          </div>
          <div className="contact-field contact-field-full">
            <textarea
              id="contact-message"
              placeholder=" "
              rows="3"
              value={form.message}
              onChange={update('message')}
            />
            <label htmlFor="contact-message">Message</label>
          </div>

          <div
            className={`contact-submit-row${submitState === 'loading' ? ' is-loading' : ''}${submitState === 'done' ? ' is-done' : ''}`}
          >
            <button
              type="submit"
              className="contact-submit-btn"
              style={submitState === 'done' ? { color: 'var(--contact-accent)' } : undefined}
            >
              {submitState === 'done' ? 'Sent' : 'Submit'}
            </button>
            <span className="contact-vichecal" aria-hidden="true">
              <img src={vichecal} alt="" />
            </span>
            <svg className="contact-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17 L17 7" />
              <path d="M8 7 H17 V16" />
            </svg>
          </div>
        </form>

        <span className="contact-crosshair-center" aria-hidden="true" />
      </div>
    </section>
  );
}
