/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Přidáno pro GitHub Pages (vygeneruje statické HTML)
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true, // Přidáno: GitHub Pages nepodporuje serverovou optimalizaci obrázků Next.js
    
    // Následující pravidla pro formáty a velikosti jsou při statickém exportu
    // z velké části ignorována, ale je bezpečné je zde ponechat pro případ, 
    // že bys web někdy přesouval na plnohodnotný server (např. Vercel).
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dní
  },

  // POZOR: Funkce headers() není při output: 'export' podporována.
  // GitHub Pages je statický hosting a neumožňuje dynamicky nastavovat HTTP hlavičky.
  // Kód je zakomentován, aby build na GitHub Actions nehlásil chybu.
  /*
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  */
};

module.exports = nextConfig;