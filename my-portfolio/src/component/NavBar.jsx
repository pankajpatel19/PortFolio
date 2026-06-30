import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
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
      // Background shift on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-cyan-950/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-screen-xl mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-300">
              P
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-cyan-400 transition-colors">
              Pankaj
            </span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map(({ id, link }) => {
            const isActive = activeSection === link;
            return (
              <li key={id} className="relative">
                <a
                  href={`#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(link);
                  }}
                  className={`px-4 py-2 capitalize font-medium text-sm rounded-lg transition-colors relative block hover:text-cyan-400 ${
                    isActive ? "text-cyan-400" : "text-gray-400"
                  }`}
                >
                  {link}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-lg -z-10 shadow-inner"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}

          {/* Call to Action Header Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("contact");
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-white shadow-md hover:shadow-cyan-400/20 flex items-center gap-1.5 transition-all duration-300"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </ul>

        {/* Mobile Menu Icon */}
        <motion.div
          onClick={() => setNav(!nav)}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer z-50 text-gray-400 md:hidden hover:text-cyan-400 transition-colors p-2 bg-slate-900 border border-slate-800 rounded-xl"
        >
          {nav ? <X size={22} /> : <Menu size={22} />}
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setNav(false)}
            />

            {/* Mobile Navigation Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[280px] h-screen bg-slate-950/95 border-l border-slate-900 z-50 flex flex-col justify-between p-8 md:hidden"
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="border-b border-slate-900 pb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Navigation
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {links.map(({ id, link }, index) => {
                    const isActive = activeSection === link;
                    return (
                      <motion.li
                        key={id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <a
                          href={`#${link}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setNav(false);
                            document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
                            setActiveSection(link);
                          }}
                          className={`text-2xl font-semibold capitalize flex items-center justify-between group py-2 ${
                            isActive
                              ? "text-cyan-400"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {link}
                          <span
                            className={`w-2 h-2 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-transform ${
                              isActive ? "scale-100" : ""
                            }`}
                          />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Bottom detail in mobile drawer */}
              <div className="border-t border-slate-900 pt-6">
                <p className="text-xs text-gray-600">© 2026 Pankaj Patel</p>
                <p className="text-xs text-cyan-500 font-medium mt-1">MERN Stack Developer</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
