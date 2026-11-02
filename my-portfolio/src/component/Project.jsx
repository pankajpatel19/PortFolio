import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";import { ExternalLink, FolderOpen, ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const initialLimit = 3;

  const categories = ["All", "AI & Full Stack", "Full Stack", "Backend"];

  const handleFilterChange = (cat) => {
    setFilter(cat);
    setShowAll(false);
  };

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      setShowAll(true);
    }
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialLimit);

  return (
    <section id="projects" className="w-full py-24 bg-[#07080b] text-white relative border-t border-zinc-900">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-10"
        >
          <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
            05 // FEATURED WORK // PRODUCTION ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-white rounded-full mt-1" />
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                filter === cat
                  ? "border-white text-black bg-white"
                  : "border-zinc-800 text-zinc-400 bg-zinc-900/40 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: showAll && index >= initialLimit ? (index - initialLimit) * 0.08 : 0 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {filteredProjects.length > initialLimit && (
          <div className="flex justify-center mb-12">
            <button
              onClick={handleToggleShowAll}
              className="px-5 py-2.5 border border-slate-800 hover:border-slate-700 bg-[#0b0c13] text-slate-300 text-xs font-mono font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  View More Projects ({filteredProjects.length - initialLimit}) <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}

        {/* GitHub stats link */}
        <div className="text-center">
          <p className="text-slate-500 text-xs font-mono mb-3">
            EXPLORE COMPLETE OPEN SOURCE ARCHIVES
          </p>
          <a
            href="https://github.com/pankajpatel19"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-[#0b0c13] text-slate-300 text-xs font-mono font-semibold hover:border-slate-700 hover:text-white transition-colors"
          >
            <FolderOpen size={14} className="text-zinc-400" />
            github.com/pankajpatel19
            <ExternalLink size={12} className="text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
