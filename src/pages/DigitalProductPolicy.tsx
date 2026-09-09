import { LegalList, PolicyLayout, PolicySection } from '@/components/policy/PolicyLayout'

export function DigitalProductPolicy() {
  return (
    <PolicyLayout title="Digital Product Policy" updated="August 30, 2026">
      <PolicySection title="1. Electronic Delivery">
        <p>
          All products sold by SOSAO LLC are digital. Products are delivered
          electronically by email — no physical product, package, or shipment
          is included with any purchase, and no shipping fees apply.
        </p>
      </PolicySection>

      <PolicySection title="2. Access After Purchase">
        <p>
          Access instructions are provided after successful payment. Please
          keep the email address you use at checkout current, since your
          access details are sent to that address.
        </p>
      </PolicySection>

      <PolicySection title="3. Device and Internet Requirements">
        <LegalList
          items={[
            'Buyers are responsible for having a compatible device and a reliable internet connection to access digital content.',
            'Compatibility and bandwidth requirements may vary by product.',
            'If you have trouble accessing your content, contact our support team for help.',
          ]}
        />
      </PolicySection>

      <PolicySection title="4. Personal-Use License">
        <p>
          Digital purchases are licensed for the buyer&rsquo;s personal use
          only. This license is non-transferable and non-exclusive.
        </p>
      </PolicySection>

      <PolicySection title="5. No Sharing or Redistribution">
        <LegalList
          items={[
            'Login credentials and access or download links must not be shared with anyone else.',
            'Purchased content may not be copied, resold, redistributed, uploaded, or reproduced.',
            'Unauthorized redistribution of our digital content is prohibited and may result in termination of access.',
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  )
}
