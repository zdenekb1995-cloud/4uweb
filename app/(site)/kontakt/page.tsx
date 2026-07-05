import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  title: 'Kontakt | Svatební světy',
  description:
    'Napište nám svou představu a připravíme interaktivní svatební web přesně podle vašeho příběhu.',
}

const info = [
  { icon: Mail, label: 'E-mail', value: 'ahoj@svatebnisvety.cz', href: 'mailto:ahoj@svatebnisvety.cz' },
  { icon: Phone, label: 'Telefon', value: '+420 777 123 456', href: 'tel:+420777123456' },
  { icon: MapPin, label: 'Působíme', value: 'Celá Česká republika', href: undefined },
  { icon: Clock, label: 'Odpovídáme', value: 'Obvykle do 24 hodin', href: undefined },
]

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs uppercase tracking-widest text-primary/80">
          Kontakt
        </span>
        <h1 className="text-balance font-display text-4xl text-foreground md:text-5xl">
          Pojďme vytvořit váš svět
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Napište nám svou představu — datum svatby, oblíbený film nebo příběh a
          rozsah, jaký si přejete. Ozveme se s nezávaznou nabídkou.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <aside className="flex flex-col gap-6">
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-lg text-foreground hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </aside>

        <div className="rounded-2xl border border-border/70 bg-card p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
