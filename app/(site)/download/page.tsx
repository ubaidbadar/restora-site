import type { Metadata } from 'next';
import ButtonLink from '@/components/button_link';
import PageIntro from '@/components/page_intro';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Use Restora in any browser today. The Android and iPhone apps for staff are on their way to Google Play and the App Store.',
  alternates: { canonical: '/download' },
};

const DEVICES = [
  { title: 'Laptop or computer', text: 'Open app.restora.live in Chrome, Edge or Safari. Best for the counter and the owner.', ready: true },
  { title: 'Tablet', text: 'The same web app, made for touch, with the menu and the order side by side.', ready: true },
  { title: 'Android and iPhone', text: 'The Restora app for waiters and managers on the floor, with offline orders and QR table scanning.', ready: false },
];

/** Where to use Restora: the web app today, the phone apps soon (said plainly until they are in the stores). */
export default function DownloadPage() {
  return (
    <>
      <PageIntro title="Use the phones and laptops you already have.">
        <p>Nothing to install on a computer. The phone apps are on their way to Google Play and the App Store.</p>
      </PageIntro>
      <section className="mx-auto max-w-[76rem] px-5 pb-24 sm:px-8">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {DEVICES.map((device) => (
            <div key={device.title} className="border-t-[3px] border-ink pt-5">
              <p className={`text-sm font-semibold ${device.ready ? 'text-leaf' : 'text-chili'}`}>{device.ready ? 'Ready now' : 'Coming soon'}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{device.title}</h2>
              <p className="mt-2 text-ink-2">{device.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLink('/signup', 'download')} size="lg">
            Open Restora in your browser
          </ButtonLink>
          <ButtonLink href={whatsappLink(`Hi Restora, please tell me when the phone app is out. (${SITE.url}/download)`)} size="lg" variant="outline">
            <WhatsappIcon className="size-5" />
            Tell me when the app is out
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
