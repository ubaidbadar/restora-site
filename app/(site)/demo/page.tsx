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
      <PageIntro eyebrow="Demo" title="See it with your own menu">
        <p>A short walkthrough on a WhatsApp call, for you and whoever runs the counter. We can set up your menu and tables with you.</p>
      </PageIntro>
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-xl">
          <DemoForm />
        </div>
      </section>
    </>
  );
}
