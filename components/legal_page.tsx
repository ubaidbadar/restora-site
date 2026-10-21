import type { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/** A legal page: title, date, and plain-language sections in a readable column. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-14 sm:px-6 [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:ms-5 [&_li]:list-disc [&_p]:text-base [&_p]:text-body [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:text-base [&_ul]:text-body">
      <header className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-4xl font-bold text-ink">{title}</h1>
        <p className="text-sm text-muted">Last updated {updated}</p>
      </header>
      {children}
    </article>
  );
}
