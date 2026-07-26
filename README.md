# 4uweb Portfolio

Moderní Next.js portfolio (static export) pro **GitHub Pages**.

Doména: [www.4uweb.cz](https://www.4uweb.cz)

## Nasazení na GitHub Pages

1. Pushni tento projekt na GitHub (větev `main` nebo `master`).
2. V repo: **Settings → Pages**
   - Source: **GitHub Actions**
3. Po pushi se spustí workflow **Deploy to GitHub Pages** a nasadí složku `out/`.
4. Doména `www.4uweb.cz` – v **Settings → Pages → Custom domain** nastav `www.4uweb.cz` a zapni HTTPS.

Soubor `public/CNAME` už obsahuje `www.4uweb.cz`.

### DNS u registrátora

Pro **www**:
```
Type: CNAME
Name: www
Value: <username>.github.io
```

Pro apex `4uweb.cz` (volitelně redirect na www) – podle návodu registrátora / GitHub docs.

## Lokální spuštění

```bash
npm install
npm run dev
```

## Build (statický export)

```bash
npm run build
```

Výstup je ve složce **`out/`** – tu GitHub Pages publikuje.

## Struktura

```
portfolio/
├── components/
├── pages/
├── public/          # CNAME, robots.txt, sitemap, obrázky
├── .github/workflows/deploy.yml
└── next.config.js   # output: "export"
```

## Poznámky

- Kontaktní formulář na čistém static hostingu neodešle data na server – použij Formspree / Getform, nebo odkaz na e-mail / WhatsApp.
- Po změně domény uprav `components/Seo.jsx`, `public/sitemap.xml` a `public/robots.txt` (už je `www.4uweb.cz`).
