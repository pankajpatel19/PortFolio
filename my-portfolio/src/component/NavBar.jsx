import React, { useState, useEffect } from "react";
import { AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

const Navbar = ({ onOpenCommandPalette }) => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "skills" },
    { id: 5, link: "projects" },
    { id: 6, link: "contact" },
  ];

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 220;
      for (const item of links) {
        const el = document.getElementById(item.link);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.link);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-850 shadow-md shadow-black/40"
          : "bg-black/70 backdrop-blur-sm border-b border-zinc-900"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-white origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-screen-xl mx-auto h-16 px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-750 flex items-center justify-center font-bold text-white text-xs shadow-sm group-hover:border-white/50 transition-colors">
              P
            </span>
            <span className="text-base font-bold text-white tracking-tight">
              Pankaj<span className="text-zinc-400">.</span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link }) => {
            const isActive = activeSection === link;
            return (
              <li key={id} className="relative">
                <a
                  href={`#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(link);
                  }}
                  className={`px-3 py-1.5 capitalize text-xs font-mono font-medium rounded-lg transition-colors relative block ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {link}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-lg -z-10 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}

          {/* Quick HUD Trigger */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="ml-2 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono cursor-pointer"
              title="Command Palette (Ctrl+K)"
            >
              <Terminal size={12} className="text-zinc-300" />
              <span className="text-[11px]">HUD</span>
              <kbd className="text-[9px] bg-zinc-800 px-1 py-0.2 rounded text-zinc-400 ml-0.5">
                ⌘K
              </kbd>
            </button>
          )}

          {/* CTA Header Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-2"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("contact");
              }}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 rounded-lg shadow-sm flex items-center gap-1 transition-colors"
            >
              Let's Talk
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono flex items-center gap-1"
            >
              <Terminal size={14} className="text-zinc-300" />
              ⌘K
            </button>
          )}
          <button
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-zinc-300 hover:text-white transition-colors p-2 bg-zinc-900 border border-zinc-800 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {nav ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setNav(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 w-[270px] h-screen bg-[#0b0c13] border-l border-slate-800 z-50 flex flex-col justify-between p-6 md:hidden text-white"
            >
              <div className="flex flex-col gap-6 mt-10">
                <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                  <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">
                    Navigation
                  </p>
                  <button
                    onClick={() => setNav(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  {links.map(({ id, link }) => {
                    const isActive = activeSection === link;
                    return (
                      <li key={id}>
                        <a
                          href={`#${link}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setNav(false);
                            document
                              .getElementById(link)
                              ?.scrollIntoView({ behavior: "smooth" });
                            setActiveSection(link);
                          }}
                          className={`text-base font-medium capitalize flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                            isActive
                              ? "text-white bg-slate-800 font-semibold"
                              : "text-slate-400 hover:text-white hover:bg-slate-900"
                          }`}
                        >
                          {link}
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs text-slate-500">© 2026 Pankaj Patel</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Infinite Soft Tech (Intern)
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
