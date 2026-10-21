/** Where things are, said once. The app's address can be changed per deploy (NEXT_PUBLIC_APP_URL). */
const SITE = {
  name: 'Restora',
  url: 'https://restora.live',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.restora.live',
  email: 'admin@restora.live',
  /** International format for links, the local way for people. */
  whatsapp: '923476262068',
  whatsappDisplay: '0347 6262068',
  tagline: 'Orders, tables and khata for your restaurant',
  description:
    'Restora runs your restaurant from your phone: take orders, serve tables with QR codes, keep khata, and bring customers back on WhatsApp. It keeps working when the internet doesn\'t. Free for now.',
} as const;

export default SITE;
