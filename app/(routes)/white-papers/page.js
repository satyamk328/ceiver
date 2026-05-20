import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'White Papers | Ceiver', description: 'In-depth research and white papers from Ceiver.' };

const papers = [
  { category: 'Supply Chain', title: 'The State of Demand Planning 2026', pages: '28 pages', desc: 'Our annual survey of 200+ supply chain leaders on forecast accuracy, technology adoption, and the impact of AI on demand planning processes.' },
  { category: 'FP&A', title: 'Beyond Budgeting: The CFO\'s Guide to Rolling Forecasts', pages: '22 pages', desc: 'A practical framework for replacing the annual budget cycle with a rolling forecast process that keeps finance agile year-round.' },
  { category: 'IBP', title: 'Integrated Business Planning Maturity Model', pages: '18 pages', desc: 'Assess your organisation\'s IBP maturity against five dimensions and get a personalised roadmap for moving to the next level.' },
  { category: 'Technology', title: 'Anaplan vs. Pigment vs. Planful: 2026 Buyer\'s Guide', pages: '34 pages', desc: 'An independent comparison of the three leading connected planning platforms across 45 functional and technical criteria.' },
];

export default function WhitePapersPage() {
  return (
    <>
      <PageHero
        title="White Papers"
        subtitle="In-depth research and practical frameworks from the Ceiver planning practice — free to download."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Resource' }, { label: 'White Papers' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {papers.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-primary)]">{p.category}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{p.pages}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1 mb-4">{p.desc}</p>
                <Link href={ROUTES.CONTACT} className="self-start px-5 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Download Free</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
