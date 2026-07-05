import type { Metadata } from 'next'
import { themes } from '@/lib/projects'
import { ThemeCard } from '@/components/site/theme-card'

export const metadata: Metadata = {
  title: 'Nabídka svatebních světů | Svatební světy',
  description:
    'Prohlédněte si všechny připravené interaktivní svatební weby — Pán prstenů, Harry Potter, Shrek, Avatar a další.',
}

export default function NabidkaPage() {
  const ready = themes.filter((t) => t.status === 'ready')
  const fresh = themes.filter((t) => t.status === 'new')

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs uppercase tracking-widest text-primary/80">
          Naše nabídka
        </span>
        <h1 className="text-balance font-display text-4xl text-foreground md:text-5xl">
          Svatební světy
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Každý svět je plně funkční ukázka. Klikněte na kterýkoliv projekt a
          projděte si interaktivní web přesně tak, jak ho uvidí vaši hosté.
        </p>
      </header>

      <section className="mt-14">
        <div className="ornament mb-8">
          <span className="whitespace-nowrap font-display text-sm uppercase tracking-widest">
            Hotové projekty
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ready.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="ornament mb-8">
          <span className="whitespace-nowrap font-display text-sm uppercase tracking-widest">
            Nové světy
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fresh.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </section>
    </div>
  )
}
