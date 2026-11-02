import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop — A floating button that appears when the user scrolls down
 * more than 400px. Clicking it smoothly scrolls back to the top of the page.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-400 text-white hover:text-white flex items-center justify-center shadow-xl cursor-pointer backdrop-blur-sm transition-colors duration-300 group"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow on hover */}
          <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          <ArrowUp size={18} className="relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300" />

          {/* Tooltip on hover */}
          <span className="absolute -top-9 right-0 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            Back to top ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
