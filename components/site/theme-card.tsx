import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Theme } from '@/lib/projects'

export function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      href={`/projekty/${theme.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-all hover:border-primary/70 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={theme.heroImage || '/placeholder.svg'}
          alt={`Ukázka svatebního webu ve stylu ${theme.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-primary/50 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
          {theme.status === 'ready' ? 'Hotový projekt' : 'Novinka'}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs uppercase tracking-widest text-primary/80">
          {theme.franchise}
        </span>
        <h3 className="font-display text-xl text-foreground">{theme.name}</h3>
        <p className="flex-1 leading-relaxed text-muted-foreground">
          {theme.tagline}
        </p>
        <span className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
          Prohlédnout ukázku
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
