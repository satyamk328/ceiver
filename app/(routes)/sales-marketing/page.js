import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Sales & Marketing Planning | Ceiver', description: 'Connected sales and marketing planning solutions by Ceiver.' };

const solutions = [
  { title: 'Revenue Planning', desc: 'Top-down and bottom-up revenue models that align sales targets to corporate strategy.' },
  { title: 'Territory & Quota Management', desc: 'Data-driven territory design and quota allocation that motivates the right behaviours.' },
  { title: 'Pipeline Forecasting', desc: 'AI-assisted pipeline coverage and close-rate analytics integrated with your CRM.' },
  { title: 'Marketing ROI', desc: 'Campaign budget allocation and multi-touch attribution models that prove marketing impact.' },
  { title: 'Sales Capacity Planning', desc: 'Headcount and ramp models to ensure you always have the right reps in the right markets.' },
  { title: 'Incentive Compensation', desc: 'Automated commission calculations and what-if modelling for comp plan design.' },
];

export default function SalesMarketingPage() {
  return (
    <>
      <PageHero
        title="Sales & Marketing Planning"
        subtitle="Break the silos between revenue and marketing with connected planning models that drive pipeline, quota, and ROI in one platform."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Solution' }, { label: 'Sales & Marketing' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Solution Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:border-[var(--color-primary)] transition-colors">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
