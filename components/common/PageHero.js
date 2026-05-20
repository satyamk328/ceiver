import Link from 'next/link';

export default function PageHero({ title, subtitle, breadcrumbs = [], tag }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)] pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1A56DB 0%, transparent 70%)', transform: 'translate(30%, -40%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)', transform: 'translate(-30%, 40%)' }} />

      {/* Grid dots */}
      <div className="absolute inset-0 bg-grid-dots-dark pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg-light))' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/45 mb-5 animate-fade-in">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Tag */}
        {tag && (
          <div className="section-label section-label-dark mb-4 animate-fade-up">{tag}</div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-white leading-tight tracking-tight mb-5 animate-fade-up delay-100 max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
