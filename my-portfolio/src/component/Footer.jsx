import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Heart,
  ArrowUp,
  Code2,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [coffeeCount, setCoffeeCount] = useState(105);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      link: "https://linkedin.com/in/pankajpatel19",
      color: "hover:bg-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={18} />,
      link: "https://github.com/pankajpatel19",
      color: "hover:bg-slate-700",
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      link: "https://twitter.com",
      color: "hover:bg-cyan-500",
    },
  ];

  const contactDetails = [
    {
      icon: <Mail size={14} />,
      text: "pankajpatelinter@gmail.com",
      link: "mailto:pankajpatelinter@gmail.com",
    },
    {
      icon: <Phone size={14} />,
      text: "+91 8511994480",
      link: "tel:+918511994480",
    },
    {
      icon: <MapPin size={14} />,
      text: "Ahmedabad, India",
      link: "https://maps.google.com/?q=Ahmedabad,India",
    },
  ];

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCoffeeHover = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Visual Accent Top Bar */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />

      <div className="max-w-screen-xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand/Quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-left"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-display">
              Pankaj Patel
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              MERN Stack Developer building high-fidelity web systems and responsive consumer solutions.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
              <Code2 size={15} />
              <span>Building tomorrow, step by step</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left"
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-cyan-400 mb-5">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.link)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-cyan-400 mb-5">
              Communication
            </h3>
            <ul className="space-y-3">
              {contactDetails.map((detail, index) => (
                <li key={index}>
                  <a
                    href={detail.link}
                    target={detail.text.includes("India") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-3 group font-light"
                  >
                    <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {detail.icon}
                    </span>
                    {detail.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Interactive Coffee Counter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-left"
          >
            <h3 className="text-base font-bold uppercase tracking-wider text-cyan-400 mb-5">
              Social Channels
            </h3>
            <div className="flex gap-2.5 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 bg-slate-900 border border-slate-850 rounded-xl text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Incremental Coffee Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onHoverStart={handleCoffeeHover}
              className="p-4 bg-slate-900/60 border border-slate-850 rounded-2xl flex items-center gap-3 shadow-inner cursor-pointer select-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-850 text-cyan-400 group-hover:rotate-12 transition-transform duration-300">
                <Coffee size={20} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-gray-200">{coffeeCount}</span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest animate-pulse">Refills</span>
                </div>
                <p className="text-[10.5px] text-gray-500 leading-tight">
                  Hover to supply more caffeine!
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Separator Line */}
        <div className="my-10 h-[1px] bg-slate-900" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-500">
          <p className="flex items-center gap-1">
            © {currentYear} Pankaj Patel. Crafted with
            <Heart
              size={13}
              className="text-red-500 animate-pulse ml-0.5"
              fill="currentColor"
            />
            and MERN stacks
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl shadow-xl shadow-cyan-500/10 hover:shadow-cyan-450/30 z-50 transition-all duration-300 border border-cyan-400/25 cursor-pointer"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern" />
    </footer>
  );
};

export default Footer;
