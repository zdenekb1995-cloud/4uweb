import Link from "next/link";

import {
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://instagram.com/zden.o1",
    Icon: RiInstagramLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/420725396158",
    Icon: RiWhatsappLine,
  },
  {
    name: "E-mail",
    link: "mailto:4uweb@seznam.cz",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-end gap-x-4 sm:gap-x-5 text-xl sm:text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300 p-1"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
