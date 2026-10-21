import type { ReactNode } from 'react';

interface SectionHeadingProps {
  /** A short word above the title ("Offline", "Khata"). */
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}

/** The heading of a page section: a small label, the title, one or two lines under it. */
export default function SectionHeading({ eyebrow, title, children, center = false }: SectionHeadingProps) {
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${center ? 'mx-auto items-center text-center' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold text-accent-text">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {children && <p className="text-lg text-body">{children}</p>}
    </div>
  );
}
