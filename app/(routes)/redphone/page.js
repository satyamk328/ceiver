import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Redphone | Ceiver', description: 'Redphone — rapid response planning advisory by Ceiver.' };

export default function RedphonePage() {
  return (
    <>
      <PageHero
        title="Redphone"
        subtitle="When your planning environment breaks down and you need expert help fast, Redphone is Ceiver's emergency response service."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Beyond Consulting' }, { label: 'Redphone' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border-light)] mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">How Redphone Works</h2>
              <div className="space-y-6">
                {[
                  { t: '1. Contact Us', d: 'Call or message our Redphone hotline. A senior consultant picks up within 2 hours.' },
                  { t: '2. Rapid Triage', d: 'We assess the issue remotely and deploy the right specialist immediately.' },
                  { t: '3. Hands-On Resolution', d: 'Our team fixes the root cause — not just the symptoms — and documents what happened.' },
                  { t: '4. Prevention Plan', d: 'We leave you with a clear action plan to prevent recurrence.' },
                ].map((s) => (
                  <div key={s.t} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">{s.t.charAt(0)}</div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">{s.t}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link href={ROUTES.CONTACT} className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">Activate Redphone</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
