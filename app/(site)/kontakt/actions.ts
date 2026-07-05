'use server'

export interface ContactState {
  ok: boolean
  error?: string
  message?: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const theme = String(formData.get('theme') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, error: 'Vyplňte prosím jméno, e-mail a zprávu.' }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { ok: false, error: 'Zadejte prosím platný e-mail.' }
  }

  // Zde by se poptávka odeslala e-mailem nebo uložila do databáze.
  // Prozatím pouze potvrdíme přijetí.
  console.log('[v0] Nová poptávka:', { name, email, theme, message })

  return {
    ok: true,
    message: `Děkujeme, ${name}! Ozveme se vám co nejdříve na ${email}.`,
  }
}
