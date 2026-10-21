import type { MetadataRoute } from 'next';
import SITE from '@/constants/site';

const PAGES = ['', '/features', '/pricing', '/download', '/demo', '/contact', '/about', '/privacy', '/terms', '/refunds'];

/** Every public page, for search engines (restora.live/sitemap.xml). */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({ url: `${SITE.url}${path}`, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
}
