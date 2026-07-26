import Link from "next/link";
import { useRouter } from "next/router";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "domů", path: "/", Icon: HiHome },
  { name: "o mně", path: "/about", Icon: HiUser },
  { name: "služby", path: "/services", Icon: HiRectangleGroup },
  { name: "práce", path: "/work", Icon: HiViewColumns },
  {
    name: "reference",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "kontakt",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = (path) => {
    if (path === "/") return pathname === "/" || pathname === "";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen xl:top-0 xl:bottom-auto">
      <div className="flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-8 px-1 sm:px-4 xl:px-0 h-[60px] sm:h-[70px] xl:h-max py-2 xl:py-8 bg-[#1a1333]/95 xl:bg-white/10 backdrop-blur-md border-t border-white/10 xl:border-0 text-[22px] sm:text-2xl xl:text-xl xl:rounded-full shadow-[0_-4px_20px_rgba(0,0,0,0.25)] xl:shadow-none">
        {navData.map((link, i) => {
          const active = isActive(link.path);
          return (
            <Link
              className={`relative flex items-center justify-center group transition-all duration-300 min-w-[44px] min-h-[44px] rounded-full ${
                active ? "text-white" : "text-white/50 hover:text-white/90"
              }`}
              href={link.path}
              key={i}
              aria-label={link.name}
              aria-current={active ? "page" : undefined}
              onClick={handleClick}
            >
              {active && (
                <span
                  className="absolute inset-1 rounded-full bg-accent/20 ring-1 ring-accent/50"
                  aria-hidden
                />
              )}

              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex z-10"
              >
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>

              <span className={`relative z-[1] ${active ? "text-accent" : ""}`}>
                <link.Icon aria-hidden />
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
