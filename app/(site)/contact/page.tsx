import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/page_intro';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to Restora on WhatsApp at ${SITE.whatsappDisplay} or email ${SITE.email}.`,
  alternates: { canonical: '/contact' },
};

/** How to reach a person: WhatsApp first (that is how owners talk), then email. Big, tappable, nothing else. */
export default function ContactPage() {
  return (
    <>
      <PageIntro title="Talk to a person.">
        <p>Questions, help setting up your menu, or a walkthrough for your team. WhatsApp is the quickest.</p>
      </PageIntro>
      <section className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        <a href={whatsappLink()} target="_blank" rel="noopener" className="group flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-ink py-8">
          <span>
            <span className="block text-sm font-semibold text-ink-3">WhatsApp, message or call</span>
            <span className="display block text-[clamp(2.4rem,7vw,5rem)] group-hover:text-indigo">{SITE.whatsappDisplay}</span>
          </span>
          <WhatsappIcon className="size-12 text-whatsapp" />
        </a>
        <a href={`mailto:${SITE.email}`} className="group block border-y border-rule py-8">
          <span className="block text-sm font-semibold text-ink-3">Email</span>
          <span className="display block text-[clamp(2rem,5.5vw,4rem)] break-all group-hover:text-indigo">{SITE.email}</span>
        </a>
        <p className="mt-10 text-lg text-ink-2">
          Want us to walk your team through it?{' '}
          <Link href="/demo" className="font-semibold text-indigo underline decoration-2 underline-offset-4">
            Book a demo
          </Link>
          .
        </p>
      </section>
    </>
  );
}
