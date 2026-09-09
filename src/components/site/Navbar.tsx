import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/Img'
import { useCart } from '@/hooks/useCart'
import { images } from '@/data/content'
import { scrollToSection } from '@/lib/scrollTo'

const LINKS = [
  { id: 'plans', label: 'Plans' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const { count, setOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const go = (id: string) => {
    setMobileOpen(false)
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => scrollToSection(id), 120)
    } else {
      scrollToSection(id)
    }
  }

  const goHome = () => {
    setMobileOpen(false)
    if (pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      data-component="src/components/site/Navbar.tsx"
      className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Img
            src={images.logoHeader}
            alt="SOSAO LLC logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-lg font-bold tracking-widest text-foreground">
            SOSAO LLC
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {LINKS.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => go(link.id)}
              className="rounded-full text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setOpen(true)}
            aria-label={`Open cart, ${count} items`}
            className="relative rounded-full border border-input bg-background text-foreground hover:bg-accent/10"
          >
            <ShoppingBag aria-hidden="true" />
            <span className="hidden text-sm sm:inline">Cart</span>
            {count > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
                {count}
              </span>
            ) : null}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full md:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => go(link.id)}
                className="justify-start rounded-lg text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
