import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * StickySection — Linear/Apple-style stacked scroll card wrapper.
 *
 * Wraps a section so it stays sticky at the top while scrolling through it.
 * As you scroll PAST it, it scales down + blurs softly so the next section
 * appears to "slide on top" in a layered card stack effect.
 *
 * Props:
 *  - children: The section component to wrap
 *  - index: 0-based position in the stack (used for z-index)
 *  - total: total number of sticky sections (used to calculate exit scale)
 */
const StickySection = ({ children, index, total }) => {
  const containerRef = useRef(null);

  // Track scroll progress within this section's scroll range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale: this section shrinks as we scroll past it (from 1 → 0.88)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  // Opacity: fade slightly as we scroll past (1 → 0.5)
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.5]);

  // Blur (via filter): sharpen → soft blur as we scroll away
  // We'll handle this with the motion div's style directly via a derived string
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    // Outer container: takes scroll space (100vh height to allow sticky to work)
    <div
      ref={containerRef}
      // Each section takes up viewport height as scroll space
      // so the sticky mechanism has room to engage
      style={{ minHeight: "100dvh" }}
      className="relative"
    >
      {/* Sticky inner: stays at top while scrolling through this section's range */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ zIndex: 10 + index }}>
        <motion.div
          style={{ scale, opacity }}
          // transform-origin so scaling looks natural (shrinks toward center-top)
          className="origin-top w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default StickySection;

