import Head from "next/head";

const SITE_URL = "https://www.4uweb.cz";
const SITE_NAME = "4uweb";
const DEFAULT_OG = `${SITE_URL}/avatar.png`;

const Seo = ({
  title = "4uweb | Webové stránky, SaaS, e-shopy a systémy na míru",
  description = "Tvorba webových stránek, SaaS aplikací, e-shopů, ubytovacích a restauračních systémů na míru. Rychle, moderně a s důrazem na výsledek.",
  path = "/",
  image = DEFAULT_OG,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("4uweb") ? title : `${title} | 4uweb`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
