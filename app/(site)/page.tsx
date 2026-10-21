import Link from 'next/link';
import ButtonLink from '@/components/button_link';
import ClosingCta from '@/components/closing_cta';
import EveningTimeline from '@/components/evening_timeline';
import FaqList from '@/components/faq_list';
import JsonLd from '@/components/json_ld';
import KhataCompare from '@/components/khata_compare';
import PriceSlip from '@/components/price_slip';
import PrintSlip from '@/components/print_slip';
import ProductShots from '@/components/product_shots';
import FAQS from '@/constants/faqs';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

const FOR_HERE = [
  { title: 'Load-shedding and slow data', text: 'Orders are saved on the phone when the connection drops and sent when it is back.' },
  { title: 'Khata customers', text: 'Bills on khata, part payments, and a statement on WhatsApp.' },
  { title: 'JazzCash, Easypaisa, cash and card', text: 'Every way your customers pay, with tax set per payment method.' },
  { title: 'Phones you already own', text: 'Android, iPhone, tablet or laptop. No till to buy, nothing to install on a PC.' },
  { title: 'Waiters, not IT staff', text: 'Tables, orders and calls on their own phone, with only what their role needs.' },
  { title: 'More than one branch', text: 'Switch branch in a tap, and see every branch\'s numbers together.' },
];

/** restora.live: a receipt printing, one evening on Restora, khata, the real app, what it costs, questions. */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon.svg`, email: SITE.email, contactPoint: { '@type': 'ContactPoint', telephone: `+${SITE.whatsapp}`, contactType: 'customer support', areaServed: 'PK', availableLanguage: ['en', 'ur'] } },
            { '@type': 'SoftwareApplication', name: SITE.name, applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Android, iOS', description: SITE.description, offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' } },
            { '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
          ],
        }}
      />

      {/* The hero: the headline, and a receipt printing out of the counter printer. */}
      <section className="mx-auto grid max-w-[76rem] items-start gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:pt-20 lg:pb-32">
        <div>
          <h1 className="display text-[clamp(3.25rem,9.5vw,7.5rem)] text-ink">Run your restaurant from your phone.</h1>
          <p className="mt-8 max-w-xl text-xl text-ink-2">
            Orders, tables, khata and WhatsApp in one app your waiters can use on the first night. It keeps working when the internet doesn&apos;t, and it is free.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLink('/signup', 'home-hero')} size="lg">
              Start free
            </ButtonLink>
            <ButtonLink href={whatsappLink()} size="lg" variant="outline">
              <WhatsappIcon className="size-5" />
              WhatsApp us
            </ButtonLink>
          </div>
        </div>
        <div className="lg:pt-6">
          <PrintSlip />
        </div>
      </section>

      <EveningTimeline />

      {/* Khata */}
      <section className="mx-auto grid max-w-[76rem] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <div>
          <h2 className="display text-[clamp(2.6rem,6vw,4.75rem)]">Close the khata register.</h2>
          <p className="mt-6 max-w-md text-lg text-ink-2">
            Put a bill on a customer&apos;s khata in one tap. Take part payments in cash or JazzCash. When they ask how much, send their statement on WhatsApp instead of turning pages.
          </p>
        </div>
        <KhataCompare />
      </section>

      {/* The real app */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[76rem] px-5 pt-24 pb-32 sm:px-8 lg:pt-32 lg:pb-40">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="display text-[clamp(2.6rem,6vw,4.75rem)]">This is the app, not a drawing of it.</h2>
            <p className="max-w-md text-lg text-ink-2 lg:justify-self-end">The owner&apos;s screen at Lahori Karahi House: today&apos;s sales, cash against digital, and the regulars who have not been back in a month.</p>
          </div>
          <div className="mt-14 lg:mx-10">
            <ProductShots />
          </div>
        </div>
      </section>

      {/* Made for here */}
      <section className="mx-auto max-w-[76rem] px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="display max-w-3xl text-[clamp(2.6rem,6vw,4.75rem)]">Made for how restaurants here really work.</h2>
        <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FOR_HERE.map((item) => (
            <div key={item.title} className="border-t-[3px] border-ink pt-5">
              <dt className="text-xl font-semibold tracking-tight">{item.title}</dt>
              <dd className="mt-2 text-ink-2">{item.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-14 text-lg">
          <Link href="/features" className="font-semibold text-indigo underline decoration-2 underline-offset-[6px] hover:text-indigo-deep">
            Everything Restora does
          </Link>
        </p>
      </section>

      {/* Price, as a bill */}
      <section className="bg-haldi">
        <div className="mx-auto grid max-w-[76rem] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div>
            <h2 className="display text-[clamp(2.6rem,6vw,4.75rem)] text-ink">Free while we grow.</h2>
            <p className="mt-6 max-w-md text-lg text-ink">
              Every feature, every branch, every member of staff. If paid plans ever come, you will hear from us long before, and your data stays yours.
            </p>
            <div className="mt-8">
              <ButtonLink href={appLink('/signup', 'home-price')} size="lg">
                Start free
              </ButtonLink>
            </div>
          </div>
          <PriceSlip />
        </div>
      </section>

      {/* Questions */}
      <section className="mx-auto grid max-w-[76rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <div>
          <h2 className="display text-[clamp(2.6rem,6vw,4.75rem)]">Questions owners ask.</h2>
          <p className="mt-6 max-w-sm text-lg text-ink-2">
            Anything else, ask on{' '}
            <a href={whatsappLink()} target="_blank" rel="noopener" className="font-semibold text-indigo underline decoration-2 underline-offset-4">
              WhatsApp
            </a>
            .
          </p>
        </div>
        <FaqList />
      </section>

      <ClosingCta from="home-end" />
    </>
  );
}
