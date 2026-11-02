import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onComplete }) => {
  const letters = "PANKAJ PATEL".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080b] overflow-hidden"
      >
        {/* Subtle ambient light */}
        <div className="absolute w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-slate-500 text-2xl font-mono font-light"
            >
              {"<"}
            </motion.span>

            <div className="flex gap-0.5">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + i * 0.04,
                    ease: "easeOut",
                  }}
                  className={`text-xl sm:text-2xl font-display font-black tracking-wider ${
                    letter === " " ? "w-2.5" : "text-white"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-slate-500 text-2xl font-mono font-light"
            >
              {"/>"}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-slate-400 text-xs tracking-[0.25em] font-mono uppercase font-medium"
          >
            Full Stack Developer
          </motion.p>

          {/* Loading bar */}
          <div className="w-36 h-[2px] bg-slate-800 rounded-full overflow-hidden mt-3">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
