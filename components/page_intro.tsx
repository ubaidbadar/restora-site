import type { ReactNode } from 'react';

interface PageIntroProps {
  title: string;
  children?: ReactNode;
}

/** The top of an inner page: a large title and a line or two, left aligned like the rest of the site. */
export default function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-[76rem] px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
      <h1 className="display max-w-4xl text-[clamp(2.75rem,8vw,6rem)] text-ink">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-xl text-ink-2">{children}</div>}
    </section>
  );
}
