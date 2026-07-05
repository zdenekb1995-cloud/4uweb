'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Domů' },
  { href: '/nabidka', label: 'Nabídka' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-wide text-primary"
          onClick={() => setOpen(false)}
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          <span>Svatební světy</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    'text-base tracking-wide transition-colors hover:text-primary',
                    active ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href="/kontakt"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Nezávazná poptávka
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex min-h-11 items-center text-lg tracking-wide',
                      active ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
