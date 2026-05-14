import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PortalAccessCard } from '@/components/PortalAccessCard';

export const metadata: Metadata = {
  title: 'Gym Owner Login',
  description: 'Access the HourGym gym owner portal.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GymOwnerPage() {
  return (
    <PageShell
      title="Gym Owner Login"
      subtitle="Partner gym owners use the same secure HourGym operations console to manage listings and booking activity."
    >
      <PortalAccessCard
        audience="Gym owners"
        title="Gym Owner Portal"
        description="Open the HourGym login page and choose the Gym Owner option to sign in with your registered gym name and owner mobile number."
      />
    </PageShell>
  );
}
