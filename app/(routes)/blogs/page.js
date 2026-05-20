import PageHero from '@/components/common/PageHero';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Blog | Ceiver', description: 'Planning insights, best practices, and thought leadership from the Ceiver team.' };

const posts = [
  { date: 'May 15, 2026', category: 'Anaplan', readTime: '6 min read', title: '5 Anaplan Model Performance Mistakes (And How to Fix Them)', excerpt: 'Most performance problems in Anaplan are self-inflicted. Here are the top five mistakes we see in client models and how to fix each one.' },
  { date: 'May 8, 2026', category: 'Supply Chain', readTime: '8 min read', title: 'What Good Demand Planning Actually Looks Like in 2026', excerpt: 'Statistical forecasting alone is no longer enough. We break down the four capabilities that separate world-class demand planning from the rest.' },
  { date: 'Apr 28, 2026', category: 'FP&A', readTime: '5 min read', title: 'The Rolling Forecast: Why Most Companies Get It Wrong', excerpt: 'Rolling forecasts are supposed to replace the annual budget — but most implementations just create a second budget process. Here\'s how to avoid that trap.' },
  { date: 'Apr 14, 2026', category: 'Pigment', readTime: '7 min read', title: 'Pigment Implementation: Lessons from 10 Go-Lives', excerpt: 'Having delivered Pigment across 10 client implementations, here are the patterns that determine success.' },
  { date: 'Mar 30, 2026', category: 'IBP', readTime: '9 min read', title: 'How to Run an Executive S&OP Meeting That Actually Drives Decisions', excerpt: 'Most S&OP executive reviews devolve into status reports. We show you the agenda structure that forces real decisions.' },
  { date: 'Mar 12, 2026', category: 'Fazo', readTime: '6 min read', title: 'When to Trust Machine Learning Forecasts (And When Not To)', excerpt: 'AI forecasting is powerful — but it has blind spots. We explain when to override the algorithm and why.' },
];

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Planning insights, technology deep-dives, and practitioner perspectives from the Ceiver team."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Resource' }, { label: 'Blogs' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow cursor-pointer flex flex-col">
                <div className="h-2 bg-[var(--color-primary)]" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-primary)]">{p.category}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{p.readTime}</span>
                  </div>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 leading-snug flex-1">{p.title}</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{p.excerpt}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{p.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
