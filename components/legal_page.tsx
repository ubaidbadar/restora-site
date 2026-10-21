import type { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/** A legal page: title, date, and plain-language sections in a readable column. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="mx-auto flex max-w-[76rem] flex-col gap-6 px-5 py-16 sm:px-8 [&>*]:max-w-2xl [&_h2]:mt-6 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_li]:ms-5 [&_li]:list-disc [&_p]:text-ink-2 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:text-ink-2">
      <header className="flex flex-col gap-3 border-b-[3px] border-ink pb-8">
        <h1 className="display text-[clamp(2.75rem,7vw,5rem)]">{title}</h1>
        <p className="text-ink-3">Last updated {updated}</p>
      </header>
      {children}
    </article>
  );
}
