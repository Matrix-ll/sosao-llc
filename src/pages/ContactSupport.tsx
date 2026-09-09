import { Clock, Globe, Mail, MapPin } from 'lucide-react'
import { LegalList, PolicyLayout, PolicySection } from '@/components/policy/PolicyLayout'
import { site } from '@/data/content'

export function ContactSupport() {
  return (
    <PolicyLayout title="Contact / Customer Support" updated="August 30, 2026">
      <PolicySection title="SOSAO LLC">
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Globe aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <a
              href={site.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              {site.website}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0">
              Customer support: {site.supportHours}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0">{site.address}</span>
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Typical Response Time">
        <p>
          {site.supportNote} Most inquiries receive a response within one
          business day, and we prioritize urgent order and access issues.
        </p>
      </PolicySection>

      <PolicySection title="How to Get Help">
        <p>When you contact us, please include the relevant details so we can help faster:</p>
        <LegalList
          items={[
            'Order questions — include your order number and the email address used at checkout',
            'Access questions — describe the issue and include any error messages you see',
            'Billing questions — include your order number and the charge date and amount',
            'Refund requests — include your order information and the reason for your request, per our Refund Policy',
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  )
}
