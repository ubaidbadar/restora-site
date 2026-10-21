import type { ReactNode } from 'react';
import Link from 'next/link';

const VARIANTS = {
  primary: 'bg-primary text-on-primary hover:bg-primary-hover',
  outline: 'border border-border-strong bg-surface text-ink hover:bg-sunken',
  whatsapp: 'bg-whatsapp text-on-whatsapp hover:bg-whatsapp-hover',
  ghost: 'text-ink hover:bg-hover',
} as const;

const SIZES = {
  md: 'min-h-11 px-4 text-sm gap-2',
  lg: 'min-h-13 px-6 text-base gap-2.5',
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
  const classes = `inline-flex items-center justify-center rounded-control font-semibold transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
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
