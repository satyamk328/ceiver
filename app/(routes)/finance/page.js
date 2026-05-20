import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Finance Planning | Ceiver', description: 'Connected financial planning and analysis solutions by Ceiver.' };

const capabilities = [
  { title: 'Long-Range Planning', desc: '3–5 year strategic financial models that translate business strategy into P&L, balance sheet, and cash flow projections.' },
  { title: 'Annual Budgeting', desc: 'Driver-based budgeting with automated rollups, version control, and workflow-driven approvals.' },
  { title: 'Rolling Forecasts', desc: 'Continuous reforecasting that replaces the annual budget cycle with agile, always-current projections.' },
  { title: 'Management Reporting', desc: 'Self-service financial dashboards and board packs built on a single source of truth.' },
  { title: 'Profitability Analysis', desc: 'Customer, product, and channel P&Ls with fully loaded cost allocations.' },
  { title: 'Cash Flow Planning', desc: 'Direct and indirect cash flow models integrated with your working capital assumptions.' },
];

export default function FinancePage() {
  return (
    <>
      <PageHero
        title="Finance Planning"
        subtitle="Connected FP&A solutions that give finance the speed and insight to be a true business partner — not just a reporting function."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Finance' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Finance Planning Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:border-[var(--color-primary)] transition-colors">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Talk to Our Finance Practice</Link>
          </div>
        </div>
      </section>
    </>
  );
}
