import type { Metadata } from 'next';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
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
  { icon: Monitor, title: 'Laptop or computer', text: 'Open app.restora.live in Chrome, Edge or Safari. Best for the counter and the owner.', status: 'Ready now' },
  { icon: Tablet, title: 'Tablet', text: 'The same web app, made for touch, with the menu and the order side by side.', status: 'Ready now' },
  { icon: Smartphone, title: 'Android and iPhone', text: 'The Restora app for waiters and managers on the floor, with offline orders and table QR scanning.', status: 'Coming soon' },
];

/** Where to use Restora: the web app today, the phone apps soon (until they are in the stores, said plainly). */
export default function DownloadPage() {
  return (
    <>
      <PageIntro eyebrow="Apps" title="Use Restora on what you already have">
        <p>Nothing to install on a computer. The phone apps are on their way to Google Play and the App Store.</p>
      </PageIntro>
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {DEVICES.map((device) => (
            <div key={device.title} className="reveal flex flex-col gap-3 rounded-card bg-surface p-6 shadow-card">
              <device.icon className="size-7 text-accent-text" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-ink">{device.title}</h2>
              <p className="flex-1 text-base text-body">{device.text}</p>
              <p className={`self-start rounded-small px-2 py-0.5 text-sm font-semibold ${device.status === 'Ready now' ? 'bg-success-50 text-success-700' : 'bg-warning-50 text-warning-800'}`}>{device.status}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href={appLink('/signup', 'download')} size="lg">
            Open Restora in your browser
          </ButtonLink>
          <ButtonLink href={whatsappLink(`Hi Restora, please tell me when the phone app is out. (${SITE.url}/download)`)} size="lg" variant="outline">
            <WhatsappIcon className="size-5 text-whatsapp" />
            Tell me when the app is out
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
