import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Pigment Planning | Ceiver', description: 'Ceiver Pigment implementation and consulting services.' };

const features = [
  { title: 'Lightning-Fast Modelling', desc: 'Build enterprise planning models in hours, not months, with Pigment\'s intuitive drag-and-drop interface.' },
  { title: 'Real-Time Collaboration', desc: 'Finance, sales, and ops teams plan together in a single source of truth with live data synchronisation.' },
  { title: 'Native Integrations', desc: 'Pre-built connectors to Salesforce, NetSuite, Workday, and 200+ data sources.' },
  { title: 'Scenario Planning', desc: 'Model unlimited what-if scenarios and share them instantly across your organisation.' },
];

export default function PigmentPage() {
  return (
    <>
      <PageHero
        title="Pigment Planning"
        subtitle="The modern business planning platform — and Ceiver's consultants bring the expertise to unlock its full potential for your organisation."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Pigment' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Why Pigment?</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">Pigment is redefining business planning with a platform built for speed, collaboration, and scale. Ceiver's certified Pigment consultants help you implement, customise, and optimise your environment from day one.</p>
              <Link href={ROUTES.CONTACT} className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-sm">Talk to a Pigment Expert</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-[var(--color-border-light)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
