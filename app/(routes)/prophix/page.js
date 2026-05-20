import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Prophix | Ceiver', description: 'Prophix CPM implementation and consulting by Ceiver.' };

const capabilities = [
  'Budgeting & Planning', 'Financial Consolidation', 'Financial Reporting',
  'Workforce Planning', 'Capital Planning', 'Profitability Analysis',
];

export default function ProphixPage() {
  return (
    <>
      <PageHero
        title="Prophix"
        subtitle="Ceiver's Prophix practice helps mid-market finance teams modernise their corporate performance management with fast, cost-effective deployments."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Prophix' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Prophix Capabilities We Implement</h2>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">From initial scoping to post-go-live support, Ceiver covers the full Prophix delivery lifecycle for growing organisations.</p>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border-light)]">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Why Ceiver for Prophix?</h3>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold">01</span><span>Certified Prophix consultants with deep FP&A domain knowledge</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold">02</span><span>Rapid deployment methodology — go live in weeks, not quarters</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-primary)] font-bold">03</span><span>Proven integration patterns for ERP, payroll, and BI tools</span></li>
              </ul>
              <Link href={ROUTES.CONTACT} className="mt-6 block text-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-sm">Book a Discovery Call</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
