import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'HR & Workforce Planning | Ceiver', description: 'People and workforce planning solutions by Ceiver.' };

const modules = [
  { title: 'Headcount Planning', desc: 'Role-level headcount models that translate strategic growth plans into hiring, attrition, and internal mobility targets.' },
  { title: 'People Cost Modelling', desc: 'Salary, benefits, and on-costs fully loaded into your P&L with scenario modelling for comp changes.' },
  { title: 'Talent Acquisition Planning', desc: 'Time-to-fill and sourcing cost models that ensure HR and finance agree on hiring timelines.' },
  { title: 'Skills & Capacity Planning', desc: 'Map current capabilities against future needs to identify skills gaps and training investment requirements.' },
];

export default function HrWorkforcePage() {
  return (
    <>
      <PageHero
        title="HR & Workforce Planning"
        subtitle="Unite HR and finance in a single workforce planning platform — from headcount strategy to people cost management."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'HR & Workforce' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {modules.map((m) => (
              <div key={m.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
