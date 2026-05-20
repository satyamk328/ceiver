import PageHero from '@/components/common/PageHero';
import { ROUTES } from '@/constants/routes';

export const metadata = {
  title: 'Contact Us | Ceiver',
  description: 'Get in touch with Ceiver — we respond within 24 hours.',
};

const CONTACT_DETAILS = [
  {
    label: 'Email Us',
    value: 'hello@ceiver.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@ceiver.in',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Fri, 9 AM – 6 PM IST',
    href: 'tel:+919876543210',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Visit Us',
    value: 'Bangalore, Karnataka',
    sub: 'India',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const SERVICES_OPTIONS = [
  'Anaplan Training', 'Anaplan Consulting', 'Anaplan Managed Service',
  'Pigment', 'Planful', 'Prophix', 'Vena Solution',
  'Supply Chain Planning', 'Finance Planning', 'HR & Workforce Planning', 'Other',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in touch"
        title="Let's Start a Conversation"
        subtitle="Have a project in mind? Tell us about it and we'll get back to you within 24 hours."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Contact' }]}
      />

      <section className="py-16 sm:py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-[var(--color-border-light)] shadow-[var(--shadow-md)] p-8 sm:p-10">
              <h2 className="text-2xl font-black text-[var(--color-text-primary)] mb-1">Send a Message</h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-8">Fill in the form and a member of our team will reach out shortly.</p>

              <form className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">First Name</span>
                    <input type="text" placeholder="Rahul" className="input-field" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">Last Name</span>
                    <input type="text" placeholder="Sharma" className="input-field" />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">Work Email</span>
                  <input type="email" placeholder="rahul@company.com" className="input-field" />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">
                    Company <span className="text-[var(--color-text-light)] font-normal">(optional)</span>
                  </span>
                  <input type="text" placeholder="Acme Inc." className="input-field" />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">Service of Interest</span>
                  <select className="input-field bg-white">
                    <option value="">Select a service…</option>
                    {SERVICES_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1.5 block">Message</span>
                  <textarea rows={5} placeholder="Tell us about your project or challenge…" className="input-field resize-none" />
                </label>

                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              {CONTACT_DETAILS.map((c) => (
                <div key={c.label} className="bg-white rounded-2xl border border-[var(--color-border-light)] p-5 flex items-start gap-4 shadow-[var(--shadow-sm)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-light)] mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors block">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{c.value}</p>
                    )}
                    <p className="text-xs text-[var(--color-text-light)] mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Free consultation callout */}
              <div className="rounded-2xl p-6 text-white overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0EA5E9 100%)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                  style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />
                <h3 className="font-black text-lg mb-2 relative z-10">Free 30-Min Consultation</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4 relative z-10">
                  Not sure where to start? Book a discovery call with a Ceiver solution architect — no commitment required.
                </p>
                <a
                  href="mailto:hello@ceiver.in?subject=Free Consultation Request"
                  className="btn-ghost-white text-sm px-5 py-2.5 relative z-10 inline-flex"
                >
                  Book Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
