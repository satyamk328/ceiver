import PageHero from '@/components/common/PageHero';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'News & Press | Ceiver', description: 'Latest news, press releases, and media coverage from Ceiver.' };

const articles = [
  { date: 'May 2026', category: 'Press Release', title: 'Ceiver Achieves Anaplan Master Anaplanner Certification', excerpt: 'Ceiver is proud to announce that three of our senior consultants have attained Anaplan Master Anaplanner certification, the highest level of technical accreditation.' },
  { date: 'April 2026', category: 'Company News', title: 'Ceiver Expands Pigment Practice with New Hire', excerpt: 'We are growing our Pigment capability with the appointment of a dedicated Pigment Principal Consultant to meet increasing client demand.' },
  { date: 'March 2026', category: 'Thought Leadership', title: 'The Future of Connected Planning: 2026 and Beyond', excerpt: 'Our CEO shares insights on the trends shaping enterprise planning technology over the next three years.' },
  { date: 'February 2026', category: 'Client Success', title: 'Global FMCG Client Cuts Planning Cycle by 60% with Ceiver', excerpt: 'A leading consumer goods company reduced their monthly planning cycle from 10 days to 4 days following their Anaplan implementation with Ceiver.' },
];

export default function NewsPressPage() {
  return (
    <>
      <PageHero
        title="News & Press"
        subtitle="The latest announcements, thought leadership, and media coverage from Ceiver."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'About' }, { label: 'News & Press' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <article key={a.title} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-primary)]">{a.category}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{a.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">{a.title}</h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
