import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";

/**
 * ResumeModal — A full-screen glassmorphic overlay that embeds the PDF resume.
 * Props:
 *   isOpen  {boolean} — controls visibility
 *   onClose {function} — callback to close the modal
 */
const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = "/Pankaj_Patel_FullStack_Developer_Resume.pdf";

  // Close on Escape key
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="resume-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            key="resume-modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-4 sm:inset-8 lg:inset-12 z-[101] flex flex-col rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-slate-900/80 border-b border-slate-800 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 flex-shrink-0">
                  <FileText size={16} className="text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-none">Pankaj Patel — Resume</h2>
                  <p className="text-xs text-gray-500 mt-0.5">MERN Stack Developer</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink size={13} />
                  Open in Tab
                </motion.a>

                <motion.a
                  href={resumeUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-white px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
                >
                  <Download size={13} />
                  Download
                </motion.a>

                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-700/50 transition-all duration-200 cursor-pointer ml-1"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>

            {/* Gradient accent line */}
            <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex-shrink-0" />

            {/* PDF Embed */}
            <div className="flex-1 overflow-hidden relative bg-slate-950">
              {/* Subtle grid pattern behind iframe */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Pankaj Patel Resume"
                className="w-full h-full border-0 relative z-10"
              />

              {/* Fallback message if PDF can't embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                <FileText size={48} className="text-slate-700 mb-4" />
                <p className="text-slate-600 text-sm text-center">
                  PDF viewer loading…<br />
                  <span className="text-xs text-slate-700">Click "Open in Tab" if it doesn't load</span>
                </p>
              </div>
            </div>

            {/* Footer hint */}
            <div className="px-5 py-2.5 bg-slate-900/50 border-t border-slate-800 flex-shrink-0 flex items-center justify-between">
              <p className="text-[11px] text-slate-600">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 text-[10px] font-mono">Esc</kbd> to close</p>
              <p className="text-[11px] text-slate-600">Pankaj_Patel_FullStack_Developer_Resume.pdf</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
