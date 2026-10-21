const LINES = [
  { qty: 2, item: 'Chicken karahi (half)', amount: '2,400' },
  { qty: 6, item: 'Tandoori roti', amount: '240' },
  { qty: 1, item: 'Raita', amount: '120' },
  { qty: 2, item: 'Fresh lime', amount: '360' },
];

/** A dashed rule, as a thermal printer draws one. */
function Dashes() {
  return <div aria-hidden="true" className="my-3 border-t-2 border-dashed border-ink/25" />;
}

/**
 * The hero's receipt: a real Restora bill for table 4, printing out of the counter printer once when the page opens,
 * then stamped paid. Everything on it is something Restora does: table orders, sizes, notes, tax by payment method.
 */
export default function PrintSlip() {
  return (
    <figure aria-label="A Restora receipt for table 4, paid by JazzCash" className="relative mx-auto w-full max-w-[22rem]">
      {/* The printer's mouth the slip comes out of. */}
      <div aria-hidden="true" className="relative z-10 mx-[-14px] h-5 rounded-[8px] bg-night shadow-lift">
        <div className="absolute inset-x-6 bottom-1.5 h-1 rounded-full bg-black/40" />
      </div>
      <div className="animate-print relative -mt-2 origin-top">
        <div className="tear-bottom bg-paper px-6 pt-7 pb-16 font-slip text-[0.8rem] leading-[1.55] text-ink shadow-slip">
          <div className="text-center">
            <p className="font-semibold tracking-wide">LAHORI KARAHI HOUSE</p>
            <p className="text-ink-3">Main branch</p>
          </div>
          <Dashes />
          <div className="flex justify-between">
            <span>Order #27</span>
            <span>Dine-in</span>
          </div>
          <div className="flex justify-between">
            <span>Table 4</span>
            <span>7:04 pm</span>
          </div>
          <div className="flex justify-between text-ink-3">
            <span>Taken by Bilal</span>
            <span>21 Oct</span>
          </div>
          <Dashes />
          <ul>
            {LINES.map((line) => (
              <li key={line.item} className="flex gap-3">
                <span className="w-4 shrink-0">{line.qty}</span>
                <span className="flex-1">{line.item}</span>
                <span>{line.amount}</span>
              </li>
            ))}
            <li className="ps-7 text-ink-3">&ldquo;less spicy&rdquo;</li>
          </ul>
          <Dashes />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>3,120</span>
          </div>
          <div className="flex justify-between">
            <span>Tax 5% (JazzCash)</span>
            <span>156</span>
          </div>
          <div className="mt-2 flex justify-between text-[1.05rem] font-semibold">
            <span>TOTAL</span>
            <span>Rs 3,276</span>
          </div>
          <Dashes />
          {/* Left-aligned so the stamp lands on the empty paper beside it, not on the figures. */}
          <p className="text-ink-3">Receipt sent on WhatsApp</p>
          <p className="text-ink-3">restora.live</p>
        </div>
        <div
          aria-hidden="true"
          className="animate-stamp absolute end-4 bottom-4 grid size-28 mix-blend-multiply place-items-center rounded-full border-[3px] border-leaf text-center font-display text-leaf"
        >
          <span className="leading-none">
            <span className="block text-2xl font-extrabold tracking-tight">PAID</span>
            <span className="block text-[0.7rem] font-semibold">JazzCash</span>
          </span>
        </div>
      </div>
    </figure>
  );
}
