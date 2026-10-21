import Image from 'next/image';

/**
 * The real app, not a mock-up: the web app on a laptop and the same screen on a phone beside it. Screenshots from the
 * demo restaurant (public/screenshots); replace them there when the app changes.
 */
export default function ProductShots() {
  return (
    <div className="relative">
      {/* On a phone screen the laptop would be too small to read, so only the phone shows, at a readable size. */}
      <div className="hidden overflow-hidden rounded-[14px] bg-paper shadow-lift ring-1 ring-ink/10 sm:block">
        <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-rule px-3.5">
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="ms-3 rounded-full bg-canvas px-3 py-0.5 text-[0.7rem] text-ink-3">app.restora.live</span>
        </div>
        <Image src="/screenshots/dashboard-wide.jpg" alt="Restora on a laptop: today's sales, orders by type, cash and digital payments, and customers who have not come back" width={1280} height={800} sizes="(min-width: 1024px) 860px, 100vw" className="h-auto w-full" />
      </div>
      <div className="mx-auto w-[78%] max-w-72 overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-lift sm:absolute sm:-end-8 sm:-bottom-10 sm:w-[28%] sm:max-w-60">
        <Image src="/screenshots/dashboard-narrow.jpg" alt="The same screen on a phone, with the tab bar and the New order button" width={780} height={1688} sizes="(min-width: 640px) 240px, 78vw" className="h-auto w-full rounded-[1.55rem]" />
      </div>
    </div>
  );
}
