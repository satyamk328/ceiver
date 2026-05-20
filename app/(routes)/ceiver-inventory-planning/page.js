import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Inventory Planning | Ceiver', description: 'Ceiver inventory planning and optimisation solution.' };

const metrics = [
  { value: '30%', label: 'Average inventory reduction' },
  { value: '98%+', label: 'Service level targets achieved' },
  { value: '2×', label: 'Faster replenishment cycles' },
  { value: '60%', label: 'Reduction in manual exceptions' },
];

export default function InventoryPlanningPage() {
  return (
    <>
      <PageHero
        title="Ceiver Inventory Planning"
        subtitle="Right stock, right place, right time — our inventory planning solution gives you precision control over your entire inventory network."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING }, { label: 'Inventory Planning' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-[var(--color-border-light)]">
                <div className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">{m.value}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border-light)] max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">How It Works</h2>
            <ol className="space-y-4">
              {['Connect your ERP, WMS, and demand signals', 'Ceiver calculates optimal safety stock and reorder points per SKU-location', 'Automated replenishment suggestions are pushed to your buyers', 'Performance dashboards close the loop on fill rates and turns'].map((step, i) => (
                <li key={i} className="flex gap-4 text-sm text-[var(--color-text-secondary)]">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href={ROUTES.CONTACT} className="mt-8 inline-block px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-sm">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
