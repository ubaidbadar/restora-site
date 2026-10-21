import WhatsappIcon from '@/icons/whatsapp_icon';

const REGISTER = [
  { name: 'محمد عثمان', amount: '2,850', crossed: true },
  { name: 'بلال چوہدری', amount: '4,200', crossed: false },
  { name: 'فاطمہ نور', amount: '1,850', crossed: false },
  { name: 'ڈاکٹر صاحب', amount: '?', crossed: false },
];

const KHATA = [
  { name: 'Bilal Chaudhry', phone: '0300 4217733', owes: 'Rs 4,200' },
  { name: 'Fatima Noor', phone: '0321 8805412', owes: 'Rs 1,850' },
];

/**
 * Khata, before and after: a page of the register most restaurants keep by the till, and the same customers in Restora,
 * with what they owe and a statement one tap away on WhatsApp.
 */
export default function KhataCompare() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
      {/* The register: ruled paper, a red margin, names in Urdu, one settled and crossed out, one with no amount at all. */}
      <div aria-label="A paper khata register" role="img" className="relative -rotate-2 rounded-slip bg-paper px-6 pt-6 pb-10 shadow-slip">
        <div aria-hidden="true" className="absolute inset-y-0 start-[6.25rem] w-px bg-chili/50" />
        <ul dir="rtl" className="relative font-urdu text-[1.35rem] text-ink-2">
          {REGISTER.map((row) => (
            <li key={row.name} className="grid h-12 grid-cols-[1fr_4.5rem] items-center gap-6 border-b border-ink-2/20">
              <span className={row.crossed ? 'line-through decoration-chili decoration-2' : ''}>{row.name}</span>
              <span dir="ltr" className="text-start font-sans text-base tabular-nums">
                {row.amount}
              </span>
            </li>
          ))}
          <li aria-hidden="true" className="h-12 border-b border-ink-2/20" />
        </ul>
      </div>

      {/* Restora's khata. */}
      <div className="rounded-panel bg-paper p-5 shadow-lift sm:p-6">
        <p className="text-sm font-semibold text-ink-3">Khata owed: Rs 6,050 by 2 customers</p>
        <ul className="mt-3 divide-y divide-rule">
          {KHATA.map((row) => (
            <li key={row.name} className="flex items-center gap-3 py-3.5">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-indigo-wash text-sm font-bold text-indigo">
                {row.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-ink">{row.name}</span>
                <span className="block text-sm text-ink-3">{row.phone}</span>
              </span>
              <span className="font-display text-lg font-bold text-chili">{row.owes}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-center gap-2 rounded-control bg-leaf-soft px-3 py-2.5 text-sm font-semibold text-leaf">
          <WhatsappIcon className="size-4" />
          Statement sent to Bilal on WhatsApp
        </div>
      </div>
    </div>
  );
}
