// fig-anchor: ken-burns-hero-still
// fig-entrance: hero-stagger
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/Img'
import { images } from '@/data/content'
import { scrollToSection } from '@/lib/scrollTo'

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      data-component="src/components/home/HeroSection.tsx"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={reduced ? false : { scale: 1 }}
        animate={reduced ? undefined : { scale: 1.08 }}
        transition={{ duration: 18, ease: 'linear' }}
      >
        <Img
          src={images.heroMain}
          alt="Woman meditating in a golden mandala glow"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/55 to-black/15"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-xl">
          <p className="animate-in fade-in duration-700 fill-mode-both motion-reduce:animate-none motion-reduce:opacity-100 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
            ONLINE STORE · OPEN 24/7
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-200 motion-reduce:animate-none motion-reduce:opacity-100 mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            SOSAO LLC
          </h1>
          <div aria-hidden="true" className="animate-in fade-in duration-700 fill-mode-both delay-300 motion-reduce:animate-none motion-reduce:opacity-100 mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/70" />
            <span className="inline-block h-2 w-2 rotate-45 bg-primary" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/70" />
          </div>
          <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-400 motion-reduce:animate-none motion-reduce:opacity-100 mt-6 max-w-md text-lg leading-relaxed text-white/85">
            Premium digital yoga and wellness programs for every level — from
            your first flow to advanced practice. Instant access, no shipping.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-500 motion-reduce:animate-none motion-reduce:opacity-100 mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Browse Programs
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('plans')}
              className="rounded-full border border-white/40 bg-transparent px-8 text-white hover:bg-white/10"
            >
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
