import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = { title: 'Nagagold Gold Exchange | Ceiver', description: 'Nagagold — premium gold exchange and treasury planning solutions.' };

export default function NagagoldPage() {
  return (
    <>
      <PageHero
        title="Nagagold Gold Exchange"
        subtitle="Nagagold brings enterprise planning discipline to precious metals trading — real-time pricing, treasury optimisation, and compliance in one platform."
        breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Beyond Consulting' }, { label: 'Nagagold' }]}
      />
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">About Nagagold</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">Nagagold is Ceiver's specialist venture in the gold and precious metals space. We apply the same connected-planning methodology used in corporate FP&A to the unique challenges of gold treasury management, commodity hedging, and exchange operations.</p>
              <div className="space-y-3">
                {['Real-time spot price tracking and alerting', 'Treasury position and exposure planning', 'Regulatory and compliance reporting', 'Vault and custody management analytics'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Nagagold</h3>
              <p className="text-white/80 mb-6 text-sm">Premium gold exchange services backed by enterprise-grade planning technology.</p>
              <Link href={ROUTES.CONTACT} className="inline-block px-6 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-colors text-sm">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
