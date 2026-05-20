import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Anaplan Managed Service | Ceiver',
  description: 'Fully managed Anaplan administration and support service.',
};

const tiers = [
  { name: 'Essential', price: 'From $2,500/mo', features: ['Up to 20 hrs model support/mo', 'Bug fixes & minor enhancements', 'Monthly health check', 'Email support (48h SLA)'] },
  { name: 'Professional', price: 'From $5,000/mo', features: ['Up to 50 hrs model support/mo', 'New feature development', 'Weekly health check', 'Priority support (24h SLA)', 'Quarterly roadmap review'] },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited model support hours', 'Dedicated consultant', 'Daily monitoring', '4h SLA', 'COE advisory & governance', 'On-site visits'] },
];

export default function ManagedServicePage() {
  return (
    <>
      <PageHero
        title="Anaplan Managed Service"
        subtitle="Let Ceiver run your Anaplan environment so your team can focus on insights, not model maintenance."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Managed Service' }]}
      />

      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Service Plans</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">Flexible plans sized to your Anaplan footprint and support needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div key={t.name} className={`rounded-xl p-8 border ${i === 1 ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-xl scale-105' : 'bg-white border-[var(--color-border-light)] shadow-sm'}`}>
                <h3 className={`text-xl font-bold mb-1 ${i === 1 ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>{t.name}</h3>
                <p className={`text-sm font-semibold mb-6 ${i === 1 ? 'text-white/80' : 'text-[var(--color-primary)]'}`}>{t.price}</p>
                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${i === 1 ? 'text-white/90' : 'text-[var(--color-text-secondary)]'}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${i === 1 ? 'text-white' : 'text-[var(--color-primary)]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={ROUTES.CONTACT} className={`mt-8 block text-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${i === 1 ? 'bg-white text-[var(--color-primary)] hover:bg-gray-100' : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
