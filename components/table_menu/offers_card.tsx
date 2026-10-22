'use client';

import { useActionState } from 'react';
import { joinOffers } from '@/app/t/[code]/actions';
import WhatsappIcon from '@/icons/whatsapp_icon';

/** "Get offers on WhatsApp" at the end of the menu: the guest leaves their number by choice. The thank-you replaces it. */
export default function OffersCard({ code, restaurantName }: { code: string; restaurantName: string }) {
  const [result, action, pending] = useActionState(joinOffers.bind(null, code), null);

  return (
    <section aria-labelledby="offers-title" className="rounded-panel bg-paper p-5 shadow-slip">
      <h2 id="offers-title" className="flex items-center gap-2 text-[1.2rem] font-bold">
        <WhatsappIcon className="size-5 text-leaf" />
        Get offers on WhatsApp
      </h2>
      {result?.ok ? (
        <p role="status" className="mt-3 rounded-control bg-leaf-soft px-3.5 py-3 font-semibold text-leaf">
          {result.message}
        </p>
      ) : (
        <form action={action} className="mt-3 flex flex-col gap-3">
          <p className="text-[0.95rem] text-ink-2">Deals and new dishes from {restaurantName}, now and then. Your number stays with the restaurant.</p>
          <input name="name" autoComplete="name" placeholder="Your name (optional)" aria-label="Your name (optional)" maxLength={80} className="min-h-12 rounded-control border-2 border-rule bg-paper px-3.5 text-base outline-none focus:border-indigo" />
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="0300 1234567" aria-label="Mobile number" className="min-h-12 rounded-control border-2 border-rule bg-paper px-3.5 text-base outline-none focus:border-indigo" />
          <label className="flex items-start gap-3 text-[0.95rem]">
            <input type="checkbox" name="consent" required className="mt-1 size-5 accent-indigo" />
            Send me offers from {restaurantName} on WhatsApp
          </label>
          {result && (
            <p role="alert" className="text-[0.95rem] font-semibold text-chili">
              {result.message}
            </p>
          )}
          <button type="submit" disabled={pending} className="inline-flex min-h-12 items-center justify-center rounded-control bg-whatsapp px-5 font-semibold text-on-whatsapp hover:brightness-95 disabled:opacity-70">
            {pending ? 'Saving…' : 'Get offers'}
          </button>
        </form>
      )}
    </section>
  );
}
