'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  QrCode,
  Heart,
  Calendar,
  Clock3,
  MapPin,
} from 'lucide-react'
import type { Theme, WeddingSection } from '@/lib/projects'
import { THANK_YOU } from '@/lib/projects'
import { Icon } from '@/components/icon'

type Phase = 'reveal' | 'detail'

export function WeddingSite({ theme }: { theme: Theme }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>('reveal')

  const active = theme.sections.find((s) => s.id === activeId) ?? null

  const open = useCallback((id: string) => {
    setActiveId(id)
    setPhase('reveal')
  }, [])

  const close = useCallback(() => {
    setActiveId(null)
    setPhase('reveal')
  }, [])

  // Auto-advance from reveal animation to detail content
  useEffect(() => {
    if (!activeId || phase !== 'reveal') return
    const t = setTimeout(() => setPhase('detail'), 1700)
    return () => clearTimeout(t)
  }, [activeId, phase])

  // Escape to close + scroll lock while overlay open
  useEffect(() => {
    if (!activeId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeId, close])

  const cssVars = {
    '--t-bg': theme.colors.bg,
    '--t-panel': theme.colors.panel,
    '--t-border': theme.colors.panelBorder,
    '--t-accent': theme.colors.accent,
    '--t-accent-soft': theme.colors.accentSoft,
    '--t-text': theme.colors.text,
    '--t-muted': theme.colors.muted,
  } as React.CSSProperties

  return (
    <div
      style={cssVars}
      className="min-h-dvh bg-[var(--t-bg)] font-serif text-[var(--t-text)]"
    >
      {/* Top bar */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/nabidka"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--t-muted)] transition-colors hover:text-[var(--t-accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět na nabídku
        </Link>
        <span className="text-xs uppercase tracking-widest text-[var(--t-muted)]">
          {theme.franchise}
        </span>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--t-border)]">
            <Image
              src={theme.heroImage || '/placeholder.svg'}
              alt={`Atmosféra svatby ve stylu ${theme.name}`}
              width={1600}
              height={900}
              priority
              className="h-[42vh] w-full object-cover md:h-[52vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--t-bg)]/40 via-[var(--t-bg)]/30 to-[var(--t-bg)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-balance font-display text-3xl uppercase tracking-wide text-[var(--t-text)] drop-shadow-lg md:text-6xl">
                {theme.heroTitle}
              </h1>
              <p className="mt-3 max-w-xl text-pretty text-base text-[var(--t-text)]/90 md:text-xl">
                {theme.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Video preview */}
      {theme.previewVideo ? (
        <section className="mx-auto max-w-5xl px-4 pt-10">
          <div
            className="mb-6 flex items-center gap-3 text-[var(--t-accent)]"
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-[var(--t-border)]" />
            <span className="whitespace-nowrap text-xs uppercase tracking-widest">
              Jak to vypadá
            </span>
            <span className="h-px flex-1 bg-[var(--t-border)]" />
          </div>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-[var(--t-border)] bg-black shadow-lg">
              <video
                controls
                playsInline
                preload="metadata"
                poster={theme.heroImage}
                className="aspect-video w-full bg-black"
              >
                <source src={theme.previewVideo} type="video/mp4" />
                {'Váš prohlížeč nepodporuje přehrávání videa.'}
              </video>
            </div>
            <figcaption className="mt-3 text-center text-sm text-[var(--t-muted)]">
              {`Ukázka hotového projektu — ${theme.name}`}
            </figcaption>
          </figure>
        </section>
      ) : null}

      {/* Section cards */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div
          className="mb-8 flex items-center gap-3 text-[var(--t-accent)]"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-[var(--t-border)]" />
          <Heart className="h-4 w-4" />
          <span className="h-px flex-1 bg-[var(--t-border)]" />
        </div>

        <p className="mb-6 text-center text-sm uppercase tracking-widest text-[var(--t-muted)]">
          Klikni na sekci a objev více
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {theme.sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => open(s.id)}
              className="group flex min-h-11 flex-col items-center gap-3 rounded-xl border border-[var(--t-border)] bg-[var(--t-panel)] p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--t-accent)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--t-border)] bg-[var(--t-accent-soft)] text-[var(--t-accent)]">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-[var(--t-text)]">
                {i + 1}. {s.navLabel}
              </span>
              <span className="text-sm leading-relaxed text-[var(--t-muted)]">
                {s.navTeaser}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[var(--t-accent)]">
                Otevřít
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>

        {/* Jak to funguje / QR */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-xl border border-[var(--t-border)] bg-[var(--t-panel)] p-6 text-center">
          <span className="font-display text-lg uppercase tracking-wide text-[var(--t-accent)]">
            Jak to funguje?
          </span>
          <p className="text-sm leading-relaxed text-[var(--t-muted)]">
            Naskenuj QR kód a vstup do světa naší svatby.
          </p>
          <span className="flex h-24 w-24 items-center justify-center rounded-lg border border-[var(--t-border)] bg-[var(--t-accent-soft)] text-[var(--t-accent)]">
            <QrCode className="h-14 w-14" aria-hidden="true" />
          </span>
          <p className="text-xs text-[var(--t-muted)]">
            Děkujeme, že jsi součástí našeho příběhu.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--t-border)]">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 px-4 py-8 text-center">
          <span className="font-display text-sm uppercase tracking-widest text-[var(--t-accent)] md:text-base">
            {THANK_YOU}
          </span>
          <Heart className="h-4 w-4 text-[var(--t-accent)]" aria-hidden="true" />
        </div>
      </footer>

      {/* Overlay */}
      {active && (
        <SectionOverlay
          theme={theme}
          section={active}
          phase={phase}
          onSkip={() => setPhase('detail')}
          onClose={close}
        />
      )}
    </div>
  )
}

