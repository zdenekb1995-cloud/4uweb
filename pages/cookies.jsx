import Link from "next/link";
import { motion } from "framer-motion";

import Seo from "../components/Seo";
import { fadeIn } from "../variants";

const Cookies = () => {
  return (
    <>
      <Seo
        title="Cookies | 4uweb"
        description="Informace o používání cookies na webu 4uweb.cz."
        path="/cookies"
      />
      <div className="min-h-screen bg-primary/30 overflow-y-auto pb-28 xl:pb-12">
        <div className="container mx-auto px-4 py-24 sm:py-32 max-w-3xl">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 mb-6"
          >
            Cookies a soukromí
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed"
          >
            <section>
              <h2 className="text-white text-lg font-semibold mb-2">
                Co jsou cookies
              </h2>
              <p>
                Cookies jsou malé textové soubory, které web ukládá do vašeho
                prohlížeče. Pomáhají zapamatovat nastavení a zajistit základní
                fungování stránek.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-2">
                Nezbytné cookies
              </h2>
              <p>
                Používáme je pro uložení vašeho souhlasu s cookies a základní
                provoz webu. Bez nich nelze některé funkce správně zobrazit.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-2">
                Volitelné cookies
              </h2>
              <p>
                Analytické nebo marketingové cookies aktivujeme jen se
                souhlasem „Přijmout vše“. Aktuálně web funguje primárně s
                nezbytnými cookies.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-2">
                Správa souhlasu
              </h2>
              <p>
                Souhlas můžete změnit smazáním dat webu v prohlížeči (local
                storage klíč <code className="text-accent">4uweb-cookies</code>
                ). Po obnovení stránky se lišta znovu zobrazí.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-2">Kontakt</h2>
              <p>
                Dotazy k ochraně údajů:{" "}
                <a
                  href="mailto:4uweb@seznam.cz"
                  className="text-accent hover:underline"
                >
                  4uweb@seznam.cz
                </a>
              </p>
            </section>

            <Link
              href="/"
              className="inline-flex mt-4 text-accent hover:underline"
            >
              ← Zpět na úvod
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
