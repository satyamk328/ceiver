'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

/* ─── Nav data with icons ─────────────────────────────────────────── */
const NAV = [
  {
    label: 'Services',
    mega: true,
    cols: [
      {
        heading: 'Anaplan',
        accent: 'bg-blue-500',
        items: [
          { label: 'Training', href: ROUTES.TRAINING, desc: 'Hands-on certification programmes' },
          { label: 'Consulting', href: ROUTES.CONSULTING, desc: 'End-to-end implementation' },
          { label: 'Managed Service', href: ROUTES.MANAGED_SERVICE, desc: 'Ongoing model support' },
        ],
      },
      {
        heading: 'Other Platforms',
        accent: 'bg-violet-500',
        items: [
          { label: 'Pigment', href: ROUTES.PIGMENT, desc: 'Next-gen business planning' },
          { label: 'Planful', href: ROUTES.PLANFUL, desc: 'Mid-market FP&A' },
          { label: 'Prophix', href: ROUTES.PROPHIX, desc: 'Corporate performance mgmt' },
          { label: 'Vena Solution', href: ROUTES.VENA_SOLUTION, desc: 'Excel-native planning' },
        ],
      },
    ],
  },
  {
    label: 'Solution',
    mega: true,
    cols: [
      {
        heading: 'Supply Chain',
        accent: 'bg-sky-500',
        items: [
          { label: 'Demand & Inventory Planning', href: ROUTES.DEMAND_INVENTORY_PLANNING, desc: 'AI-powered forecasting' },
          { label: 'Inventory Planning', href: ROUTES.INVENTORY_PLANNING, desc: 'Right stock, right place' },
          { label: 'Supply Planning', href: ROUTES.SUPPLY_PLANNING, desc: 'Constraint-aware plans' },
          { label: 'Production Planning', href: ROUTES.PRODUCTION_PLANNING, desc: 'Factory scheduling' },
          { label: 'Executive S&OP / IBP', href: ROUTES.EXECUTIVE_SOP_IBP, desc: 'Cross-functional planning' },
        ],
      },
      {
        heading: 'Business Functions',
        accent: 'bg-emerald-500',
        items: [
          { label: 'Sales & Marketing', href: ROUTES.SALES_MARKETING, desc: 'Revenue & quota planning' },
          { label: 'Finance', href: ROUTES.FINANCE, desc: 'FP&A and forecasting' },
          { label: 'HR & Workforce', href: ROUTES.HR_WORKFORCE, desc: 'Headcount & people costs' },
        ],
      },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Company', href: ROUTES.COMPANY, desc: 'Our story and values' },
      { label: 'Meet the Team', href: ROUTES.MEET_TEAM, desc: 'The people behind Ceiver' },
      { label: 'Careers', href: ROUTES.CAREERS, desc: 'Join our team' },
      { label: 'News & Press', href: ROUTES.NEWS_PRESS, desc: 'Latest announcements' },
    ],
  },
  {
    label: 'Beyond',
    items: [
      { label: 'Rhinestoa', href: ROUTES.RHINESTOA, desc: 'Data engineering platform' },
      { label: 'Redphone', href: ROUTES.REDPHONE, desc: 'Emergency planning support' },
      { label: 'Fazo', href: ROUTES.FAZO, desc: 'AI forecasting engine' },
      { label: 'Dosspod', href: ROUTES.DOSSPOD, desc: 'Planning professionals podcast' },
      { label: 'Nagagold', href: ROUTES.NAGAGOLD, desc: 'Gold exchange & treasury' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: ROUTES.BLOGS, desc: 'Insights & best practices' },
      { label: 'Webinars', href: ROUTES.WEBINARS, desc: 'Live and on-demand sessions' },
      { label: 'White Papers', href: ROUTES.WHITE_PAPERS, desc: 'In-depth research reports' },
      { label: 'Events', href: ROUTES.EVENTS, desc: 'Conferences & roundtables' },
      { label: 'On-Demand Demo', href: ROUTES.ON_DEMAND_DEMO, desc: 'See our solutions live' },
    ],
  },
];

