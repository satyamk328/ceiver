import PageHero from '@/components/common/PageHero';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'On-Demand Demo | Ceiver', description: 'Watch Ceiver product demos on demand — no sign-up required.' };

const demos = [
  { title: 'Anaplan Connected Planning — Full Platform Tour', duration: '22 min', category: 'Anaplan' },
  { title: 'Ceiver Demand & Inventory Planning — Live Build', duration: '18 min', category: 'Supply Chain' },
  { title: 'Pigment Revenue Planning — End-to-End Walkthrough', duration: '15 min', category: 'Pigment' },
  { title: 'Executive S&OP Dashboard — Live Demo', duration: '12 min', category: 'S&OP/IBP' },
  { title: 'Fazo AI Forecasting — Accuracy Deep-Dive', duration: '20 min', category: 'Fazo' },
  { title: 'Planful Financial Close — Consolidation Demo', duration: '16 min', category: 'Planful' },
];

export default function OnDemandDemoPage() {
  return (
    <>
      <PageHero
        title="On-Demand Demos"
        subtitle="See Ceiver solutions in action — watch at your own pace, no sales call required."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Resource' }, { label: 'On-Demand Demo' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((d) => (
              <div key={d.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow cursor-pointer group">
                <div className="bg-[var(--color-bg-dark)] h-36 flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <span className="absolute top-3 right-3 text-xs bg-black/40 text-white px-2 py-1 rounded">{d.duration}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{d.category}</span>
                  <h3 className="mt-1 font-semibold text-[var(--color-text-primary)] text-sm leading-snug">{d.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
