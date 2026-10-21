const INCLUDED = [
  ['Orders, tables and customers', 'no limit'],
  ['Branches and staff', 'no limit'],
  ['Table QR codes', 'included'],
  ['Khata and WhatsApp statements', 'included'],
  ['Offline orders', 'included'],
  ['Setup help on WhatsApp', 'included'],
];

/** The price, as a bill: everything Restora does, line by line, and the total at the bottom. */
export default function PriceSlip() {
  return (
    <div className="tear-bottom mx-auto w-full max-w-md bg-paper px-7 pt-8 pb-12 font-slip text-[0.85rem] leading-[1.7] text-ink shadow-slip">
      <p className="text-center font-semibold tracking-wide">RESTORA</p>
      <p className="text-center text-ink-3">Per restaurant, per month</p>
      <div aria-hidden="true" className="my-4 border-t-2 border-dashed border-ink/25" />
      <ul>
        {INCLUDED.map(([item, value]) => (
          <li key={item} className="flex justify-between gap-4">
            <span>{item}</span>
            <span className="text-ink-3">{value}</span>
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="my-4 border-t-2 border-dashed border-ink/25" />
      <div className="flex items-baseline justify-between">
        <span className="text-base font-semibold">TOTAL</span>
        <span className="font-display text-5xl font-extrabold tracking-tight">Rs 0</span>
      </div>
      <p className="mt-4 text-ink-3">No card. No trial that runs out.</p>
    </div>
  );
}
