import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-4 sm:py-6 xl:py-8 gap-x-4">
          {/* logo left */}
          <Link
            href="/"
            className="text-xl sm:text-2xl xl:text-3xl font-semibold tracking-tight shrink-0"
          >
            4uweb<span className="text-accent">.</span>
          </Link>

          {/* icons right */}
          <div className="shrink-0">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
