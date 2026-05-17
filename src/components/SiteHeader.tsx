import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { SiteContainer } from '@/components/SiteContainer';
import { CUSTOMER_NAV_LINKS, SITE_NAME } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(9,9,9,0.88)] backdrop-blur-xl">
      <SiteContainer className="flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <BrandLogo size="sm" priority />
          <span className="truncate text-lg font-bold text-[var(--brand-gold)] sm:text-xl">{SITE_NAME}</span>
        </Link>
        <nav className="hidden flex-wrap items-center justify-end gap-1 lg:flex">
          {CUSTOMER_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm font-semibold text-[#d9c7a2] transition hover:bg-[rgba(246,204,119,.08)] hover:text-[var(--brand-gold)] xl:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-semibold text-[#f5e4be]">
            Menu
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,16rem)] rounded-xl border border-[var(--border)] bg-[rgba(20,20,22,.98)] p-2 shadow-2xl">
            {CUSTOMER_NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#d9c7a2] hover:bg-[rgba(246,204,119,.08)] hover:text-[var(--brand-gold)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </SiteContainer>
    </header>
  );
}
