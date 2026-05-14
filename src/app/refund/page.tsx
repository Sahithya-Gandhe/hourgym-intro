import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { RefundPolicyContent } from '@/content/refund-policy';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'HourGym refund, cancellation, and payment dispute policy for hourly gym bookings.',
};

export default function RefundPage() {
  return (
    <PageShell
      title="Refund & Cancellation Policy"
      subtitle="How HourGym handles cancellations, failed payments, refunds, and non-refundable bookings."
    >
      <RefundPolicyContent />
    </PageShell>
  );
}
