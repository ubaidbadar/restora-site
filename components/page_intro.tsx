import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}

/** The top of an inner page: what it is about, in one title and a line or two. */
export default function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="bg-gradient-to-b from-primary-soft to-canvas px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        {eyebrow && <p className="text-sm font-semibold text-accent-text">{eyebrow}</p>}
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">{title}</h1>
        {children && <div className="text-lg text-body sm:text-xl">{children}</div>}
      </div>
    </section>
  );
}
