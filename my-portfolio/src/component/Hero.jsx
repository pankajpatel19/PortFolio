import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Code2,
  Database,
  Layers,
  Zap,
} from "lucide-react";

const Hero = () => {
  const techStack = [
    { icon: <Code2 size={24} />, name: "React" },
    { icon: <Database size={24} />, name: "MongoDB" },
    { icon: <Layers size={24} />, name: "Node.js" },
    { icon: <Zap size={24} />, name: "Express" },
  ];

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row gap-8">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full mt-5 md:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-cyan-400 text-xl font-semibold mb-2">
              Hi, I'm Pankaj 👋
            </h3>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-4"
          >
            MERN Stack
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 py-4 max-w-md text-lg leading-relaxed"
          >
            Building scalable web applications with{" "}
            <span className="text-cyan-400 font-semibold">MongoDB</span>,{" "}
            <span className="text-cyan-400 font-semibold">Express</span>,{" "}
            <span className="text-cyan-400 font-semibold">React</span>, and{" "}
            <span className="text-cyan-400 font-semibold">Node.js</span>.
            Focused on performance-driven projects and modern UI/UX design.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 mb-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-pointer shadow-lg"
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-4 flex-wrap"
          >
            {/* View Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View Projects
              <span className="ml-2">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="/Pankaj_Patel_FullStack_Developer_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-cyan-400 border-2 border-cyan-400 w-fit px-6 py-3 flex items-center rounded-lg hover:bg-cyan-400 hover:text-slate-900 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

            <img
              src="/profilemain.png"
              alt="Pankaj - MERN Stack Developer"
              className="relative rounded-2xl w-300 max-w-sm border-4 border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-2xl"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap"
            >
              🚀 Available for Work
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
