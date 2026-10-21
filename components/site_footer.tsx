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

/** The bottom of every page, continuing the night background: how to reach us, and every page. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-night text-moon">
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="max-w-xs">Made in Pakistan, for the restaurants here.</p>
          <div className="flex flex-col gap-2">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-white hover:text-haldi">
              <WhatsappIcon className="size-5 text-whatsapp" />
              {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="font-semibold text-white hover:text-haldi">
              {SITE.email}
            </a>
          </div>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <h2 className="font-sans text-sm font-semibold text-white/60">{column.title}</h2>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            {column.title === 'Product' && (
              <a href={appLink('/login', 'footer')} className="hover:text-white">
                Sign in
              </a>
            )}
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <p className="border-t border-white/10 py-6 text-sm text-white/60">© Restora. restora.live</p>
      </div>
    </footer>
  );
}
