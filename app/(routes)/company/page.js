import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'About Ceiver | Company',
  description: 'Learn about Ceiver — our story, mission, and values.',
};

const stats = [
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Enterprise clients' },
  { value: '15+', label: 'Countries served' },
  { value: '98%', label: 'Client satisfaction' },
];

const values = [
  { emoji: '🎯', title: 'Client Obsession', desc: 'We measure success by the outcomes our clients achieve, not the hours we bill.' },
  { emoji: '🔍', title: 'Intellectual Honesty', desc: 'We tell clients what they need to hear, not what they want to hear.' },
  { emoji: '📚', title: 'Continuous Learning', desc: 'Our team invests relentlessly in staying at the cutting edge of planning technology.' },
  { emoji: '🚀', title: 'Delivery Excellence', desc: 'We ship working solutions on time and stand behind the quality of everything we build.' },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="We're Planners Who Became Consultants"
        subtitle="A specialist planning and analytics consultancy helping organisations make better decisions, faster."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'About' }, { label: 'Company' }]}
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-5">Our Story</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight mb-5 leading-tight">
                Built by practitioners, <span className="text-gradient">for practitioners</span>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 text-base sm:text-lg">
                Ceiver was founded by a team of veteran planning consultants who believed the market deserved a different kind of firm — one that combines deep technical expertise with genuine business partnership.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                Since our founding, we have delivered over 200 planning transformations across financial services, consumer goods, manufacturing, and technology sectors in 15+ countries.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.MEET_TEAM} className="btn-primary">Meet the Team</Link>
                <Link href={ROUTES.CONTACT} className="btn-outline">Work With Us</Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-6 text-center ${i === 0 ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-bg-light)] border border-[var(--color-border-light)]'}`}
                >
                  <div className={`text-4xl font-black mb-1.5 ${i === 0 ? 'text-white' : 'text-[var(--color-primary)]'}`}>{s.value}</div>
                  <div className={`text-sm ${i === 0 ? 'text-white/80' : 'text-[var(--color-text-muted)]'}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mb-4">What We Stand For</div>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card bg-white rounded-2xl p-6">
                <span className="text-4xl mb-4 block">{v.emoji}</span>
                <h3 className="font-bold text-[var(--color-text-primary)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
