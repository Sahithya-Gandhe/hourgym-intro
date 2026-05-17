import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export function RefundPolicyContent() {
  return (
    <article className="prose-legal w-full overflow-x-hidden rounded-2xl border border-[var(--border)] bg-[rgba(20,20,22,.9)] p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-[var(--brand-gold)] sm:text-3xl">Refund &amp; Cancellation Policy</h1>
      <p className="mt-2 text-sm text-[#9d8a67]">Last updated: May 14, 2026</p>

      <p className="mt-6">
        This Refund &amp; Cancellation Policy explains how {SITE_NAME} handles payments, cancellations, and refunds for
        hourly gym session bookings made through the {SITE_NAME} mobile application. Payments are collected through
        Razorpay.
      </p>

      <h2>What you are paying for</h2>
      <p>
        You pay for confirmed hourly access or a weekly, monthly, or yearly subscription period at a partner gym, as
        selected during checkout. The booking summary and amount are shown before you authorize payment.
      </p>

      <h2>When a booking is confirmed</h2>
      <ul>
        <li>Items added to your cart are not confirmed until payment succeeds.</li>
        <li>
          A booking is confirmed only after Razorpay reports successful payment and our systems verify the transaction.
        </li>
        <li>Confirmed bookings appear in My Bookings inside the mobile app.</li>
      </ul>

      <h2>Failed or incomplete payments</h2>
      <p>
        If payment fails, is abandoned, or is not completed, no confirmed booking is created and no charge is treated
        as final. Any temporary authorization shown by your bank or wallet provider should reverse according to your
        payment provider&apos;s rules.
      </p>

      <h2>Subscription plan cancellations</h2>
      <p>
        Weekly, monthly, and yearly plans follow the cancellation and refund rules shown in the app at purchase. Unless
        stated otherwise for a specific gym plan, subscription fees are non-refundable after the plan period has started
        or after any included sessions have been used.
      </p>

      <h2>Cancellation policy</h2>
      <p>
        You may cancel a confirmed booking from the app when cancellation is available for that session. The cancellation
        window and any applicable charges are shown before you complete the booking.
      </p>
      <ul>
        <li>
          Cancellations made within the allowed window may receive a full or partial refund to the original payment
          method used at checkout.
        </li>
        <li>
          Cancellations made outside the allowed window are treated as non-refundable unless required by law or
          approved by support after review.
        </li>
        <li>No-shows, late arrivals, or missed sessions without an approved cancellation are not eligible for refunds.</li>
      </ul>

      <h2>When refunds are not provided</h2>
      <p>
        No refunds are provided for completed sessions, no-shows, late cancellations outside the published cancellation
        window, or bookings that were used as confirmed at the partner gym. If you do not cancel within the allowed
        window shown in the app, the booking amount is non-refundable except where applicable law requires otherwise.
      </p>

      <h2>Partner gym cancellations or service issues</h2>
      <p>
        If a partner gym cancels a session, closes unexpectedly, or cannot honor a confirmed booking, we will work to
        reschedule the session or issue a refund for the affected booking. Contact support with your booking details if
        you arrive and cannot access the facility.
      </p>

      <h2>Duplicate or incorrect charges</h2>
      <p>
        If you believe you were charged twice for the same booking or charged an incorrect amount, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your registered mobile number or email, gym name,
        booking date, and Razorpay payment reference if available. We will investigate and coordinate a correction or
        refund when appropriate.
      </p>

      <h2>Refund method and timelines</h2>
      <p>
        Approved refunds are initiated to the original payment method used at checkout through Razorpay. Processing
        times depend on your bank, card network, or wallet provider and are typically completed within 5 to 10 business
        days after approval, though some methods may take longer.
      </p>
      <p>
        Refund status updates are shared by email or in-app notification when available. If you do not see a refund
        after the expected period, contact us with your payment reference so we can trace the transaction.
      </p>

      <h2>Chargebacks and disputes</h2>
      <p>
        Please contact {SITE_NAME} support before raising a payment dispute so we can review the booking record. We may
        share booking, attendance, and payment evidence with Razorpay or your bank as part of a lawful dispute review.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this Refund &amp; Cancellation Policy from time to time. Material changes will be posted on this page with an
        updated &quot;Last updated&quot; date.
      </p>

      <h2>Contact</h2>
      <p>
        Refund and payment questions can be sent to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Include the gym name, booking date, and whether
        Razorpay checkout completed.
      </p>
    </article>
  );
}
