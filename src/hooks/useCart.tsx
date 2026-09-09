import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { toast } from 'sonner'
import type { CartItem, Product } from '@/types'

interface CartContextValue {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  addItem: (product: Product, qty?: number) => void
  removeItem: (id: number) => void
  setQty: (id: number, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'sosao-cart'

function readStored(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStored)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Storage unavailable — cart lives in memory only.
    }
  }, [items])

  const addItem = (product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { product, qty }]
    })
    toast.success(`${product.name} added to your cart`)
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id))
  }

  const setQty = (id: number, qty: number) => {
    if (qty <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, qty } : i))
    )
  }

  const clear = () => setItems([])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const total = items.reduce((sum, i) => sum + i.qty * i.product.price, 0)
    return { items, count, total, isOpen, setOpen, addItem, removeItem, setQty, clear }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
