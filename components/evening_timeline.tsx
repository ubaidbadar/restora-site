import type { ReactNode } from 'react';
import { BellRing, CloudOff, ReceiptText, RefreshCw } from 'lucide-react';

/** One moment of the evening: when, what happened, and a small piece of the app as it looked then. */
interface Moment {
  time: string;
  title: string;
  text: string;
  scene: ReactNode;
}

/** A small panel of the app on the night background. */
function Scene({ children }: { children: ReactNode }) {
  return <div className="rounded-[14px] bg-night-soft p-4 text-[0.9rem] text-white ring-1 ring-white/10">{children}</div>;
}

const MOMENTS: Moment[] = [
  {
    time: '7:02 pm',
    title: 'A family sits at table 4 and scans the QR code',
    text: 'Your menu opens on their phone. When they are ready, they tap Call waiter, and it shows on every waiter\'s Tables screen.',
    scene: (
      <Scene>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Table 4</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-haldi px-2.5 py-0.5 text-[0.8rem] font-semibold text-ink">
            <BellRing className="size-3.5" aria-hidden="true" />
            Waiter called
          </span>
        </div>
        <p className="mt-1 text-moon">2 minutes ago</p>
      </Scene>
    ),
  },
  {
    time: '7:04 pm',
    title: 'Bilal takes the order on his own phone',
    text: 'Half or full, extra raita, "less spicy". He picks dishes from the menu, and the order lands on the board for everyone.',
    scene: (
      <Scene>
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl font-bold">#27</span>
          <span className="text-moon">Dine-in, table 4</span>
        </div>
        <ul className="mt-2 space-y-0.5 text-moon">
          <li>2× Chicken karahi (half)</li>
          <li>6× Tandoori roti</li>
          <li>1× Raita, 2× Fresh lime</li>
        </ul>
      </Scene>
    ),
  },
  {
    time: '7:05 pm',
    title: 'The kitchen slip prints',
    text: 'One tap from the order. The board moves it from new to preparing to ready, so the counter knows what is waiting.',
    scene: (
      <div className="tear-bottom max-w-56 bg-paper px-4 pt-3 pb-5 font-slip text-[0.78rem] leading-relaxed text-ink">
        <p className="flex justify-between font-semibold"><span>KITCHEN #27</span><span>Table 4</span></p>
        <p>2 Chicken karahi (half)</p>
        <p className="text-ink-3">&nbsp;&nbsp;less spicy</p>
        <p>6 Tandoori roti</p>
      </div>
    ),
  },
  {
    time: '8:41 pm',
    title: 'The internet drops. Orders keep coming.',
    text: 'New orders are saved on the phone with their own numbers. The counter does not stop, and nobody writes on paper.',
    scene: (
      <Scene>
        <span className="inline-flex items-center gap-2 rounded-full bg-chili px-3 py-1 text-[0.85rem] font-semibold">
          <CloudOff className="size-4" aria-hidden="true" />
          Offline: 3 orders waiting to send
        </span>
      </Scene>
    ),
  },
  {
    time: '8:53 pm',
    title: 'Back online. Everything sends itself.',
    text: 'The waiting orders go to the server on their own, and every phone and the counter see the same board again.',
    scene: (
      <Scene>
        <span className="inline-flex items-center gap-2 rounded-full bg-leaf px-3 py-1 text-[0.85rem] font-semibold">
          <RefreshCw className="size-4" aria-hidden="true" />
          All orders sent
        </span>
      </Scene>
    ),
  },
  {
    time: '11:20 pm',
    title: 'Closing. The day\'s numbers are already done.',
    text: 'Sales, cash against JazzCash and card, what is still unpaid and who owes khata. For one branch or all of them.',
    scene: (
      <Scene>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-moon">Sales today</p>
            <p className="font-display text-xl font-bold">Rs 84,350</p>
          </div>
          <div>
            <p className="text-moon">Orders</p>
            <p className="font-display text-xl font-bold">61</p>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-moon">
            <ReceiptText className="size-4" aria-hidden="true" />
            Khata owed: Rs 6,050 by 2 customers
          </div>
        </div>
      </Scene>
    ),
  },
];

/**
 * One evening at a restaurant, in the order it happens: a real sequence, so the moments are marked with their time.
 * On wide screens the heading stays in view while the evening scrolls past.
 */
export default function EveningTimeline() {
  return (
    <section aria-labelledby="evening" className="bg-night text-white">
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="evening" className="display text-[clamp(2.6rem,6vw,4.75rem)]">
            One evening at Lahori Karahi House
          </h2>
          <p className="mt-6 max-w-md text-lg text-moon">From the first table to the last bill, on the phones the staff already carry. Nothing written twice.</p>
        </div>
        <ol className="relative border-s-2 border-white/15">
          {MOMENTS.map((moment) => (
            <li key={moment.time} className="relative ps-8 pb-14 last:pb-0 sm:ps-12">
              <span aria-hidden="true" className="absolute -start-[9px] top-2 size-4 rounded-full border-[3px] border-night bg-haldi" />
              <p className="font-display text-[1.75rem] font-bold tracking-tight text-haldi tabular-nums">{moment.time}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">{moment.title}</h3>
              <p className="mt-2 max-w-xl text-moon">{moment.text}</p>
              <div className="mt-5 max-w-sm">{moment.scene}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
