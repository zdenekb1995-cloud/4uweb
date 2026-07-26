import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import { fadeIn } from "../variants";
import Seo from "../components/Seo";

export const aboutData = [
  {
    title: "Dovednosti",
    info: [
      { title: "Webové stránky" },
      { title: "SaaS aplikace" },
      { title: "Ubytovací systémy" },
      { title: "E-shopy" },
      { title: "Restaurační systémy" },
      { title: "Automatizace a integrace" },
      { title: "UI / UX design" },
      { title: "SEO" },
    ],
  },
  {
    title: "Zkušenosti",
    info: [
      {
        title: "Cleanflow – SaaS pro správu a plánování úklidů (Airbnb & Booking)",
        stage: "2026",
      },
      {
        title: "Restorax – restaurační systém na míru",
        stage: "2025 – 2026",
      },
      {
        title: "FlyshopX – e-shop na míru",
        stage: "2025 – 2026",
      },
      {
        title: "Webové stránky – 15+ spuštěných projektů",
        stage: "2024 – 2026",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Seo
        title="O mně | Vývojář webů, SaaS a systémů na míru"
        description="4uweb – zkušenosti s webovými stránkami, SaaS aplikacemi, e-shopy, ubytovacími a restauračními systémy. 15+ spuštěných projektů."
        path="/about"
      />
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      {/* avatar – posunutý více doleva a níž, ať nepřekrývá text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[420px] opacity-80 pointer-events-none"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 relative z-10">
        {/* text – vyšší z-index, aby byl nad fotkou */}
        <div className="flex-1 flex flex-col justify-center xl:pl-4">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Moderní <span className="text-accent">příběh</span>,
            <br />
            který tvoří weby a systémy.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[480px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-white/70"
          >
            Tvořím webové stránky, SaaS aplikace, e-shopy, ubytovací a
            restaurační systémy na míru. Od nápadu po spuštění – rychle,
            přehledně a s důrazem na výsledek.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Roky zkušeností
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Spokojení klienti
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Dokončené projekty
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info panel */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[320px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row max-w-max gap-x-3 items-center md:items-start text-center md:text-left text-white/60"
              >
                <div className="font-light">{item.title}</div>
                {item.stage && (
                  <>
                    <div className="hidden md:block text-white/30">–</div>
                    <div className="text-accent font-medium whitespace-nowrap">
                      {item.stage}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default About;
