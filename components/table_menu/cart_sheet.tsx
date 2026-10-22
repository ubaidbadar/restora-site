'use client';

import { useState, useTransition } from 'react';
import { CircleCheck } from 'lucide-react';
import { sendOrder } from '@/app/t/[code]/actions';
import formatRs from '@/utils/format_rs';
import { useCart } from './cart_provider';
import Sheet from './sheet';
import Stepper from './stepper';

/**
 * The cart: each line with its choices and how many, the total, and sending it. Once sent it shows the order's number,
 * so the guest can tell the waiter; the waiter confirms it before the kitchen starts.
 */
export default function CartSheet({ onClose }: { onClose: () => void }) {
  const cart = useCart();
  const [sending, startSend] = useTransition();
  const [error, setError] = useState('');
  const [sentToken, setSentToken] = useState<number | null>(null);
  const total = cart.lines.reduce((sum, line) => sum + line.unitPrice * line.qty, 0);

  const send = () =>
    startSend(async () => {
      setError('');
      const lines = cart.lines.map(({ itemId, sizeId, addonIds, note, qty }) => ({ itemId, sizeId, addonIds, note, qty }));
      const result = await sendOrder(cart.code, lines, cart.clientId);
      if (!result.ok || !result.token) return setError(result.message);
      navigator.vibrate?.([12, 60, 12]);
      cart.markSent(result.token);
      setSentToken(result.token);
    });

  if (sentToken !== null) {
    return (
      <Sheet title="Order sent" onClose={onClose} footer={<CloseButton onClose={onClose} label="Back to the menu" />}>
        <div className="flex flex-col items-center py-6 text-center">
          <CircleCheck aria-hidden="true" className="size-14 text-leaf" />
          <p className="mt-4 font-slip text-ink-3">Your order</p>
          <p className="display mt-1 text-[4rem] tabular-nums">#{sentToken}</p>
          <p role="status" className="mt-3 max-w-xs text-ink-2">
            Sent. A waiter will confirm it in a moment, then the kitchen starts. Want something else? Add it and send again.
          </p>
        </div>
      </Sheet>
    );
  }

  if (cart.lines.length === 0) {
    return (
      <Sheet title="Your order" onClose={onClose} footer={<CloseButton onClose={onClose} label="Back to the menu" />}>
        <p className="py-8 text-center text-ink-2">Nothing here yet. Tap Add on a dish.</p>
      </Sheet>
    );
  }

  return (
    <Sheet
      title="Your order"
      onClose={onClose}
      footer={
        <div className="flex flex-col gap-2.5">
          {error && (
            <p role="alert" className="rounded-control bg-haldi-soft px-3.5 py-2.5 text-[0.95rem] font-semibold">
              {error}
            </p>
          )}
          <button type="button" disabled={sending} onClick={send} className="inline-flex min-h-14 items-center justify-between gap-3 rounded-control bg-indigo px-5 text-lg font-semibold text-white hover:bg-indigo-deep disabled:opacity-70">
            <span>{sending ? 'Sending…' : 'Send to the kitchen'}</span>
            <span className="tabular-nums">{formatRs(total)}</span>
          </button>
          <p className="text-center text-sm text-ink-3">You pay at the end. Tax, if any, is added on the bill.</p>
        </div>
      }
    >
      <ul className="flex flex-col divide-y divide-rule">
        {cart.lines.map((line) => {
          const details = [line.sizeName, ...line.addonNames].filter(Boolean).join(', ');
          return (
            <li key={line.key} className="flex items-center gap-3 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-snug">{line.name}</p>
                {details && <p className="text-sm text-ink-2">{details}</p>}
                {line.note && <p className="text-sm italic text-ink-3">“{line.note}”</p>}
                <p className="mt-1 text-sm font-semibold tabular-nums">{formatRs(line.unitPrice * line.qty)}</p>
              </div>
              <Stepper label={line.name} qty={line.qty} onChange={(qty) => cart.setQty(line.key, qty)} />
            </li>
          );
        })}
      </ul>
    </Sheet>
  );
}

function CloseButton({ onClose, label }: { onClose: () => void; label: string }) {
  return (
    <button type="button" onClick={onClose} className="inline-flex min-h-12 w-full items-center justify-center rounded-control border-2 border-ink font-semibold hover:bg-ink hover:text-white">
      {label}
    </button>
  );
}
