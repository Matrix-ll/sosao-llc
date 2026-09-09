import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  Monitor,
  Package,
  ShoppingBag,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/Img'
import { useCart } from '@/hooks/useCart'
import { getProductBySlug } from '@/data/products'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addItem } = useCart()

  if (!product) {
    return (
      <main
        data-component="src/components/product/ProductDetailPage.tsx"
        className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-32 text-center"
      >
        <h1 className="font-display text-3xl font-semibold">
          Program Not Found
        </h1>
        <p className="max-w-sm text-muted-foreground">
          We could not find the program you were looking for.
        </p>
        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link to="/">Back to the Store</Link>
        </Button>
      </main>
    )
  }

  const productJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: 'SOSAO LLC' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  })

  return (
    <main
      data-component="src/components/product/ProductDetailPage.tsx"
      className="flex-1 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to catalog
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <Img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-primary/40"
            />
          </div>
          <div className="min-w-0">
            <Badge variant="secondary">
              {product.typeLabel}
            </Badge>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <p className="mt-6 font-display text-4xl text-primary">
              {product.priceLabel}
            </p>
            <ul className="mt-8 space-y-3">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => addItem(product)}
                className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                <ShoppingBag aria-hidden="true" />
                Add to Cart
              </Button>
              <Button
                asChild
                className="rounded-full bg-secondary px-8 text-secondary-foreground hover:bg-secondary/80"
              >
                <a
                  href={product.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Digital Product — No Physical Shipping. By purchasing, you agree
              to our{' '}
              <Link
                to="/terms-and-conditions"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Terms &amp; Conditions
              </Link>{' '}
              and{' '}
              <Link
                to="/refund-policy"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Refund Policy
              </Link>
              .
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Monitor
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Digital Product
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This is a digital program. You will receive instant access
                    instructions by email after purchase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Package
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    No Physical Shipping
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nothing will be shipped to your address, and there are no
                    shipping fees on any purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: productJsonLd }}
        />
      </div>
    </main>
  )
}
