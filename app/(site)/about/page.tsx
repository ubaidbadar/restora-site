import type { Metadata } from 'next';
import ClosingCta from '@/components/closing_cta';
import PageIntro from '@/components/page_intro';
import AuthArt from '@/icons/auth_art';

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

/** Why Restora exists and what it believes, in a few lines. */
export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Made in Pakistan, for restaurants here">
        <p>Restora started from a simple question: why do so many restaurants still run on a notebook, a calculator and a dozen WhatsApp chats?</p>
      </PageIntro>
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <AuthArt className="mx-auto w-full max-w-md" />
          <div className="flex flex-col gap-5 text-lg text-body">
            <p>Most restaurant software is made for somewhere else: it expects a fixed till, a steady connection and card payments. Restaurants here take orders on phones, keep khata for regulars, work through load-shedding and talk to customers on WhatsApp.</p>
            <p>Restora is built for that. Owners see their numbers for every branch, managers run the menu and the team, waiters take orders on their own phones, and nothing is written twice.</p>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {BELIEFS.map((belief) => (
            <div key={belief.title} className="reveal flex flex-col gap-2 rounded-card bg-surface p-6 shadow-card">
              <h2 className="text-xl font-semibold text-ink">{belief.title}</h2>
              <p className="text-base text-body">{belief.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ClosingCta from="about" />
    </>
  );
}
