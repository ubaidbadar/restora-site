import type { Metadata } from 'next';
import LegalPage from '@/components/legal_page';
import SITE from '@/constants/site';

export const metadata: Metadata = { title: 'Privacy policy', description: 'What Restora stores, why, who can see it, and how to have it deleted.', alternates: { canonical: '/privacy' } };

// A plain-language first version. Have it reviewed by a lawyer before paid plans or a large launch.
/** What Restora stores about restaurants and their customers, and the choices they have. */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="21 October 2026">
      <p>This policy explains what Restora stores, why, and what you can do about it. &ldquo;Restora&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean the team that runs restora.live and its apps. &ldquo;You&rdquo; means a restaurant using Restora and the people who work there.</p>
      <h2>What we store</h2>
      <ul>
        <li>Your account: name, email address and, if you give it, a phone number.</li>
        <li>Your restaurant: name, branches, menu, tables, tax settings, staff and their roles.</li>
        <li>What you enter while working: orders, payments, khata entries, reservations and notes.</li>
        <li>Your customers: the names, phone numbers, addresses and notes your staff save, and their orders.</li>
        <li>Technical records: sign-in sessions, the devices registered as counters, and logs that help us fix problems.</li>
      </ul>
      <h2>Why we store it</h2>
      <p>Only to run Restora for you: to show your orders, customers and numbers, to let your team work together, to keep your data safe, and to support you when you ask. We do not sell your data or your customers&rsquo; data, and we do not show advertising.</p>
      <h2>Who can see it</h2>
      <p>People in your restaurant, as their role allows. Our team, only when needed to support you or to keep the service running. Service providers that host the service and send email, under agreements to protect it. Authorities, only when the law requires it.</p>
      <h2>Your customers</h2>
      <p>You decide which customers to save and what to send them. Please only message customers who expect to hear from you, and remove anyone who asks.</p>
      <h2>Keeping and deleting</h2>
      <p>Your data is kept while your restaurant uses Restora. Ask us to delete your restaurant or your account and we will do so within 30 days, except records we must keep by law.</p>
      <h2>This website</h2>
      <p>restora.live counts visits without cookies and without identifying you. The demo form opens WhatsApp on your own phone; nothing you type into it is stored on this site.</p>
      <h2>Contact</h2>
      <p>Questions or requests: {SITE.email} or WhatsApp {SITE.whatsappDisplay}.</p>
    </LegalPage>
  );
}
