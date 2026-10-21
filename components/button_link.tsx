import type { ReactNode } from 'react';
import Link from 'next/link';

const VARIANTS = {
  /** The main action: indigo. */
  primary: 'bg-indigo text-white hover:bg-indigo-deep',
  /** The second action: an ink outline on paper or canvas. */
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
  /** On night sections. */
  paper: 'bg-paper text-ink hover:bg-haldi',
  whatsapp: 'bg-whatsapp text-on-whatsapp hover:brightness-95',
} as const;

const SIZES = {
  md: 'min-h-11 px-4 text-[0.95rem] gap-2',
  lg: 'min-h-14 px-6 text-base gap-2.5',
} as const;

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}

/** A link that looks like a button. Addresses outside the site open in the same tab (the app) or a new one (WhatsApp). */
export default function ButtonLink({ href, children, variant = 'primary', size = 'md', className = '' }: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-control font-semibold transition-[background-color,color,filter] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  const newTab = href.startsWith('https://wa.me');
  return (
    <a href={href} className={classes} {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}>
      {children}
    </a>
  );
}
