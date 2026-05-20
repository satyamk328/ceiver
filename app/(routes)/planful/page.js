import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Planful | Ceiver', description: 'Planful FP&A implementation and advisory services by Ceiver.' };

const useCases = [
  { title: 'Financial Close & Consolidation', desc: 'Accelerate period-end close with automated consolidation and intercompany eliminations.' },
  { title: 'Budgeting & Forecasting', desc: 'Driver-based budgets and rolling forecasts that keep finance agile all year long.' },
  { title: 'Reporting & Analytics', desc: 'Self-service dashboards and board-ready reports built directly on your Planful data.' },
  { title: 'Workforce Planning', desc: 'Headcount modelling integrated with your HRIS for accurate people-cost planning.' },
];

export default function PlanfulPage() {
  return (
    <>
      <PageHero
        title="Planful"
        subtitle="Ceiver helps finance teams implement Planful to close faster, plan smarter, and report with confidence."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Planful' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Planful Use Cases</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">We configure Planful to fit your FP&A processes — not the other way around.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{u.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Get a Planful Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
