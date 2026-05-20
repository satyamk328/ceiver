import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Fazo | Ceiver', description: 'Fazo — AI-powered forecasting by Ceiver.' };

export default function FazoPage() {
  return (
    <>
      <PageHero
        title="Fazo"
        subtitle="Fazo is Ceiver's AI-powered forecasting engine — delivering statistically rigorous, explainable predictions for demand, revenue, and operations."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Beyond Consulting' }, { label: 'Fazo' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Auto Model Selection', desc: 'Fazo evaluates dozens of statistical and ML models per series and selects the best automatically.' },
              { title: 'Explainable AI', desc: 'Every forecast comes with driver decomposition so planners understand — and trust — the output.' },
              { title: 'Continuous Learning', desc: 'Models retrain on new actuals automatically, improving accuracy over time without manual intervention.' },
              { title: 'Anaplan Integration', desc: 'Native data exchange with Anaplan — publish Fazo forecasts directly into your planning models.' },
              { title: 'Hierarchy Reconciliation', desc: 'Forecasts are reconciled across product, geography, and customer hierarchies automatically.' },
              { title: 'Accuracy Tracking', desc: 'Built-in MAPE, bias, and value-at-risk dashboards to monitor and improve forecast quality.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.ON_DEMAND_DEMO} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">See Fazo in Action</Link>
          </div>
        </div>
      </section>
    </>
  );
}
