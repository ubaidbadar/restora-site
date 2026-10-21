import type { Metadata } from 'next';
import LegalPage from '@/components/legal_page';
import SITE from '@/constants/site';

export const metadata: Metadata = { title: 'Refund policy', description: 'Restora is free, so there is nothing to refund. How refunds will work if paid plans come.', alternates: { canonical: '/refunds' } };

/** Refunds: none needed while Restora is free; how it will work if that changes. */
export default function RefundsPage() {
  return (
    <LegalPage title="Refund policy" updated="21 October 2026">
      <p>Restora is free, so you are never charged and there is nothing to refund.</p>
      <h2>If paid plans come</h2>
      <p>This page will say exactly how refunds work before anyone is asked to pay. You will not be charged without choosing a paid plan yourself.</p>
      <h2>Contact</h2>
      <p>{SITE.email} · WhatsApp {SITE.whatsappDisplay}</p>
    </LegalPage>
  );
}
