import React from "react";

/**
 * Meteors — Aceternity UI style falling meteor streaks for high-end aesthetic.
 */
export const Meteors = ({ number = 14, className = "" }) => {
  const meteors = new Array(number).fill(true);
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((_, idx) => {
        const left = Math.floor(Math.random() * 800 - 100);
        const delay = Math.random() * 5 + 0.2;
        const duration = Math.floor(Math.random() * 6 + 5);

        return (
          <span
            key={"meteor" + idx}
            style={{
              top: "-20px",
              left: `${left + 100}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
            className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-400 shadow-[0_0_0_1px_#ffffff10]"
          >
            {/* Meteor tail */}
            <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-blue-400/60 to-transparent" />
          </span>
        );
      })}
    </div>
  );
};

export default Meteors;

