import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing & Services',
  description: 'HourGym pricing, services, and what customers pay for through the mobile app.',
};

export default function PricingPage() {
  return (
    <PageShell
      title="Pricing & Services"
      subtitle="A clear summary of what HourGym customers pay for when booking hourly gym sessions in the mobile app."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">Services sold in the app</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
            <li>Hourly gym session bookings at partner gyms listed on {SITE_NAME}.</li>
            <li>Reservation of a specific training slot for the date and time you select.</li>
            <li>Confirmed access to the booked partner gym for the purchased session window.</li>
            <li>Booking history and session details inside the mobile app after successful payment.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
          <h2 className="text-xl font-bold text-[#f5e4be]">How pricing works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
            <li>Each partner gym publishes hourly plans and slot pricing inside the app.</li>
            <li>Prices may vary by gym, plan, date, time, and availability.</li>
            <li>The final payable amount is shown on the booking summary before Razorpay checkout.</li>
            <li>Applicable taxes or fees, if any, are displayed before you confirm payment.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-[#f5e4be]">What you are paying for</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Customers pay for confirmed hourly gym access at a partner gym, not for a long-term membership sold by
            {SITE_NAME}. Payment is collected only after you review the gym, session time, and total amount in the app.
            Unpaid cart items are not confirmed bookings.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Payments are processed through Razorpay using the methods enabled on your account, such as UPI, cards, and
            supported wallets. {SITE_NAME} does not charge a separate website checkout fee for these in-app bookings.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
            Cancellation and refund eligibility are described in our{' '}
            <a href="/refund" className="text-[var(--brand-gold)] underline">
              Refund &amp; Cancellation Policy
            </a>
            . Questions about pricing or charges can be sent to{' '}
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
