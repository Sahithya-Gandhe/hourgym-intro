export const SITE_NAME = 'HourGym';

/** Served from `public/logo.png`, synced from the project-root `logo.png`. */
export const LOGO_SRC = '/logo.png';

export const CONTACT_EMAIL = 'hourgymapp@gmail.com';

export const ADMIN_LOGIN_URL = 'https://hourgym-wcpg.onrender.com/login';

export const API_BASE_URL = 'https://hourgym-wcpg.onrender.com';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/admin', label: 'Admin Panel' },
  { href: '/gym-owner', label: 'Gym Owner' },
] as const;
