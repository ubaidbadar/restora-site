'use client';

import { useState } from 'react';
import WhatsappIcon from '@/icons/whatsapp_icon';
import whatsappLink from '@/utils/whatsapp_link';

const FIELDS = [
  { name: 'name', label: 'Your name', autoComplete: 'name', required: true },
  { name: 'restaurant', label: 'Restaurant', autoComplete: 'organization', required: true },
  { name: 'city', label: 'City', autoComplete: 'address-level2', required: true },
  { name: 'branches', label: 'How many branches', autoComplete: 'off', required: false, inputMode: 'numeric' },
] as const;

/**
 * A demo request, sent as a WhatsApp message from the visitor's own phone (so it reaches a person straight away, and
 * no details are stored on this site). The browser checks the required fields before WhatsApp opens.
 */
export default function DemoForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-4 rounded-card bg-surface p-6 shadow-card sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const value = (key: string) => String(data.get(key) ?? '').trim();
        const lines = [
          'Hi Restora, I would like a demo.',
          `Name: ${value('name')}`,
          `Restaurant: ${value('restaurant')}, ${value('city')}`,
          value('branches') && `Branches: ${value('branches')}`,
          value('note') && `Note: ${value('note')}`,
        ].filter(Boolean);
        window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
        setSent(true);
      }}
    >
      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          <span>
            {field.label}
            {field.required && <span className="text-danger-700"> *</span>}
          </span>
          <input
            name={field.name}
            required={field.required}
            autoComplete={field.autoComplete}
            inputMode={'inputMode' in field ? field.inputMode : undefined}
            className="min-h-12 rounded-control border border-border-strong bg-surface px-3.5 text-base text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft"
          />
        </label>
      ))}
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Anything we should know (optional)
        <textarea name="note" rows={3} className="rounded-control border border-border-strong bg-surface px-3.5 py-3 text-base text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary-soft" />
      </label>
      <button type="submit" className="mt-2 inline-flex min-h-13 items-center justify-center gap-2.5 rounded-control bg-whatsapp px-6 text-base font-semibold text-on-whatsapp hover:bg-whatsapp-hover">
        <WhatsappIcon className="size-5" />
        Send on WhatsApp
      </button>
      <p role="status" className="text-sm text-muted">
        {sent ? 'WhatsApp opened with your request. Press send there, and we will reply with a time that suits you.' : 'This opens WhatsApp with your request typed in. Nothing is saved on this site.'}
      </p>
    </form>
  );
}
