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
} from "lucide-react";
import TypingEffect from "./TypingEffect";
import ResumeModal from "./ResumeModal";
import Meteors from "./animations/Meteors";
import BorderBeam from "./animations/BorderBeam";
import MagneticButton from "./animations/MagneticButton";

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

  const stats = [
    { to: 10, suffix: "+", label: "Projects Built" },
    { to: 500, suffix: "+", label: "Git Commits" },
    { to: 8, suffix: ".07", label: "MCA CGPA (Top 5)" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden bg-black bg-grid-subtle"
    >
      {/* Meteor Shower background effect (Aceternity UI style) */}
      <Meteors number={16} />

      {/* Top-center light beam — Linear/Vercel style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-white/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[160px] bg-white/[0.07] rounded-full blur-[60px] pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 z-10 relative">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center w-full lg:w-7/12 text-left"
        >
          {/* Mobile-Only Cutout Photo: Positioned at the very top on mobile view */}
          <div className="lg:hidden w-full flex justify-center mb-6 -mt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              {/* Soft ambient monochrome aura behind cutout on mobile */}
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 bg-white/[0.08] rounded-full blur-3xl pointer-events-none" />
              <img
                src="/profile_cutout.png"
                alt="Pankaj Patel - Full Stack Developer"
                className="relative z-10 w-[220px] sm:w-[260px] max-h-[310px] object-contain select-none"
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

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.12] mb-5 tracking-tight">
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
            className="flex flex-wrap gap-3.5 items-center mb-8 sm:mb-10"
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
                {/* Subtle shine sweep */}
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

          {/* Stats Strip */}
          <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 mb-8 sm:mb-10 px-4 sm:px-5 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 w-full sm:w-fit max-w-md">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <p className="text-xl font-bold text-white tracking-tight">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-7 w-px bg-zinc-800" />
                )}
              </React.Fragment>
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
        </motion.div>

        {/* Right: Dual Interactive Showcase (Transparent Cutout Profile Card + Real Code Engine) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-5/12 flex flex-col items-center gap-6"
        >
          {/* Desktop-Only Cutout Photo (Hidden on mobile because it's rendered at the top) */}
          <div className="hidden lg:block w-full">
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
          </div>

          {/* Live Code Engine Widget with Magic UI Border Beam! */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-xl text-left">
            {/* Luminous Animated Border Beam (Pure Monochrome White/Silver) */}
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
        </motion.div>
      </div>

      {/* Resume PDF Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 cursor-pointer z-10 transition-colors"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
