import Link from 'next/link';
import {
  CalendarClock,
  CreditCard,
  Dumbbell,
  MapPin,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { SITE_NAME } from '@/lib/site';

const features = [
  {
    icon: MapPin,
    title: 'Discover nearby gyms',
    copy: 'Browse partner gyms, compare hourly plans, and see distance when location is enabled.',
  },
  {
    icon: CalendarClock,
    title: 'Book by the hour',
    copy: 'Reserve training slots that fit your schedule without long-term memberships.',
  },
  {
    icon: CreditCard,
    title: 'Secure Razorpay checkout',
    copy: 'Pay for real-world gym sessions with UPI, cards, and other Razorpay methods enabled on your account.',
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
    icon: Dumbbell,
    title: 'Built for partners',
    copy: 'Gym owners and HourGym operators use dedicated consoles to manage listings, slots, and operations.',
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
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b09a73] sm:text-sm sm:tracking-[0.25em]">
              India-first fitness booking
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--brand-gold)] sm:text-4xl lg:text-5xl">
              Train on your schedule with {SITE_NAME}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#e8d7b4] sm:text-lg">
              HourGym connects you with partner gyms for hourly training sessions. Explore gyms, add sessions to your
              cart, pay securely, and manage bookings from the mobile app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/about"
                className="inline-flex justify-center rounded-xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] px-5 py-3 text-sm font-semibold text-[#f5e4be] transition hover:border-[var(--brand-gold)]"
              >
                Learn more
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
              Mobile app for customers. Web consoles for HourGym administrators and gym owners.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/admin"
                className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[#f5e4be] hover:border-[var(--brand-gold)]"
              >
                Admin panel
              </Link>
              <Link
                href="/gym-owner"
                className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[#f5e4be] hover:border-[var(--brand-gold)]"
              >
                Gym owner login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl">What you can do</h2>
          <p className="mt-3 text-sm text-[#d9c7a2] sm:text-base">
            HourGym is designed for flexible gym access, transparent checkout, and partner operations in one ecosystem.
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
      </section>
    </>
  );
}
