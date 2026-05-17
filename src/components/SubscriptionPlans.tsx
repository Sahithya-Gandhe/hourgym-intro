import Link from 'next/link';
import { CalendarRange, Sparkles } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/lib/site';

type SubscriptionPlansProps = {
  showCta?: boolean;
  compact?: boolean;
};

export function SubscriptionPlans({ showCta = true, compact = false }: SubscriptionPlansProps) {
  return (
    <div className={compact ? 'space-y-4' : 'space-y-6'}>
      <div className={compact ? '' : 'max-w-3xl'}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b09a73]">Save with longer plans</p>
        <h2 className={`mt-2 font-bold text-[var(--brand-gold)] ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
          Weekly, monthly &amp; yearly sessions
        </h2>
        <p className={`mt-3 leading-relaxed text-[#d9c7a2] ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}>
          Like our hourly sessions? Book weekly, monthly, or yearly access at partner gyms and enjoy discounted pricing
          compared to paying hour by hour. Plan rates are set by each gym and shown in the app before checkout.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <article
            key={plan.id}
            className={`flex h-full flex-col rounded-2xl border bg-[rgba(20,20,22,.9)] p-5 sm:p-6 ${
              plan.featured
                ? 'border-[var(--brand-gold)] shadow-lg shadow-[rgba(246,204,119,.12)]'
                : 'border-[var(--border)]'
            }`}
          >
            {plan.featured ? (
              <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full border border-[var(--brand-gold)] bg-[rgba(246,204,119,.1)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold)]">
                <Sparkles size={12} />
                Best value
              </span>
            ) : null}
            <div className="flex items-center gap-2">
              <CalendarRange className="shrink-0 text-[var(--brand-gold)]" size={22} />
              <h3 className="text-lg font-bold text-[#f5e4be]">{plan.name}</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-[#b09a73]">{plan.duration}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#d9c7a2]">{plan.description}</p>
            <p className="mt-4 text-sm font-semibold text-[var(--brand-gold)]">{plan.savingsNote}</p>
          </article>
        ))}
      </div>
      {showCta ? (
        <p className="text-sm leading-relaxed text-[#9d8a67]">
          Compare hourly and subscription pricing for each gym in the app. See{' '}
          <Link href="/pricing" className="text-[var(--brand-gold)] underline">
            Pricing &amp; Services
          </Link>{' '}
          for full details.
        </p>
      ) : null}
    </div>
  );
}
