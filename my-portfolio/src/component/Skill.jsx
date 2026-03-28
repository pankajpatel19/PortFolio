import React from "react";
import { motion } from "framer-motion";
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
  Code2Icon,
} from "lucide-react";

const Skill = () => {
  const techs = [
    {
      id: 1,
      title: "React",
      style: "shadow-blue-500",
      icon: <Code2 size={40} />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Node.js",
      style: "shadow-green-500",
      icon: <Server size={40} />,
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      title: "MongoDB",
      style: "shadow-green-400",
      icon: <Database size={40} />,
      color: "from-green-300 to-green-500",
    },
    {
      id: 4,
      title: "Java (DSA)",
      style: "shadow-orange-500",
      icon: <Coffee size={40} />,
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      title: "Next.js",
      style: "shadow-white",
      icon: <Layers size={40} />,
      color: "from-gray-300 to-gray-500",
    },
    {
      id: 6,
      title: "Tailwind",
      style: "shadow-cyan-400",
      icon: <Wind size={40} />,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: 7,
      title: "SQL",
      style: "shadow-yellow-500",
      icon: <Table size={40} />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 8,
      title: "GitHub",
      style: "shadow-gray-400",
      icon: <GitBranch size={40} />,
      color: "from-gray-400 to-gray-600",
    },
    {
      id: 9,
      title: "Tanstack Query",
      style: "shadow-gray-400",
      icon: <Code2Icon size={40} />,
      color: "from-gray-400 to-gray-600",
    },
  ];

  const additionalTools = [
    { name: "NGINX", icon: <Zap size={18} /> },
    { name: "PM2", icon: <Settings size={18} /> },
    { name: "RabbitMQ", icon: <Share2 size={18} /> },
    { name: "REST APIs", icon: <Code size={18} /> },
    { name: "Data Structures", icon: <Blocks size={18} /> },
    { name: "Python", icon: <Terminal size={18} /> },
  ];

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl sm:text-5xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-gray-400 text-lg">
            Technologies I've worked with and used to build amazing projects
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, title, style, icon, color }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`shadow-md duration-500 py-8 rounded-xl ${style} bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500 relative overflow-hidden group`}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-cyan-400 flex justify-center mb-4"
              >
                {icon}
              </motion.div>

              {/* Title */}
              <p className="font-bold text-lg text-white">{title}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Other Tools & Concepts
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {additionalTools.map((tool, index) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="bg-slate-700 px-5 py-3 rounded-full text-sm text-cyan-400 border border-slate-600 hover:border-cyan-500 hover:bg-slate-600 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg cursor-pointer"
              >
                {tool.icon}
                {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            Always learning and exploring new technologies
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
