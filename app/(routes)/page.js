import Carousel from '@/components/ui/Carousel/Carousel';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Ceiver — Connected Planning for Enterprise',
  description: 'Ceiver is a specialist planning and analytics consultancy. We implement Anaplan, Pigment, Planful and Prophix for enterprise clients worldwide.',
};

const heroSlides = [
  {
    tag: 'Connected Planning',
    title: 'Turn Data Into <em>Decisions</em><br/>That Drive Growth',
    description: 'Ceiver deploys enterprise planning platforms that connect finance, supply chain, and operations — so your teams plan as one.',
    cta: { label: 'Explore Services', href: ROUTES.CONSULTING },
    ctaSecondary: { label: 'Watch a Demo', href: ROUTES.ON_DEMAND_DEMO },
  },
  {
    tag: 'Anaplan Experts',
    title: 'The Anaplan Partner Built<br/>for <em>Complex Problems</em>',
    description: "From model design to managed service, Ceiver's certified anaplanners deliver solutions that actually get adopted.",
    cta: { label: 'Anaplan Consulting', href: ROUTES.CONSULTING },
    ctaSecondary: { label: 'Meet the Team', href: ROUTES.MEET_TEAM },
  },
  {
    tag: 'Supply Chain Planning',
    title: 'Right Stock. <em>Right Place.</em><br/>Right Time.',
    description: 'Our supply chain suite covers demand sensing, inventory optimisation, and IBP — end to end.',
    cta: { label: 'Explore Supply Chain', href: ROUTES.SUPPLY_CHAIN_PLANNING },
    ctaSecondary: { label: 'Get a Free Assessment', href: ROUTES.CONTACT },
  },
];

const stats = [
  { value: '200+', label: 'Projects delivered', icon: '📦' },
  { value: '50+', label: 'Enterprise clients', icon: '🏢' },
  { value: '15+', label: 'Countries served', icon: '🌍' },
  { value: '98%', label: 'Client satisfaction', icon: '⭐' },
];

const services = [
  {
    title: 'Anaplan',
    tag: 'Most Popular',
    desc: 'Training, consulting, and managed service for the world\'s leading connected planning platform.',
    href: ROUTES.CONSULTING,
    color: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Pigment',
    tag: 'Trending',
    desc: 'Next-generation business planning — implemented and fully supported by Ceiver specialists.',
    href: ROUTES.PIGMENT,
    color: 'from-violet-500 to-purple-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Supply Chain',
    tag: '',
    desc: 'Demand, inventory, and supply planning that optimises your entire network end to end.',
    href: ROUTES.SUPPLY_CHAIN_PLANNING,
    color: 'from-sky-500 to-cyan-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7l8-4 8 4M4 7l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: 'Finance',
    tag: '',
    desc: 'FP&A solutions that give finance teams the speed and insight to be true business partners.',
    href: ROUTES.FINANCE,
    color: 'from-emerald-500 to-green-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Planful',
    tag: '',
    desc: 'Modern FP&A — budgeting, consolidation, and reporting for mid-market finance teams.',
    href: ROUTES.PLANFUL,
    color: 'from-amber-500 to-orange-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'HR & Workforce',
    tag: '',
    desc: 'People planning that unites HR and finance around shared headcount and cost targets.',
    href: ROUTES.HR_WORKFORCE,
    color: 'from-rose-500 to-pink-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const whyUs = [
  { title: 'Practitioner-Led', desc: 'Our consultants have held real planning roles — they speak the same language as your team.', icon: '🎯' },
  { title: 'Technology-Agnostic', desc: 'We recommend the right tool for your context, not the one we happen to prefer.', icon: '🔍' },
  { title: 'Outcomes-Focused', desc: 'We measure success by business results — accuracy, cycle time, and cost savings.', icon: '📈' },
  { title: 'Long-Term Partners', desc: 'Most clients work with us for years. We invest in relationships, not one-off projects.', icon: '🤝' },
];

const clients = ['Financial Services', 'Consumer Goods', 'Manufacturing', 'Technology', 'Healthcare', 'Retail'];

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <Carousel slides={heroSlides} autoPlay interval={6000} variant="slide" />

      {/* Stats bar */}
      <section className="bg-white py-10 border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[var(--color-border-light)]">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center text-center px-4 ${i > 0 ? '' : ''}`}>
                <span className="text-2xl mb-1">{s.icon}</span>
                <div className="text-3xl lg:text-4xl font-black text-[var(--color-primary)] leading-none mb-1.5">{s.value}</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg-light)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What We Do</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-4">
              Services &amp; Solutions
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-base sm:text-lg">
              From technology implementation to process design — Ceiver covers the full planning transformation lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card card-accent bg-white rounded-2xl p-6 group">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-sm`}>
                    {s.icon}
                  </div>
                  {s.tag && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary)] border border-[var(--color-primary)]/15">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ceiver */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div className="section-label mb-5">Why Ceiver</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-6 leading-tight">
                Planning consultants who&apos;ve <span className="text-gradient">done the job</span>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-5 text-base sm:text-lg">
                We&apos;re a team of practitioners who have spent careers inside planning functions — as demand planners, FP&amp;A managers, and supply chain directors. That experience shapes everything we build.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We don&apos;t just configure software. We redesign the processes that make planning work — and then we stay to make sure it sticks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.COMPANY} className="btn-primary">Our Story</Link>
                <Link href={ROUTES.MEET_TEAM} className="btn-outline">Meet the Team</Link>
              </div>
            </div>

            {/* Right: feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-[var(--color-bg-light)] rounded-2xl p-5 border border-[var(--color-border-light)] hover:border-[var(--color-primary-light)] transition-colors">
                  <span className="text-3xl mb-3 block">{w.icon}</span>
                  <h3 className="font-bold text-[var(--color-text-primary)] mb-1.5">{w.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry strip */}
      <section className="py-12 bg-[var(--color-bg-light)] border-y border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-light)] text-center mb-6">
            Industries we serve
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {clients.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full bg-white border border-[var(--color-border-light)] text-sm font-medium text-[var(--color-text-secondary)] shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1e3a6e 60%, #1A56DB 100%)' }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
        <div className="absolute inset-0 bg-grid-dots-dark pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="section-label section-label-dark mx-auto mb-6">Ready to start?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
            Transform your planning<br />in <span style={{ color: '#93C5FD' }}>90 days</span>
          </h2>
          <p className="text-white/65 mb-10 max-w-xl mx-auto text-base sm:text-lg">
            Talk to a Ceiver consultant today. No slides, no sales pitch — just an honest conversation about your planning challenges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={ROUTES.CONTACT} className="btn-primary text-base px-8 py-3.5">
              Book a Free Consultation
            </Link>
            <Link href={ROUTES.ON_DEMAND_DEMO} className="btn-ghost-white text-base px-8 py-3.5">
              Watch a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
