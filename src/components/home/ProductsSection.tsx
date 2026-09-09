import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Img } from '@/components/ui/Img'
import { useCart } from '@/hooks/useCart'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

type FilterKey = 'all' | 'plans' | 'programs'

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Programs' },
  { key: 'plans', label: 'Plans' },
  { key: 'programs', label: 'Programs' },
]

export function ProductsSection() {
  const { addItem } = useCart()
  const [filter, setFilter] = useState<FilterKey>('all')

  const visible =
    filter === 'all'
      ? products
      : products.filter((p) => (filter === 'plans' ? p.id <= 3 : p.id > 3))

  return (
    <section
      id="products"
      data-component="src/components/home/ProductsSection.tsx"
      className="bg-card py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-primary">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
            COMPLETE LIBRARY
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            {products.length} Digital Programs
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Every program is a digital product — instant access after purchase,
            nothing shipped to your door.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((f) => (
            <Button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'rounded-full',
                filter === f.key
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border border-input bg-background text-muted-foreground hover:text-foreground'
              )}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card className="flex h-full flex-col overflow-hidden transition-colors duration-200 group-hover:border-primary/60">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <Badge
                    className="absolute left-3 top-3 border-white/40 bg-background/60 text-white"
                  >
                    {product.typeLabel}
                  </Badge>
                </div>
                <CardContent className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {product.name}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-display text-xl text-primary">
                      {product.priceLabel}
                    </span>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="h-8 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      <ShoppingBag aria-hidden="true" className="h-4 w-4" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
