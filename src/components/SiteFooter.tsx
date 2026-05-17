import Link from 'next/link';
import { SiteContainer } from '@/components/SiteContainer';
import { CONTACT_EMAIL, CUSTOMER_NAV_LINKS, LEGAL_LINKS, SITE_NAME } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(15,15,17,0.95)]">
      <SiteContainer className="grid gap-8 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="min-w-0 lg:col-span-1">
          <p className="text-lg font-bold text-[var(--brand-gold)]">{SITE_NAME}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#c9b58a]">
            Hourly, weekly, monthly, and yearly gym bookings at partner gyms across India.
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f5e4be]">Explore</p>
          <ul className="mt-3 space-y-2">
            {CUSTOMER_NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#d9c7a2] hover:text-[var(--brand-gold)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f5e4be]">Legal</p>
          <ul className="mt-3 space-y-2">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#d9c7a2] hover:text-[var(--brand-gold)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f5e4be]">Contact</p>
          <p className="mt-3 text-sm text-[#d9c7a2]">
            Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-[var(--brand-gold)] underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </SiteContainer>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[#9d8a67]">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
