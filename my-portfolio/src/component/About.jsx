import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Layers,
  Palette,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react";
import { TiltCard } from "./useTilt";

// Count-up helper component
const CountUp = ({ to, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const services = [
    {
      icon: <Cpu size={26} />,
      title: "Generative AI & MCP Agents",
      desc: "Building autonomous LLM workflows, Model Context Protocol (MCP) tool integrations, and agentic task execution using LangChain & Groq.",
      color:
        "border-cyan-500/20 hover:border-cyan-400 group-hover:text-cyan-400",
    },
    {
      icon: <Sparkles size={26} />,
      title: "RAG & Vector Search",
      desc: "Architecting high-accuracy retrieval pipelines with Amazon Titan & Bedrock embeddings, Pinecone vector indexing, and structural AST chunking.",
      color:
        "border-purple-500/20 hover:border-purple-400 group-hover:text-purple-400",
    },
    {
      icon: <Server size={26} />,
      title: "Backend & Event-Driven APIs",
      desc: "Designing resilient RESTful APIs with Node.js/Express, Inngest background queues, Redis caching, and robust Better-Auth/OAuth2 security.",
      color:
        "border-emerald-500/20 hover:border-emerald-400 group-hover:text-emerald-450",
    },
    {
      icon: <Code2 size={26} />,
      title: "Modern Frontend & Next.js",
      desc: "Developing fast, reactive user interfaces with React.js, Next.js, TypeScript, TanStack Query, and Tailwind CSS with smooth animations.",
      color:
        "border-blue-500/20 hover:border-blue-400 group-hover:text-blue-400",
    },
    {
      icon: <Database size={26} />,
      title: "Databases & ORM Modeling",
      desc: "Structuring relational and NoSQL schemas using PostgreSQL with Prisma ORM and MongoDB with Mongoose, backed by Redis token caching.",
      color:
        "border-pink-500/20 hover:border-pink-400 group-hover:text-pink-400",
    },
    {
      icon: <Zap size={26} />,
      title: "Cloud, DevOps & Scalability",
      desc: "Containerizing services with Docker, provisioning AWS cloud infrastructure (EC2, S3, RDS), and enforcing strict runtime types with Zod.",
      color:
        "border-amber-500/20 hover:border-amber-400 group-hover:text-amber-400",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen text-white py-24 relative overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest"
          >
            <Sparkles size={16} />
            Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-black text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2" />
        </div>

        {/* Content Paragraphs & Image Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-lg leading-relaxed font-light"
          >
            <p>
              Hi, I'm{" "}
              <span className="text-white font-semibold">Pankaj Patel</span>, a{" "}
              <span className="text-white font-semibold border-b border-cyan-500/50">
                Full Stack AI Developer
              </span>{" "}
              passionate about building intelligent, production-ready web
              applications. I specialize in combining modern AI workflows (RAG,
              agentic systems) with reliable backend architectures and polished
              user interfaces.
            </p>
            <p>
              My core stack centers around{" "}
              <span className="text-cyan-400 font-semibold">React.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">Node.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">Express.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">
                PostgreSQL (Prisma)
              </span>
              , and <span className="text-cyan-400 font-semibold">MongoDB</span>
              , paired with AI tools like{" "}
              <span className="text-cyan-400 font-semibold">LangChain</span>,{" "}
              <span className="text-cyan-400 font-semibold">
                Amazon Bedrock
              </span>
              ,{" "}
              <span className="text-cyan-400 font-semibold">
                Model Context Protocol (MCP)
              </span>
              , and{" "}
              <span className="text-cyan-400 font-semibold">LangGraph</span>.
            </p>
            <p>
              I prioritize clean code, responsive design, asynchronous queues (
              <span className="text-cyan-400 font-semibold">
                BullMQ, Inngest
              </span>
              ), and caching layers (
              <span className="text-cyan-400 font-semibold">Redis</span>) to
              deliver high-performance applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Stat Block 1 */}
            <TiltCard
              options={{
                maxTilt: 20,
                perspective: 600,
                glareOpacity: 0.1,
                scale: 1.05,
              }}
              className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-center shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-colors" />
              <h4
                className="text-4xl font-display font-extrabold text-cyan-400 mb-2"
                style={{ transform: "translateZ(20px)" }}
              >
                <CountUp to={12} suffix="+" />
              </h4>
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-widest"
                style={{ transform: "translateZ(10px)" }}
              >
                Projects Completed
              </p>
            </TiltCard>

            {/* Stat Block 2 */}
            <TiltCard
              options={{
                maxTilt: 20,
                perspective: 600,
                glareOpacity: 0.1,
                scale: 1.05,
              }}
              className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-center shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/15 transition-colors" />
              <h4
                className="text-4xl font-display font-extrabold text-purple-400 mb-2"
                style={{ transform: "translateZ(20px)" }}
              >
                <CountUp to={2} suffix="+" />
              </h4>
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-widest"
                style={{ transform: "translateZ(10px)" }}
              >
                Years Experience
              </p>
            </TiltCard>

            {/* Stat Block 3 */}
            <TiltCard
              options={{
                maxTilt: 20,
                perspective: 600,
                glareOpacity: 0.1,
                scale: 1.05,
              }}
              className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-center shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-colors" />
              <h4
                className="text-4xl font-display font-extrabold text-emerald-400 mb-2"
                style={{ transform: "translateZ(20px)" }}
              >
                <CountUp to={200} suffix="+" />
              </h4>
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-widest"
                style={{ transform: "translateZ(10px)" }}
              >
                GitHub Commits
              </p>
            </TiltCard>

            {/* Stat Block 4 */}
            <TiltCard
              options={{
                maxTilt: 20,
                perspective: 600,
                glareOpacity: 0.1,
                scale: 1.05,
              }}
              className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-center shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/15 transition-colors" />
              <h4
                className="text-4xl font-display font-extrabold text-amber-400 mb-2"
                style={{ transform: "translateZ(20px)" }}
              >
                24/7
              </h4>
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-widest"
                style={{ transform: "translateZ(10px)" }}
              >
                Active & Available
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Cpu className="text-cyan-400 w-5 h-5 animate-pulse" />
            <h3 className="text-2xl font-bold font-display tracking-wide uppercase text-gray-300">
              Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <TiltCard
                  options={{
                    maxTilt: 14,
                    perspective: 800,
                    glareOpacity: 0.1,
                    scale: 1.03,
                  }}
                  className={`bg-slate-900/40 backdrop-blur-sm p-7 rounded-2xl border ${service.color} transition-colors duration-300 shadow-lg flex flex-col group h-full`}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-slate-800 shadow-inner"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {service.icon}
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="text-gray-400 text-sm leading-relaxed font-light"
                    style={{ transform: "translateZ(8px)" }}
                  >
                    {service.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
