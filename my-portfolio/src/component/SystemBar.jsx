import React, { useState, useEffect } from "react";
import { Terminal, MapPin, Clock, Briefcase } from "lucide-react";

const SystemBar = ({ onOpenCommandPalette }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black border-b border-zinc-800 text-[11px] font-mono text-zinc-400 py-1.5 px-4 z-40 relative select-none">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Location & Time */}
        <div className="flex items-center gap-3.5">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <MapPin size={11} className="text-zinc-400" />
            Borivali, Mumbai · Ahmedabad
          </span>
          <span className="hidden sm:flex items-center gap-1 text-zinc-400">
            <Clock size={11} />
            {time || "07:30 PM"} (IST)
          </span>
          <span className="hidden md:inline-block text-zinc-700">|</span>
          <span className="hidden md:flex items-center gap-1 text-zinc-300">
            <Briefcase size={11} className="text-zinc-300" />
            Full Stack Intern @ Infinite Soft Tech (June – Sept 2026)
          </span>
        </div>

        {/* Right: Live Status & Command Shortcut */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-zinc-200 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Available for Hire
          </span>

          <button
            onClick={() => onOpenCommandPalette(true)}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer text-[10px]"
            title="Open Command Palette (Ctrl+K)"
          >
            <Terminal size={10} className="text-zinc-300" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="px-1 py-0.2 bg-zinc-800 rounded text-[9px] text-zinc-400 ml-0.5">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemBar;
