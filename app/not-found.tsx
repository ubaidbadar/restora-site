import Link from 'next/link';
import RestoraSymbol from '@/icons/restora_symbol';

/** A page that does not exist: say so, and offer the likely ways on. */
export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-canvas px-4">
      <div className="flex max-w-md flex-col items-center gap-5 text-center">
        <span className="grid size-14 place-items-center rounded-card bg-primary text-on-primary">
          <RestoraSymbol className="size-9" />
        </span>
        <h1 className="text-3xl font-bold text-ink">This page isn&apos;t on the menu</h1>
        <p className="text-lg text-body">The link may be old or mistyped.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-11 items-center rounded-control bg-primary px-5 font-semibold text-on-primary hover:bg-primary-hover">
            Go home
          </Link>
          <a href="https://app.restora.live/login" className="inline-flex min-h-11 items-center rounded-control border border-border-strong bg-surface px-5 font-semibold text-ink hover:bg-sunken">
            Sign in to Restora
          </a>
        </div>
      </div>
    </main>
  );
}
