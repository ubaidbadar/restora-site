import { ChevronDown } from 'lucide-react';
import FAQS from '@/constants/faqs';

/** The common questions, each opening in place (native <details>). */
export default function FaqList() {
  return (
    <div className="divide-y divide-border rounded-card bg-surface shadow-card">
      {FAQS.map((faq) => (
        <details key={faq.q} className="group px-5 py-1 sm:px-6">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {faq.q}
            <ChevronDown className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pb-5 text-base text-body">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
