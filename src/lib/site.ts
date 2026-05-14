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
