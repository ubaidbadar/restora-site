import type { Metadata } from 'next';
import ClosingCta from '@/components/closing_cta';
import PageIntro from '@/components/page_intro';

export const metadata: Metadata = {
  title: 'About',
  description: 'Restora is made in Pakistan for Pakistani restaurants: simple enough for a waiter, complete enough for an owner with several branches.',
  alternates: { canonical: '/about' },
};

const BELIEFS = [
  { title: 'Phones, not hardware', text: 'Most restaurants already own the devices they need. Software should run on them, not ask for a till.' },
  { title: 'The internet will drop', text: 'So orders keep going without it. A slow evening should never stop the counter.' },
  { title: 'Khata is real', text: 'Regulars who pay at the end of the month are part of how restaurants here work. We built for it.' },
  { title: 'Simple words', text: 'Orders, bills, khata, tables. If a waiter has to ask what a button means, we change the button.' },
];

/** Why Restora exists and what it believes. */
export default function AboutPage() {
  return (
    <>
      <PageIntro title="Made here, for the restaurants here.">
        <p>Restora started with a simple question: why do so many restaurants still run on a notebook, a calculator and a dozen WhatsApp chats?</p>
      </PageIntro>
      <section className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        <div className="grid gap-8 text-lg text-ink-2 md:grid-cols-2 md:gap-16">
          <p>Most restaurant software is made for somewhere else. It expects a fixed till, a steady connection and card payments. Restaurants here take orders on phones, keep khata for regulars, work through load-shedding and talk to customers on WhatsApp.</p>
          <p>Restora is built for that. Owners see their numbers for every branch, managers run the menu and the team, waiters take orders on their own phones, and nothing is written twice.</p>
        </div>
        <dl className="mt-20 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {BELIEFS.map((belief) => (
            <div key={belief.title} className="border-t-[3px] border-ink pt-5">
              <dt className="display text-[2rem]">{belief.title}</dt>
              <dd className="mt-3 max-w-md text-ink-2">{belief.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <ClosingCta from="about" />
    </>
  );
}
