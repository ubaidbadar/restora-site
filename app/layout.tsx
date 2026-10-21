import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import SITE from '@/constants/site';
import './globals.css';

// All four faces live in app/fonts (SIL Open Font License), so builds need no network and visitors never ask Google.
const bricolage = localFont({ src: './fonts/bricolage_grotesque.woff2', variable: '--font-bricolage', weight: '200 800', display: 'swap' });
const instrument = localFont({ src: './fonts/instrument_sans.woff2', variable: '--font-instrument', weight: '400 700', display: 'swap' });
const plexMono = localFont({
  src: [
    { path: './fonts/plex_mono_400.woff2', weight: '400' },
    { path: './fonts/plex_mono_600.woff2', weight: '600' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
});
// Only the khata names use it, further down the page: not preloaded.
const nastaliq = localFont({ src: './fonts/noto_nastaliq_urdu.woff2', variable: '--font-nastaliq', display: 'swap', preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_PK', url: '/' },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#EEF0F6',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-PK" className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} ${nastaliq.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
