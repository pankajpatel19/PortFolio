import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FolderOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const initialLimit = 3;

  const categories = ["All", "Full Stack", "Backend"];

  // Reset showAll when category changes to prevent weird pagination states
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setShowAll(false);
  };

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      // Wait for exit transition to finish, then scroll smoothly back to projects section
      setTimeout(() => {
        const element = document.getElementById("projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
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
    <section
      id="projects"
      className="w-full min-h-screen py-24 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full z-10 relative">
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest"
          >
            <Sparkles size={16} />
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-black text-white"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                filter === cat
                  ? "border-cyan-500 text-white bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                  : "border-slate-800 text-gray-400 bg-slate-900/40 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeProjectCategoryBorder"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  delay:
                    showAll && index >= initialLimit
                      ? (index - initialLimit) * 0.12
                      : 0,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {filteredProjects.length > initialLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              onClick={handleToggleShowAll}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-slate-800 hover:border-cyan-500/40 bg-slate-900/50 hover:bg-slate-900 text-cyan-400 text-sm font-semibold rounded-xl flex items-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* GitHub stats link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Interested in more repositories?
          </p>
          <motion.a
            href="https://github.com/pankajpatel19"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/40 text-gray-300 text-sm font-semibold hover:border-slate-700 hover:text-white shadow-md transition-all duration-300 cursor-pointer"
          >
            <FolderOpen size={16} className="text-cyan-400" />
            Explore GitHub Repositories
            <ExternalLink size={14} className="text-gray-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
