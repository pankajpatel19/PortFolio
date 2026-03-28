import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "WandarLust",
      description:
        "Built a full-stack travel booking platform with user authentication, property listings, and booking workflows",
      tech: ["ejs", "Tailwind", "Bootstrap", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/pankajpatel19/WandarLust",
      demo: "https://wandar-lust-kappa.vercel.app",
      gradient: "from-blue-500 to-cyan-500",
      image: "wandarLust.webp",
    },
    {
      id: 2,
      title: "Home Appliance Service Store",
      description:
        "Full-stack application for appliance service booking and management. Complete workflow with user-friendly interface.",
      tech: [
        "React",
        "Tailwind",
        "Node",
        "lucide-react",
        "Express",
        "JWT",
        "leaflet",
        "Redis",
        "Rest API",
      ],
      github: "https://github.com/pankajpatel19/CoolServices",
      demo: "https://cool-services.vercel.app/",
      gradient: "from-green-500 to-emerald-500",
      image: "/Logo2.png",
    },
    {
      id: 3,
      title: "Tenantify-Multi-Tenant-SaaS-Backend",
      description:
        "A production-ready multi-tenant SaaS backend built with Node.js, Express, MongoDB, and Redis, following real-world backend architecture and best practices.",
      tech: [
        "node.js",
        "Express.js",
        "Redis",
        "MongoDB",
        "Bullmq",
        "Nodemailer",
      ],
      github:
        "https://github.com/pankajpatel19/Tenantify-Multi-Tenant-SaaS-Backend",
      demo: "https://dev-resources-demo.vercel.app",
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 w-full min-h-screen pt-20 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500 text-white">
            Projects
          </p>
          <p className="py-6 text-gray-400 text-lg">
            Featured projects I've built from scratch with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map(
            (
              { id, title, description, tech, github, demo, gradient, image },
              index,
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700 hover:border-cyan-500 flex flex-col transition-all duration-300 group relative"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  {/* Sparkle Icon */}
                  <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/50 p-2 rounded-full backdrop-blur-sm">
                    <Sparkles size={20} />
                  </div>
                </div>

                {/* Gradient Top Bar */}
                <div className={`h-1 bg-gradient-to-r ${gradient}`}></div>

                {/* Project Info */}
                <div className="p-6 flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}
                    >
                      <Code2 className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-slate-700 px-3 py-1.5 rounded-full text-cyan-400 uppercase tracking-wider font-semibold border border-slate-600 hover:border-cyan-500 transition-all duration-300"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center border-t border-slate-700 bg-slate-900/50">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 duration-200 hover:bg-slate-800 text-center flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 font-medium transition-all"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                  <div className="h-12 w-[1px] bg-slate-700"></div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 duration-200 hover:bg-slate-800 text-center flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 font-medium transition-all"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </motion.div>
            ),
          )}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 text-lg">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/pankajpatel19"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Github size={24} />
            View All Projects on GitHub
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
