import type { Metadata } from 'next';
import DemoForm from '@/components/demo_form';
import PageIntro from '@/components/page_intro';

export const metadata: Metadata = {
  title: 'Book a demo',
  description: 'See Restora with your own menu: a short walkthrough on a WhatsApp call for you and your team.',
  alternates: { canonical: '/demo' },
};

/** Ask for a walkthrough: a few details, sent to us on WhatsApp. */
export default function DemoPage() {
  return (
    <>
      <PageIntro title="See it with your own menu.">
        <p>A short walkthrough on a WhatsApp call, for you and whoever runs the counter. We can set up your menu and tables with you.</p>
      </PageIntro>
      <section className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        <div className="max-w-xl">
          <DemoForm />
        </div>
      </section>
    </>
  );
}
