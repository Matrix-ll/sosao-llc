import { Clock, Globe, Mail, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { site } from '@/data/content'

export function HoursSection() {
  return (
    <section
      id="contact"
      data-component="src/components/home/HoursSection.tsx"
      className="bg-card py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Card className="border-primary/50">
          <CardContent className="grid gap-10 p-8 sm:p-10 md:grid-cols-2">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
                SUPPORT
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                Business Hours &amp; Customer Support
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">
                      Online store — {site.storeHours}
                    </span>
                    <span className="text-muted-foreground">
                      Customer support: {site.supportHours}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <a
                      href={site.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                      {site.website}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0 text-muted-foreground">
                    {site.address}
                  </span>
                </li>
              </ul>
            </div>
            <div className="min-w-0 rounded-xl border border-border bg-background p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">
                A Note From Our Team
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {site.supportNote}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every product is digital — once your order is confirmed, access
                instructions arrive by email right away.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
