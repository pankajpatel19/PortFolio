import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/**
 * SpotlightCard — Magic UI / Aceternity UI style interactive spotlight card.
 * Tracks mouse position smoothly and casts a subtle specular light glow over the card & border.
 */
export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.12)",
  borderColor = "rgba(59, 130, 246, 0.35)",
  ...props
}) => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      className={`relative rounded-2xl border border-slate-800 bg-[#0b0c13] p-6 overflow-hidden transition-colors duration-300 group ${className}`}
      {...props}
    >
      {/* Specular mouse-following spotlight glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 75%
            )
          `,
        }}
      />

      {/* Subtle border shine follower */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${borderColor},
              transparent 70%
            )
          `,
          maskImage: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMaskImage: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;

