import { HeroSection } from '@/components/home/HeroSection'
import { PlansSection } from '@/components/home/PlansSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { AboutSection } from '@/components/home/AboutSection'
import { FaqSection } from '@/components/home/FaqSection'
import { HoursSection } from '@/components/home/HoursSection'

export function HomePage() {
  return (
    <main data-component="src/components/site/HomePage.tsx" className="flex-1">
      <HeroSection />
      <PlansSection />
      <ProductsSection />
      <AboutSection />
      <FaqSection />
      <HoursSection />
    </main>
  )
}
