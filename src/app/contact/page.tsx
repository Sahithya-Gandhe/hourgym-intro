import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact HourGym support by email.',
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Reach the HourGym team for support, partnerships, and privacy requests."
    >
      <section className="w-full max-w-3xl rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-5 sm:p-8">
        <h2 className="text-lg font-bold text-[#f5e4be] sm:text-xl">Email support</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2]">
          Send your message to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-[var(--brand-gold)] underline">
            {CONTACT_EMAIL}
          </a>
          . Use a clear subject line such as &quot;Booking help&quot;, &quot;Gym partnership&quot;, or &quot;Privacy
          request&quot; so we can route your note quickly.
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
