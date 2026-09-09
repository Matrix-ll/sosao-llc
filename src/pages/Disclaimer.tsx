import { LegalList, PolicyLayout, PolicySection } from '@/components/policy/PolicyLayout'

export function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer" updated="August 30, 2026">
      <PolicySection title="1. Wellness Content Only">
        <p>
          SOSAO LLC provides yoga, fitness, educational, and general wellness
          content only. Our content is intended for general informational and
          personal-practice purposes.
        </p>
      </PolicySection>

      <PolicySection title="2. Not Medical Advice">
        <p>
          Nothing on this website or in our products constitutes medical
          advice, diagnosis, or treatment. Our content is not a substitute for
          professional medical guidance.
        </p>
      </PolicySection>

      <PolicySection title="3. Consult a Professional">
        <p>
          You should consult a qualified healthcare professional before
          beginning a new exercise or wellness program, particularly if you
          have any pre-existing health condition, injury, or if you are
          pregnant.
        </p>
      </PolicySection>

      <PolicySection title="4. Voluntary Participation">
        <LegalList
          items={[
            'You participate in our programs voluntarily and at your own risk.',
            'Stop immediately if you experience pain, dizziness, shortness of breath, or unusual discomfort, and seek appropriate care.',
            'Listen to your body and practice within your own limits.',
          ]}
        />
      </PolicySection>

      <PolicySection title="5. Individual Results Vary">
        <p>
          Results vary by individual. SOSAO LLC does not guarantee specific
          physical, health, fitness, weight-loss, or wellness outcomes from
          the use of our content.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
