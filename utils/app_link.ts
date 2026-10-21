import SITE from '@/constants/site';

/** A page of the app, tagged with the site page it was opened from, so sign-ups can be traced back. */
const appLink = (path: '/signup' | '/login', from: string) => `${SITE.appUrl}${path}?utm_source=restora.live&utm_medium=site&utm_campaign=${encodeURIComponent(from)}`;

export default appLink;
