'use client';

import { useState } from 'react';
import type { AddonGroup, Dish } from '@/types/table_menu';
import formatRs from '@/utils/format_rs';
import { useCart } from './cart_provider';
import Sheet from './sheet';
import Stepper from './stepper';

const rule = (group: AddonGroup) =>
  group.min > 0 ? (group.min === group.max ? `Pick ${group.min}` : `Pick ${group.min} to ${group.max}`) : group.max === 1 ? 'Optional' : `Up to ${group.max}`;

/** Picking a dish's size and add-ons (within each group's rules), a note for the kitchen, and how many. */
export default function DishDialog({ dish, groups, onClose }: { dish: Dish; groups: AddonGroup[]; onClose: () => void }) {
  const cart = useCart();
  const [sizeId, setSizeId] = useState(dish.sizes[0]!._id);
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [note, setNote] = useState('');
  const [qty, setQty] = useState(1);

  const size = dish.sizes.find((entry) => entry._id === sizeId)!;
  const options = groups.flatMap((group) => group.options.filter((option) => picked.has(option._id)));
  const unitPrice = size.price + options.reduce((sum, option) => sum + option.price, 0);
  const missing = groups.find((group) => group.options.filter((option) => picked.has(option._id)).length < group.min);

  const toggle = (group: AddonGroup, optionId: string) =>
    setPicked((current) => {
      const next = new Set(current);
      if (next.has(optionId)) {
        next.delete(optionId);
        return next;
      }
      const inGroup = group.options.filter((option) => next.has(option._id));
      // A one-choice group swaps; a full group takes no more.
      if (group.max === 1) inGroup.forEach((option) => next.delete(option._id));
      else if (inGroup.length >= group.max) return current;
      next.add(optionId);
      return next;
    });

  const add = () => {
    const addonIds = options.map((option) => option._id);
    const cleanNote = note.trim() || undefined;
    cart.add(
      {
        key: [dish._id, size._id, ...[...addonIds].sort(), cleanNote ?? ''].join(':'),
        itemId: dish._id,
        name: dish.name,
        sizeId: size._id,
        sizeName: size.name || undefined,
        addonIds,
        addonNames: options.map((option) => option.name),
        note: cleanNote,
        unitPrice,
      },
      qty
    );
    navigator.vibrate?.(10);
    onClose();
  };

  return (
    <Sheet
      title={dish.name}
      onClose={onClose}
      footer={
        <div className="flex items-center gap-3">
          <Stepper label={dish.name} qty={qty} min={1} onChange={setQty} />
          <button type="button" disabled={Boolean(missing)} onClick={add} className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-between gap-3 rounded-control bg-indigo px-5 font-semibold text-white hover:bg-indigo-deep disabled:bg-ink-3">
            <span className="truncate">{missing ? `Pick ${missing.name.toLowerCase()}` : 'Add'}</span>
            <span className="whitespace-nowrap tabular-nums">{formatRs(unitPrice * qty)}</span>
          </button>
        </div>
      }
    >
      {dish.description && <p className="mb-4 text-ink-2">{dish.description}</p>}

      {dish.sizes.length > 1 && (
        <fieldset className="mb-5">
          <legend className="mb-2 font-semibold">Size</legend>
          <div className="flex flex-col gap-2">
            {dish.sizes.map((entry) => (
              <Choice key={entry._id} type="radio" name="size" checked={entry._id === sizeId} onChange={() => setSizeId(entry._id)} label={entry.name || 'Regular'} price={formatRs(entry.price)} />
            ))}
          </div>
        </fieldset>
      )}

      {groups.map((group) => (
        <fieldset key={group._id} className="mb-5">
          <legend className="mb-2 flex w-full items-baseline justify-between gap-3 font-semibold">
            {group.name}
            <span className={`text-sm font-normal ${group.min > 0 ? 'text-chili' : 'text-ink-3'}`}>{rule(group)}</span>
          </legend>
          <div className="flex flex-col gap-2">
            {group.options.map((option) => (
              <Choice
                key={option._id}
                type={group.max === 1 ? 'radio' : 'checkbox'}
                name={group._id}
                checked={picked.has(option._id)}
                onChange={() => toggle(group, option._id)}
                label={option.name}
                price={option.price ? `+ ${formatRs(option.price)}` : 'Free'}
              />
            ))}
          </div>
        </fieldset>
      ))}

      <label className="flex flex-col gap-1.5 font-semibold">
        Note for the kitchen (optional)
        <input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          maxLength={200}
          placeholder="Less spicy, no onion…"
          className="min-h-12 rounded-control border-2 border-rule bg-paper px-3.5 text-base font-normal outline-none focus:border-indigo"
        />
      </label>
    </Sheet>
  );
}

function Choice({ type, name, checked, onChange, label, price }: { type: 'radio' | 'checkbox'; name: string; checked: boolean; onChange: () => void; label: string; price: string }) {
  return (
    <label className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-control border-2 bg-paper px-3.5 ${checked ? 'border-indigo' : 'border-rule'}`}>
      {/* A radio in a one-choice group can still be taken off: tapping it again clears it. */}
      <input type={type} name={name} checked={checked} onChange={onChange} onClick={type === 'radio' && checked && name !== 'size' ? onChange : undefined} className="size-5 accent-indigo" />
      <span className="flex-1">{label}</span>
      <span className="text-sm tabular-nums text-ink-2">{price}</span>
    </label>
  );
}
