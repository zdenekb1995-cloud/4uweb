import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "4uweb-cookies";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed z-[60] bottom-[70px] xl:bottom-6 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md
      bg-[#1a1333]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-xl">
      <p className="text-sm text-white/80 leading-relaxed mb-3">
        Používáme nezbytné cookies pro fungování webu. Analytiku zapneme jen se
        souhlasem.{" "}
        <Link href="/cookies" className="text-accent underline underline-offset-2">
          Více informací
        </Link>
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => accept("all")}
          className="bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-full px-4 py-2 transition-colors"
        >
          Přijmout vše
        </button>
        <button
          type="button"
          onClick={() => accept("essential")}
          className="border border-white/30 hover:border-white/60 text-white/90 text-sm rounded-full px-4 py-2 transition-colors"
        >
          Jen nezbytné
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
