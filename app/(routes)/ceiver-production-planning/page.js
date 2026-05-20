import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Production Planning | Ceiver', description: 'Ceiver production planning solution for manufacturers.' };

const features = [
  { title: 'Master Production Schedule', desc: 'Translate demand plans into feasible production schedules respecting machine, labour, and material constraints.' },
  { title: 'Capacity Planning', desc: 'Rough-cut and detailed capacity planning to identify and resolve bottlenecks before they happen.' },
  { title: 'Material Requirements', desc: 'MRP-style material requirement calculations integrated with your ERP and inventory system.' },
  { title: 'Changeover Optimisation', desc: 'Sequence production runs to minimise changeover time and maximise line throughput.' },
  { title: 'What-If Simulations', desc: 'Model the impact of rush orders, machine breakdowns, and yield variances on your schedule.' },
  { title: 'KPI Dashboards', desc: 'OEE, attainment, and schedule adherence metrics in real time for plant management.' },
];

export default function ProductionPlanningPage() {
  return (
    <>
      <PageHero
        title="Ceiver Production Planning"
        subtitle="Factory-floor precision meets enterprise planning — Ceiver Production Planning bridges the gap between demand signals and manufacturing execution."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING }, { label: 'Production Planning' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Core Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Schedule a Factory Walkthrough</Link>
          </div>
        </div>
      </section>
    </>
  );
}
