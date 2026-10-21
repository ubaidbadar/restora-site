import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import ButtonLink from '@/components/button_link';
import FaqList from '@/components/faq_list';
import PageIntro from '@/components/page_intro';
import SectionHeading from '@/components/section_heading';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Restora is free while we grow: every feature, every branch, every staff member. No card needed.',
  alternates: { canonical: '/pricing' },
};

const INCLUDED = [
  'Unlimited orders, tables and customers',
  'Every branch and every staff member',
  'Table QR codes with waiter and bill calls',
  'Khata with statements on WhatsApp',
  'Offline orders that send themselves later',
  'The web app, and the Android and iPhone apps when they launch',
  'Kitchen slips and receipts',
  'Help on WhatsApp to set up your menu',
];

/** What Restora costs (nothing, for now) and what that includes, said plainly. */
export default function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Pricing" title="Free while we grow">
        <p>Every feature, for every branch. No card, no trial that runs out.</p>
      </PageIntro>
      <section className="px-4 py-10 sm:px-6">
        <div className="reveal mx-auto flex max-w-xl flex-col gap-6 rounded-panel bg-surface p-8 shadow-lg ring-2 ring-primary sm:p-10">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-ink">Rs 0</span>
            <span className="text-lg text-muted">/ month</span>
          </div>
          <ul className="flex flex-col gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-base text-ink">
                <Check className="mt-0.5 size-5 shrink-0 text-success-700" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href={appLink('/signup', 'pricing')} size="lg">
            Start free
          </ButtonLink>
          <p className="text-sm text-muted">
            If paid plans come later, restaurants already on Restora hear about it well before anything changes, and their data stays theirs to keep or take
            with them.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <SectionHeading title="Questions about price and setup" center />
          <FaqList />
          <div className="flex justify-center">
            <ButtonLink href={whatsappLink('Hi Restora, I have a question about using Restora for my restaurant.')} variant="outline">
              <WhatsappIcon className="size-5 text-whatsapp" />
              Ask us on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
