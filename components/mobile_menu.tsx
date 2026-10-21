'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import NAV_LINKS from '@/constants/nav_links';
import appLink from '@/utils/app_link';

/**
 * Phones: the pages behind a menu button. A native <details>, so it opens before any script loads; keyed by the page,
 * so it is closed again once a link is followed.
 */
export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <details key={pathname} className="group md:hidden">
      <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-control text-ink hover:bg-hover [&::-webkit-details-marker]:hidden" aria-label="Menu">
        <Menu className="size-6 group-open:hidden" aria-hidden="true" />
        <X className="hidden size-6 group-open:block" aria-hidden="true" />
      </summary>
      <nav aria-label="Main" className="absolute inset-x-0 top-16 border-b border-border bg-surface px-4 pt-2 pb-5 shadow-lg">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="flex min-h-12 items-center border-b border-border text-base font-medium text-ink aria-[current=page]:text-accent-text">
            {link.label}
          </Link>
        ))}
        <a href={appLink('/login', 'menu')} className="flex min-h-12 items-center text-base font-medium text-ink">
          Sign in
        </a>
      </nav>
    </details>
  );
}
