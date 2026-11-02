import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import BorderBeam from "./animations/BorderBeam";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    category,
    description,
    tech,
    github,
    demo,
    image,
  } = project;

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      className="relative bg-[#0b0c13] rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors duration-300 flex flex-col group h-full shadow-lg"
    >
      {/* Dynamic Specular Mouse Spotlight (Aceternity / Linear style) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 75%
            )
          `,
        }}
      />

      {/* Featured Border Beam on flagship project */}
      {id === 1 && (
        <BorderBeam size={170} duration={8} colorFrom="#ffffff" colorTo="#52525b" />
      )}

      {/* Image Preview Container */}
      <div className="relative h-48 overflow-hidden bg-slate-950 flex items-center justify-center">
        <img
          src={image || "/wandarLust.webp"}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/wandarLust.webp";
          }}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-[#07080b]/90 border border-zinc-800 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold text-zinc-300 uppercase tracking-wider backdrop-blur-sm z-20">
          {category}
        </div>

        {/* Hover Inspect Pill */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
          <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-xs font-mono text-zinc-100 flex items-center gap-1.5 shadow-lg tracking-wide">
            Inspect Project <ExternalLink size={12} />
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-6 flex-grow flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors tracking-tight">
            {title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-5 font-light">
            {description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-slate-400 font-medium group-hover:border-slate-700 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center border-t border-slate-800 bg-[#090a0f] relative z-20">
        {demo ? (
          <>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="w-1/2 py-3.5 text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
            <div className="h-6 w-[1px] bg-slate-800" />
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="w-1/2 py-3.5 text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <Github size={13} />
              Source Code
            </a>
          </>
        ) : (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <Github size={13} />
            View Source on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
