import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/Img'
import { images } from '@/data/content'
import { scrollToSection } from '@/lib/scrollTo'

const HIGHLIGHTS = [
  'Instant digital access after every purchase',
  'Programs for every level, from beginner to advanced',
  'Practice anywhere, anytime — no shipping required',
]

export function AboutSection() {
  return (
    <section
      id="about"
      data-component="src/components/home/AboutSection.tsx"
      className="bg-background py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="min-w-0">
          <Img
            src={images.aboutWellness}
            alt="Woman meditating in a teal mandala glow"
            className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-primary/40"
          />
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
            ABOUT SOSAO LLC
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Wellness, Digitally Delivered
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            SOSAO LLC brings premium yoga and wellness training online, so a
            complete practice is always within reach. Our digital library spans
            guided programs, membership plans, and masterclasses — each crafted
            to help you build strength, flexibility, and calm on your own
            schedule.
          </p>
          <ul className="mt-6 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
          <Button
            onClick={() => scrollToSection('products')}
            className="mt-8 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
