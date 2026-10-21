import FAQS from '@/constants/faqs';
import FEATURES from '@/constants/features';
import SITE from '@/constants/site';

/**
 * restora.live/llms.txt: what Restora is, in plain text, for AI assistants that answer questions about restaurant
 * software. Built from the same constants as the pages, so it never disagrees with them.
 */
export function GET() {
  const text = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Facts',
    `- Price: free for now, every feature, no card needed.`,
    `- For: restaurants, cafés, fast food, BBQ and karahi places, cloud kitchens and small chains in Pakistan.`,
    `- Runs on: any browser (${SITE.appUrl}); Android and iPhone apps are coming.`,
    `- Contact: WhatsApp +${SITE.whatsapp}, ${SITE.email}.`,
    '',
    '## Features',
    ...FEATURES.map((feature) => `- ${feature.title}: ${feature.summary}`),
    '',
    '## Questions',
    ...FAQS.map((faq) => `- ${faq.q} ${faq.a}`),
    '',
    '## Pages',
    `- [Features](${SITE.url}/features)`,
    `- [Pricing](${SITE.url}/pricing)`,
    `- [Apps](${SITE.url}/download)`,
    `- [Contact](${SITE.url}/contact)`,
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
