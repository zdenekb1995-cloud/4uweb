import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg tracking-wide text-primary"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <span>Svatební světy</span>
            </Link>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Originální interaktivní předsvatební weby na míru, inspirované
              vašimi oblíbenými příběhy.
            </p>
          </div>

          <nav aria-label="Patička" className="flex flex-col gap-2">
            <span className="font-display text-sm uppercase tracking-widest text-primary/80">
              Navigace
            </span>
            <Link href="/nabidka" className="text-muted-foreground hover:text-primary">
              Nabídka
            </Link>
            <Link href="/cenik" className="text-muted-foreground hover:text-primary">
              Ceník
            </Link>
            <Link href="/kontakt" className="text-muted-foreground hover:text-primary">
              Kontakt
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            <span className="font-display text-sm uppercase tracking-widest text-primary/80">
              Kontakt
            </span>
            <a href="mailto:ahoj@svatebnisvety.cz" className="text-muted-foreground hover:text-primary">
              ahoj@svatebnisvety.cz
            </a>
            <a href="tel:+420777123456" className="text-muted-foreground hover:text-primary">
              +420 777 123 456
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 border-t border-border/50 pt-6 text-sm text-muted-foreground">
          <span>Vytvořeno s láskou</span>
          <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>© {new Date().getFullYear()} Svatební světy</span>
        </div>
      </div>
    </footer>
  )
}
