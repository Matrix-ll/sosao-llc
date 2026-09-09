// The build's anchor signature moment (fig-anchor) is declared on the hero
// section that carries it — src/components/home/HeroSection.tsx.
import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CartProvider } from '@/hooks/useCart'
import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'
import { CartDrawer } from '@/components/site/CartDrawer'
import { HomePage } from '@/components/site/HomePage'
import { ProductDetailPage } from '@/components/product/ProductDetailPage'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { TermsConditions } from '@/pages/TermsConditions'
import { RefundPolicy } from '@/pages/RefundPolicy'
import { DigitalProductPolicy } from '@/pages/DigitalProductPolicy'
import { ContactSupport } from '@/pages/ContactSupport'
import { Disclaimer } from '@/pages/Disclaimer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function StoreApp() {
  return (
    <HashRouter>
      <CartProvider>
        <ScrollToTop />
        <div
          data-component="src/components/site/StoreApp.tsx"
          className="flex min-h-screen flex-col bg-background text-foreground"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/digital-product-policy"
              element={<DigitalProductPolicy />}
            />
            <Route path="/contact" element={<ContactSupport />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </HashRouter>
  )
}
