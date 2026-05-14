import { ArrowUpRight } from 'lucide-react';
import { ADMIN_LOGIN_URL } from '@/lib/site';

type PortalAccessCardProps = {
  title: string;
  description: string;
  audience: string;
};

export function PortalAccessCard({ title, description, audience }: PortalAccessCardProps) {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-5 shadow-2xl sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b09a73]">{audience}</p>
      <h2 className="mt-2 text-xl font-bold text-[var(--brand-gold)] sm:text-2xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-[#d9c7a2]">{description}</p>
      <a
        href={ADMIN_LOGIN_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[#b6221a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(230,57,45,.35)] transition hover:from-[#f04335] hover:to-[var(--brand-red)] sm:w-auto"
      >
        Open secure login
        <ArrowUpRight size={16} />
      </a>
      <p className="mt-4 text-xs leading-relaxed text-[#9d8a67]">
        You will be redirected to the HourGym operations console at{' '}
        <span className="break-all text-[#d9c7a2]">{ADMIN_LOGIN_URL}</span>.
      </p>
    </section>
  );
}
