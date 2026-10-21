import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';

/** Phones: Start free and WhatsApp always within the thumb's reach, at the bottom of the screen. */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-canvas/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <a href={appLink('/signup', 'mobile-bar')} className="flex min-h-12 flex-1 items-center justify-center rounded-control bg-indigo text-base font-semibold text-white">
          Start free
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" aria-label={`WhatsApp ${SITE.whatsappDisplay}`} className="grid size-12 place-items-center rounded-control bg-whatsapp text-on-whatsapp">
          <WhatsappIcon className="size-6" />
        </a>
      </div>
    </div>
  );
}