function SectionOverlay({
  theme,
  section,
  phase,
  onSkip,
  onClose,
}: {
  theme: Theme
  section: WeddingSection
  phase: Phase
  onSkip: () => void
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={section.detailTitle}
      className="fixed inset-0 z-50 overflow-y-auto bg-[var(--t-bg)]"
    >
      {phase === 'reveal' ? (
        <button
          type="button"
          onClick={onSkip}
          className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 px-6 text-center"
          aria-label="Pokračovat"
        >
          <span className="relative flex h-40 w-40 items-center justify-center animate-reveal">
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--t-accent)]/60 animate-slow-spin" />
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--t-accent-soft)] text-[var(--t-accent)]">
              <Icon name={section.icon} className="h-10 w-10" />
            </span>
          </span>
          <p className="max-w-2xl text-balance font-display text-2xl uppercase leading-snug tracking-wide text-[var(--t-accent)] animate-fade-up md:text-4xl">
            {section.reveal}
          </p>
          <span className="text-xs uppercase tracking-widest text-[var(--t-muted)]">
            Klikni pro pokračování
          </span>
        </button>
      ) : (
        <div className="mx-auto min-h-dvh w-full max-w-3xl px-4 py-6 animate-fade-up">
          <button
            type="button"
            onClick={onClose}
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm text-[var(--t-muted)] transition-colors hover:text-[var(--t-accent)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Zpět
          </button>

          <div className="mb-8 text-center">
            <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--t-border)] bg-[var(--t-accent-soft)] text-[var(--t-accent)]">
              <Icon name={section.icon} className="h-6 w-6" />
            </span>
            <h2 className="font-display text-2xl uppercase tracking-wide text-[var(--t-text)] md:text-4xl">
              {section.detailTitle}
            </h2>
          </div>

          <SectionDetail section={section} />

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--t-border)] bg-[var(--t-panel)] px-6 py-3 text-sm font-medium text-[var(--t-accent)] transition-colors hover:border-[var(--t-accent)]"
            >
              Zpět na sekce
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--t-border)] bg-[var(--t-panel)] p-6 md:p-8">
      {children}
    </div>
  )
}

function SectionDetail({ section }: { section: WeddingSection }) {
  if (section.kind === 'invitation' && section.invitation) {
    const inv = section.invitation
    return (
      <Panel>
        <p className="text-center font-display text-3xl text-[var(--t-accent)] md:text-4xl">
          {inv.couple}
        </p>
        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3">
          <Row icon={<Calendar className="h-5 w-5" />} label="Datum" value={inv.date} />
          <Row icon={<Clock3 className="h-5 w-5" />} label="Čas" value={inv.time} />
          <Row icon={<MapPin className="h-5 w-5" />} label="Místo" value={inv.place} />
        </div>
        <p className="mt-6 text-center text-lg leading-relaxed text-[var(--t-text)]">
          {inv.message}
        </p>
        {inv.note && (
          <p className="mt-4 text-center text-sm leading-relaxed text-[var(--t-muted)]">
            {inv.note}
          </p>
        )}
      </Panel>
    )
  }

  if (section.kind === 'journey' && section.journey) {
    const j = section.journey
    return (
      <div className="flex flex-col gap-4">
        <p className="text-center text-lg leading-relaxed text-[var(--t-muted)]">
          {j.intro}
        </p>
        {j.steps.map((step, i) => (
          <Panel key={i}>
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--t-accent-soft)] font-display text-[var(--t-accent)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg uppercase tracking-wide text-[var(--t-text)]">
                  {step.title}
                </h3>
                <p className="mt-1 leading-relaxed text-[var(--t-muted)]">
                  {step.text}
                </p>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    )
  }

  if (section.kind === 'menu' && section.menu) {
    const m = section.menu
    return (
      <Panel>
        <p className="mb-6 text-center leading-relaxed text-[var(--t-muted)]">
          {m.note}
        </p>
        <ul className="flex flex-col divide-y divide-[var(--t-border)]">
          {m.courses.map((c, i) => (
            <li key={i} className="flex flex-col gap-1 py-4">
              <span className="text-xs uppercase tracking-widest text-[var(--t-accent)]">
                {c.label}
              </span>
              <span className="font-display text-lg text-[var(--t-text)]">
                {c.name}
              </span>
              <span className="text-sm leading-relaxed text-[var(--t-muted)]">
                {c.desc}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    )
  }

  if (section.kind === 'plan' && section.plan) {
    const p = section.plan
    return (
      <div className="flex flex-col gap-4">
        <p className="text-center leading-relaxed text-[var(--t-muted)]">
          {p.note}
        </p>

        {p.timeline && (
          <Panel>
            <ul className="flex flex-col gap-4">
              {p.timeline.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-16 shrink-0 font-display text-lg text-[var(--t-accent)]">
                    {item.time}
                  </span>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--t-accent)]" />
                  <span className="leading-relaxed text-[var(--t-text)]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {p.tables && (
          <div className="grid gap-4 sm:grid-cols-2">
            {p.tables.map((table, i) => (
              <Panel key={i}>
                <h3 className="mb-3 font-display text-lg uppercase tracking-wide text-[var(--t-accent)]">
                  {table.name}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {table.guests.map((g, gi) => (
                    <li
                      key={gi}
                      className="text-sm leading-relaxed text-[var(--t-muted)]"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[var(--t-border)] bg-[var(--t-bg)]/40 px-4 py-3">
      <span className="text-[var(--t-accent)]">{icon}</span>
      <span className="text-sm uppercase tracking-widest text-[var(--t-muted)]">
        {label}
      </span>
      <span className="ml-auto font-display text-lg text-[var(--t-text)]">
        {value}
      </span>
    </div>
  )
}
