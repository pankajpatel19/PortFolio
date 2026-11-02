import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Heart,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [coffeeCount, setCoffeeCount] = useState(108);

  const quickLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      link: "https://linkedin.com/in/pankajpatel19",
    },
    {
      name: "GitHub",
      icon: <Github size={16} />,
      link: "https://github.com/pankajpatel19",
    },
    {
      name: "Twitter",
      icon: <Twitter size={16} />,
      link: "https://twitter.com/pankajpatel19",
    },
  ];

  const contactDetails = [
    {
      icon: <Mail size={13} />,
      text: "ppankajpatel348@gmail.com",
      link: "mailto:ppankajpatel348@gmail.com",
    },
    {
      icon: <Phone size={13} />,
      text: "+91 9173731916",
      link: "tel:+919173731916",
    },
    {
      icon: <MapPin size={13} />,
      text: "Borivali, Mumbai · Ahmedabad",
      link: "https://maps.google.com/?q=Borivali,Mumbai",
    },
  ];

  const handleCoffeeHover = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  return (
    <footer className="bg-[#050608] text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-screen-xl mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand/Quote */}
          <div className="space-y-3 text-left">
            <h2 className="text-xl font-bold font-display text-white tracking-tight">
              Pankaj Patel
            </h2>
            {/* Open to Work badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-900/60 text-[10px] font-mono font-semibold text-zinc-300 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Open to Work
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Full Stack Developer · Backend-Focused · MERN Stack. Building scalable web architectures, REST APIs, and production applications.
            </p>
            <p className="text-xs font-mono text-slate-500">
              Building reliably, step by step.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-left">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.link)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-xs font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Communication
            </h3>
            <ul className="space-y-2.5">
              {contactDetails.map((detail, index) => (
                <li key={index}>
                  <a
                    href={detail.link}
                    target={detail.text.includes("India") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-2.5"
                  >
                    <span className="text-slate-500">{detail.icon}</span>
                    {detail.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Interactive Coffee Box */}
          <div className="text-left">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Social Channels
            </h3>
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#0b0c13] border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Coffee Box */}
            <div
              onClick={handleCoffeeHover}
              onMouseEnter={handleCoffeeHover}
              className="p-3 bg-[#0b0c13] border border-slate-800 rounded-xl flex items-center gap-3 shadow-inner cursor-pointer select-none group hover:border-slate-700 transition-colors"
              title="Click or hover to add coffee!"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400 group-hover:scale-110 transition-transform">
                <Coffee size={16} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white font-mono">{coffeeCount}</span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase">Cups Fuelled</span>
                </div>
                <p className="text-[10px] text-slate-500">Click to add caffeine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-8 h-[1px] bg-slate-800/80" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono">
          <p className="flex items-center gap-1.5">
            © {currentYear} Pankaj Patel — Crafted with
            <Heart size={12} className="text-zinc-400 fill-current" />
            in Ahmedabad, India
          </p>
          <p className="text-[11px] text-slate-600">
            Engineered for performance & accessibility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
