import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";

// Jen potřebné váhy fontu = rychlejší načtení
const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  weight: ["300", "400", "600", "700"],
  display: "swap",
  preload: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.4uweb.cz/#organization",
      name: "4uweb",
      url: "https://www.4uweb.cz",
      email: "4uweb@seznam.cz",
      telephone: "+420725396158",
      sameAs: ["https://instagram.com/zden.o1"],
      description:
        "Tvorba webových stránek, SaaS aplikací, e-shopů, ubytovacích a restauračních systémů na míru.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.4uweb.cz/#website",
      url: "https://www.4uweb.cz",
      name: "4uweb",
      publisher: { "@id": "https://www.4uweb.cz/#organization" },
      inLanguage: "cs-CZ",
    },
    {
      "@type": "Person",
      "@id": "https://www.4uweb.cz/#person",
      name: "4uweb",
      url: "https://www.4uweb.cz",
      email: "4uweb@seznam.cz",
      telephone: "+420725396158",
      jobTitle: "Full-stack web developer",
      worksFor: { "@id": "https://www.4uweb.cz/#organization" },
    },
    {
      "@type": "Service",
      serviceType: "Tvorba webových stránek a digitálních systémů",
      provider: { "@id": "https://www.4uweb.cz/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Česko",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digitální služby",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webové stránky na míru" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS aplikace" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-shopy na míru" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ubytovací systémy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restaurační systémy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO optimalizace" } },
        ],
      },
    },
  ],
};

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f13024" />
        <meta name="author" content="4uweb" />
        <meta name="geo.region" content="CZ" />
        <meta
          name="keywords"
          content="webové stránky na míru, tvorba webů, SaaS aplikace, e-shop na míru, ubytovací systém, restaurační systém, Airbnb, Booking, SEO, Next.js, React, 4uweb"
        />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {children}
    </main>
  );
};

export default Layout;
