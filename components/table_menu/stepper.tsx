'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';

/** How many: minus (a bin at one, which takes it out), the count, plus. At most 20 of one line. */
export default function Stepper({ label, qty, onChange, min = 0 }: { label: string; qty: number; onChange: (qty: number) => void; min?: number }) {
  const removes = qty - 1 < 1 && min === 0;
  return (
    <div role="group" aria-label={`How many ${label}`} className="inline-flex min-h-11 items-center rounded-control border-2 border-indigo bg-paper text-indigo">
      <button type="button" aria-label={removes ? `Remove ${label}` : `One less ${label}`} disabled={qty <= min} onClick={() => onChange(qty - 1)} className="grid size-10 place-items-center disabled:opacity-40">
        {removes ? <Trash2 aria-hidden="true" className="size-4.5" /> : <Minus aria-hidden="true" className="size-4.5" strokeWidth={2.5} />}
      </button>
      <span aria-live="polite" className="min-w-7 text-center font-bold tabular-nums text-ink">
        {qty}
      </span>
      <button type="button" aria-label={`One more ${label}`} disabled={qty >= 20} onClick={() => onChange(qty + 1)} className="grid size-10 place-items-center disabled:opacity-40">
        <Plus aria-hidden="true" className="size-4.5" strokeWidth={2.5} />
      </button>
    </div>
  );
}
