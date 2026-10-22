import type { Metadata } from 'next';
import Link from 'next/link';
import ButtonLink from '@/components/button_link';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to Restora on WhatsApp at ${SITE.whatsappDisplay} or email ${SITE.email}.`,
  alternates: { canonical: '/contact' },
};

/** What owners usually write about, each opening WhatsApp with the first line already typed. */
const TOPICS = [
  {
    title: 'Will it suit my restaurant?',
    text: 'Ask about printing, offline orders, khata or branches before you start.',
    message: 'Hi Restora, I run ___ in ___. Will Restora work for us?',
  },
  {
    title: 'Help setting up',
    text: 'Send us your menu as a photo or a list, and we will help you add it with your tables and staff.',
    message: 'Hi Restora, I need help setting up my menu and tables.',
  },
  {
    title: 'Something is not working',
    text: 'Tell us what you see, with a screenshot if you can, and which phone or laptop it is on.',
    message: "Hi Restora, something isn't working in my account:",
  },
];

/** A dashed rule, as a thermal printer draws one. */
function Dashes() {
  return <div aria-hidden="true" className="my-4 border-t-2 border-dashed border-ink/25" />;
}

/** How to reach a person: WhatsApp first (that is how owners talk), then email, written out like a parchi. */
export default function ContactPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[76rem] items-center gap-14 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <h1 className="display text-[clamp(2.75rem,8vw,6rem)] text-ink">Talk to a person.</h1>
          <p className="mt-6 max-w-xl text-xl text-ink-2">Questions, help setting up your menu, or a walkthrough for your team. WhatsApp is the quickest.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink()} size="lg" variant="whatsapp">
              <WhatsappIcon className="size-5" />
              WhatsApp us
            </ButtonLink>
            <ButtonLink href={`mailto:${SITE.email}`} size="lg" variant="outline">
              Email us
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-3">Or call the same number: {SITE.whatsappDisplay}</p>
        </div>

        {/* The contact details as a slip from the counter printer, the WhatsApp line marked with the highlighter. */}
        <div className="tear-bottom mx-auto w-full max-w-sm rotate-1 bg-paper px-7 pt-8 pb-14 font-slip text-[0.85rem] leading-[1.7] text-ink shadow-slip">
          <p className="text-center font-semibold tracking-wide">RESTORA</p>
          <p className="text-center text-ink-3">Contact</p>
          <Dashes />
          <a href={whatsappLink()} target="_blank" rel="noopener" className="-mx-2 block rounded-slip bg-haldi-soft px-2 py-1 hover:bg-haldi">
            <span className="flex justify-between gap-4">
              <span>WhatsApp</span>
              <span className="text-ink-3">quickest</span>
            </span>
            <span className="block font-display text-[1.9rem] font-extrabold tracking-tight">{SITE.whatsappDisplay}</span>
          </a>
          <div className="mt-3 flex justify-between gap-4">
            <span>Call</span>
            <span>{SITE.whatsappDisplay}</span>
          </div>
          <a href={`mailto:${SITE.email}`} className="flex justify-between gap-4 hover:text-indigo">
            <span>Email</span>
            <span>{SITE.email}</span>
          </a>
          <Dashes />
          <a href={SITE.appUrl} className="flex justify-between gap-4 hover:text-indigo">
            <span>Sign in</span>
            <span>{SITE.appUrl.replace('https://', '')}</span>
          </a>
          <p className="mt-3 text-ink-3">Made in Pakistan</p>
        </div>
      </section>

      <section className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        <h2 className="display border-t-[3px] border-ink pt-6 text-[clamp(2rem,4.5vw,3.25rem)]">What to message us about</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((topic) => (
            <a
              key={topic.title}
              href={whatsappLink(topic.message)}
              target="_blank"
              rel="noopener"
              className="group flex flex-col rounded-panel bg-paper p-6 shadow-slip transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold tracking-tight">{topic.title}</h3>
              <p className="mt-2 flex-1 text-ink-2">{topic.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-leaf group-hover:underline">
                <WhatsappIcon className="size-4" />
                Ask on WhatsApp
              </span>
            </a>
          ))}
          <Link href="/demo" className="group flex flex-col rounded-panel bg-night p-6 text-white shadow-lift transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold tracking-tight">A walkthrough for your team</h3>
            <p className="mt-2 flex-1 text-moon">A short call where we set up your menu and tables with you, and show the counter how it works.</p>
            <span className="mt-6 font-semibold text-haldi group-hover:underline">Book a demo</span>
          </Link>
        </div>
      </section>
    </>
  );
}
