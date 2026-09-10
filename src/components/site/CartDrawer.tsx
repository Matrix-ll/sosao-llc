import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/Img'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/useCart'

export function CartDrawer() {
  const { items, count, total, isOpen, setOpen, setQty, removeItem, clear } =
    useCart()
  const [agreed, setAgreed] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-l border-border sm:max-w-md"
      >
        <SheetHeader>
          <SheetTitle className="font-display text-xl">
            Your Cart ({count})
          </SheetTitle>
          <SheetDescription>
            Digital products — instant access, no shipping.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
            <ShoppingBag
              aria-hidden="true"
              className="h-12 w-12 text-muted-foreground"
            />
            <p className="text-base font-medium text-foreground">
              Your cart is empty
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Browse the program library and add a plan to get started.
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Browse Programs
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto pr-1">
              {items.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-3"
                >
                  <Img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {product.name}
                    </p>
                    <p className="text-sm text-primary">{product.priceLabel}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        size="icon"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => setQty(product.id, qty - 1)}
                        className="h-7 w-7 rounded-full border border-input bg-card text-foreground hover:bg-muted"
                      >
                        <Minus aria-hidden="true" className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm text-foreground">
                        {qty}
                      </span>
                      <Button
                        size="icon"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => setQty(product.id, qty + 1)}
                        className="h-7 w-7 rounded-full border border-input bg-card text-foreground hover:bg-muted"
                      >
                        <Plus aria-hidden="true" className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-center gap-1.5">
                    <Button
                      size="sm"
                      onClick={() => {
                        setOpen(false)
                        toast.info(
                          `PayPal checkout for ${product.name} is being connected. Card and PayPal payment will be available here shortly.`
                        )
                      }}
                      className="h-7 rounded-full bg-secondary px-3 text-xs text-secondary-foreground hover:bg-secondary/80"
                    >
                      Buy
                    </Button>
                    <Button
                      size="icon"
                      aria-label={`Remove ${product.name} from cart`}
                      onClick={() => removeItem(product.id)}
                      className="h-7 w-7 rounded-full text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 aria-hidden="true" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-2xl text-foreground">
                  ${total.toFixed(2)}
                </span>
              </div>
              <label className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-border bg-card p-3 text-xs leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                />
                <span>
                  I agree to the{' '}
                  <Link
                    to="/terms-and-conditions"
                    onClick={() => setOpen(false)}
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Terms &amp; Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/refund-policy"
                    onClick={() => setOpen(false)}
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Refund Policy
                  </Link>
                  .
                </span>
              </label>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  onClick={clear}
                  className="rounded-full text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
                <Button
                  onClick={() => {
                    toast.info(
                      'PayPal checkout is being connected. Card and PayPal payment will be available here shortly.'
                    )
                  }}
                  className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
