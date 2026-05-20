import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Dosspod | Ceiver', description: 'Dosspod — the planning professionals podcast by Ceiver.' };

const episodes = [
  { ep: 'EP 24', title: 'Is Your S&OP Process Actually Working?', guest: 'SVP Operations, Global FMCG', duration: '48 min' },
  { ep: 'EP 23', title: 'The CFO View on Connected Planning', guest: 'CFO, Series D SaaS Company', duration: '42 min' },
  { ep: 'EP 22', title: 'Anaplan vs. Pigment: An Honest Comparison', guest: 'Ceiver CTO', duration: '55 min' },
  { ep: 'EP 21', title: 'Building a World-Class Demand Planning Team', guest: 'VP Supply Chain, Consumer Electronics', duration: '39 min' },
];

export default function DosspodPage() {
  return (
    <>
      <PageHero
        title="Dosspod"
        subtitle="Real conversations with planning leaders about what's actually working — and what isn't."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Beyond Consulting' }, { label: 'Dosspod' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Latest Episodes</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {episodes.map((e) => (
              <div key={e.ep} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{e.ep}</span>
                  <h3 className="font-semibold text-[var(--color-text-primary)] truncate">{e.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{e.guest} · {e.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Subscribe to Dosspod</Link>
          </div>
        </div>
      </section>
    </>
  );
}
