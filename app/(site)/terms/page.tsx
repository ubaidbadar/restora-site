import type { Metadata } from 'next';
import LegalPage from '@/components/legal_page';
import SITE from '@/constants/site';

export const metadata: Metadata = { title: 'Terms of use', description: 'The terms for using Restora.', alternates: { canonical: '/terms' } };

// A plain-language first version. Have it reviewed by a lawyer before paid plans or a large launch.
/** The rules for using Restora, in plain words. */
export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="21 October 2026">
      <p>By creating an account or using Restora, you agree to these terms. If you use it for a restaurant, you agree on the restaurant&rsquo;s behalf.</p>
      <h2>The service</h2>
      <p>Restora helps restaurants take orders, manage tables, customers, khata, menus and staff. It is free for now. We keep improving it, and features may change. If paid plans are introduced, we will tell you well in advance and you can choose whether to continue.</p>
      <h2>Your account</h2>
      <ul>
        <li>Give correct details and keep your password and POS PINs private.</li>
        <li>You are responsible for what your staff do with the access you give them.</li>
        <li>Tell us straight away if you think someone else has used your account.</li>
      </ul>
      <h2>Your data</h2>
      <p>What you put into Restora stays yours. You give us permission to store and process it only to run the service for you, as described in the privacy policy.</p>
      <h2>Fair use</h2>
      <p>Do not use Restora to break the law, to send messages people did not agree to receive, or to harm the service or other users. We may suspend accounts that do.</p>
      <h2>Availability</h2>
      <p>We work to keep Restora running and your data safe, and offline orders help when the internet drops. We cannot promise it will never be unavailable, and we are not liable for losses caused by interruptions, to the extent the law allows.</p>
      <h2>Ending</h2>
      <p>You can stop using Restora at any time and ask us to delete your data. We may close accounts that break these terms, after telling you where possible.</p>
      <h2>Contact</h2>
      <p>{SITE.email} · WhatsApp {SITE.whatsappDisplay}</p>
    </LegalPage>
  );
}
