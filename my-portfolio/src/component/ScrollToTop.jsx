import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop — Permanently fixed round profile photo button on desktop and mobile.
 * Clicking or tapping it smoothly scrolls back to the top of the page.
 */
const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      key="scroll-to-top"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[105] w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-zinc-700 via-white/50 to-zinc-800 hover:from-white hover:to-zinc-300 shadow-2xl cursor-pointer group transition-all duration-300 select-none"
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.92 }}
    >
      {/* Outer ambient glow */}
      <span className="absolute -inset-1 rounded-full bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Inner Round Container with User Photo */}
      <div className="w-full h-full rounded-full overflow-hidden bg-black relative flex items-center justify-center border border-black">
        <img
          src="/profilemain.png"
          alt="Pankaj Patel - Back to top"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/profile.png";
          }}
        />

        {/* Hover overlay with Up Arrow Indicator */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
          <ArrowUp size={18} className="text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>

        {/* Always-visible miniature top-arrow pill indicator at bottom corner */}
        <div
          className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center shadow-md border border-black transition-all duration-300 ${
            scrolled ? "bg-white text-black scale-100" : "bg-zinc-800 text-zinc-300 scale-90"
          }`}
        >
          <ArrowUp size={10} className="stroke-[3]" />
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute -top-9 right-0 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
        {scrolled ? "Back to top ↑" : "Top ↑"}
      </span>
    </motion.button>
  );
};

export default ScrollToTop;
