import Image from 'next/image';

/**
 * The real app, not a mock-up: the web app on a laptop and the same screen on a phone in front of it. Screenshots from
 * the demo restaurant (public/screenshots); replace them there when the app changes.
 */
export default function ProductShots() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pb-10 lg:max-w-none">
      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-lg">
        <div className="flex h-7 items-center gap-1.5 border-b border-border bg-sunken px-3" aria-hidden="true">
          <span className="size-2.5 rounded-pill bg-art-chili/70" />
          <span className="size-2.5 rounded-pill bg-art-saffron/70" />
          <span className="size-2.5 rounded-pill bg-art-leaf/70" />
          <span className="ms-3 truncate text-[11px] text-muted">app.restora.live</span>
        </div>
        <Image src="/screenshots/dashboard-wide.jpg" alt="Restora on a laptop: today's sales, orders by type, cash and digital payments, and customers who have not come back" width={1280} height={800} priority sizes="(min-width: 1024px) 640px, 100vw" className="h-auto w-full" />
      </div>
      <div className="absolute -bottom-2 end-2 w-[30%] min-w-28 overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-lg sm:end-6">
        <Image src="/screenshots/dashboard-narrow.jpg" alt="The same screen on a phone, with the tab bar and the New order button" width={780} height={1688} sizes="200px" className="h-auto w-full rounded-[1.2rem]" />
      </div>
    </div>
  );
}
