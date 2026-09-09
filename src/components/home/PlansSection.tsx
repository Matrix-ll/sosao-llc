import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Img } from '@/components/ui/Img'
import { useCart } from '@/hooks/useCart'
import { plans, products } from '@/data/products'
import { cn } from '@/lib/utils'
import type { Plan } from '@/types'

const ACCENT_STYLES: Record<
  Plan['accent'],
  { card: string; button: string }
> = {
  cyan: {
    card: 'border-secondary/70',
    button: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  },
  purple: {
    card: 'border-accent/70',
    button: 'bg-accent text-accent-foreground hover:bg-accent/80',
  },
  gold: {
    card: 'border-primary/70',
    button: 'bg-primary text-primary-foreground hover:bg-primary/90',
  },
}

export function PlansSection() {
  const { addItem } = useCart()

  return (
    <section
      id="plans"
      data-component="src/components/home/PlansSection.tsx"
      className="bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-primary">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
            MEMBERSHIP PLANS
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Practice Your Way
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Three plans, from your first class to unlimited access. Pay once,
            no recurring charges.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const product = products.find((p) => p.id === plan.productId)
            const styles = ACCENT_STYLES[plan.accent]
            return (
              <Card
                key={plan.id}
                className={cn(
                  'relative flex flex-col overflow-hidden',
                  styles.card
                )}
              >
                {plan.featured ? (
                  <Badge className="absolute right-4 top-4 z-10 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                ) : null}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Img
                    src={plan.image}
                    alt={`${plan.name} portrait`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.blurb}
                    </p>
                  </div>
                  <p className="font-display text-4xl text-primary">
                    {plan.priceLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button
                      disabled={!product}
                      onClick={() => product && addItem(product)}
                      className="h-10 w-full rounded-lg bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
