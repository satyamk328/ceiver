import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Events | Ceiver', description: 'Ceiver events — webinars, conferences, and roundtables.' };

const events = [
  { date: 'Jun 10, 2026', type: 'Webinar', title: 'From Spreadsheets to Anaplan: A Finance Leader\'s Migration Guide', seats: 'Free · Limited seats' },
  { date: 'Jun 18, 2026', type: 'Roundtable', title: 'Supply Chain Leaders Roundtable: IBP in Practice', seats: 'By invitation' },
  { date: 'Jul 3, 2026', type: 'Conference', title: 'Ceiver Planning Summit 2026', seats: 'Register now' },
  { date: 'Jul 22, 2026', type: 'Webinar', title: 'Pigment vs. Anaplan: Which Platform is Right for You?', seats: 'Free · Open registration' },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Join Ceiver at upcoming webinars, roundtables, and industry conferences."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Resource' }, { label: 'Events' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            {events.map((e) => (
              <div key={e.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:w-24 shrink-0">
                  <div className="text-sm font-bold text-[var(--color-primary)]">{e.date.split(',')[0].split(' ').slice(0, 2).join(' ')}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{e.date.split(', ')[1]}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-primary)]">{e.type}</span>
                  <h3 className="mt-2 font-semibold text-[var(--color-text-primary)] leading-snug">{e.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{e.seats}</p>
                </div>
                <Link href={ROUTES.CONTACT} className="shrink-0 px-5 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Register</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
