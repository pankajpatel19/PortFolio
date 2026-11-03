import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Layers,
  Zap,
  Cpu,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Cloud,
} from "lucide-react";
import { TiltCard } from "./useTilt";
import SpotlightCard from "./animations/SpotlightCard";
import BorderBeam from "./animations/BorderBeam";

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
      icon: <Server size={22} />,
      title: "Backend & RESTful APIs",
      desc: "Architecting robust backend services using Node.js and Express.js with JWT authentication, RBAC, REST API design, and Better-Auth security.",
    },
    {
      icon: <Cpu size={22} />,
      title: "AI / ML & MCP Agents",
      desc: "Building context-aware RAG pipelines, Pinecone vector indexing, Amazon Bedrock / Titan embeddings, and Model Context Protocol (MCP) agents.",
    },
    {
      icon: <Database size={22} />,
      title: "Databases & ORM Modeling",
      desc: "Structuring production relational and NoSQL database schemas in PostgreSQL (Prisma ORM), MongoDB (Mongoose), and MySQL.",
    },
    {
      icon: <Zap size={22} />,
      title: "Caching & Async Queues",
      desc: "Engineering high-throughput asynchronous job processing with Inngest, BullMQ queues, and low-latency Redis caching layers.",
    },
    {
      icon: <Code2 size={22} />,
      title: "Frontend & MERN Applications",
      desc: "Developing fast, responsive interfaces using React.js, Next.js, TanStack Query, TypeScript, and utility-first Tailwind CSS.",
    },
    {
      icon: <Cloud size={22} />,
      title: "DevOps, Tools & Cloud",
      desc: "Containerizing services with Docker, enforcing runtime safety with Zod, API validation with Postman, Git workflows, and learning AWS (EC2, S3, RDS).",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen text-slate-100 py-24 relative overflow-hidden bg-black border-t border-zinc-900"
    >
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center w-full relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
            02 // BACKGROUND & ENGINEERING PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-white rounded-full mt-1" />
        </div>

        {/* Narrative & Experience Spotlight Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-2xl p-7 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-light shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-white" />
              Full Stack Developer · Backend-Focused · MERN Stack
            </div>
            <p>
              Hi, I'm <span className="text-white font-semibold">Pankaj Patel</span>, a{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in the MERN stack, robust REST API design, and scalable backend systems.
              With professional experience at{" "}
              <span className="text-white font-semibold underline underline-offset-4 decoration-zinc-600">
                Infinite Soft Tech (MERN Stack)
              </span>
              , I engineer production-grade web systems—developing reusable React.js components, building Express.js REST APIs with CRUD operations, designing MongoDB/MySQL schemas, and implementing JWT authentication.
            </p>
            <p>
              My core technical stack includes{" "}
              <span className="text-white font-semibold">Node.js</span>,{" "}
              <span className="text-white font-semibold">Express.js</span>,{" "}
              <span className="text-white font-semibold">React.js</span>,{" "}
              <span className="text-white font-semibold">MongoDB</span>, and{" "}
              <span className="text-white font-semibold">PostgreSQL (Prisma ORM)</span>, with caching and job queues powered by{" "}
              <span className="text-white font-semibold">Redis, BullMQ & Inngest</span>. I also build production RAG and agentic AI systems using{" "}
              <span className="text-white font-semibold">LangChain, Amazon Bedrock, Pinecone</span>, and{" "}
              <span className="text-white font-semibold">Model Context Protocol (MCP)</span>.
            </p>
            <p>
              Completed my <span className="text-white font-semibold">Master of Computer Applications (MCA)</span> from{" "}
              <span className="text-white font-semibold">L.D. College of Engineering, Ahmedabad</span>{" "}
              (CGPA: 8.41, ranked in Top 5 students in Semester 2), backed by a strong academic foundation in DSA, DBMS, Operating Systems, and Software Engineering.
            </p>
          </motion.div>

          {/* Right Column: Experience Spotlight & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Infinite Soft Tech Experience Card with Luminous Border Beam */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg relative overflow-hidden"
            >
              {/* Magic UI Border Beam in pure monochrome */}
              <BorderBeam size={160} duration={8} colorFrom="#ffffff" colorTo="#71717a" />

              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  <Briefcase size={14} />
                  Work Experience
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  June 2026 – Sept 2026
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-0.5">
                Infinite Soft Tech
              </h4>
              <p className="text-sm font-medium text-zinc-300 mb-2">
                Full Stack Developer (MERN Stack)
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Developed reusable React components, created Express CRUD APIs, modeled MongoDB/MySQL schemas, integrated JWT authentication, and validated endpoints with Postman.
              </p>
            </motion.div>

            {/* 4 Stat Cards with 3D Tilt */}
            <div className="grid grid-cols-2 gap-3.5">
              <TiltCard
                options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
              >
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                  <CountUp to={12} suffix="+" />
                </h4>
                <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Projects Built
                </p>
              </TiltCard>

              <TiltCard
                options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
              >
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                  8.41
                </h4>
                <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  MCA CGPA (Top 5)
                </p>
              </TiltCard>

              <TiltCard
                options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
              >
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                  <CountUp to={500} suffix="+" />
                </h4>
                <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Git Commits
                </p>
              </TiltCard>

              <TiltCard
                options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
              >
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                  MERN
                </h4>
                <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Core Specialization
                </p>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* 6 Core Competencies with Interactive Specular Spotlight Cards! */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
              Core Competencies & Technical Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(255, 255, 255, 0.08)"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  className="h-full flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
