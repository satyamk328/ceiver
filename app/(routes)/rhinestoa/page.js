import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Rhinestoa | Ceiver', description: 'Rhinestoa — a Ceiver venture.' };

export default function RhinstoaPage() {
  return (
    <>
      <PageHero
        title="Rhinestoa"
        subtitle="Rhinestoa is Ceiver's dedicated data engineering and analytics platform, built for organisations that need more than off-the-shelf BI."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Beyond Consulting' }, { label: 'Rhinestoa' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">What is Rhinestoa?</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">Rhinestoa combines data warehouse design, ETL pipelines, and self-service analytics in a managed platform. It connects planning tools like Anaplan and Pigment to your broader data ecosystem — ensuring your planning models always have access to the freshest, cleanest data.</p>
              <Link href={ROUTES.CONTACT} className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-sm">Learn More</Link>
            </div>
            <div className="space-y-4">
              {['Cloud data warehouse (Snowflake, BigQuery, Redshift)', 'ELT pipelines with dbt and Fivetran', 'Real-time data feeds to planning platforms', 'Self-service dashboards (Tableau, Looker, Power BI)'].map((f) => (
                <div key={f} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 shadow-sm border border-[var(--color-border-light)] text-sm text-[var(--color-text-secondary)]">
                  <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
