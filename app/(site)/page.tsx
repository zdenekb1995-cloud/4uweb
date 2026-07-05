import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Sparkles,
  QrCode,
  Smartphone,
  Palette,
  MousePointerClick,
} from 'lucide-react'
import { themes } from '@/lib/projects'
import { ThemeCard } from '@/components/site/theme-card'
import { PreviewVideo } from '@/components/site/preview-video'

export const metadata: Metadata = {
  title: 'Svatební světy — zábavné předsvatební weby na míru',
  description:
    'Originální interaktivní svatební weby inspirované vašimi oblíbenými filmy. Prohlédněte si ukázky Pán prstenů, Harry Potter, Shrek a další.',
}

export default function HomePage() {
  const featured = themes.slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:py-28">
          <span className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Interaktivní svatební weby na míru
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl leading-tight text-foreground md:text-6xl">
            Vaše svatba jako nezapomenutelný příběh
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Vytváříme originální předsvatební weby inspirované vašimi oblíbenými
            filmy a světy. Hosté naskenují QR kód a vstoupí do interaktivního
            zážitku — od pozvánky až po zasedací pořádek.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/nabidka"
              className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Prohlédnout nabídku
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cenik"
              className="flex min-h-11 items-center justify-center rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Zobrazit ceník
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="ornament mb-10 justify-center">
            <span className="whitespace-nowrap font-display text-sm uppercase tracking-widest">
              Jak to funguje
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Palette,
                title: 'Vyberete svět',
                text: 'Zvolíte si jeden z připravených světů nebo si necháte navrhnout vlastní.',
              },
              {
                icon: MousePointerClick,
                title: 'Doplníme obsah',
                text: 'Vložíme vaše jména, datum, menu, cestu a zasedací pořádek.',
              },
              {
                icon: QrCode,
                title: 'Sdílíte QR kód',
                text: 'Hosté naskenují QR kód na pozvánce a otevřou váš svatební web.',
              },
              {
                icon: Smartphone,
                title: 'Zážitek na mobilu',
                text: 'Interaktivní web funguje skvěle na mobilu i na velké obrazovce.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border/70 bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it looks — video preview */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="ornament mb-2 justify-center">
            <span className="whitespace-nowrap font-display text-sm uppercase tracking-widest">
              Jak to vypadá
            </span>
          </div>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Podívejte se na ukázku naživo
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Takto vypadá hotový interaktivní svatební web — ukázka ze světa Pán
            prstenů.
          </p>
        </div>
        <PreviewVideo
          src="/videos/pan-prstenu-ukazka.mp4"
          poster="/themes/pan-prstenu-hero.png"
          label="Ukázka hotového projektu — Pán prstenů"
          className="mt-10"
        />
        <div className="mt-8 flex justify-center">
          <Link
            href="/projekty/pan-prstenu"
            className="flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Otevřít živou ukázku
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured themes */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Vyberte si svůj svět
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Každý web je plně funkční interaktivní ukázka. Klikněte a prozkoumejte,
            jak bude váš svatební web vypadat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/nabidka"
            className="flex min-h-11 items-center gap-2 rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Zobrazit všechny světy
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-balance font-display text-3xl text-foreground md:text-4xl">
            Chcete vlastní svět na míru?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Napište nám svou představu a připravíme svatební web přesně podle
            vašeho příběhu.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Nezávazná poptávka
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
