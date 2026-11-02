import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Layers,
  Wind,
  Table,
  GitBranch,
  Zap,
  Settings,
  Code,
  Blocks,
  Terminal,
  Cpu,
  Bot,
  Brain,
  Search,
  Cloud,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Backend", "AI / ML", "Databases & Queues", "Frontend", "DevOps & Tools"];

  const skills = [
    // Backend
    {
      id: 1,
      title: "Node.js & Express.js",
      category: "Backend",
      level: "92%",
      icon: <Server size={26} />,
      detail: "REST API Design, Routing, Controllers, CRUD",
    },
    {
      id: 2,
      title: "JWT & RBAC Authentication",
      category: "Backend",
      level: "90%",
      icon: <ShieldCheck size={26} />,
      detail: "Role-Based Access, Session Security, Better-Auth",
    },
    {
      id: 3,
      title: "REST API Architecture",
      category: "Backend",
      level: "94%",
      icon: <Blocks size={26} />,
      detail: "Stateless Endpoints, Error Handling, Zod Validation",
    },

    // AI / ML
    {
      id: 4,
      title: "Model Context Protocol (MCP)",
      category: "AI / ML",
      level: "90%",
      icon: <Brain size={26} />,
      detail: "Agentic Tool Handlers, Conversational Memory, Groq",
    },
    {
      id: 5,
      title: "LangChain & RAG Pipelines",
      category: "AI / ML",
      level: "92%",
      icon: <Bot size={26} />,
      detail: "Structural AST Chunking, Context Injection, Reranking",
    },
    {
      id: 6,
      title: "Amazon Bedrock & Titan v2",
      category: "AI / ML",
      level: "88%",
      icon: <Cpu size={26} />,
      detail: "1024-dimensional Semantic Embeddings Generation",
    },
    {
      id: 7,
      title: "Pinecone Cloud Vector DB",
      category: "AI / ML",
      level: "88%",
      icon: <Database size={26} />,
      detail: "Vector Namespaces, Similarity Search, Sub-second queries",
    },

    // Databases & Queues
    {
      id: 8,
      title: "MongoDB & Mongoose",
      category: "Databases & Queues",
      level: "90%",
      icon: <Database size={26} />,
      detail: "NoSQL Schema Design, Queries, Aggregation Pipelines",
    },
    {
      id: 9,
      title: "PostgreSQL & Prisma ORM",
      category: "Databases & Queues",
      level: "88%",
      icon: <Table size={26} />,
      detail: "Relational Modeling, Migrations, Type-Safe Queries",
    },
    {
      id: 10,
      title: "MySQL",
      category: "Databases & Queues",
      level: "85%",
      icon: <Table size={26} />,
      detail: "Relational Schemas, Constraints, Joins & Indexing",
    },
    {
      id: 11,
      title: "Redis, BullMQ & Inngest",
      category: "Databases & Queues",
      level: "86%",
      icon: <Zap size={26} />,
      detail: "Asynchronous Background Jobs, Rate Limiting, Caching",
    },

    // Frontend
    {
      id: 12,
      title: "React.js & Next.js",
      category: "Frontend",
      level: "92%",
      icon: <Code2 size={26} />,
      detail: "Reusable Components, Event-Driven Pages, SSR",
    },
    {
      id: 13,
      title: "TanStack Query & Tailwind CSS",
      category: "Frontend",
      level: "90%",
      icon: <Wind size={26} />,
      detail: "Server State Sync, Utility-First Responsive Styling",
    },
    {
      id: 14,
      title: "HTML5 & CSS3",
      category: "Frontend",
      level: "95%",
      icon: <Code size={26} />,
      detail: "Semantic Markup, Responsive Layouts, Accessibility",
    },

    // DevOps & Tools / Languages
    {
      id: 15,
      title: "JavaScript (Primary) & TypeScript",
      category: "DevOps & Tools",
      level: "94%",
      icon: <Layers size={26} />,
      detail: "ES6+, Async/Await, Strict Typing, Type Definitions",
    },
    {
      id: 16,
      title: "Docker, Git & GitHub",
      category: "DevOps & Tools",
      level: "88%",
      icon: <GitBranch size={26} />,
      detail: "Containerization, Branching, PRs, Code Reviews",
    },
    {
      id: 17,
      title: "Postman & Zod",
      category: "DevOps & Tools",
      level: "90%",
      icon: <Settings size={26} />,
      detail: "API Testing, Automated Validation, Schema Inference",
    },
    {
      id: 18,
      title: "Java, C & DSA",
      category: "DevOps & Tools",
      level: "85%",
      icon: <Terminal size={26} />,
      detail: "Algorithms, Problem Solving, OOP Paradigms",
    },
    {
      id: 19,
      title: "AWS Cloud (EC2, S3, RDS, IAM)",
      category: "DevOps & Tools",
      level: "80%",
      icon: <Cloud size={26} />,
      detail: "Actively Learning Cloud Infrastructure & VPC",
    },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="w-full py-24 bg-[#07080b] text-white relative border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-10"
        >
          <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
            04 // TECHNICAL ARSENAL // RESUME SKILLS MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-white rounded-full mt-1" />
        </motion.div>

        {/* Filter Controls & Live Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                  activeCategory === category
                    ? "border-white text-black bg-white"
                    : "border-zinc-800 text-zinc-400 bg-zinc-900/40 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-2.5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. MongoDB, Bedrock)..."
              className="w-full pl-9 pr-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-5 rounded-xl border border-zinc-800/90 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900 transition-all shadow-sm flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-zinc-300 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-white mb-1 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-3">
                      {skill.detail}
                    </p>
                  </div>

                  {/* Level progress bar */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1 text-[11px] font-mono">
                      <span className="text-zinc-500">Proficiency</span>
                      <span className="text-zinc-300 font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Currently Expanding: Cloud Infrastructure & AWS Architecture
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              Deepening knowledge in AWS services (EC2, S3, IAM, RDS, CloudWatch, VPC) and advanced Model Context Protocol (MCP) server integrations.
            </p>
          </div>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:bg-zinc-200 transition-colors shrink-0"
          >
            Inspect Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skill;
