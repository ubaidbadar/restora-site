import { Plus } from 'lucide-react';
import FAQS from '@/constants/faqs';

/** The common questions, each opening in place (native <details>), divided by hairlines. */
export default function FaqList() {
  return (
    <div className="border-t border-rule">
      {FAQS.map((faq) => (
        <details key={faq.q} className="group border-b border-rule">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {faq.q}
            <Plus className="size-5 shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="max-w-2xl pb-6 text-ink-2">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
