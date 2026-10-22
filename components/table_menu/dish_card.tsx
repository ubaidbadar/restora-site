import type { AddonGroup, Dish } from '@/types/table_menu';
import formatRs from '@/utils/format_rs';
import AddToCart from './add_to_cart';

/** A dish as a guest reads it: name, what it is, its price (from the smallest size), a photo, and the way to add it. */
export default function DishCard({ dish, groups }: { dish: Dish; groups: AddonGroup[] }) {
  const from = Math.min(...dish.sizes.map((size) => size.price));
  const orderable = !dish.soldOut && dish.sizes.length > 0;

  return (
    <li className={`flex gap-3.5 rounded-panel bg-paper p-4 shadow-slip ${orderable ? '' : 'opacity-60'}`}>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-sans text-[1.05rem] font-semibold leading-snug text-ink">{dish.name}</h3>
        {dish.description && <p className="mt-1 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-2">{dish.description}</p>}
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <p className="font-semibold tabular-nums text-ink">
            {dish.sizes.length > 1 && <span className="text-sm font-normal text-ink-3">from </span>}
            {dish.sizes.length ? formatRs(from) : ''}
          </p>
          {orderable ? <AddToCart dish={dish} groups={groups} /> : <span className="rounded-full bg-canvas px-3 py-1 text-sm font-semibold text-ink-3">Sold out</span>}
        </div>
      </div>
      {dish.photo && (
        // eslint-disable-next-line @next/next/no-img-element -- the restaurant's own upload, from any host
        <img src={dish.photo} alt="" loading="lazy" decoding="async" className="size-28 shrink-0 rounded-control bg-canvas object-cover" />
      )}
    </li>
  );
}
