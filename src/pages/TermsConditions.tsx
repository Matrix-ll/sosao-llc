import {
  LegalList,
  PolicyLayout,
  PolicyLink,
  PolicySection,
} from '@/components/policy/PolicyLayout'
import { site } from '@/data/content'

export function TermsConditions() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="August 30, 2026">
      <PolicySection title="1. Acceptance of Terms">
        <p>
          By accessing or using the SOSAO LLC website and purchasing our
          digital yoga and wellness products, you agree to be bound by these
          Terms &amp; Conditions. If you do not agree, please do not use the
          website.
        </p>
      </PolicySection>

      <PolicySection title="2. Eligibility and Lawful Use">
        <p>
          You must be at least 18 years old, or of legal age in your
          jurisdiction, to make a purchase. You agree to use the website and
          its content only for lawful purposes and in compliance with all
          applicable laws and regulations.
        </p>
      </PolicySection>

      <PolicySection title="3. Digital Products and Services">
        <p>
          SOSAO LLC provides digital yoga, fitness, and wellness programs and
          subscription plans delivered electronically. No physical products
          are shipped. Access instructions are provided after successful
          payment. Please also review our{' '}
          <PolicyLink to="/digital-product-policy" label="Digital Product Policy" />
          .
        </p>
      </PolicySection>

      <PolicySection title="4. Account Responsibilities">
        <p>
          If you create an account or maintain a subscription with us, you are
          responsible for keeping your account credentials confidential and
          for all activity that occurs under your account. Please notify us
          immediately if you suspect unauthorized use of your account.
        </p>
      </PolicySection>

      <PolicySection title="5. Prices and Payments">
        <p>
          All prices are listed in US dollars. Prices may change at any time,
          but changes do not affect orders already confirmed. Payments are
          processed by trusted third-party payment processors; full
          payment-card information is not stored by SOSAO. All products are
          sold as one-time purchases, and no recurring charges are applied
          unless you separately agree to a subscription.
        </p>
      </PolicySection>

      <PolicySection title="6. Intellectual Property">
        <p>
          All content on this website and in our digital products — including
          videos, programs, text, graphics, logos, and design — is owned by or
          licensed to SOSAO LLC and is protected by copyright and other
          intellectual property laws.
        </p>
      </PolicySection>

      <PolicySection title="7. Personal-Use License">
        <p>
          When you purchase a digital product, we grant you a limited,
          non-exclusive, non-transferable license to access and use that
          content for your personal, non-commercial use only.
        </p>
        <LegalList
          items={[
            'You may not copy, resell, redistribute, share, upload, reproduce, or commercially exploit any purchased digital content.',
            'You may not share your login credentials or access links with others.',
            'Unauthorized redistribution of our content is strictly prohibited.',
          ]}
        />
      </PolicySection>

      <PolicySection title="8. Prohibited Conduct">
        <LegalList
          items={[
            'Reproducing, distributing, or publicly displaying our content without permission',
            'Attempting to gain unauthorized access to the website or its systems',
            'Interfering with the operation or security of the website',
            'Using the website to transmit harmful, unlawful, or infringing material',
            'Reselling, sublicensing, or commercially exploiting purchased content',
          ]}
        />
      </PolicySection>

      <PolicySection title="9. Website Availability and Modification">
        <p>
          We work to keep the website available, but we do not guarantee
          uninterrupted access. We may modify, update, suspend, or
          discontinue any part of the website, our products, or these Terms at
          any time. Continued use of the website after changes means you
          accept the updated Terms.
        </p>
      </PolicySection>

      <PolicySection title="10. Third-Party Services">
        <p>
          The website may use or link to third-party services, including
          payment processors and analytics providers. We are not responsible
          for the practices or content of third-party services, and their
          terms and policies apply to your use of them.
        </p>
      </PolicySection>

      <PolicySection title="11. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, SOSAO LLC shall not be
          liable for any indirect, incidental, special, or consequential
          damages arising out of your use of the website or our digital
          products. Our total liability for any claim relating to a purchase
          shall not exceed the amount you paid for that purchase.
        </p>
      </PolicySection>

      <PolicySection title="12. Indemnification">
        <p>
          You agree to indemnify and hold harmless SOSAO LLC and its owners,
          employees, and agents from any claims, damages, or expenses arising
          from your misuse of the website or your breach of these Terms.
        </p>
      </PolicySection>

      <PolicySection title="13. Termination">
        <p>
          We may suspend or terminate your access to the website or your
          subscription if you violate these Terms or engage in prohibited
          conduct. Upon termination, the personal-use license granted to you
          ends immediately.
        </p>
      </PolicySection>

      <PolicySection title="14. Governing Law">
        <p>
          These Terms are governed by the laws of the State of California,
          United States, without regard to conflict-of-law principles. Any
          disputes shall be resolved in the appropriate courts located in
          California.
        </p>
      </PolicySection>

      <PolicySection title="15. Contact Information">
        <p>
          Questions about these Terms? Contact SOSAO LLC at{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {site.email}
          </a>{' '}
          or visit {site.website}.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
