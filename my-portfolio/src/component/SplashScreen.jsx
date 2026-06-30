import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SplashScreen — Animated intro that shows briefly before the portfolio loads.
 * Fades out after 2.2 seconds and calls onComplete to remove it from the DOM.
 */
const SplashScreen = ({ onComplete }) => {
  const letters = "PANKAJ PATEL".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      >
        {/* Animated aurora orbs behind */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-[90px]"
          />
        </div>

        {/* Logo / name animation */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Animated bracket */}
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-cyan-400 text-3xl font-mono font-light"
            >
              {"<"}
            </motion.span>

            {/* Staggered letter animation */}
            <div className="flex gap-0.5">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className={`text-2xl sm:text-3xl font-display font-black tracking-wider ${
                    letter === " " ? "w-3" : "text-white"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-cyan-400 text-3xl font-mono font-light"
            >
              {"/>"}
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-gray-500 text-sm tracking-[0.3em] uppercase font-semibold"
          >
            MERN Stack Developer
          </motion.p>

          {/* Loading bar */}
          <motion.div className="w-48 h-[2px] bg-slate-900 rounded-full overflow-hidden mt-2">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
