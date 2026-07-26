import { motion } from "framer-motion";

import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import WorkSlider from "../components/WorkSlider";
import { fadeIn } from "../variants";
import Seo from "../components/Seo";

const Work = () => {
  return (
    <>
      <Seo
        title="Projekty a reference | Živé weby a systémy"
        description="Ukázky realizací: Cleanflow, Restorax, FlyshopX, Nalepkar, Cloudnito, Port květiny a další živé projekty."
        path="/work"
      />
      <div className="min-h-screen xl:h-full bg-primary/30 py-20 sm:py-28 xl:py-36 pb-28 xl:pb-36 flex items-start xl:items-center overflow-y-auto">
        <Circles />
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-x-8 gap-y-6">
            <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-2 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                Moje práce <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto xl:mx-0 text-sm sm:text-base"
              >
                Vybrané projekty – weby a aplikace, které jsem navrhl a
                spustil pro klienty.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Work;
