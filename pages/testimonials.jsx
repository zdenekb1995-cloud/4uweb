import { motion } from "framer-motion";

import TestimonialSlider from "../components/TestimonialSlider";
import { fadeIn } from "../variants";
import Seo from "../components/Seo";

const Testimonials = () => {
  return (
    <>
      <Seo
        title="Reference klientů | 4uweb"
        description="Hodnocení klientů: Nalepkar, Cloudnito, Port květiny, Perníčkova Vesna a další spokojení zákazníci."
        path="/testimonials"
      />
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Co říkají <span className="text-accent">klienti.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Testimonials;
