import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'We build fast, scalable, and SEO-friendly web applications using modern frameworks like Next.js, React, and Node.js.',
    features: ['Responsive design', 'Performance optimisation', 'SEO-ready', 'CMS integration'],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Cross-platform and native mobile apps for iOS and Android that deliver smooth, engaging user experiences.',
    features: ['React Native & Flutter', 'iOS & Android', 'Offline support', 'Push notifications'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure design, deployment pipelines, and ongoing DevOps support to keep your systems reliable and scalable.',
    features: ['AWS / GCP / Azure', 'CI/CD pipelines', 'Container orchestration', '24/7 monitoring'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centred design that turns complex workflows into intuitive, beautiful experiences your users will love.',
    features: ['User research', 'Wireframing & prototyping', 'Design systems', 'Usability testing'],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description:
      'Integrate intelligent automation and AI-driven features into your products to unlock new levels of efficiency.',
    features: ['LLM integrations', 'Workflow automation', 'Data pipelines', 'Predictive analytics'],
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Security audits, penetration testing, and compliance consulting to protect your product and user data.',
    features: ['Security audits', 'OWASP compliance', 'GDPR / data privacy', 'Vulnerability assessments'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, launch, and grow your digital product — under one roof.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)] hover:shadow-lg hover:border-[var(--color-primary)] transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center">How We Work</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-center max-w-xl mx-auto">
            A structured, transparent process that keeps you informed at every milestone.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and users through workshops and research.' },
              { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and design systems built collaboratively with your team.' },
              { step: '03', title: 'Build', desc: 'Agile sprints with regular demos so you see progress every week.' },
              { step: '04', title: 'Launch & Grow', desc: 'Deploy, monitor, and iterate based on real user feedback and data.' },
            ].map((p) => (
              <div key={p.step} className="relative p-6 bg-[var(--color-bg-light)] rounded-xl border border-[var(--color-border-light)]">
                <div className="text-4xl font-bold text-[var(--color-primary)]/20">{p.step}</div>
                <h3 className="mt-2 font-semibold text-[var(--color-text-primary)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-bg-dark)] to-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-3 text-gray-300">Tell us about your project and we&apos;ll respond within 24 hours.</p>
          <Link
            href={ROUTES.CONTACT}
            className="mt-6 inline-block px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
