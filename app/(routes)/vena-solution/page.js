import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Vena Solution | Ceiver', description: 'Vena Solutions FP&A implementation by Ceiver.' };

const benefits = [
  { icon: '📊', title: 'Excel-Native Interface', desc: 'Vena preserves the Excel experience your finance team already loves while adding enterprise-grade controls and automation.' },
  { icon: '🔄', title: 'Process Automation', desc: 'Eliminate manual data collection with workflow-driven templates and automated data refresh from your source systems.' },
  { icon: '📋', title: 'Audit & Compliance', desc: 'Full change history, approval workflows, and role-based access keep your planning data audit-ready.' },
  { icon: '🚀', title: 'Fast Time-to-Value', desc: 'Ceiver\'s delivery framework gets Vena live in 8–12 weeks for most mid-market implementations.' },
];

export default function VenaSolutionPage() {
  return (
    <>
      <PageHero
        title="Vena Solution"
        subtitle="Harness the power of Vena's Excel-native FP&A platform with Ceiver's expert implementation and support."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Vena Solution' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">The Vena Advantage</h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">Built for finance teams that want structure without sacrificing flexibility.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex gap-4">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">{b.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Start Your Vena Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
