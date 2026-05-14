import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { API_BASE_URL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME}, the mobile app, and the operations website.`,
};

export default function AboutPage() {
  return (
    <PageShell
      title="About HourGym"
      subtitle="HourGym is an India-first platform for discovering partner gyms and booking hourly training sessions."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">The mobile app</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Customers use the HourGym mobile app to explore gyms, compare hourly plans, add sessions to a cart, pay
            through Razorpay, and manage confirmed bookings. Optional location access helps show nearby gyms and
            distance estimates; the app remains usable if permission is denied.
          </p>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">The website</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            This landing site introduces HourGym, publishes legal and support information, and routes operators to the
            secure web console. The production API and admin experience are hosted at{' '}
            <span className="text-[var(--brand-gold)]">{API_BASE_URL}</span>.
          </p>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-[#f5e4be]">Who we serve</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
            <li>Customers booking flexible gym access by the hour.</li>
            <li>Gym owners managing partner listings, slots, and booking status.</li>
            <li>HourGym administrators overseeing gyms, users, bookings, finance, and reviews.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
