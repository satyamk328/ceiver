import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Supply Chain Planning | Ceiver', description: 'End-to-end supply chain planning solutions by Ceiver.' };

const subSolutions = [
  { title: 'Demand & Inventory Planning', href: ROUTES.DEMAND_INVENTORY_PLANNING, desc: 'Statistical forecasting and inventory optimisation across your entire network.' },
  { title: 'Inventory Planning', href: ROUTES.INVENTORY_PLANNING, desc: 'Safety stock, reorder points, and multi-echelon inventory models.' },
  { title: 'Supply Planning', href: ROUTES.SUPPLY_PLANNING, desc: 'Constraint-aware supply plans that balance capacity, cost, and service levels.' },
  { title: 'Production Planning', href: ROUTES.PRODUCTION_PLANNING, desc: 'Factory-level production schedules aligned to demand and capacity constraints.' },
  { title: 'Executive S&OP / IBP', href: ROUTES.EXECUTIVE_SOP_IBP, desc: 'Integrated Business Planning processes that align finance, supply, and demand in one cycle.' },
];

export default function SupplyChainPlanningPage() {
  return (
    <>
      <PageHero
        title="Supply Chain Planning"
        subtitle="Build an end-to-end planning capability that connects demand signals, inventory positions, supply capacity, and financial targets."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Our Supply Chain Solutions</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">Five specialised modules that can be deployed independently or as a fully integrated planning suite.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subSolutions.map((s) => (
              <Link key={s.title} href={s.href} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:shadow-md transition-all group">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
