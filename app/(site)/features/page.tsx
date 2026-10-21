import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import ClosingCta from '@/components/closing_cta';
import FeatureIcon from '@/components/feature_icon';
import PageIntro from '@/components/page_intro';
import FEATURES from '@/constants/features';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Orders, table QR codes, khata, customers and WhatsApp, offline orders, staff roles, branches, menu and payments: everything Restora does for your restaurant.',
  alternates: { canonical: '/features' },
};

/** Everything Restora does, one section per area, each with what is in it. */
export default function FeaturesPage() {
  return (
    <>
      <PageIntro eyebrow="Features" title="Everything your restaurant runs on, in one app">
        <p>From the first order of the day to the khata at closing. Here is what is in Restora today.</p>
      </PageIntro>
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6">
        {FEATURES.map((feature) => (
          <section key={feature.id} id={feature.id} className="reveal grid scroll-mt-24 gap-6 rounded-card bg-surface p-6 shadow-card sm:p-8 md:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-3">
              <FeatureIcon name={feature.icon} />
              <h2 className="text-2xl font-bold text-ink">{feature.title}</h2>
              <p className="text-base text-body">{feature.summary}</p>
            </div>
            <ul className="flex flex-col gap-3 md:pt-14">
              {feature.points.map((point) => (
                <li key={point} className="flex gap-3 text-base text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-success-700" aria-hidden="true" />
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
