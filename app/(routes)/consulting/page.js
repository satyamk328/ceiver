import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Anaplan Consulting | Ceiver',
  description: 'End-to-end Anaplan implementation and consulting services.',
};

const services = [
  { title: 'Discovery & Design', icon: '🔍', desc: 'We map your planning requirements, data flows, and business logic to a scalable Anaplan architecture.' },
  { title: 'Implementation', icon: '⚙️', desc: 'Certified consultants build, test, and deploy production-ready Anaplan models aligned to your processes.' },
  { title: 'Integration', icon: '🔗', desc: 'Seamless data pipelines connecting Anaplan to ERP, CRM, and data-warehouse systems.' },
  { title: 'Optimisation', icon: '📈', desc: 'Model health reviews and performance tuning for existing Anaplan environments.' },
  { title: 'Change Management', icon: '👥', desc: 'Training and adoption frameworks that ensure your teams actually use what we build.' },
  { title: 'Post-Go-Live Support', icon: '🛡️', desc: 'Ongoing model maintenance, enhancements, and hyper-care packages after launch.' },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Anaplan Consulting"
        subtitle="From strategy to deployment — our certified consultants deliver Anaplan solutions that drive real planning transformation."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Consulting' }]}
      />

      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Our Consulting Services</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">Full-lifecycle support from initial discovery through post-go-live optimisation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start your Anaplan journey</h2>
          <p className="text-white/80 mb-8">Let's scope your project and define a roadmap that delivers value fast.</p>
          <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
