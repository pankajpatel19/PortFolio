import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import {
  ArrowRight,
  Download,
  Code2,
  Database,
  Layers,
  Zap,
  Eye,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Wind,
  GitBranch,
  FileCode,
  Box,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Cloud,
} from "lucide-react";
import TypingEffect from "./TypingEffect";
import ResumeModal from "./ResumeModal";
import Meteors from "./animations/Meteors";
import BorderBeam from "./animations/BorderBeam";
import MagneticButton from "./animations/MagneticButton";
import SpotlightCard from "./animations/SpotlightCard";
import { TiltCard } from "./useTilt";

// Animated count-up number that triggers when scrolled into view
const CountUp = ({ to, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// 3D mouse-tracking tilt for the profile card
const ProfileCard3D = ({ children }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 10);
    rotateY.set(dx * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative cursor-default"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSnippetTab, setActiveSnippetTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippets = [
    {
      name: "ragPipeline.ts",
      project: "Codebase RAG Assistant",
      code: `// Amazon Titan v2 1024-dim Vector Search + Pinecone
export async function queryCodebase(query: string, repoId: string) {
  const embedding = await bedrock.invokeTitanEmbedding(query);
  const matches = await pineconeIndex.query({
    vector: embedding,
    topK: 6,
    filter: { repoId }
  });
  return synthesizeContext(matches, query);
}`,
    },
    {
      name: "restController.ts",
      project: "Infinite Soft Tech (MERN Stack)",
      code: `// REST API Controller with JWT Auth & MongoDB
export const createResource = async (req: Request, res: Response) => {
  const { title, payload } = req.body;
  const newRecord = await ResourceModel.create({
    title,
    payload,
    author: req.user.id
  });
  return res.status(201).json({ success: true, data: newRecord });
};`,
    },
    {
      name: "mcpHandler.ts",
      project: "AI Gmail Assistant (MCP)",
      code: `// Model Context Protocol tool execution with Zod
server.tool("search_inbox", { query: z.string() }, async ({ query }) => {
  const results = await gmail.users.messages.list({ q: query });
  return formatConversationalMemory(results);
});`,
    },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippets[activeSnippetTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    { icon: <Code2 size={18} />, name: "React.js", desc: "MERN Frontend" },
    { icon: <Layers size={18} />, name: "Node.js", desc: "Backend Runtime" },
    { icon: <Zap size={18} />, name: "Express.js", desc: "REST APIs" },
    { icon: <Database size={18} />, name: "MongoDB", desc: "NoSQL Database" },
    { icon: <FileCode size={18} />, name: "PostgreSQL", desc: "Prisma ORM" },
    { icon: <Box size={18} />, name: "Next.js", desc: "React Framework" },
    { icon: <FileCode size={18} />, name: "TypeScript", desc: "Type Safety" },
    {
      icon: <GitBranch size={18} />,
      name: "Git / GitHub",
      desc: "Version Control",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/pankajpatel19",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/pankajpatel19",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com/pankajpatel19",
      label: "Twitter",
    },
  ];

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
    <div className="w-full relative bg-black bg-grid-subtle overflow-x-clip text-zinc-100">
      {/* Meteor Shower background effect */}
      <Meteors number={16} />

      {/* Top-center light beam — Linear/Vercel style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-white/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[160px] bg-white/[0.07] rounded-full blur-[60px] pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Master Container: Houses Hero + About with Sticky Right Column */}
      <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ================= LEFT COLUMN: HERO + ABOUT (Scrolls smoothly) ================= */}
          <div className="w-full lg:col-span-7 flex flex-col gap-24 text-left">
            {/* ----------------- SECTION 1: HOME (HERO) ----------------- */}
            <section id="home" className="scroll-mt-24">
              {/* Mobile-Only Cutout Photo: Positioned at the very top on mobile view */}
              <div className="lg:hidden w-full flex justify-center mb-6 -mt-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-center justify-center"
                >
                  <img
                    src="/profile_cutout.png"
                    alt="Pankaj Patel - Full Stack Developer"
                    className="w-[220px] sm:w-[260px] max-h-[310px] object-contain select-none"
                    style={{
                      filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.95))",
                    }}
                  />
                </motion.div>
              </div>

              {/* Engineering Monospace Label */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
                  PANKAJ PATEL // FULL STACK DEVELOPER
                </span>
                <span className="text-zinc-600 font-mono text-[11px]">•</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                  <MapPin size={11} className="text-zinc-500" />
                  Borivali, Mumbai · Ahmedabad
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-[1.12] mb-5 tracking-tight">
                Full Stack Developer <br />
                <span className="text-zinc-400">
                  <TypingEffect
                    texts={[
                      "Backend-Focused & MERN Stack",
                      "REST API & Database Design",
                      "RAG Pipelines & Bedrock",
                      "Model Context Protocol (MCP)",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetween={2400}
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-300 max-w-xl text-base sm:text-lg leading-relaxed mb-8 font-light"
              >
                Specialized in building scalable web architectures and robust
                backend services using{" "}
                <span className="text-white font-medium">
                  Node.js, Express.js, React.js, and MongoDB / PostgreSQL (Prisma)
                </span>
                . Experienced in RAG pipelines with{" "}
                <span className="text-white font-medium">
                  Amazon Bedrock & Pinecone
                </span>
                . Completed{" "}
                <span className="text-white font-medium">
                  Master of Computer Applications (MCA)
                </span>{" "}
                with hands-on engineering experience at{" "}
                <span className="text-white font-medium underline underline-offset-4 decoration-zinc-500">
                  Infinite Soft Tech (MERN Stack)
                </span>
                .
              </motion.p>

              {/* CTA Buttons with Magnetic Spring Effect */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3.5 items-center mb-8"
              >
                <MagneticButton strength={0.3}>
                  <motion.a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group text-slate-950 px-6 py-3 flex items-center rounded-xl bg-white hover:bg-slate-100 font-semibold shadow-md transition-all text-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <span className="relative z-10 flex items-center">
                      Explore Projects
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <motion.a
                    href="/Pankaj_Patel_Resume.pdf"
                    download
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-slate-300 hover:text-white px-5 py-3 flex items-center rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <motion.button
                    onClick={() => setResumeOpen(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-zinc-300 hover:text-white px-5 py-3 flex items-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-sm cursor-pointer"
                  >
                    <Eye className="w-4 h-4 mr-2 text-zinc-300" />
                    View Resume
                  </motion.button>
                </MagneticButton>
              </motion.div>

              {/* Social Links with Magnetic Pull */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                  Connect:
                </span>
                {socialLinks.map((social) => (
                  <MagneticButton key={social.label} strength={0.4}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors block"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>

              {/* Core Tech Stack */}
              <div className="flex flex-col gap-2.5">
                <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-wider">
                  Core Tech Stack (MERN & Cloud)
                </p>
                <div className="flex gap-2 flex-wrap">
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -2, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm cursor-default"
                      title={tech.desc}
                    >
                      <span className="text-zinc-400">{tech.icon}</span>
                      <span className="text-xs font-medium text-zinc-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Code Engine (Visible only on mobile/tablet) */}
              <div className="lg:hidden mt-8">
                <div className="relative w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-xl text-left">
                  <BorderBeam size={180} duration={7} colorFrom="#ffffff" colorTo="#52525b" />
                  <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block" />
                    </div>
                    <div className="flex gap-1 overflow-x-auto text-[10px] font-mono">
                      {snippets.map((s, idx) => (
                        <button
                          key={s.name}
                          onClick={() => setActiveSnippetTab(idx)}
                          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                            activeSnippetTab === idx
                              ? "bg-white text-black font-semibold"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto bg-black/95">
                    <p className="text-[10px] text-zinc-400 mb-1 font-semibold">
                      // Source: {snippets[activeSnippetTab].project}
                    </p>
                    <pre className="text-zinc-300 whitespace-pre">
                      <code>{snippets[activeSnippetTab].code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* ----------------- SECTION 2: ABOUT ME ----------------- */}
            <section id="about" className="pt-16 border-t border-zinc-900 scroll-mt-24 space-y-8">
              {/* Section Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
                  02 // BACKGROUND & ENGINEERING PHILOSOPHY
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                  About Me
                </h2>
                <div className="w-12 h-1 bg-white rounded-full mt-1" />
              </motion.div>

              {/* Main Narrative Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-7 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-light shadow-xl"
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
                  (CGPA: 8.07, ranked in Top 5 students in Semester 2), backed by a strong academic foundation in DSA, DBMS, Operating Systems, and Software Engineering.
                </p>
              </motion.div>

              {/* Infinite Soft Tech Experience Spotlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg relative overflow-hidden"
              >
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

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <TiltCard
                  options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                  className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
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
                  className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
                >
                  <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                    8.07
                  </h4>
                  <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    MCA CGPA (Top 5)
                  </p>
                </TiltCard>

                <TiltCard
                  options={{ maxTilt: 12, perspective: 700, glareOpacity: 0.08, scale: 1.03 }}
                  className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
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
                  className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col justify-center shadow-md hover:border-zinc-700 transition-colors"
                >
                  <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1 tracking-tight">
                    MERN
                  </h4>
                  <p className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Specialization
                  </p>
                </TiltCard>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SHOWCASE (DESKTOP) ================= */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            {/* Transparent Cutout Profile Card with 3D Tilt */}
            <ProfileCard3D>
              <div className="relative flex items-center justify-center">
                <img
                  src="/profile_cutout.png"
                  alt="Pankaj Patel - Full Stack Developer"
                  className="w-[280px] sm:w-[330px] max-h-[420px] object-contain transition-transform duration-500 hover:scale-105 select-none"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.9))",
                    display: "block",
                  }}
                />
              </div>
            </ProfileCard3D>

            {/* Live Code Engine Widget with Magic UI Border Beam */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-xl text-left">
              <BorderBeam
                size={180}
                duration={7}
                colorFrom="#ffffff"
                colorTo="#52525b"
              />

              {/* Header / Tabs */}
              <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block" />
                </div>

                {/* Tabs */}
                <div className="flex gap-1 overflow-x-auto text-[10px] font-mono">
                  {snippets.map((s, idx) => (
                    <button
                      key={s.name}
                      onClick={() => setActiveSnippetTab(idx)}
                      className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                        activeSnippetTab === idx
                          ? "bg-white text-black font-semibold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopyCode}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1"
                  title="Copy snippet"
                >
                  {copied ? (
                    <Check size={12} className="text-white" />
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-3 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto bg-black/95">
                <p className="text-[10px] text-zinc-400 mb-1.5 font-semibold">
                  // Source: {snippets[activeSnippetTab].project}
                </p>
                <pre className="text-zinc-300 whitespace-pre">
                  <code>{snippets[activeSnippetTab].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- FULL WIDTH BOTTOM: CORE COMPETENCIES ----------------- */}
        <div className="mt-20 pt-16 border-t border-zinc-900">
          <div className="flex items-center gap-2 mb-8 text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
              Core Competencies & Technical Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
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

      {/* Resume PDF Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default Hero;
