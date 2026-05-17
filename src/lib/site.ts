export const SITE_NAME = 'HourGym';

/** Served from `public/logo.png`, synced from the project-root `logo.png`. */
export const LOGO_SRC = '/logo.png';

export const CONTACT_EMAIL = 'hourgymapp@gmail.com';

export const BUSINESS_LOCATION = 'Telangana, India';

export const ADMIN_LOGIN_URL = 'https://hourgym-wcpg.onrender.com/login';

export const API_BASE_URL = 'https://hourgym-wcpg.onrender.com';

export const CUSTOMER_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing & Services' },
  { href: '/contact', label: 'Contact' },
] as const;

export const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/refund', label: 'Refund & Cancellation Policy' },
] as const;

export const SUBSCRIPTION_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly plan',
    duration: '7 days of gym access',
    description:
      'Book a full week of training at a partner gym. Ideal if you train several times per week and want a lower per-session cost than hourly booking.',
    savingsNote: 'Discounted vs paying for the same hours individually.',
    featured: false,
  },
  {
    id: 'monthly',
    name: 'Monthly plan',
    duration: '30 days of gym access',
    description:
      'Reserve a month of access at participating gyms. Monthly plans bundle more sessions at a reduced rate compared to hourly checkout.',
    savingsNote: 'Popular choice for regular gym-goers.',
    featured: false,
  },
  {
    id: 'yearly',
    name: 'Yearly plan',
    duration: '12 months of gym access',
    description:
      'Commit to a year at partner gyms for the deepest savings on access. Yearly pricing is published per gym in the app when available.',
    savingsNote: 'Best long-term value vs hourly sessions.',
    featured: true,
  },
] as const;
