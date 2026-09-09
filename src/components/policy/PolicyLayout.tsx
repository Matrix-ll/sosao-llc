import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface PolicyLayoutProps {
  title: string
  updated: string
  children: ReactNode
}

export function PolicyLayout({ title, updated, children }: PolicyLayoutProps) {
  return (
    <main
      data-component="src/components/policy/PolicyLayout.tsx"
      className="flex-1 bg-background"
    >
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Home
        </Link>
        <p className="mt-8 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
          SOSAO LLC
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" />
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {updated}
        </p>
        <div className="mt-8 space-y-10 rounded-xl border border-border bg-card p-6 sm:p-10">
          {children}
        </div>
      </div>
    </main>
  )
}

export function PolicySection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PolicyLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {label}
    </Link>
  )
}
