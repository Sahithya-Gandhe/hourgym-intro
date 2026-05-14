import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PrivacyPolicyContent } from '@/content/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HourGym privacy policy and data practices.',
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="How HourGym collects, uses, retains, and protects personal information."
    >
      <PrivacyPolicyContent />
    </PageShell>
  );
}
