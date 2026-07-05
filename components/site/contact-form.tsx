'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/(site)/kontakt/actions'
import { themes } from '@/lib/projects'

const initial: ContactState = { ok: false }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial)

  if (state.ok) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/50 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h2 className="font-display text-2xl text-foreground">Odesláno!</h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Jméno *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="min-h-11 rounded-md border border-border bg-background px-4 text-base text-foreground outline-none focus:border-primary"
            placeholder="Jana Nováková"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="min-h-11 rounded-md border border-border bg-background px-4 text-base text-foreground outline-none focus:border-primary"
            placeholder="jana@email.cz"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="theme" className="text-sm font-medium text-foreground">
          Vybraný svět
        </label>
        <select
          id="theme"
          name="theme"
          defaultValue=""
          className="min-h-11 rounded-md border border-border bg-background px-4 text-base text-foreground outline-none focus:border-primary"
        >
          <option value="">Zatím nevím / vlastní svět</option>
          {themes.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Vaše zpráva *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-border bg-background px-4 py-3 text-base leading-relaxed text-foreground outline-none focus:border-primary"
          placeholder="Datum svatby, počet hostů, vaše představa..."
        />
      </div>

      {state.error && (
        <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? 'Odesílám...' : 'Odeslat poptávku'}
        {!pending && <Send className="h-4 w-4" />}
      </button>
    </form>
  )
}
