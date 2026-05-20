import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Demand & Inventory Planning | Ceiver', description: 'Ceiver demand and inventory planning solution.' };

const features = [
  { title: 'Statistical Forecasting', desc: 'Automated model selection across exponential smoothing, ARIMA, and machine-learning algorithms.' },
  { title: 'Consensus Demand Process', desc: 'Structured workflow to blend statistical, commercial, and market intelligence inputs.' },
  { title: 'Inventory Optimisation', desc: 'Safety stock and target inventory calculations that balance service level against working capital.' },
  { title: 'Exception Management', desc: 'Intelligent alerts surface only the decisions that need human judgement.' },
  { title: 'What-If Scenarios', desc: 'Model the demand and inventory impact of promotions, new launches, and supply disruptions.' },
  { title: 'Performance Analytics', desc: 'Forecast accuracy, bias, and inventory KPI dashboards that drive continuous improvement.' },
];

export default function DemandInventoryPlanningPage() {
  return (
    <>
      <PageHero
        title="Ceiver Demand & Inventory Planning"
        subtitle="Intelligent demand sensing and inventory optimisation that improves service levels while reducing working capital."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING }, { label: 'Demand & Inventory Planning' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Platform Features</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={ROUTES.ON_DEMAND_DEMO} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Watch On-Demand Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
