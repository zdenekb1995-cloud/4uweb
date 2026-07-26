import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

const WhatsAppFloat = () => {
  return (
    <Link
      href="https://wa.me/420725396158"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Napsat na WhatsApp"
      className="fixed z-40 bottom-[76px] sm:bottom-[88px] xl:bottom-8 right-4 xl:right-24
        flex items-center justify-center w-14 h-14 rounded-full
        bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg shadow-black/30
        transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <RiWhatsappLine className="text-3xl" aria-hidden />
    </Link>
  );
};

export default WhatsAppFloat;
