import { motion } from "framer-motion";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Seo from "../components/Seo";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Seo
        title="4uweb | Webové stránky, SaaS, e-shopy a systémy na míru"
        description="Tvorba webů, SaaS aplikací, e-shopů, ubytovacích a restauračních systémů na míru. Od nápadu po spuštění – rychle a moderně."
        path="/"
      />
      <div className="bg-primary/60 min-h-screen xl:h-full relative pb-24 xl:pb-0">
        <div className="w-full min-h-screen xl:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          {/* pt kvůli headeru – text nesmí jít pod logo */}
          <div className="container mx-auto px-4 relative z-20 pt-24 sm:pt-28 xl:pt-40 min-h-[calc(100vh-80px)] xl:h-full flex flex-col justify-start xl:justify-center">
            
            {/* === MOBIL / TABLET layout === */}
            <div className="xl:hidden flex flex-col">
              {/* text nahoře, pod headerem */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1 text-center mb-3"
              >
                Přetvářím nápady
                <br />
                na <span className="text-accent">digitální realitu</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm mx-auto mb-5 text-sm text-center text-white/70"
              >
                Od nápadu po vytvoření – komplexní a rychlé řešení přímo pro vás
                a váš projekt.
              </motion.p>

              <motion.p
                variants={fadeIn("down", 0.35)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-[11px] sm:text-xs text-white/45 mb-6 text-center"
              >
                15+ webů · CleanFlow · Restora X · Nalepkař · CloudniTo
              </motion.p>

              {/* tlačítka vlevo + avatar vpravo */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-row items-center gap-3 sm:gap-5"
              >
                {/* CTA vlevo */}
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                  <Link
                    href="https://wa.me/420725396158"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-4 py-3 text-sm transition-all duration-300 w-full"
                  >
                    <RiWhatsappLine className="text-xl shrink-0" aria-hidden />
                    Napsat mi
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 hover:border-accent hover:text-accent px-4 py-3 text-sm transition-all duration-300 w-full"
                  >
                    Moje práce
                  </Link>
                </div>

                {/* avatar vpravo */}
                <div className="w-[42%] max-w-[180px] sm:max-w-[220px] shrink-0">
                  <Avatar />
                </div>
              </motion.div>
            </div>

            {/* === DESKTOP layout === */}
            <div className="hidden xl:flex flex-col text-left">
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                Přetvářím nápady
                <br />
                na <span className="text-accent">digitální realitu</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-xl mb-6 text-base"
              >
                Od nápadu po vytvoření – komplexní a rychlé řešení přímo pro vás
                a váš projekt.
              </motion.p>

              <motion.div
                variants={fadeIn("down", 0.35)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-row items-center gap-4 mb-4"
              >
                <Link
                  href="https://wa.me/420725396158"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-6 py-3 text-base transition-all duration-300"
                >
                  <RiWhatsappLine className="text-xl" aria-hidden />
                  Napsat mi
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 hover:border-accent hover:text-accent px-6 py-3 text-base transition-all duration-300"
                >
                  Moje práce
                </Link>
              </motion.div>

              <motion.p
                variants={fadeIn("down", 0.38)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-sm text-white/45 mb-10"
              >
                15+ webů · CleanFlow · Restora X · Nalepkař · CloudniTo
              </motion.p>

              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>
        </div>

        {/* desktop avatar + particles */}
        <div className="hidden xl:block w-full max-w-[1280px] h-full absolute right-0 bottom-0">
          <div
            role="img"
            className="bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
