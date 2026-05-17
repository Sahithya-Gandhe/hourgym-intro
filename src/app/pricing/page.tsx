import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SubscriptionPlans } from '@/components/SubscriptionPlans';
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing & Services',
  description:
    'HourGym hourly, weekly, monthly, and yearly gym booking pricing and services in the mobile app.',
};

export default function PricingPage() {
  return (
    <PageShell
      title="Pricing & Services"
      subtitle="What HourGym customers pay for: hourly sessions and discounted weekly, monthly, and yearly plans at partner gyms."
    >
      <div className="space-y-10 lg:space-y-12">
        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 lg:p-8">
          <h2 className="text-xl font-bold text-[#f5e4be] sm:text-2xl">Hourly sessions</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2] sm:text-base">
            Pay per session for the exact date and time you choose. Hourly pricing is ideal for flexible schedules and
            occasional visits. The final amount is shown on the booking summary before Razorpay checkout.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
            <li>Book one or more hourly slots at partner gyms.</li>
            <li>Prices vary by gym, plan, date, time, and availability.</li>
            <li>Unpaid cart items are not confirmed until payment succeeds.</li>
          </ul>
        </section>

        <SubscriptionPlans showCta={false} />

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
            <h2 className="text-xl font-bold text-[#f5e4be]">Services sold in the app</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
              <li>Hourly gym session bookings at partner gyms listed on {SITE_NAME}.</li>
              <li>Weekly, monthly, and yearly subscription access where offered by the gym.</li>
              <li>Reservation of training slots and confirmed gym access for the purchased period.</li>
              <li>Booking history and session details after successful payment.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6">
            <h2 className="text-xl font-bold text-[#f5e4be]">How subscription discounts work</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d9c7a2]">
              <li>Each partner gym sets its own weekly, monthly, and yearly rates in the app.</li>
              <li>Longer plans are priced lower per visit than booking the same hours individually.</li>
              <li>Compare hourly vs subscription pricing on each gym&apos;s listing before you pay.</li>
              <li>Applicable taxes or fees, if any, are shown before you confirm payment.</li>
            </ul>
          </section>
        </div>

        <section className="rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-6 lg:p-8">
          <h2 className="text-xl font-bold text-[#f5e4be]">Payments</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2] sm:text-base">
            All bookings are paid through Razorpay in the mobile app using UPI, cards, and supported wallets.{' '}
            {SITE_NAME} does not charge a separate website checkout fee. Cancellation and refund rules are in our{' '}
            <a href="/refund" className="text-[var(--brand-gold)] underline">
              Refund &amp; Cancellation Policy
            </a>
            . Questions:{' '}
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
