import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import SITE from '@/constants/site';
import './globals.css';

// The wordmark's font (Plus Jakarta Sans, variable weight, SIL Open Font License), kept in the repo so builds need no
// network and visitors never ask Google for it.
const jakarta = localFont({ src: './fonts/plus_jakarta_sans.woff2', variable: '--font-jakarta', display: 'swap', weight: '200 800' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_PK', url: '/' },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F7F9' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F19' },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-PK" className={jakarta.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
