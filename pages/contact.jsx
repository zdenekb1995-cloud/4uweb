import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

import { fadeIn } from "../variants";
import Seo from "../components/Seo";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const body = encodeURIComponent(
      `Jméno: ${name}\nE-mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:4uweb@seznam.cz?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setIsLoading(false);
  };

  return (
    <>
      <Seo
        title="Kontakt | Domluvme váš projekt"
        description="Napište o webu, e-shopu nebo systému na míru. E-mail 4uweb@seznam.cz, WhatsApp 725 396 158."
        path="/contact"
      />
      <div className="min-h-screen xl:h-full bg-primary/30 overflow-y-auto pb-28 xl:pb-0">
        <div className="container mx-auto py-20 sm:py-28 xl:py-32 px-4 text-center xl:text-left flex items-center justify-center min-h-[80vh]">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-4 sm:mb-6"
            >
              Pojďme se <span className="text-accent">spojit.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center text-white/60 text-sm mb-6 sm:mb-8"
            >
              Nejrychleji přes WhatsApp — ozvu se obvykle během dne.
            </motion.p>

            {/* quick contact */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col sm:flex-row gap-3 justify-center mb-8 sm:mb-10"
            >
              <Link
                href="https://wa.me/420725396158"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-medium rounded-full px-6 py-3.5 text-sm sm:text-base transition-all duration-300"
              >
                <RiWhatsappLine className="text-xl" aria-hidden />
                WhatsApp — 725 396 158
              </Link>
              <Link
                href="mailto:4uweb@seznam.cz"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-accent hover:text-accent rounded-full px-6 py-3.5 text-sm sm:text-base transition-all duration-300"
              >
                <RiMailLine className="text-xl" aria-hidden />
                4uweb@seznam.cz
              </Link>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.32)}
              initial="hidden"
              animate="show"
              className="text-center text-white/40 text-xs mb-4"
            >
              nebo napište zprávu
            </motion.p>

            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              autoComplete="off"
              name="contact"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Jméno"
                  className="input"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                  disabled={isLoading}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Předmět"
                className="input"
                disabled={isLoading}
                required
              />
              <textarea
                name="message"
                placeholder="Zpráva..."
                className="textarea"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative mx-auto xl:mx-0"
                disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Pojďme tvořit
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
