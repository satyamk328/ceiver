import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Careers | Ceiver', description: 'Join the Ceiver team — open roles and career opportunities.' };

const roles = [
  { title: 'Senior Anaplan Consultant', location: 'London / Remote', type: 'Full-time', desc: 'Lead complex Anaplan implementations for enterprise clients across financial services and consumer goods.' },
  { title: 'Pigment Implementation Consultant', location: 'London / Remote', type: 'Full-time', desc: 'Implement and customise Pigment planning solutions for mid-market and enterprise clients.' },
  { title: 'Supply Chain Planning Analyst', location: 'Remote', type: 'Full-time', desc: 'Support demand and inventory planning engagements with data analysis and model-building tasks.' },
  { title: 'Pre-Sales Solutions Engineer', location: 'London', type: 'Full-time', desc: 'Partner with the commercial team to scope and demonstrate Ceiver\'s planning solutions to prospects.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Ceiver"
        subtitle="Join a team of passionate planning experts who love solving complex problems for world-class clients."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'About' }, { label: 'Careers' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Open Roles</h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">We are always looking for exceptional people. If you don't see a role that fits, send us your CV anyway.</p>
          </div>
          <div className="space-y-4 mb-12">
            {roles.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-primary)]">{r.type}</span>
                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">📍 {r.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{r.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{r.desc}</p>
                </div>
                <Link href={ROUTES.CONTACT} className="shrink-0 px-5 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
