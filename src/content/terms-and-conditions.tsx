import { BUSINESS_LOCATION, CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export function TermsAndConditionsContent() {
  return (
    <article className="prose-legal w-full max-w-4xl overflow-x-hidden rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-[#9d8a67]">Last updated: May 14, 2026</p>

      <p className="mt-6">
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to the {SITE_NAME} website, the forthcoming
        {SITE_NAME} mobile application, and related customer services offered by {SITE_NAME} (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;). By using our services, you agree to these Terms.
      </p>

      <h2>About {SITE_NAME}</h2>
      <p>
        {SITE_NAME} is an India-first platform that helps customers discover partner gyms and book hourly gym access.
        Customers browse partner gyms, compare hourly plans, reserve training slots, and pay for confirmed sessions
        through secure checkout powered by Razorpay. This website describes our customer offering, support channels, and
        mandatory legal policies.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 16 years old to create an account or book through {SITE_NAME}. By using the service, you
        confirm that the information you provide is accurate and that you are legally able to enter into these Terms.
      </p>

      <h2>Accounts and bookings</h2>
      <ul>
        <li>You are responsible for keeping your login credentials and contact details secure.</li>
        <li>
          Bookings are created when you add sessions to your cart and complete payment. Unpaid sessions remain in your
          cart until checkout succeeds.
        </li>
        <li>
          Confirmed bookings appear in My Bookings after successful payment verification. Session timing, gym rules,
          and access instructions are shown in the app and may vary by partner gym.
        </li>
        <li>
          You agree to arrive on time, follow partner gym rules, and use facilities only for lawful personal fitness
          purposes.
        </li>
      </ul>

      <h2>Pricing and payments</h2>
      <p>
        Prices for hourly gym sessions are displayed before checkout and may vary by partner gym, plan, and slot
        availability. Taxes and fees, if applicable, are shown during checkout before you confirm payment.
      </p>
      <p>
        Payments are processed through Razorpay. We do not store your full card, UPI PIN, or net-banking credentials on
        our servers. Available payment methods depend on Razorpay and your bank or wallet provider.
      </p>
      <p>
        A booking is treated as confirmed only after Razorpay reports a successful payment. Failed, abandoned, or
        reversed payments do not create a confirmed booking.
      </p>

      <h2>Partner gyms</h2>
      <p>
        {SITE_NAME} lists independent partner gyms. Gym access, equipment, hygiene, safety, and on-site policies are
        provided by the partner gym. We facilitate discovery, booking, and payment but do not operate the physical gym
        facilities.
      </p>

      <h2>Cancellations and refunds</h2>
      <p>
        Cancellation windows, refund eligibility, and processing timelines are described in our{' '}
        <a href="/refund">Refund Policy</a>. If a partner gym cancels a session or a payment issue occurs, refunds are
        handled according to that policy and applicable law.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to misuse the service, including by:</p>
      <ul>
        <li>Providing false booking, identity, or payment information.</li>
        <li>Attempting to disrupt, reverse engineer, or overload our systems.</li>
        <li>Using the service for unlawful, abusive, or fraudulent activity.</li>
        <li>Reselling or transferring bookings in violation of partner gym rules.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The {SITE_NAME} name, branding, website content, and software are owned by us or our licensors. You may not copy,
        modify, or distribute our materials except as allowed by these Terms or with our written permission.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The service is provided on an &quot;as available&quot; basis. We do not guarantee uninterrupted access, specific
        gym availability, or fitness outcomes. Physical training involves inherent risk; you participate at your own
        discretion and should consult a medical professional when appropriate.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} is not liable for indirect, incidental, special, or
        consequential damages arising from your use of the service, partner gym facilities, or third-party payment
        systems. Our aggregate liability for a confirmed booking dispute is limited to the amount you paid for that
        booking, except where applicable law requires otherwise.
      </p>

      <h2>Privacy</h2>
      <p>
        Our collection and use of personal information is described in our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. The revised version will be posted on this page with an updated
        &quot;Last updated&quot; date. Continued use of the service after changes become effective constitutes acceptance
        of the revised Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Courts located in {BUSINESS_LOCATION} have jurisdiction over
        disputes arising from these Terms, subject to applicable consumer protection law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
}
