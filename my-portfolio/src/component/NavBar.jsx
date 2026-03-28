import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 fixed z-50 shadow-lg"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href="#home">
          <h1 className="text-2xl font-bold ml-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
            Pankaj
          </h1>
        </a>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 duration-200 relative group"
          >
            <a href={`#${link}`}>
              {link}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <motion.div
        onClick={() => setNav(!nav)}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-cyan-400 transition-colors"
      >
        {nav ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <X size={32} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Menu size={32} />
          </motion.div>
        )}
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setNav(false)}
            />

            {/* Mobile Menu */}
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 z-50"
            >
              {links.map(({ id, link }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#22d3ee" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 transition-colors"
                  onClick={() => setNav(false)}
                >
                  <a href={`#${link}`}>{link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
