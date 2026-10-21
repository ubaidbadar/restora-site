import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';
import ButtonLink from './button_link';

/** The last section of a page: one more invitation to start, or to talk first. */
export default function ClosingCta({ from }: { from: string }) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="reveal mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-panel bg-primary px-6 py-14 text-center text-on-primary sm:px-12">
        <h2 className="text-3xl font-bold sm:text-4xl">Run tonight&apos;s service on Restora</h2>
        <p className="max-w-xl text-lg opacity-90">Set up your menu and tables in a few minutes. It is free, and there is nothing to install on a computer.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLink('/signup', from)} size="lg" variant="outline" className="border-transparent">
            Start free
          </ButtonLink>
          <ButtonLink href={whatsappLink()} size="lg" variant="whatsapp">
            <WhatsappIcon className="size-5" />
            Talk to us first
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
