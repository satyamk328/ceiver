import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const FOOTER_NAV = [
  {
    heading: 'Services',
    links: [
      { label: 'Anaplan Training',     href: ROUTES.TRAINING },
      { label: 'Anaplan Consulting',   href: ROUTES.CONSULTING },
      { label: 'Managed Service',      href: ROUTES.MANAGED_SERVICE },
      { label: 'Pigment',              href: ROUTES.PIGMENT },
      { label: 'Planful',              href: ROUTES.PLANFUL },
      { label: 'Prophix',              href: ROUTES.PROPHIX },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Supply Chain Planning', href: ROUTES.SUPPLY_CHAIN_PLANNING },
      { label: 'Sales & Marketing',     href: ROUTES.SALES_MARKETING },
      { label: 'Finance Planning',      href: ROUTES.FINANCE },
      { label: 'HR & Workforce',        href: ROUTES.HR_WORKFORCE },
      { label: 'Executive S&OP / IBP',  href: ROUTES.EXECUTIVE_SOP_IBP },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',      href: ROUTES.COMPANY },
      { label: 'Meet the Team', href: ROUTES.MEET_TEAM },
      { label: 'Careers',       href: ROUTES.CAREERS },
      { label: 'News & Press',  href: ROUTES.NEWS_PRESS },
      { label: 'Contact',       href: ROUTES.CONTACT },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog',           href: ROUTES.BLOGS },
      { label: 'Webinars',       href: ROUTES.WEBINARS },
      { label: 'White Papers',   href: ROUTES.WHITE_PAPERS },
      { label: 'Events',         href: ROUTES.EVENTS },
      { label: 'On-Demand Demo', href: ROUTES.ON_DEMAND_DEMO },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">

      {/* Top gradient accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #1A56DB 40%, #0EA5E9 60%, transparent 100%)' }} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand block — 2/6 cols on lg */}
          <div className="lg:col-span-2">
            <Link href={ROUTES.HOME} className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-[var(--color-primary)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-sm">C</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white">Ceiver</span>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Specialist planning &amp; analytics consultancy. We help organisations make better decisions, faster.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a href="mailto:hello@ceiver.in" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                hello@ceiver.in
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Bangalore, India
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { label: 'LinkedIn', href: '#', abbr: 'in' },
                { label: 'X / Twitter', href: '#', abbr: 'X' },
                { label: 'YouTube', href: '#', abbr: 'YT' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 hover:border-[var(--color-primary)] hover:text-white hover:bg-[var(--color-primary)]/15 transition-all"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns — 4/6 cols on lg */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {year} Ceiver. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <Link key={t} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
