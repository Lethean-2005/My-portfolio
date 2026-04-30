function MonitorIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4v3M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 16c.8.6 1.8.9 3 .9s2.2-.3 3-.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="pricing-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const FEATURES = [
  { label: 'Responsive Website',        Icon: MonitorIcon },
  { label: 'SEO Optimization',          Icon: SearchIcon },
  { label: 'Database Setup',            Icon: DatabaseIcon },
  { label: 'Authentication & Security', Icon: ShieldIcon },
  { label: 'Admin Dashboard',           Icon: DashboardIcon },
  { label: 'Telegram Bot Integration',  Icon: BotIcon },
  { label: '24/7 Email Support',        Icon: MailIcon },
  { label: 'Custom Domain Setup',       Icon: GlobeIcon }
];

const PLANS = [
  { title: 'Starter Plan',      price: '$39', variant: 'small',  features: FEATURES.slice(0, 5) },
  { title: 'Professional Plan', price: '$69', variant: 'medium', features: FEATURES.slice(0, 7) },
  { title: 'Premium Plan',      price: '$99', variant: 'large',  features: FEATURES }
];

function ArrowIcon() {
  return (
    <svg className="pricing-arrow" width="11" height="8" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan }) {
  return (
    <div className={`pricing-card-wrap pricing-${plan.variant}`}>
      <div className={`pricing-card pricing-${plan.variant}`}>
        <div className="pricing-card-inner">
          <h3 className="pricing-plan-name">{plan.title}</h3>
          <ul className="pricing-features">
            {plan.features.map(({ label, Icon }) => (
              <li key={label}>
                <Icon />
                {label}
              </li>
            ))}
          </ul>
          <div className="pricing-price">
            <div className="pricing-amount">{plan.price}</div>
            <div className="pricing-period">per project</div>
          </div>
        </div>
      </div>
      <button type="button" className="pricing-signup">
        Sign up <ArrowIcon />
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-pricing">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="pricingClip" clipPathUnits="objectBoundingBox">
            <path d="M0.0909,0H0.9091A0.0909,0.0625,0,0,1,1,0.0625V0.8281A0.0455,0.0313,0,0,1,0.9545,0.8594H0.6818A0.0455,0.0313,0,0,0,0.6364,0.8906V0.9688A0.0455,0.0313,0,0,1,0.5909,1H0.0909A0.0909,0.0625,0,0,1,0,0.9375V0.0625A0.0909,0.0625,0,0,1,0.0909,0Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="pricing-shell">
        <div className="pricing-cards">
          {PLANS.map((plan) => (
            <PlanCard key={plan.variant} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