/* ─── Component ───────────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isSolid = isScrolled || pathname !== ROUTES.HOME;

  const open = (label) => { clearTimeout(timerRef.current); setActiveMenu(label); };
  const close = () => { timerRef.current = setTimeout(() => setActiveMenu(null), 160); };
  const keep = () => clearTimeout(timerRef.current);

  const navLinkCls = (active) =>
    `flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-150 ${
      active
        ? 'text-[var(--color-primary)]'
        : isSolid
          ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
          : 'text-white/85 hover:text-white'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isSolid
            ? 'bg-white/96 backdrop-blur-lg border-b border-[var(--color-border-light)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[68px] gap-8">

            {/* ── Logo ── */}
            <Link href={ROUTES.HOME} className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-base">C</span>
              </div>
              <span className={`text-xl font-black tracking-tight transition-colors ${isSolid ? 'text-[var(--color-text-primary)]' : 'text-white'}`}>
                Ceiver
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {NAV.map((item) => {
                const isActive = activeMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={close}
                  >
                    <button className={navLinkCls(isActive)}>
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* ── Mega panel (2-col) ── */}
                    {item.mega && (
                      <div
                        className={`absolute top-full left-0 mt-3 w-[560px] bg-white rounded-2xl shadow-[0_16px_48px_-8px_rgba(0,0,0,0.18)] border border-[var(--color-border-light)] p-5 z-50 transition-all duration-200 origin-top-left ${
                          isActive ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-[0.97] pointer-events-none -translate-y-1'
                        }`}
                        onMouseEnter={keep}
                        onMouseLeave={close}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {item.cols.map((col) => (
                            <div key={col.heading}>
                              <div className="flex items-center gap-2 mb-3">
                                <span className={`w-2 h-2 rounded-full ${col.accent}`} />
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-light)]">{col.heading}</span>
                              </div>
                              <div className="space-y-0.5">
                                {col.items.map((it) => (
                                  <Link
                                    key={it.href}
                                    href={it.href}
                                    className={`group flex flex-col px-3 py-2.5 rounded-xl transition-colors ${
                                      pathname === it.href ? 'bg-blue-50' : 'hover:bg-[var(--color-bg-light)]'
                                    }`}
                                  >
                                    <span className={`text-sm font-semibold transition-colors ${pathname === it.href ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]'}`}>
                                      {it.label}
                                    </span>
                                    <span className="text-xs text-[var(--color-text-light)] mt-0.5 leading-snug">{it.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Standard dropdown ── */}
                    {!item.mega && item.items && (
                      <div
                        className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_16px_48px_-8px_rgba(0,0,0,0.18)] border border-[var(--color-border-light)] p-2 z-50 transition-all duration-200 origin-top-left ${
                          isActive ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-[0.97] pointer-events-none -translate-y-1'
                        }`}
                        onMouseEnter={keep}
                        onMouseLeave={close}
                      >
                        {item.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            className={`group flex flex-col px-3.5 py-2.5 rounded-xl transition-colors ${
                              pathname === it.href ? 'bg-blue-50' : 'hover:bg-[var(--color-bg-light)]'
                            }`}
                          >
                            <span className={`text-sm font-semibold transition-colors ${pathname === it.href ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]'}`}>
                              {it.label}
                            </span>
                            <span className="text-xs text-[var(--color-text-light)] mt-0.5">{it.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
              <Link
                href={ROUTES.CONTACT}
                className={`text-sm font-medium transition-colors ${isSolid ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white'}`}
              >
                Contact
              </Link>
              <Link href={ROUTES.CONTACT} className="btn-primary text-sm px-5 py-2.5 rounded-xl">
                Get Started
              </Link>
            </div>

            {/* ── Hamburger ── */}
            <button
              className={`lg:hidden ml-auto w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors ${
                isSolid ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''} ${isSolid ? 'bg-gray-700' : 'bg-white'}`} />
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''} ${isSolid ? 'bg-gray-700' : 'bg-white'}`} />
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''} ${isSolid ? 'bg-gray-700' : 'bg-white'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-[360px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer top */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-light)] shrink-0">
          <Link href={ROUTES.HOME} className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="text-lg font-black text-[var(--color-text-primary)]">Ceiver</span>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer scroll area */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-3 py-3 space-y-0.5">
            {/* Home */}
            <Link
              href={ROUTES.HOME}
              className={`flex items-center px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === ROUTES.HOME ? 'text-[var(--color-primary)] bg-blue-50' : 'text-[var(--color-text-secondary)] hover:bg-gray-50'}`}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>

            {NAV.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-semibold text-[var(--color-text-secondary)] hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 shrink-0 text-[var(--color-text-light)] transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileExpanded === item.label && (
                  <div className="mt-1 mb-2 ml-2 pl-3 border-l-2 border-[var(--color-border-light)] space-y-0.5">
                    {item.mega
                      ? item.cols.map((col) => (
                          <div key={col.heading}>
                            <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-light)]">{col.heading}</p>
                            {col.items.map((it) => (
                              <Link
                                key={it.href}
                                href={it.href}
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${pathname === it.href ? 'text-[var(--color-primary)] bg-blue-50 font-medium' : 'text-[var(--color-text-muted)] hover:bg-gray-50 hover:text-[var(--color-text-primary)]'}`}
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {it.label}
                              </Link>
                            ))}
                          </div>
                        ))
                      : item.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${pathname === it.href ? 'text-[var(--color-primary)] bg-blue-50 font-medium' : 'text-[var(--color-text-muted)] hover:bg-gray-50 hover:text-[var(--color-text-primary)]'}`}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {it.label}
                          </Link>
                        ))
                    }
                  </div>
                )}
              </div>
            ))}

            <Link
              href={ROUTES.CONTACT}
              className={`flex items-center px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === ROUTES.CONTACT ? 'text-[var(--color-primary)] bg-blue-50' : 'text-[var(--color-text-secondary)] hover:bg-gray-50'}`}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-[var(--color-border-light)] shrink-0">
          <Link
            href={ROUTES.CONTACT}
            className="btn-primary w-full justify-center text-sm py-3"
            onClick={() => setIsMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
