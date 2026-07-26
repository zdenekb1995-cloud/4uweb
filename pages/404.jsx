import Link from "next/link";
import { motion } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";

import Seo from "../components/Seo";
import { fadeIn } from "../variants";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Stránka nenalezena | 404"
        description="Tato stránka neexistuje. Vraťte se na úvod 4uweb."
        path="/404"
        noindex
      />
      <div className="min-h-screen bg-primary/30 flex items-center justify-center px-4 pb-24 xl:pb-0">
        <div className="text-center max-w-lg">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="text-7xl sm:text-9xl font-extrabold text-accent mb-4"
          >
            404
          </motion.div>
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="text-2xl sm:text-3xl font-semibold mb-3"
          >
            Stránka nenalezena
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="text-white/60 mb-8 text-sm sm:text-base"
          >
            Omlouváme se, tato adresa neexistuje nebo byla přesunuta.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-6 py-3 transition-colors"
            >
              Zpět na úvod
            </Link>
            <Link
              href="https://wa.me/420725396158"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-accent rounded-full px-6 py-3 transition-colors"
            >
              <RiWhatsappLine className="text-xl" aria-hidden />
              WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
