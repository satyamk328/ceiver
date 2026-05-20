import PageHero from '@/components/common/PageHero';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Meet the Team | Ceiver', description: 'The people behind Ceiver — our leadership and consulting team.' };

const team = [
  { name: 'Alex Morgan', role: 'CEO & Co-Founder', bio: '15+ years in enterprise planning consulting. Former Anaplan practice lead at a Big 4 firm.' },
  { name: 'Jordan Lee', role: 'CTO & Co-Founder', bio: 'Certified Master Anaplanner. Architect of 50+ enterprise planning transformations.' },
  { name: 'Sam Chen', role: 'Head of Supply Chain Practice', bio: 'Former supply chain director turned consultant. Expert in IBP and demand sensing.' },
  { name: 'Taylor Brooks', role: 'Head of Finance Practice', bio: 'Ex-CFO with deep FP&A expertise across FMCG, tech, and financial services.' },
  { name: 'Casey Patel', role: 'Lead Pigment Consultant', bio: 'One of the first certified Pigment consultants in EMEA. Specialises in revenue planning.' },
  { name: 'Robin Singh', role: 'Head of Delivery', bio: 'Programme management expert ensuring every Ceiver project lands on time and on budget.' },
];

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        title="Meet the Team"
        subtitle="The experts behind every Ceiver engagement — certified, experienced, and passionate about planning."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'About' }, { label: 'Meet the Team' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{t.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{t.role}</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
