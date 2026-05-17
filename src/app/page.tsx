import Link from 'next/link';
import {
  CalendarClock,
  CreditCard,
  MapPin,
  ShieldCheck,
  Smartphone,
  Store,
} from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { SiteContainer } from '@/components/SiteContainer';
import { SubscriptionPlans } from '@/components/SubscriptionPlans';
import { CONTACT_EMAIL, LEGAL_LINKS, SITE_NAME } from '@/lib/site';

const features = [
  {
    icon: MapPin,
    title: 'Discover nearby gyms',
    copy: 'Browse partner gyms, compare hourly and subscription plans, and see distance when location is enabled.',
  },
  {
    icon: CalendarClock,
    title: 'Book by the hour',
    copy: 'Reserve training slots that fit your schedule without long-term memberships.',
  },
  {
    icon: CreditCard,
    title: 'Secure Razorpay checkout',
    copy: 'Pay for confirmed gym sessions in the mobile app with UPI, cards, and other Razorpay methods enabled on your account.',
  },
  {
    icon: Smartphone,
    title: 'Cart and bookings',
    copy: 'Unpaid sessions stay in your cart until payment succeeds; confirmed bookings appear in My Bookings.',
  },
  {
    icon: ShieldCheck,
    title: 'Account controls',
    copy: 'Update your profile, review legal policies, contact support, and delete your account in-app.',
  },
  {
    icon: Store,
    title: 'Verified partner gyms',
    copy: 'HourGym partners with gyms that publish hourly and subscription plans, slot availability, and on-site access rules.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 h-72 w-72 rounded-full bg-[rgba(230,57,45,0.15)] blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-1/4 -right-1/4 h-72 w-72 rounded-full bg-[rgba(246,204,119,0.1)] blur-3xl sm:h-96 sm:w-96" />
        </div>
        <SiteContainer className="relative grid w-full gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b09a73] sm:text-sm sm:tracking-[0.25em]">
              India-first fitness booking
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--brand-gold)] sm:text-4xl lg:text-5xl">
              Book hourly gym access with {SITE_NAME}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#e8d7b4] sm:text-lg">
              {SITE_NAME} is a customer mobile app for discovering partner gyms, reserving hourly training slots, and
              paying securely through Razorpay. Choose weekly, monthly, or yearly plans at a discounted price if you
              train regularly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/pricing"
                className="inline-flex justify-center rounded-xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] px-5 py-3 text-sm font-semibold text-[#f5e4be] transition hover:border-[var(--brand-gold)]"
              >
                View pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[#b6221a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(230,57,45,.35)]"
              >
                Contact support
              </Link>
            </div>
          </div>
          <div className="min-w-0 rounded-3xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 text-center shadow-2xl sm:p-8">
            <div className="flex justify-center">
              <BrandLogo size="lg" priority />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#d9c7a2]">
              Hourly sessions plus weekly, monthly, and yearly plans at partner gyms — all in one app.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[rgba(9,9,9,0.55)] p-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b09a73]">What we sell</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
                <li>Hourly gym session bookings at partner gyms.</li>
                <li>Weekly, monthly, and yearly plans at discounted rates vs hourly.</li>
                <li>Online payment for confirmed bookings through Razorpay.</li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-[#f5e4be]">
              Support:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-[var(--brand-gold)] underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--border)] bg-[rgba(15,15,17,0.5)] py-12 sm:py-16">
        <SiteContainer>
          <SubscriptionPlans />
        </SiteContainer>
      </section>

      <section className="py-8 sm:py-10">
        <SiteContainer>
          <div className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.82)] p-5 sm:p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b09a73]">Customer policies</p>
            <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2] sm:text-base">
              Privacy, terms, refunds, and support contact details are published on this website for customers and
              payment partners reviewing the HourGym service.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/pricing"
                className="inline-flex justify-center rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[#f5e4be] hover:border-[var(--brand-gold)]"
              >
                Pricing &amp; Services
              </Link>
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex justify-center rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[#f5e4be] hover:border-[var(--brand-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="pb-12 sm:pb-16">
        <SiteContainer>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl">What you can do</h2>
            <p className="mt-3 text-sm text-[#d9c7a2] sm:text-base">
              HourGym is designed for flexible gym access, subscription savings, transparent checkout, and clear
              customer support.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.82)] p-5 sm:p-6"
              >
                <feature.icon className="text-[var(--brand-gold)]" size={24} />
                <h3 className="mt-4 text-base font-bold text-[#f5e4be] sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#d9c7a2]">{feature.copy}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
