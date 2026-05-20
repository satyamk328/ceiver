import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Webinars | Ceiver', description: 'On-demand and upcoming webinars from Ceiver.' };

const upcoming = [
  { date: 'Jun 10, 2026', title: 'From Spreadsheets to Anaplan: A Finance Leader\'s Migration Guide', duration: '45 min' },
  { date: 'Jul 22, 2026', title: 'Pigment vs. Anaplan: Which Platform is Right for You?', duration: '60 min' },
];

const recorded = [
  { title: 'IBP in Practice: What We Learned from 50 S&OP Transformations', views: '1.2k views' },
  { title: 'Demand Planning in the Age of AI: Fazo Deep Dive', views: '987 views' },
  { title: 'The Connected Planning Stack: Anaplan + Rhinestoa + Fazo', views: '854 views' },
  { title: 'Headcount Planning That Finance and HR Actually Agree On', views: '743 views' },
];

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        title="Webinars"
        subtitle="Expert-led sessions on planning technology, methodology, and best practice — live and on-demand."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Resource' }, { label: 'Webinars' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Upcoming Webinars</h2>
          <div className="space-y-4 mb-12">
            {upcoming.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-[var(--color-primary)] font-semibold mb-1">{w.date} · {w.duration}</p>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">{w.title}</h3>
                </div>
                <Link href={ROUTES.CONTACT} className="shrink-0 px-5 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Register Free</Link>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Recorded Webinars</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {recorded.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-5 shadow-sm border border-[var(--color-border-light)] flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-dark)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">{w.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{w.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
