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
} from "lucide-react";
import TypingEffect from "./TypingEffect";
import FloatingGeometry from "./FloatingGeometry";
import ResumeModal from "./ResumeModal";

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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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

// 3D mouse-tracking tilt for the profile image frame
const ProfileCard3D = ({ children }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
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
    rotateX.set(-dy * 18);
    rotateY.set(dx * 18);
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
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const handleSectionMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSectionMouseLeave = () => setMousePos({ x: -9999, y: -9999 });
  const techStack = [
    {
      icon: <Code2 size={22} />,
      name: "React",
      desc: "Interactive Frontend",
      color: "hover:text-blue-400",
    },
    {
      icon: <Database size={22} />,
      name: "MongoDB",
      desc: "NoSQL Database",
      color: "hover:text-green-400",
    },
    {
      icon: <Layers size={22} />,
      name: "Node.js",
      desc: "Server Runtime",
      color: "hover:text-emerald-400",
    },
    {
      icon: <Zap size={22} />,
      name: "Express",
      desc: "REST Web APIs",
      color: "hover:text-yellow-400",
    },
    {
      icon: <FileCode size={22} />,
      name: "TypeScript",
      desc: "Type-Safe JS",
      color: "hover:text-blue-500",
    },
    {
      icon: <Wind size={22} />,
      name: "Tailwind",
      desc: "Utility CSS",
      color: "hover:text-sky-400",
    },
    {
      icon: <GitBranch size={22} />,
      name: "Git",
      desc: "Version Control",
      color: "hover:text-orange-400",
    },
    {
      icon: <Box size={22} />,
      name: "Next.js",
      desc: "React Framework",
      color: "hover:text-white",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/pankajpatel19",
      label: "GitHub",
      color: "hover:text-white hover:border-white/30",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/pankajpatel19",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400/30",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com/pankajpatel19",
      label: "Twitter",
      color: "hover:text-sky-400 hover:border-sky-400/30",
    },
  ];

  const stats = [
    { to: 10, suffix: "+", label: "Projects Built" },
    { to: 500, suffix: "+", label: "Git Commits" },
    { to: 3, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="min-h-screen w-full flex items-center justify-center pt-20 relative overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Cursor Spotlight — follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.08) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)`,
        }}
      />
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-[5%] w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] left-[40%] w-[250px] h-[250px] bg-blue-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D Floating geometry shapes */}
      <FloatingGeometry />

      <div className="max-w-screen-xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-24 z-10 relative">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center w-full md:w-3/5 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit mb-6 text-sm text-cyan-400 font-semibold shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Hi, I'm Pankaj Patel 👋
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight mb-4 tracking-tight">
            I build modern <br />
            <TypingEffect
              texts={[
                "MERN Applications",
                "Scalable Backends",
                "Full Stack Systems",
                "RESTful APIs",
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetween={2500}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-lg text-lg leading-relaxed mb-8 font-light"
          >
            Specialized in crafting robust engineering solutions using{" "}
            <span className="text-cyan-400 font-semibold">MongoDB</span>,{" "}
            <span className="text-cyan-400 font-semibold">Express</span>,{" "}
            <span className="text-cyan-400 font-semibold">React</span>, and{" "}
            <span className="text-cyan-400 font-semibold">Node.js</span>.
            Delivering high-performance, responsive applications with premium
            visual styling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(34,211,238,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group text-white px-7 py-3.5 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/Pankaj_Patel_FullStack_Developer_Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white px-5 py-3.5 flex items-center rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </motion.a>

            <motion.button
              onClick={() => setResumeOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-cyan-400 hover:text-white px-5 py-3.5 flex items-center rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-md cursor-pointer"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
              Connect
            </span>
            <div className="h-px w-6 bg-slate-700" />
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-gray-400 ${social.color} transition-all duration-300 shadow-md`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5 mb-10 px-5 py-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60 w-fit"
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <p className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-7 w-px bg-slate-700/80" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* 3D Tech Stack chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col gap-3"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Core Stack Expertise
            </p>
            <div className="flex gap-3 flex-wrap">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    y: -6,
                    rotateX: -10,
                    scale: 1.08,
                    boxShadow: "0 12px 24px rgba(34,211,238,0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 500 }}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-900 transition-colors duration-300 cursor-pointer shadow-md group ${tech.color}`}
                  title={tech.desc}
                >
                  <span className="text-cyan-400 group-hover:rotate-[360deg] transition-transform duration-500">
                    {tech.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-current transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-2/5 flex justify-center items-center"
        >
          <ProfileCard3D>
            {/* Outer glowing orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-dashed border-purple-500/15 pointer-events-none"
            />

            {/* Glowing halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-[40px] opacity-20 group-hover:opacity-35 transition-opacity duration-700" />

            {/* 3D-layered card frame */}
            <div
              className="relative rounded-2xl p-2.5 bg-slate-900 border border-slate-800 shadow-2xl"
              style={{ transform: "translateZ(0px)" }}
            >
              {/* Shine border effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20 opacity-60" />
              </div>

              {/* Profile image */}
              <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80">
                <img
                  src="/profilemain.png"
                  alt="Pankaj Patel - Full Stack Developer"
                  className="w-[280px] sm:w-[320px] h-[420px] aspect-square object-cover"
                  style={{ display: "block" }}
                />

                {/* 3D depth overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none" />
              </div>

              {/* Floating "Available" badge — lifted via translateZ */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{ transform: "translateZ(30px)" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white text-xs px-5 py-2.5 rounded-full font-bold shadow-lg shadow-cyan-500/25 flex items-center gap-2 whitespace-nowrap border border-cyan-400/30"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                Available for Projects
              </motion.div>
            </div>

            {/* Floating skill badge — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{ transform: "translateZ(25px)" }}
              className="absolute -top-4 -right-6 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2"
            >
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Stack
                </p>
                <p className="text-xs font-bold text-white">MERN</p>
              </div>
            </motion.div>

            {/* Currently Building badge — left side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
              style={{ transform: "translateZ(20px)" }}
              className="absolute top-1/3 -left-12 bg-slate-900 border border-slate-800 rounded-2xl px-3.5 py-2.5 shadow-xl"
            >
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">
                Building
              </p>
              <p className="text-sm font-black text-purple-400">🚀 SaaS App</p>
              <p className="text-[10px] text-gray-500">Next.js</p>
            </motion.div>
          </ProfileCard3D>
        </motion.div>
      </div>

      {/* Resume PDF Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-cyan-400 cursor-pointer z-10 transition-colors duration-300 group"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="group-hover:text-cyan-400 transition-colors duration-300"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
