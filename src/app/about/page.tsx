import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { BUSINESS_LOCATION, CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME}, the customer mobile app, and hourly gym bookings in India.`,
};

export default function AboutPage() {
  return (
    <PageShell
      title="About HourGym"
      subtitle="HourGym is an India-first customer platform for discovering partner gyms and booking hourly training sessions."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">The mobile app</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Customers use the HourGym mobile app to explore partner gyms, compare hourly plans, add sessions to a cart,
            pay through Razorpay, and manage confirmed bookings. Optional location access helps show nearby gyms and
            distance estimates; the app remains usable if permission is denied.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            The Android app is being prepared for Google Play publication. This website is the public customer landing
            page for the forthcoming release.
          </p>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">What we sell</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
            <li>Hourly gym session bookings at partner gyms.</li>
            <li>Slot reservation and booking management for customers.</li>
            <li>Online payment collection for confirmed sessions through Razorpay.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 lg:col-span-2">
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
