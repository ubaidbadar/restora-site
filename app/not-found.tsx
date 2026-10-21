import Link from 'next/link';
import SITE from '@/constants/site';

/** A page that does not exist: said in the site's own voice, with the likely ways on. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[76rem] flex-col justify-center px-5 sm:px-8">
      <p className="font-slip text-ink-3">Error 404</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(3rem,9vw,7rem)]">This page isn&apos;t on the menu.</h1>
      <p className="mt-6 text-xl text-ink-2">The link may be old or mistyped.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex min-h-14 items-center rounded-control bg-indigo px-6 font-semibold text-white hover:bg-indigo-deep">
          Go to the home page
        </Link>
        <a href={`${SITE.appUrl}/login`} className="inline-flex min-h-14 items-center rounded-control border-2 border-ink px-6 font-semibold text-ink hover:bg-ink hover:text-white">
          Sign in to Restora
        </a>
      </div>
    </main>
  );
}
