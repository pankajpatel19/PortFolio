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
  const resumeUrl = "/Pankaj_Patel_Resume.pdf";

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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            key="resume-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 sm:inset-8 lg:inset-12 z-[101] flex flex-col rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0c0d14]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <FileText size={15} className="text-zinc-300" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-none">
                    Pankaj Patel — Resume
                  </h2>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Full Stack Developer (MCA)
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
                >
                  <ExternalLink size={12} />
                  Open in Tab
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="flex items-center gap-1.5 text-xs text-slate-950 font-semibold px-3 py-1.5 rounded-lg bg-white hover:bg-slate-200 transition-colors"
                >
                  <Download size={12} />
                  Download
                </a>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF viewer frame */}
            <div className="flex-grow w-full h-full bg-[#08090f] relative">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Pankaj Patel Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
