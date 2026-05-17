import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SubscriptionPlans } from '@/components/SubscriptionPlans';
import { BUSINESS_LOCATION, CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME}, hourly and subscription gym bookings, and the mobile app in India.`,
};

export default function AboutPage() {
  return (
    <PageShell
      title="About HourGym"
      subtitle="HourGym is an India-first customer platform for hourly gym bookings and discounted weekly, monthly, and yearly plans."
    >
      <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
            <h2 className="text-xl font-bold text-[#f5e4be]">The mobile app</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
              Customers use the HourGym mobile app to explore partner gyms, compare hourly and subscription plans, add
              sessions to a cart, pay through Razorpay, and manage confirmed bookings. Optional location access helps
              show nearby gyms and distance estimates; the app remains usable if permission is denied.
            </p>
          </section>
          <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
            <h2 className="text-xl font-bold text-[#f5e4be]">What we sell</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
              <li>Hourly gym session bookings at partner gyms.</li>
              <li>Weekly, monthly, and yearly plans at discounted rates vs hourly booking.</li>
              <li>Online payment collection for confirmed bookings through Razorpay.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
              See <a href="/pricing" className="text-[var(--brand-gold)] underline">Pricing &amp; Services</a> for
              full pricing details.
            </p>
          </section>
        </div>

        <SubscriptionPlans compact />

        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">Customer support</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            {SITE_NAME} operates in {BUSINESS_LOCATION}. For booking, payment, privacy, or refund questions, contact{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--brand-gold)] underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
