import type { ReactNode } from 'react';

type PageShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-14">
      <div className="mb-6 max-w-3xl sm:mb-8">
        <h1 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl lg:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-3 text-sm leading-relaxed text-[#d9c7a2] sm:text-base">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
