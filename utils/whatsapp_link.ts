import SITE from '@/constants/site';

/** A chat with Restora on WhatsApp, the message already typed. */
const whatsappLink = (message = "Hi Restora, I run a restaurant and I'd like to know more.") => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export default whatsappLink;
