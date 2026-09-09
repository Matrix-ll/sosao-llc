import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Img } from '@/components/ui/Img'
import { images, site } from '@/data/content'
import { scrollToSection } from '@/lib/scrollTo'

const EXPLORE = [
  { id: 'plans', label: 'Membership Plans' },
  { id: 'products', label: 'Program Library' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

const LEGAL = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
  { to: '/digital-product-policy', label: 'Digital Product Policy' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/contact', label: 'Contact / Support' },
]

export function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const go = (id: string) => {
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => scrollToSection(id), 120)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <footer
      data-component="src/components/site/Footer.tsx"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <Img
              src={images.logoHeader}
              alt="SOSAO LLC logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-lg font-bold tracking-widest text-foreground">
              SOSAO LLC
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium digital yoga and wellness programs. Instant access,
            no shipping.
          </p>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-widest text-primary">
            EXPLORE
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {EXPLORE.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-widest text-primary">
            SUPPORT
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {site.website}
              </a>
            </li>
            <li>{site.supportHours}</li>
            <li>{site.address}</li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-widest text-primary">
            LEGAL
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LEGAL.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 SOSAO LLC. All rights reserved.</p>
          <p>SOSAO LLC · {site.address}</p>
        </div>
      </div>
    </footer>
  )
}
