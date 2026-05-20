import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Executive S&OP / IBP | Ceiver', description: 'Integrated Business Planning and S&OP solutions by Ceiver.' };

const steps = [
  { num: '01', title: 'Demand Review', desc: 'Unconstrained demand consensus across sales, marketing, and operations.' },
  { num: '02', title: 'Supply Review', desc: 'Capacity and supply feasibility assessment against the demand plan.' },
  { num: '03', title: 'Financial Reconciliation', desc: 'Revenue, margin, and cash flow projection aligned to the operating plan.' },
  { num: '04', title: 'Executive Review', desc: 'Leadership decision session with scenario trade-offs and approved plan.' },
  { num: '05', title: 'Monitor & Adjust', desc: 'Continuous tracking of actuals vs plan with early-warning exception reporting.' },
];

export default function ExecutiveSopIbpPage() {
  return (
    <>
      <PageHero
        title="Executive S&OP / IBP"
        subtitle="Ceiver designs and enables Integrated Business Planning processes that break functional silos and align your organisation around one set of numbers."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING }, { label: 'Executive S&OP / IBP' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">The IBP Cycle</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">A structured monthly rhythm that connects operational planning to financial performance management.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-[var(--color-border-light)]" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.num} className="relative flex gap-6 lg:pl-20">
                  <div className="hidden lg:flex absolute left-0 w-16 h-16 rounded-full bg-[var(--color-primary)] text-white items-center justify-center font-bold text-lg shrink-0">{s.num}</div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex-1">
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{s.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Design Your IBP Process</Link>
          </div>
        </div>
      </section>
    </>
  );
}
