import { LegalList, PolicyLayout, PolicySection } from '@/components/policy/PolicyLayout'
import { site } from '@/data/content'

export function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" updated="August 30, 2026">
      <PolicySection title="1. Overview">
        <p>
          This Privacy Policy explains how SOSAO LLC (&ldquo;SOSAO&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects,
          uses, and protects personal information when you visit our website
          and purchase our digital yoga and wellness products. By using our
          website, you agree to the practices described in this policy.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We May Collect">
        <p>We may collect the following categories of personal information:</p>
        <LegalList
          items={[
            'Contact details such as your name and email address',
            'Billing information needed to complete a purchase',
            'IP address and general location data',
            'Device and browser data, such as browser type, operating system, and pages visited',
            'Purchase information, including products ordered, order history, and subscription details',
          ]}
        />
      </PolicySection>

      <PolicySection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <LegalList
          items={[
            'Process your orders and deliver digital products by email',
            'Provide customer support and respond to inquiries',
            'Operate, maintain, and improve the website',
            'Protect the security and integrity of the website and our systems',
            'Analyze usage to understand how visitors use the site',
            'Send marketing communications when you have permitted us to do so',
          ]}
        />
      </PolicySection>

      <PolicySection title="4. Cookies and Similar Technologies">
        <p>
          Our website may use cookies and similar technologies to remember
          your preferences, keep your cart working, understand site usage, and
          improve your experience. You can control or disable cookies through
          your browser settings; some features of the website may not work
          properly if cookies are disabled.
        </p>
      </PolicySection>

      <PolicySection title="5. Third-Party Payment Processors and Service Providers">
        <p>
          We rely on trusted third-party payment processors to handle
          payments. Full payment-card information is processed directly by our
          payment providers and is not stored on our servers. We may also
          share limited information with service providers who help us deliver
          digital products, host the website, analyze usage, or provide
          customer support. These providers are authorized to use your
          information only as needed to perform their services.
        </p>
      </PolicySection>

      <PolicySection title="6. Data Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards
          to protect your personal information. However, no method of
          transmission over the internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="7. Data Retention">
        <p>
          We retain personal information for as long as necessary to fulfill
          the purposes described in this policy — including order records,
          customer support history, and legal obligations — after which it is
          deleted or anonymized where possible.
        </p>
      </PolicySection>

      <PolicySection title="8. Your Privacy Rights">
        <p>
          Depending on your location, you may have the right to access,
          correct, or delete your personal information, to object to or
          restrict certain processing, and to withdraw consent where
          processing is based on consent. To exercise any of these rights,
          contact us using the information in Section 10.
        </p>
      </PolicySection>

      <PolicySection title="9. California Privacy Rights">
        <p>
          If you are a California resident, applicable law may provide you
          with additional rights regarding the collection and use of your
          personal information, including the right to request access to or
          deletion of your personal information. We do not sell personal
          information. To make a request, contact us using the information in
          Section 10, and we will respond as required by law.
        </p>
      </PolicySection>

      <PolicySection title="10. Children&rsquo;s Privacy">
        <p>
          Our services are not intended for children under 13 years of age. We
          do not knowingly collect personal information from children under
          13. If you believe a child under 13 has provided us with personal
          information, contact us and we will take steps to delete it.
        </p>
      </PolicySection>

      <PolicySection title="11. Contacting SOSAO Regarding Privacy">
        <p>
          If you have questions about this Privacy Policy or wish to exercise
          your rights, contact us at{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {site.email}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
