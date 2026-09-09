import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/data/content'

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
})

export function FaqSection() {
  return (
    <section
      id="faq"
      data-component="src/components/home/FaqSection.tsx"
      className="bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-primary">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
            FAQ
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-xl border border-border bg-card px-5"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      </div>
    </section>
  )
}
