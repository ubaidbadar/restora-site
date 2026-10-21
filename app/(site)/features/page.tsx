import type { Metadata } from 'next';
import ClosingCta from '@/components/closing_cta';
import PageIntro from '@/components/page_intro';
import FEATURES from '@/constants/features';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Orders, table QR codes, khata, customers and WhatsApp, offline orders, staff roles, branches, menu and payments: everything Restora does for your restaurant.',
  alternates: { canonical: '/features' },
};

/** Everything Restora does: one row per area, the summary on one side and what is in it on the other. */
export default function FeaturesPage() {
  return (
    <>
      <PageIntro title="Everything a restaurant runs on.">
        <p>From the first order of the day to the khata at closing. This is what is in Restora today, and all of it is free.</p>
      </PageIntro>
      <div className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        {FEATURES.map((feature) => (
          <section key={feature.id} id={feature.id} className="grid scroll-mt-24 gap-6 border-t-[3px] border-ink py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">{feature.title}</h2>
              <p className="mt-4 max-w-xl text-lg text-ink-2">{feature.summary}</p>
            </div>
            <ul className="flex flex-col divide-y divide-rule self-start border-y border-rule">
              {feature.points.map((point) => (
                <li key={point} className="py-3 text-ink">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ClosingCta from="features" />
    </>
  );
}
