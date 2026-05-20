import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Supply Planning | Ceiver', description: 'Constraint-aware supply planning solution by Ceiver.' };

export default function SupplyPlanningPage() {
  return (
    <>
      <PageHero
        title="Supply Planning"
        subtitle="Constraint-aware supply plans that optimise sourcing, production, and distribution to meet demand at minimum cost."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING }, { label: 'Supply Planning' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">Supply Plans That Actually Work</h2>
              <div className="space-y-6">
                {[
                  { t: 'Capacity Modelling', d: 'Model supplier, manufacturing, and logistics constraints to produce feasible plans — not just unconstrained wishes.' },
                  { t: 'Multi-Source Optimisation', d: 'Allocate demand across multiple supply sources based on cost, lead time, and reliability.' },
                  { t: 'Risk & Disruption Modelling', d: 'Scenario plans for supplier disruptions, logistics failures, and demand spikes.' },
                  { t: 'Supplier Collaboration', d: 'Share plans and receive capacity confirmations through a supplier-facing planning portal.' },
                ].map((item) => (
                  <div key={item.t} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">{item.t}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={ROUTES.CONTACT} className="mt-8 inline-block px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Talk to a Supply Planning Expert</Link>
            </div>
            <div className="bg-[var(--color-bg-dark)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Typical Results</h3>
              {[['25%', 'Reduction in supply costs'], ['40%', 'Fewer stock-outs'], ['50%', 'Faster plan cycle times'], ['15%', 'Improvement in on-time delivery']].map(([val, label]) => (
                <div key={label} className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-[var(--color-primary-light)]">{val}</span>
                    <span className="text-sm text-white/70">{label}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full bg-[var(--color-primary)] rounded-full" style={{ width: val }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
