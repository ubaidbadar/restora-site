import type { Metadata } from 'next';
import ButtonLink from '@/components/button_link';
import FaqList from '@/components/faq_list';
import PageIntro from '@/components/page_intro';
import PriceSlip from '@/components/price_slip';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Restora is free while we grow: every feature, every branch, every staff member. No card needed.',
  alternates: { canonical: '/pricing' },
};

/** What Restora costs (nothing, for now), shown as a bill, and the questions people ask about it. */
export default function PricingPage() {
  return (
    <>
      <PageIntro title="Free while we grow.">
        <p>Every feature, for every branch and every member of staff. No card, and no trial that runs out.</p>
      </PageIntro>
      <section className="bg-haldi">
        <div className="mx-auto grid max-w-[76rem] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div className="max-w-md text-lg text-ink">
            <p>If paid plans come later, restaurants already on Restora hear about it well before anything changes. Their data stays theirs, to keep or to take with them.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appLink('/signup', 'pricing')} size="lg">
                Start free
              </ButtonLink>
              <ButtonLink href={whatsappLink('Hi Restora, I have a question about using Restora for my restaurant.')} size="lg" variant="outline">
                <WhatsappIcon className="size-5" />
                Ask a question
              </ButtonLink>
            </div>
          </div>
          <PriceSlip />
        </div>
      </section>
      <section className="mx-auto grid max-w-[76rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">Before you start.</h2>
        <FaqList />
      </section>
    </>
  );
}
