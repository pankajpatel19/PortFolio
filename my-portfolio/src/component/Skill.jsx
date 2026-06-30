import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./useTilt";
import FloatingGeometry from "./FloatingGeometry";
import {
  Code2,
  Server,
  Database,
  Coffee,
  Layers,
  Wind,
  Table,
  GitBranch,
  Zap,
  Settings,
  Share2,
  Code,
  Blocks,
  Terminal,
  Cpu,
  Sparkles,
} from "lucide-react";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend & Database", "Tools & Core"];

  const skills = [
    {
      id: 1,
      title: "React",
      category: "Frontend",
      level: "90%",
      icon: <Code2 size={36} />,
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/10",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      id: 2,
      title: "Node.js",
      category: "Backend & Database",
      level: "85%",
      icon: <Server size={36} />,
      color: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400 shadow-green-500/10",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: 3,
      title: "MongoDB",
      category: "Backend & Database",
      level: "85%",
      icon: <Database size={36} />,
      color: "from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10",
      glowColor: "rgba(52, 211, 153, 0.4)",
    },
    {
      id: 4,
      title: "Java (DSA)",
      category: "Tools & Core",
      level: "80%",
      icon: <Coffee size={36} />,
      color: "from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400 shadow-orange-500/10",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      id: 5,
      title: "Next.js",
      category: "Frontend",
      level: "80%",
      icon: <Layers size={36} />,
      color: "from-gray-300/20 to-gray-500/10 border-gray-500/30 text-gray-300 shadow-gray-500/10",
      glowColor: "rgba(156, 163, 175, 0.4)",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      category: "Frontend",
      level: "95%",
      icon: <Wind size={36} />,
      color: "from-cyan-500/20 to-sky-500/10 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10",
      glowColor: "rgba(34, 211, 238, 0.4)",
    },
    {
      id: 7,
      title: "SQL",
      category: "Backend & Database",
      level: "75%",
      icon: <Table size={36} />,
      color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-400 shadow-yellow-500/10",
      glowColor: "rgba(234, 179, 8, 0.4)",
    },
    {
      id: 8,
      title: "GitHub",
      category: "Tools & Core",
      level: "88%",
      icon: <GitBranch size={36} />,
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400 shadow-purple-500/10",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      id: 9,
      title: "Tanstack Query",
      category: "Frontend",
      level: "82%",
      icon: <Code size={36} />,
      color: "from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-450 shadow-rose-500/10",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
    {
      id: 10,
      title: "PM2 / PM3",
      category: "Tools & Core",
      level: "75%",
      icon: <Settings size={36} />,
      color: "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-400 shadow-violet-500/10",
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      id: 11,
      title: "NGINX",
      category: "Tools & Core",
      level: "70%",
      icon: <Zap size={36} />,
      color: "from-green-600/20 to-emerald-600/10 border-green-650/30 text-green-500 shadow-green-600/10",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      id: 12,
      title: "REST APIs",
      category: "Backend & Database",
      level: "92%",
      icon: <Blocks size={36} />,
      color: "from-indigo-500/20 to-blue-500/10 border-indigo-500/30 text-indigo-400 shadow-indigo-500/10",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
    {
      id: 13,
      title: "RabbitMQ",
      category: "Tools & Core",
      level: "65%",
      icon: <Share2 size={36} />,
      color: "from-orange-600/20 to-red-500/10 border-orange-600/30 text-orange-500 shadow-orange-600/10",
      glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
      id: 14,
      title: "Python",
      category: "Tools & Core",
      level: "70%",
      icon: <Terminal size={36} />,
      color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400 shadow-sky-500/10",
      glowColor: "rgba(14, 165, 233, 0.4)",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full min-h-screen py-24 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[8%] w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-[5%] w-[180px] h-[180px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* 3D Floating decorative shapes */}
      <motion.div
        className="absolute top-[10%] right-[4%] pointer-events-none"
        animate={{ rotate: [0, 360], y: [0, -20, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 16, ease: "linear" }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
      >
        <div style={{ width: 60, height: 60, border: "1.5px solid rgba(34,211,238,0.2)", transform: "perspective(150px) rotateX(45deg) rotateY(45deg)", boxShadow: "0 0 15px rgba(34,211,238,0.15), inset 0 0 10px rgba(34,211,238,0.05)", borderRadius: 4 }} />
      </motion.div>
      <motion.div
        className="absolute bottom-[12%] left-[3%] pointer-events-none"
        animate={{ rotate: [0, -360], y: [0, 15, 0] }}
        transition={{ rotate: { repeat: Infinity, duration: 22, ease: "linear" }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
      >
        <div style={{ width: 45, height: 45, border: "1.5px solid rgba(168,85,247,0.25)", transform: "perspective(120px) rotateX(60deg) rotateY(30deg)", boxShadow: "0 0 12px rgba(168,85,247,0.2)", borderRadius: 4 }} />
      </motion.div>
      <motion.div
        className="absolute top-[55%] right-[2%] pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        <div style={{ width: 80, height: 80, border: "1.5px dashed rgba(99,102,241,0.15)", borderRadius: "50%", transform: "perspective(100px) rotateX(70deg)" }} />
      </motion.div>

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center w-full h-full text-white">
        
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
            Abilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-black text-white"
          >
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                activeCategory === category
                  ? "border-cyan-500 text-white bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                  : "border-slate-800 text-gray-400 bg-slate-900/40 hover:text-white hover:border-slate-700"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeSkillCategoryBorder"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                key={skill.id}
              >
                <TiltCard
                  options={{ maxTilt: 18, perspective: 700, glareOpacity: 0.12, scale: 1.04 }}
                  className={`p-6 rounded-2xl border bg-slate-900/45 backdrop-blur-sm shadow-md transition-shadow duration-300 relative overflow-hidden group flex flex-col justify-between h-full ${skill.color}`}
                  style={{ boxShadow: `0 0 0 ${skill.glowColor}` }}
                >
                  {/* Micro glow orb inside card */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-lg group-hover:scale-[2] transition-transform duration-700 pointer-events-none" />

                  {/* Depth accent — lifted z layer */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 70% 20%, ${skill.glowColor}, transparent 65%)` }}
                  />

                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                        {skill.category.split(" ")[0]}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Skill Level bar */}
                  <div className="mt-4" style={{ transform: "translateZ(10px)" }}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-gray-500">Proficiency</span>
                      <span className="text-xs font-bold text-cyan-400">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <TiltCard
          options={{ maxTilt: 6, perspective: 1200, glareOpacity: 0.07, scale: 1.01 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group"
        >
          {/* Subtle decoration lines */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-2xl rounded-full" />
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 animate-pulse">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Continuous Knowledge Acquisition
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                I am regularly adding new layers to my skill set. Currently exploring deployment architectures, Docker containers, and CI/CD pipelines.
              </p>
            </div>
          </div>

          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-300 shrink-0 cursor-pointer"
          >
            Check Project Implementation
          </motion.a>
        </TiltCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Skill;
