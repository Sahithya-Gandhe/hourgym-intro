import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { TermsAndConditionsContent } from '@/content/terms-and-conditions';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'HourGym terms and conditions for customers using the mobile app and website.',
};

export default function TermsPage() {
  return (
    <PageShell
      title="Terms & Conditions"
      subtitle="Customer terms for using HourGym to discover partner gyms and book hourly gym sessions."
    >
      <TermsAndConditionsContent />
    </PageShell>
  );
}
