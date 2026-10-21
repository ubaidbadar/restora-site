import { BellRing, Check, ChefHat, QrCode, ReceiptText, Smartphone } from 'lucide-react';
import ButtonLink from '@/components/button_link';
import ClosingCta from '@/components/closing_cta';
import FaqList from '@/components/faq_list';
import FeatureIcon from '@/components/feature_icon';
import JsonLd from '@/components/json_ld';
import ProductShots from '@/components/product_shots';
import SectionHeading from '@/components/section_heading';
import FAQS from '@/constants/faqs';
import FEATURES from '@/constants/features';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

const FLOW = [
  { icon: QrCode, title: 'The guest scans the table', text: 'Your menu opens on their phone. They can call a waiter or ask for the bill from the table.' },
  { icon: Smartphone, title: 'The waiter takes the order', text: 'On their own phone: dishes, sizes, add-ons and notes, for that table.' },
  { icon: ChefHat, title: 'The kitchen gets the slip', text: 'Printed at once, and the order moves from new to preparing to ready on the board.' },
  { icon: ReceiptText, title: 'Paid, or on khata', text: 'Cash, card, JazzCash or Easypaisa, or added to the customer\'s khata. Receipt on WhatsApp.' },
];

const LOCAL = [
  { title: 'Keeps going offline', text: 'Orders are saved on the device when the internet drops and sent when it is back.' },
  { title: 'Khata, not a notebook', text: 'Bills on khata, part payments, and statements sent on WhatsApp.' },
  { title: 'WhatsApp, where customers are', text: 'Receipts, khata statements and "we miss you" messages in a tap.' },
  { title: 'Rupees and local payments', text: 'Cash, card, JazzCash, Easypaisa and bank transfer, with tax per method.' },
  { title: 'Phones you already have', text: 'Android, iPhone, tablet or laptop. Nothing to buy, nothing to install on a PC.' },
  { title: 'Urdu names and notes', text: 'Customers, dishes and notes can be written in Urdu. A full Urdu app is coming.' },
];

const ROLES = [
  { who: 'Owner', what: 'Today\'s sales for every branch, cash vs digital, khata owed, and who runs what.' },
  { who: 'Manager', what: 'Menu, stock, tables, bookings and the team, from the floor.' },
  { who: 'Waiter', what: 'Tables, guest calls and orders on their own phone.' },
  { who: 'Cashier', what: 'Payments, discounts with permission, receipts and khata.' },
];

/** restora.live: what Restora is, how a night runs on it, why it fits Pakistan, what it costs, and the way in. */
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

      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-primary-soft via-canvas to-canvas">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:pt-20">
          <div className="flex flex-col items-start gap-6">
            <p className="inline-flex items-center gap-2 rounded-pill bg-surface px-3 py-1 text-sm font-medium text-accent-text shadow-card">
              <span className="size-2 rounded-pill bg-art-leaf" aria-hidden="true" />
              Free while we grow · no card needed
            </p>
            <h1 className="text-4xl leading-[1.08] font-bold text-ink sm:text-5xl lg:text-6xl">Orders, tables and khata for your restaurant.</h1>
            <p className="max-w-xl text-lg text-body sm:text-xl">Take orders on any phone, serve tables with QR codes, keep khata and bring customers back on WhatsApp. Even when the internet isn&apos;t working.</p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href={appLink('/signup', 'home-hero')} size="lg">
                Start free
              </ButtonLink>
              <ButtonLink href={whatsappLink()} size="lg" variant="outline">
                <WhatsappIcon className="size-5 text-whatsapp" />
                WhatsApp us
              </ButtonLink>
            </div>
            <p className="text-sm text-muted">Works on Android, iPhone, tablet and laptop.</p>
          </div>
          <ProductShots />
        </div>
      </section>

      {/* One order, start to finish */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <SectionHeading eyebrow="How a night runs" title="One order, from the table to the bill">
            Everyone works on the same orders, on their own phone, and nothing is written twice.
          </SectionHeading>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((step, index) => (
              <li key={step.title} className="reveal flex flex-col gap-3 rounded-card bg-surface p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-control bg-primary-soft text-accent-text">
                    <step.icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-subtle">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-base text-body">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Built for Pakistan */}
      <section className="bg-surface px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Made in Pakistan" title="Built for how restaurants here really work">
            Load-shedding, slow mobile data, khata customers and WhatsApp everything. Restora was made for that, not adapted to it.
          </SectionHeading>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {LOCAL.map((item) => (
              <li key={item.title} className="reveal flex gap-3">
                <Check className="mt-1 size-5 shrink-0 text-success-700" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-base text-body">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <SectionHeading eyebrow="Everything in one app" title="What Restora does" center>
            No add-ons to buy and no separate apps for the kitchen, the counter and the owner.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <a key={feature.id} href={`/features#${feature.id}`} className="reveal group flex flex-col gap-3 rounded-card bg-surface p-5 shadow-card transition-shadow hover:shadow-lg">
                <FeatureIcon name={feature.icon} />
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent-text">{feature.title}</h3>
                <p className="text-sm text-body">{feature.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-surface px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <SectionHeading eyebrow="One app for everyone" title="Each person sees what their job needs">
            Invite your team by email or WhatsApp. Their role decides what they can do; their branch decides where.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role) => (
              <div key={role.who} className="reveal flex flex-col gap-2 rounded-card border border-border p-5">
                <h3 className="text-lg font-semibold text-ink">{role.who}</h3>
                <p className="text-base text-body">{role.what}</p>
              </div>
            ))}
          </div>
          <p className="flex items-center gap-2 text-base text-body">
            <BellRing className="size-5 text-accent-text" aria-hidden="true" />
            When a guest calls from their table, it shows on the Tables screen for every waiter.
          </p>
        </div>
      </section>

      {/* Price */}
      <section className="px-4 py-20 sm:px-6">
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-panel bg-surface p-8 text-center shadow-card sm:p-12">
          <p className="text-sm font-semibold text-accent-text">Pricing</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Free. Every feature, every branch.</h2>
          <p className="max-w-xl text-lg text-body">Restora is free while we grow. No card, no trial that runs out. If paid plans ever come, you will hear from us long before.</p>
          <ButtonLink href="/pricing" variant="outline">
            See what is included
          </ButtonLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <SectionHeading title="Questions owners ask" center />
          <FaqList />
        </div>
      </section>

      <ClosingCta from="home-end" />
    </>
  );
}
