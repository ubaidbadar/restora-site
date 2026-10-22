'use client';

import { useState, useTransition } from 'react';
import { BellRing, ReceiptText, ShoppingBag } from 'lucide-react';
import { callStaff, type ActionResult } from '@/app/t/[code]/actions';
import formatRs from '@/utils/format_rs';
import { useCart } from './cart_provider';
import CartSheet from './cart_sheet';

/**
 * Always in reach at the bottom: the order so far (opens the cart), and calling a waiter or asking for the bill. What
 * the staff answered replaces the buttons until the guest closes it.
 */
export default function CartBar({ tableName }: { tableName: string }) {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<ActionResult | null>(null);
  const [calling, startCall] = useTransition();
  const [kind, setKind] = useState<'waiter' | 'bill'>('waiter');

  const count = cart.lines.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.lines.reduce((sum, line) => sum + line.unitPrice * line.qty, 0);

  const call = (next: 'waiter' | 'bill') => {
    setKind(next);
    startCall(async () => setStatus(await callStaff(cart.code, next)));
  };

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-rule bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgb(18_21_46/0.35)] backdrop-blur">
        <div className="mx-auto flex max-w-xl flex-col gap-2.5">
          {count > 0 && (
            <button type="button" onClick={() => setOpen(true)} className="flex min-h-14 items-center gap-3 rounded-control bg-indigo px-4 text-white hover:bg-indigo-deep">
              <span className="relative">
                <ShoppingBag aria-hidden="true" className="size-6" />
                <span className="absolute -top-1.5 -right-2 grid min-w-5 place-items-center rounded-full bg-haldi px-1 text-xs font-bold tabular-nums text-ink">{count}</span>
              </span>
              <span className="flex-1 text-left font-semibold">View your order</span>
              <span className="font-semibold tabular-nums">{formatRs(total)}</span>
            </button>
          )}

          {status ? (
            <div role="status" className={`flex min-h-12 items-center justify-between gap-3 rounded-control px-4 ${status.ok ? 'bg-leaf-soft text-leaf' : 'bg-haldi-soft text-ink'}`}>
              <p className="font-semibold">{status.message}</p>
              <button type="button" onClick={() => setStatus(null)} className="min-h-10 rounded-control px-3 font-semibold underline-offset-4 hover:underline">
                OK
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              <CallButton icon={BellRing} label="Call waiter" busy={calling && kind === 'waiter'} disabled={calling} onClick={() => call('waiter')} />
              <CallButton icon={ReceiptText} label="Ask for bill" busy={calling && kind === 'bill'} disabled={calling} onClick={() => call('bill')} />
            </div>
          )}

          {cart.sent.length > 0 && count === 0 && !status && (
            <p className="text-center text-sm text-ink-3">
              Sent from table {tableName}: {cart.sent.map((order) => `#${order.token}`).join(', ')}. Your waiter confirms each one.
            </p>
          )}
        </div>
      </div>
      {open && <CartSheet onClose={() => setOpen(false)} />}
    </>
  );
}

function CallButton({ icon: Icon, label, busy, disabled, onClick }: { icon: typeof BellRing; label: string; busy: boolean; disabled: boolean; onClick: () => void }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control border-2 border-ink font-semibold text-ink hover:bg-ink hover:text-white disabled:opacity-60">
      <Icon aria-hidden="true" className={`size-5 ${busy ? 'animate-pulse' : ''}`} />
      {busy ? 'Calling…' : label}
    </button>
  );
}
