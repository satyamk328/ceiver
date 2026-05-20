import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const TEAM = [
  { name: 'Rahul Sharma', role: 'CEO & Co-Founder' },
  { name: 'Priya Nair', role: 'CTO & Co-Founder' },
  { name: 'Arjun Mehta', role: 'Lead Designer' },
  { name: 'Sneha Kapoor', role: 'Engineering Manager' },
];

const VALUES = [
  { title: 'Customer First', desc: 'Every decision we make is guided by what creates the most value for our clients.' },
  { title: 'Innovation', desc: 'We embrace new technologies and ideas to build forward-looking solutions.' },
  { title: 'Integrity', desc: 'We operate with full transparency and hold ourselves accountable at every step.' },
  { title: 'Excellence', desc: 'We hold every deliverable to the highest standards of quality and craftsmanship.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Ceiver</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We are a team of passionate technologists dedicated to building products that matter.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Our Story</h2>
              <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                Founded in 2019, Ceiver started with a simple belief: great software can transform
                businesses. What began as a two-person startup in Bangalore has grown into a
                full-service digital agency with clients across India and Southeast Asia.
              </p>
              <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                We&apos;ve partnered with startups, SMEs, and enterprises to deliver web and mobile
                products that are performant, scalable, and delightful to use.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2019' },
                { label: 'Projects', value: '150+' },
                { label: 'Clients', value: '80+' },
                { label: 'Team Size', value: '30+' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 bg-[var(--color-bg-light)] rounded-xl border border-[var(--color-border-light)] text-center"
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)]">{s.value}</div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)]">
              <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center text-xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Our Mission</h3>
              <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">
                To empower businesses of every size with digital products that are beautiful,
                performant, and built to last — delivered with speed, transparency, and care.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[var(--color-border-light)]">
              <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center text-xl mb-4">
                🔭
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Our Vision</h3>
              <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">
                To be the most trusted technology partner for growth-oriented businesses in Asia,
                known for delivering excellence at every stage of the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-6 bg-[var(--color-bg-light)] rounded-xl border border-[var(--color-border-light)]"
              >
                <h3 className="font-semibold text-[var(--color-text-primary)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center">Meet the Team</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-white rounded-xl border border-[var(--color-border-light)] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] mx-auto">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Want to Work with Us?</h2>
          <p className="mt-3 text-blue-100">We&apos;re always looking for great talent and interesting projects.</p>
          <Link
            href={ROUTES.CONTACT}
            className="mt-6 inline-block px-8 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
