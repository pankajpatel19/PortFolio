import React from "react";

/**
 * BorderBeam — Magic UI style animated light beam running along the card border.
 */
export const BorderBeam = ({
  className = "",
  size = 200,
  duration = 8,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#3b82f6",
  colorTo = "#8b5cf6",
  delay = 0,
}) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border-[length:var(--border-width)] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[calc(var(--size))] bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          offsetAnchor: "calc(var(--anchor)) 50%",
          offsetPath: "rect(0 auto auto 0 round calc(var(--size)))",
          animation: `border-beam var(--duration) infinite linear var(--delay)`,
        }}
      />
    </div>
  );
};

export default BorderBeam;

