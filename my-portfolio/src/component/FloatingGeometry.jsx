import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Renders floating 3D wireframe geometric shapes in the background.
 * Uses CSS 3D transforms to create animated polygons in perspective space.
 */
const FloatingGeometry = () => {
  const shapes = [
    // Outer spinning cube
    {
      id: "cube",
      size: 80,
      top: "15%",
      right: "8%",
      rotate: { x: 45, y: 45, z: 0 },
      color: "rgba(34,211,238,0.25)",
      duration: 18,
      type: "cube",
    },
    // Smaller glowing cube
    {
      id: "cube2",
      size: 50,
      top: "70%",
      left: "6%",
      rotate: { x: 30, y: 60, z: 20 },
      color: "rgba(168,85,247,0.25)",
      duration: 24,
      type: "cube",
    },
    // Octahedron shape via diamond
    {
      id: "diamond",
      size: 60,
      bottom: "20%",
      right: "15%",
      rotate: { x: 0, y: 0, z: 45 },
      color: "rgba(99,102,241,0.2)",
      duration: 15,
      type: "diamond",
    },
    // Small cube accent
    {
      id: "cube3",
      size: 35,
      top: "40%",
      left: "3%",
      rotate: { x: 60, y: 30, z: 15 },
      color: "rgba(6,182,212,0.2)",
      duration: 20,
      type: "cube",
    },
    // Ring torus
    {
      id: "ring",
      size: 90,
      top: "60%",
      right: "5%",
      rotate: { x: 70, y: 0, z: 0 },
      color: "rgba(34,211,238,0.15)",
      duration: 28,
      type: "ring",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: shape.duration,
            ease: "linear",
          }}
        >
          {shape.type === "cube" && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                border: `1.5px solid ${shape.color}`,
                transform: `perspective(200px) rotateX(${shape.rotate.x}deg) rotateY(${shape.rotate.y}deg) rotateZ(${shape.rotate.z}deg)`,
                boxShadow: `0 0 15px ${shape.color}, inset 0 0 15px ${shape.color}`,
                borderRadius: 4,
              }}
            />
          )}
          {shape.type === "diamond" && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                border: `1.5px solid ${shape.color}`,
                transform: `rotate(45deg) perspective(200px) rotateX(${shape.rotate.x}deg) rotateY(${shape.rotate.y}deg)`,
                boxShadow: `0 0 15px ${shape.color}`,
              }}
            />
          )}
          {shape.type === "ring" && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                border: `2px solid ${shape.color}`,
                borderRadius: "50%",
                transform: `perspective(150px) rotateX(${shape.rotate.x}deg) rotateY(${shape.rotate.y}deg)`,
                boxShadow: `0 0 20px ${shape.color}`,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Animated orbiting particle ring in the background */}
      <motion.div
        className="absolute"
        style={{ top: "18%", right: "12%" }}
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            border: "1px dashed rgba(34,211,238,0.12)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ bottom: "15%", left: "8%" }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            border: "1px dashed rgba(168,85,247,0.12)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingGeometry;
