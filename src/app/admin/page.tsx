import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PortalAccessCard } from '@/components/PortalAccessCard';

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Access the HourGym admin command center.',
};

export default function AdminPage() {
  return (
    <PageShell
      title="Admin Panel"
      subtitle="Authorized HourGym operators manage gyms, users, bookings, finance, and reviews from the web console."
    >
      <PortalAccessCard
        audience="HourGym administrators"
        title="Admin Command Center"
        description="Sign in with your admin credentials to open the dashboard, manage partner gyms, review bookings, and monitor platform operations."
      />
    </PageShell>
  );
}
