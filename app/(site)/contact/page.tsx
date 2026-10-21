import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import ButtonLink from '@/components/button_link';
import PageIntro from '@/components/page_intro';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to Restora on WhatsApp at ${SITE.whatsappDisplay} or email ${SITE.email}.`,
  alternates: { canonical: '/contact' },
};

/** How to reach a person: WhatsApp first (that is how owners talk), then email. */
export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Talk to a person">
        <p>Questions, setup help or a demo for your team. WhatsApp is the quickest.</p>
      </PageIntro>
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="reveal flex flex-col gap-4 rounded-card bg-surface p-6 shadow-card">
            <WhatsappIcon className="size-8 text-whatsapp" />
            <h2 className="text-xl font-semibold text-ink">WhatsApp</h2>
            <p className="text-base text-body">{SITE.whatsappDisplay} · message or call</p>
            <ButtonLink href={whatsappLink()} variant="whatsapp">
              Open WhatsApp
            </ButtonLink>
          </div>
          <div className="reveal flex flex-col gap-4 rounded-card bg-surface p-6 shadow-card">
            <Mail className="size-8 text-accent-text" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-ink">Email</h2>
            <p className="text-base text-body">{SITE.email}</p>
            <ButtonLink href={`mailto:${SITE.email}`} variant="outline">
              Write an email
            </ButtonLink>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base text-body">
          Want us to walk your team through it? <Link href="/demo" className="font-semibold text-accent-text underline underline-offset-4">Book a demo</Link>.
        </p>
      </section>
    </>
  );
}
