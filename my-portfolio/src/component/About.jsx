import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Layers, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend",
      desc: "React.js, Next.js, Tailwind CSS",
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      desc: "Node.js, Express.js, REST APIs",
    },
    {
      icon: <Database size={32} />,
      title: "Database",
      desc: "MongoDB, Mongoose, Redis",
    },
    {
      icon: <Layers size={32} />,
      title: "Full Stack",
      desc: "End-to-end development",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX",
      desc: "Responsive & Modern Design",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      desc: "Optimization & Scalability",
    },
  ];

  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </p>
          <p className="text-gray-400 mt-4">
            Get to know more about my journey
          </p>
        </motion.div>

        {/* Content Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mt-10 text-gray-300 leading-relaxed">
            Hi! I'm a passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Full Stack MERN Developer
            </span>{" "}
            who loves building dynamic and scalable web applications. With
            expertise in <span className="text-cyan-400">MongoDB</span>,{" "}
            <span className="text-cyan-400">Express.js</span>,{" "}
            <span className="text-cyan-400">React.js</span>, and{" "}
            <span className="text-cyan-400">Node.js</span>, I create seamless
            user experiences from frontend to backend.
          </p>

          <p className="text-xl mt-6 text-gray-300 leading-relaxed">
            My journey in web development started with a curiosity to understand
            how modern applications work. Today, I specialize in crafting{" "}
            <span className="text-cyan-400 font-semibold">
              responsive interfaces
            </span>
            , building{" "}
            <span className="text-cyan-400 font-semibold">robust APIs</span>,
            and designing{" "}
            <span className="text-cyan-400 font-semibold">
              efficient database architectures
            </span>
            . I'm always excited to take on challenging projects that push my
            skills further.
          </p>

          <p className="text-xl mt-6 text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. I believe in writing clean, maintainable code
            and following best practices to deliver{" "}
            <span className="text-cyan-400 font-semibold">
              high-quality solutions
            </span>{" "}
            that make a real impact.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-cyan-400 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: "7+", label: "Projects Completed" },
            { num: "0", label: "Looking for job" },
            { num: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.num}
              </h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
