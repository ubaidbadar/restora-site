import Link from 'next/link';
import SITE from '@/constants/site';
import WhatsappIcon from '@/icons/whatsapp_icon';
import appLink from '@/utils/app_link';
import whatsappLink from '@/utils/whatsapp_link';
import Logo from './logo';

const COLUMNS = [
  { title: 'Product', links: [{ href: '/features', label: 'Features' }, { href: '/pricing', label: 'Pricing' }, { href: '/download', label: 'Apps' }, { href: '/demo', label: 'Book a demo' }] },
  { title: 'Company', links: [{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }] },
  { title: 'Legal', links: [{ href: '/privacy', label: 'Privacy' }, { href: '/terms', label: 'Terms' }, { href: '/refunds', label: 'Refunds' }] },
];

/** The bottom of every page: what Restora is, the pages, how to reach us. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{SITE.tagline}. Made in Pakistan, for Pakistani restaurants.</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-medium text-ink hover:text-accent-text">
              <WhatsappIcon className="size-4 text-whatsapp" />
              WhatsApp {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="font-medium text-ink hover:text-accent-text">
              {SITE.email}
            </a>
          </div>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-ink">{column.title}</h2>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-body hover:text-ink">
                {link.label}
              </Link>
            ))}
            {column.title === 'Product' && (
              <a href={appLink('/login', 'footer')} className="text-sm text-body hover:text-ink">
                Sign in
              </a>
            )}
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">Restora · restora.live</p>
      </div>
    </footer>
  );
}
