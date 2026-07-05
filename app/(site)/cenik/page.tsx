import Link from 'next/link'
import type { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ceník | Svatební světy',
  description:
    'Přehledné balíčky interaktivních svatebních webů. Vyberte si variantu, která nejlépe sedí vaší svatbě.',
}

const packages = [
  {
    name: 'Základ',
    price: '4 900 Kč',
    tagline: 'Připravený svět s vaším obsahem',
    features: [
      'Jeden z hotových světů dle výběru',
      'Vaše jména, datum a místo',
      'Interaktivní pozvánka a harmonogram',
      'QR kód pro hosty',
      'Responzivní design pro mobil',
    ],
    highlight: false,
  },
  {
    name: 'Kompletní',
    price: '8 900 Kč',
    tagline: 'Plně naplněný interaktivní web',
    features: [
      'Vše ze základního balíčku',
      'Všechny sekce naplněné obsahem',
      'Svatební menu a zasedací pořádek',
      'Galerie vašich fotografií',
      'Vlastní úpravy barev a textů',
      'Hosting po dobu 1 roku',
    ],
    highlight: true,
  },
  {
    name: 'Na míru',
    price: 'od 14 900 Kč',
    tagline: 'Zcela nový svět podle vaší představy',
    features: [
      'Zcela originální téma a design',
      'Vlastní ilustrace a animace',
      'Neomezené sekce a funkce',
      'Osobní konzultace',
      'Prioritní podpora',
      'Hosting po dobu 2 let',
    ],
    highlight: false,
  },
]

export default function CenikPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs uppercase tracking-widest text-primary/80">
          Ceník
        </span>
        <h1 className="text-balance font-display text-4xl text-foreground md:text-5xl">
          Vyberte si balíček
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Ceny jsou orientační. Rádi připravíme nabídku přesně podle vašich
          představ a rozsahu svatby.
        </p>
      </header>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              pkg.highlight
                ? 'border-primary bg-card shadow-lg shadow-primary/10'
                : 'border-border/70 bg-card'
            }`}
          >
            {pkg.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                Nejoblíbenější
              </span>
            )}
            <h2 className="font-display text-2xl text-foreground">{pkg.name}</h2>
            <p className="mt-1 text-muted-foreground">{pkg.tagline}</p>
            <p className="mt-6 font-display text-4xl text-primary">{pkg.price}</p>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="leading-relaxed text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/kontakt"
              className={`mt-8 flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 font-medium transition-opacity hover:opacity-90 ${
                pkg.highlight
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              Mám zájem
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-border/70 bg-card/40 p-8 text-center">
        <h2 className="font-display text-2xl text-foreground">
          Co je součástí každého webu?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Interaktivní sekce',
            'QR kód pro hosty',
            'Optimalizace pro mobil',
            'Rychlé nasazení',
          ].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
