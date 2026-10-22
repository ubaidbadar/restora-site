'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { AddonGroup, Dish } from '@/types/table_menu';
import { useCart } from './cart_provider';
import DishDialog from './dish_dialog';
import Stepper from './stepper';

/**
 * Adding a dish. One with nothing to choose goes straight in, and then shows how many; one with sizes or add-ons opens
 * its sheet first.
 */
export default function AddToCart({ dish, groups }: { dish: Dish; groups: AddonGroup[] }) {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const size = dish.sizes[0]!;
  const simple = dish.sizes.length === 1 && groups.length === 0;
  const key = `${dish._id}:${size._id}`;
  const inCart = cart.lines.filter((line) => line.itemId === dish._id).reduce((sum, line) => sum + line.qty, 0);

  if (simple) {
    const line = cart.lines.find((entry) => entry.key === key);
    if (line) return <Stepper label={dish.name} qty={line.qty} onChange={(qty) => cart.setQty(key, qty)} />;
    return (
      <AddButton
        label={`Add ${dish.name}`}
        onClick={() => {
          cart.add({ key, itemId: dish._id, name: dish.name, sizeId: size._id, sizeName: size.name || undefined, addonIds: [], addonNames: [], unitPrice: size.price }, 1);
          navigator.vibrate?.(10);
        }}
      />
    );
  }

  return (
    <>
      <AddButton label={`Choose ${dish.name}`} count={inCart} onClick={() => setOpen(true)} />
      {open && <DishDialog dish={dish} groups={groups} onClose={() => setOpen(false)} />}
    </>
  );
}

function AddButton({ label, count = 0, onClick }: { label: string; count?: number; onClick: () => void }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="relative inline-flex min-h-11 items-center gap-1.5 rounded-control bg-indigo px-4 font-semibold text-white transition-colors hover:bg-indigo-deep active:scale-[0.97]">
      <Plus aria-hidden="true" className="size-4.5" strokeWidth={2.5} />
      Add
      {count > 0 && (
        <span className="absolute -top-2 -right-2 grid min-w-6 place-items-center rounded-full bg-haldi px-1.5 text-xs font-bold tabular-nums text-ink" aria-label={`${count} in your order`}>
          {count}
        </span>
      )}
    </button>
  );
}
