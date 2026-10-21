import Link from 'next/link';
import NAV_LINKS from '@/constants/nav_links';
import appLink from '@/utils/app_link';
import ButtonLink from './button_link';
import Logo from './logo';
import MobileMenu from './mobile_menu';

/**
 * The top of every page: logo, pages, Sign in and Start free. On phones the pages are behind a menu button
 * (components/mobile_menu).
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-control px-3 py-2 text-sm font-medium text-body hover:bg-hover hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <a href={appLink('/login', 'header')} className="hidden rounded-control px-3 py-2 text-sm font-medium text-body hover:bg-hover hover:text-ink sm:block">
            Sign in
          </a>
          <ButtonLink href={appLink('/signup', 'header')}>Start free</ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
