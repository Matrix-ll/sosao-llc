export type Billing = 'subscription' | 'one-time'

export interface Product {
  id: number
  slug: string
  name: string
  price: number
  priceLabel: string
  billing: Billing
  typeLabel: string
  description: string
  benefits: [string, string, string]
  image: string
}

export interface Plan {
  id: number
  name: string
  price: number
  priceLabel: string
  blurb: string
  image: string
  accent: 'cyan' | 'purple' | 'gold'
  features: string[]
  productId: number
  featured?: boolean
}

export interface CartItem {
  product: Product
  qty: number
}
