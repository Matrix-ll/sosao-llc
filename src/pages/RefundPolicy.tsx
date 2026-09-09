import { LegalList, PolicyLayout, PolicySection } from '@/components/policy/PolicyLayout'
import { site } from '@/data/content'

export function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy" updated="August 30, 2026">
      <PolicySection title="1. Digital Products">
        <p>
          SOSAO LLC sells digital products and online wellness content. All
          purchases are delivered electronically — no physical products are
          shipped. Because digital content can be accessed immediately, the
          following fair digital-product refund policy applies.
        </p>
      </PolicySection>

      <PolicySection title="2. When a Refund May Be Granted">
        <LegalList
          items={[
            'You may request a refund within 7 days of purchase if the digital content has not been substantially accessed, downloaded, consumed, or used.',
            'Duplicate purchases of the same product may qualify for a refund of the duplicate charge.',
            'Confirmed technical delivery failures — for example, if access instructions were never delivered or the content cannot be accessed due to a fault on our side — may qualify for a refund.',
          ]}
        />
      </PolicySection>

      <PolicySection title="3. When Purchases Are Generally Non-Refundable">
        <p>
          Once digital content has been substantially accessed, downloaded, or
          consumed, purchases are generally non-refundable. This includes, for
          example, content that has been opened, streamed, downloaded, or
          completed in full or in significant part.
        </p>
      </PolicySection>

      <PolicySection title="4. How to Request a Refund">
        <p>
          Contact our support team at{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {site.email}
          </a>{' '}
          and include your order information and the reason for your request.
          We review each request individually and will respond during our
          customer support hours.
        </p>
      </PolicySection>

      <PolicySection title="5. Approved Refunds">
        <LegalList
          items={[
            'Approved refunds are returned to the original payment method.',
            'Processing times may depend on your payment provider and can take several business days.',
          ]}
        />
      </PolicySection>

      <PolicySection title="6. Your Legal Rights">
        <p>
          Nothing in this policy limits any rights you may have under
          applicable consumer law. If a specific legal right applies to your
          purchase, that right takes precedence over this policy.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
