import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Anaplan Training | Ceiver',
  description: 'Expert-led Anaplan training programmes for individuals and enterprises.',
};

const modules = [
  { title: 'Anaplan Fundamentals', duration: '2 days', level: 'Beginner', levelColor: 'bg-emerald-50 text-emerald-700', desc: 'Build your foundation with core Anaplan concepts, model building basics, and platform navigation.' },
  { title: 'Model Builder Level 1', duration: '3 days', level: 'Intermediate', levelColor: 'bg-blue-50 text-blue-700', desc: 'Design and build connected planning models using best practices for structure, sparsity, and performance.' },
  { title: 'Model Builder Level 2', duration: '3 days', level: 'Advanced', levelColor: 'bg-purple-50 text-purple-700', desc: 'Advanced modelling techniques including optimisation, ALM, and enterprise-scale architecture.' },
  { title: 'Solution Architect', duration: '4 days', level: 'Expert', levelColor: 'bg-orange-50 text-orange-700', desc: 'End-to-end solution design, integration patterns, and deployment governance for Anaplan COEs.' },
];

const features = [
  { icon: '🎓', title: 'Certified Instructors', desc: 'All training delivered by Anaplan-certified Master Anaplanners with real-world delivery experience.' },
  { icon: '💻', title: 'Hands-On Labs', desc: 'Every concept reinforced through practical lab exercises in a live Anaplan environment.' },
  { icon: '📋', title: 'Exam Prep', desc: 'Modules aligned to Anaplan certification exams with practice questions and study guides.' },
  { icon: '🏢', title: 'On-Site or Remote', desc: 'Flexible delivery — run training at your office or via our virtual classroom platform.' },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        tag="Anaplan Training"
        title="Build World-Class Anaplan Expertise"
        subtitle="Accelerate your team's capability with structured, hands-on programmes designed by certified Master Anaplanners."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Services' }, { label: 'Training' }]}
      />

      {/* Features bar */}
      <section className="py-14 bg-white border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="text-3xl shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)] text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training modules */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Learning Path</div>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight mb-4">Training Programmes</h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">Choose the programme that matches your current skill level and career goals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {modules.map((m, i) => (
              <div key={m.title} className="card bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.levelColor}`}>{m.level}</span>
                    <span className="text-xs text-[var(--color-text-light)]">· {m.duration}</span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.CONTACT} className="btn-primary text-base px-8 py-3.5">
              Enquire About Training
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1A56DB 100%)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-3">Ready to get Anaplan certified?</h2>
          <p className="text-white/70 mb-8">Build a custom learning path for your team — talk to our training specialists today.</p>
          <Link href={ROUTES.CONTACT} className="btn-ghost-white px-8 py-3.5 text-base">
            Contact Our Training Team
          </Link>
        </div>
      </section>
    </>
  );
}
