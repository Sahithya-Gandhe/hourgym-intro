import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { BUSINESS_LOCATION, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact HourGym customer support by email for bookings, payments, and privacy requests.',
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Reach the HourGym team for customer support, partnerships, and privacy requests."
    >
      <section className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-5 sm:p-8">
        <h2 className="text-lg font-bold text-[#f5e4be] sm:text-xl">Contact details</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
          HourGym is a customer platform for hourly gym bookings in {BUSINESS_LOCATION}.
        </p>
        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[rgba(9,9,9,0.55)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b09a73]">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 block break-all text-base font-semibold text-[var(--brand-gold)] underline"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Use this email for booking help, payment questions, refund requests, privacy requests, and partnership
            inquiries.
          </p>
        </div>
        <h2 className="mt-8 text-lg font-bold text-[#f5e4be] sm:text-xl">How to reach us</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
          Send your message with a clear subject line such as &quot;Booking help&quot;, &quot;Payment issue&quot;,
          &quot;Refund request&quot;, &quot;Gym partnership&quot;, or &quot;Privacy request&quot; so we can route your
          note quickly.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
          <li>Include the mobile number or email tied to your HourGym account when asking about bookings or payments.</li>
          <li>For payment issues, mention the gym name, booking date, and whether checkout completed in Razorpay.</li>
          <li>For account deletion or data requests, state that you want your HourGym profile removed or corrected.</li>
          <li>Partners and gym owners should include gym name, city, and the best callback number.</li>
        </ul>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=HourGym%20support`}
          className="mt-8 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[#b6221a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(230,57,45,.35)] sm:w-auto"
        >
          Email {CONTACT_EMAIL}
        </a>
      </section>
    </PageShell>
  );
}
