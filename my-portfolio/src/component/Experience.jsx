import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Infinite Soft Tech (MERN Stack)",
    location: "Ahmedabad, India",
    period: "June 2026 – Sept 2026",
    badge: "Work Experience",
    bullets: [
      "Developed reusable React.js UI components, forms, and pages based on project requirements and design specs.",
      "Built and maintained REST APIs using Node.js and Express.js, including routes, controllers, and CRUD operations.",
      "Designed database schemas and wrote queries in MongoDB/MySQL to support application features.",
      "Debugged and resolved issues in the existing codebase while implementing new feature enhancements.",
      "Followed Git/GitHub-based version control workflow, including branching, pull requests, and code reviews.",
      "Tested and validated APIs using Postman to ensure reliability before integration.",
      "Implemented authentication and authorization flows using JWT.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT", "Postman", "Git / GitHub"],
  },
  {
    id: 2,
    type: "education",
    title: "Master of Computer Applications (MCA)",
    company: "L.D. College of Engineering",
    location: "Ahmedabad, Gujarat",
    period: "2024 – 2026",
    badge: "CGPA: 8.41 · Top 5 Ranker",
    bullets: [
      "Ranked in Top 5 students in MCA Semester 2 at L.D. College of Engineering.",
      "Comprehensive coursework in Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Operating Systems (OS), and Software Engineering.",
    ],
    skills: ["DSA", "DBMS", "OS", "Software Engineering", "System Design"],
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    company: "V.S. Patel College of Arts and Science",
    location: "Navsari, Gujarat",
    period: "2022 – 2024",
    badge: "Graduated",
    bullets: [
      "Graduated with a solid foundation in computer applications, programming paradigms, web technologies, and relational database design.",
      "Hands-on foundational coursework in Java, C / C++, RDBMS, and Object-Oriented Programming (OOPs).",
    ],
    skills: ["Web Dev", "Java", "C / C++", "RDBMS", "OOPs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 bg-black text-slate-100 relative border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-14">
          <div className="font-mono text-[11px] text-zinc-400 font-semibold tracking-wider uppercase">
            03 // WORK EXPERIENCE & EDUCATION TIMELINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-white rounded-full mt-1" />
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-zinc-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-6 pl-2"
            >
              {/* Timeline marker */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0 z-10 shadow-md">
                {exp.type === "work" ? (
                  <Briefcase size={16} className="text-zinc-300" />
                ) : (
                  <GraduationCap size={16} className="text-zinc-300" />
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-zinc-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {exp.badge}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-zinc-500" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-zinc-500" /> {exp.location}
                  </span>
                </div>

                {/* Bullets directly from Resume */}
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests Banner from Resume */}
        <div className="max-w-4xl mt-12 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="text-zinc-300 flex-shrink-0" size={24} />
            <div>
              <p className="text-xs font-mono font-semibold text-zinc-400 uppercase">Core Interests</p>
              <p className="text-sm font-medium text-white">
                Backend Development · REST API Design · Scalable Distributed Systems · Generative AI & MCP · Cloud Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
