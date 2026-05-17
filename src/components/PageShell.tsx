import type { ReactNode } from 'react';
import { SiteContainer } from '@/components/SiteContainer';

type PageShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <SiteContainer className="py-8 sm:py-12 lg:py-14">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl lg:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#d9c7a2] sm:text-base">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </SiteContainer>
  );
}
