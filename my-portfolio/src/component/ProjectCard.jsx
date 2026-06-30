import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";
import { TiltCard } from "./useTilt";

const ProjectCard = ({ project }) => {
  const {
    title,
    category,
    description,
    tech,
    github,
    demo,
    gradient,
    glowColor,
    image,
  } = project;

  return (
    <TiltCard
      options={{
        maxTilt: 10,
        perspective: 900,
        glareOpacity: 0.1,
        scale: 1.02,
      }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 flex flex-col transition-colors duration-300 group relative h-full"
    >
      {/* Image Container with Hover zoom */}
      <div className="relative h-52 overflow-hidden bg-slate-950 flex items-center justify-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        />

        {/* Quick Link Badge */}
        <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-350 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 backdrop-blur-md">
          <Sparkles size={16} className="text-cyan-400" />
        </div>

        <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-850 px-3 py-1 rounded-lg text-xs font-semibold text-cyan-400 capitalize backdrop-blur-md">
          {category}
        </div>
      </div>

      {/* Gradient accent bar separating image and info */}
      <div className={`h-[2px] bg-gradient-to-r ${gradient}`} />

      {/* Info Card */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Code2 size={18} className="text-cyan-400" />
            <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            {description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[10px] bg-slate-950 px-2.5 py-1.5 rounded-lg text-gray-400 uppercase tracking-widest font-semibold border border-slate-900 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action buttons */}
      <div className="flex items-center border-t border-slate-850/80 bg-slate-950/50">
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 py-4 text-sm font-semibold flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-900/60 transition-all duration-300"
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
        <div className="h-10 w-[1px] bg-slate-850/80" />
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 py-4 text-sm font-semibold flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-900/60 transition-all duration-300"
        >
          <Github size={15} />
          Source Code
        </a>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;
