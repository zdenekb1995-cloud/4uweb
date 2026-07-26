# 4uweb Portfolio

Moderní Next.js portfolio (pages router) – Framer Motion, Swiper, particles, Tailwind.

## Nasazení na Vercel (doporučeno)

1. Pushni tento projekt na GitHub
2. Jdi na [vercel.com](https://vercel.com) → **Add New Project**
3. Importuj GitHub repo
4. Framework Preset: **Next.js** (detekuje se automaticky)
5. Klikni **Deploy**

Hotovo. Vercel ti dá URL typu `https://tvuj-projekt.vercel.app`.
Vlastní doménu nastavíš v **Project → Settings → Domains**.

## Lokální spuštění

```bash
npm install
npm run dev
```

Otevři http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Struktura

```
portfolio/
├── components/     # React komponenty
├── pages/          # Stránky
├── public/         # Obrázky, logo
├── styles/
├── variants/
├── package.json
├── next.config.js
└── tailwind.config.js
```

## Poznámky

- Kontaktní formulář je připravený pro Netlify Forms. Na Vercelu bude potřeba jiný backend (Formspree, Resend, vlastní API route…).
- Chybějící thumb/avatar placeholdery jsou v `public/` – nahraď vlastními.
