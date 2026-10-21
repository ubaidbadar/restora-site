import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';
import ButtonLink from './button_link';

/** The last word on a page, on the night background: start tonight, or talk to us first. */
export default function ClosingCta({ from }: { from: string }) {
  return (
    <section className="bg-night text-white">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-10 px-5 py-24 sm:px-8 md:flex-row md:items-end md:justify-between lg:py-28">
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(2.75rem,7vw,5.5rem)]">Open tonight on Restora.</h2>
          <p className="mt-5 text-lg text-moon">Add your menu and tables in a few minutes. It is free, and the phones you have are enough.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={appLink('/signup', from)} size="lg" variant="paper">
            Start free
          </ButtonLink>
          <ButtonLink href={whatsappLink()} size="lg" variant="whatsapp">
            <WhatsappIcon className="size-5" />
            WhatsApp us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
