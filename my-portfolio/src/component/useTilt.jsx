import React, { useRef, useEffect } from "react";

/**
 * Custom hook that adds a 3D tilt effect to a card element based on mouse position.
 * @param {Object} options - Configuration options
 * @param {number} options.maxTilt - Max tilt angle in degrees (default: 15)
 * @param {number} options.perspective - CSS perspective value in px (default: 800)
 * @param {number} options.glareOpacity - Max glare overlay opacity (default: 0.15)
 * @param {number} options.scale - Scale factor on hover (default: 1.05)
 */
const useTilt = (options = {}) => {
  const {
    maxTilt = 15,
    perspective = 800,
    glareOpacity = 0.15,
    scale = 1.05,
    speed = 400,
  } = options;

  const ref = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create glare overlay element
    const glareEl = document.createElement("div");
    glareEl.style.cssText = `
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: radial-gradient(circle at 50% 0%, rgba(255,255,255,${glareOpacity * 1.5}), transparent 60%);
      opacity: 0;
      pointer-events: none;
      transition: opacity ${speed}ms ease;
      z-index: 10;
    `;
    el.style.position = "relative";
    el.style.overflow = "hidden";
    el.appendChild(glareEl);
    glareRef.current = glareEl;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      el.style.transition = `transform 100ms linear`;

      // Glare position
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`;
      glareEl.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = `transform ${speed}ms ease`;
      glareEl.style.opacity = "0";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (el.contains(glareEl)) el.removeChild(glareEl);
    };
  }, [maxTilt, perspective, glareOpacity, scale, speed]);

  return ref;
};

/**
 * A 3D tilt card wrapper component.
 * Wrap any card children to automatically get 3D interactive hover tilt.
 */
export const TiltCard = ({ children, className = "", options = {} }) => {
  const ref = useTilt(options);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
};

export default useTilt;
