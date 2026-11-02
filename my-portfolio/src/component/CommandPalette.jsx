import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Search,
  FolderOpen,
  Code2,
  Briefcase,
  User,
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";

const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === "Escape" && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      category: "Navigation",
      items: [
        {
          id: "nav-home",
          label: "Go to Home",
          icon: <User size={16} />,
          action: () => {
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
        {
          id: "nav-about",
          label: "About & Engineering Philosophy",
          icon: <Sparkles size={16} />,
          action: () => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
        {
          id: "nav-exp",
          label: "Experience & Infinite Soft Tech Internship",
          icon: <Briefcase size={16} />,
          action: () => {
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
        {
          id: "nav-skills",
          label: "Technical Skills Matrix",
          icon: <Code2 size={16} />,
          action: () => {
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
        {
          id: "nav-projects",
          label: "Featured Projects Lab",
          icon: <FolderOpen size={16} />,
          action: () => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
        {
          id: "nav-contact",
          label: "Get in Touch / Contact",
          icon: <Mail size={16} />,
          action: () => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
            onClose(false);
          },
        },
      ],
    },
    {
      category: "Quick Actions",
      items: [
        {
          id: "act-resume",
          label: "Preview Resume (PDF Modal)",
          icon: <Download size={16} />,
          action: () => {
            onClose(false);
            onOpenResume();
          },
        },
        {
          id: "act-copy-email",
          label: "Copy Email Address (ppankajpatel348@gmail.com)",
          icon: <Mail size={16} />,
          action: () => {
            navigator.clipboard.writeText("ppankajpatel348@gmail.com");
            alert("Email copied to clipboard!");
            onClose(false);
          },
        },
      ],
    },
    {
      category: "Social Profiles",
      items: [
        {
          id: "soc-github",
          label: "GitHub Profile",
          icon: <Github size={16} />,
          action: () =>
            window.open("https://github.com/pankajpatel19", "_blank"),
        },
        {
          id: "soc-linkedin",
          label: "LinkedIn Profile",
          icon: <Linkedin size={16} />,
          action: () =>
            window.open("https://linkedin.com/in/pankajpatel19", "_blank"),
        },
        {
          id: "soc-twitter",
          label: "Twitter Profile",
          icon: <Twitter size={16} />,
          action: () =>
            window.open("https://twitter.com/pankajpatel19", "_blank"),
        },
      ],
    },
  ];

  const filteredCategories = actions
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => onClose(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92vw] max-w-xl bg-[#0f111a] border border-slate-700/80 rounded-2xl shadow-2xl z-[151] overflow-hidden flex flex-col text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <Search size={18} className="text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search sections, skills, actions..."
                autoFocus
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                ESC
              </span>
              <button
                onClick={() => onClose(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-4">
              {filteredCategories.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500">
                  No matching command or destination found.
                </div>
              ) : (
                filteredCategories.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 py-1 font-semibold">
                      {cat.category}
                    </p>
                    <div className="space-y-1 mt-1">
                      {cat.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors text-left group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-zinc-400 group-hover:text-white transition-colors">
                              {item.icon}
                            </span>
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Navigate with mouse or click</span>
              <span>Pankaj Patel Portfolio HUD</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
