export const projects = [
  {
    id: 1,
    title: "AI-Powered Codebase RAG Assistant",
    category: "AI & Full Stack",
    description:
      "Full-stack application enabling developers to chat with codebases via context-aware explanations. Implemented 1024-dim semantic search using Amazon Titan v2 with Pinecone Cloud, structural AST chunking (JS/Python/Java), and automated repo tree indexing.",
    tech: [
      "Node.js",
      "Express",
      "React",
      "Amazon Bedrock",
      "Pinecone",
      "Amazon Titan",
      "GitHub API",
    ],
    github: "https://github.com/pankajpatel19/Coding-Assistant",
    demo: "https://coding-assistant-hazel.vercel.app/",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.35)",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    id: 2,
    title: "StudyMate — AI Personal Learning Assistant",
    category: "AI & Full Stack",
    description:
      "Event-driven learning platform with Inngest background queues for async document uploads. Features LangChain RAG pipeline, Better-Auth & Prisma ORM over PostgreSQL, dynamic quiz generation, automated slide decks, and Mermaid.js concept visualization.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Pinecone",
      "AWS Bedrock",
      "Inngest",
    ],
    github:
      "https://github.com/pankajpatel19/StudyMate-AI-Powered-Personal-Learning-Assistant",
    demo: "https://studymatelearning.dev",
    gradient: "from-purple-500 to-indigo-600",
    glowColor: "rgba(168, 85, 247, 0.35)",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    id: 3,
    title: "AI Gmail Assistant using MCP",
    category: "AI & Full Stack",
    description:
      "Agentic AI email assistant leveraging Model Context Protocol (MCP) and Groq LLMs for natural language inbox automation. Features Google OAuth2, custom MCP tool handlers with strict Zod validation, and multi-turn conversational memory.",
    tech: [
      "Node.js",
      "Express.js",
      "React.js",
      "Model Context Protocol (MCP)",
      "Groq API",
      "Google OAuth2",
      "Zod",
    ],
    github: "https://github.com/pankajpatel19/AI-Gmail-Assistant-using-MCP",
    // demo: "https://github.com/pankajpatel19",
    gradient: "from-pink-500 to-rose-600",
    glowColor: "rgba(244, 63, 94, 0.35)",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  },
  {
    id: 4,
    title: "Tenantify — Multi-Tenant SaaS Backend",
    category: "Backend",
    description:
      "Production-ready multi-tenant SaaS backend framework featuring database isolation per tenant, background job queues with BullMQ, JWT authentication, and scalable Redis caches.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Nodemailer"],
    github:
      "https://github.com/pankajpatel19/Tenantify-Multi-Tenant-SaaS-Backend",
    // demo: "https://github.com/pankajpatel19/Tenantify-Multi-Tenant-SaaS-Backend",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
  },
  {
    id: 5,
    title: "WandarLust — Lodging & Travel Platform",
    category: "Full Stack",
    description:
      "Full-featured travel reservation and lodging platform. Integrated responsive server-side templating, robust user authentication, property creation, geo-location mapping with Leaflet, and review systems.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind", "Bootstrap"],
    github: "https://github.com/pankajpatel19/WandarLust",
    demo: "https://wandar-lust-kappa.vercel.app",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.35)",
    image: "/wandarLust.webp",
  },
  {
    id: 6,
    title: "CoolServices — Home Appliance Booking",
    category: "Full Stack",
    description:
      "Customer-to-technician booking platform architected with micro-services for appointment scheduling, custom administrative panels, real-time leaflet navigation, and optimized Redis token caching.",
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "JWT",
      "Leaflet",
      "Redis",
    ],
    github: "https://github.com/pankajpatel19/CoolServices",
    demo: "https://cool-services.vercel.app/",
    gradient: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20, 184, 166, 0.35)",
    image: "/Logo2.png",
  },
];
