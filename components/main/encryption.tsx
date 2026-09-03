"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

const STATS = [
  { label: "Projects Built", value: "3+" },
  { label: "Internship", value: "1" },
  { label: "CGPA", value: "7.82" },
  { label: "LeetCode", value: "400+" },
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institute: "GLA University, Mathura",
    period: "Aug 2023 – June 2027",
    detail: "CGPA: 7.82",
  },
  {
    degree: "Class XII — Senior Secondary",
    institute: "India",
    period: "2023",
    detail: "90%",
  },
  {
    degree: "Class X — Secondary",
    institute: "India",
    period: "2021",
    detail: "88%",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Development Intern",
    company: "Coding Blocks",
    period: "2025 · 2 Months",
    points: [
      "Built and deployed multiple web apps using the MERN stack.",
      "Worked with REST APIs, database design, and server-side rendering.",
      "Strengthened understanding of the complete MERN workflow.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const Encryption = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center py-20 px-6 w-full">

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#ff6a008b] opacity-[0.9] mb-6"
      >
        <SparklesIcon className="text-[#ff9a3c] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About Me</h1>
      </motion.div>

      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromLeft(0.3)}
        className="text-[36px] font-bold text-white text-center mb-4"
      >
        Education &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
          Experience
        </span>
      </motion.h2>

      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromRight(0.4)}
        className="text-gray-400 text-center max-w-[600px] mb-14 text-[16px]"
      >
        A passionate developer who loves turning ideas into real-world products.
      </motion.p>

      {/* stats */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromLeft(0.4)}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20 w-full max-w-[900px]"
      >
        {STATS.map((s) => (
          <div key={s.label} className="relative flex flex-col items-center justify-center p-6 rounded-2xl border border-[#ffffff10] bg-[#000000] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.12)] transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 z-10">{s.value}</span>
            <span className="text-gray-500 text-xs mt-2 text-center tracking-wide uppercase z-10">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* two column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1000px]">

        {/* Education */}
        <div>
          <motion.h3
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromLeft(0.2)}
            className="text-[22px] font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <AcademicCapIcon className="w-5 h-5 text-orange-400" />
            </span>
            Education
          </motion.h3>

          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-500 via-orange-500/40 to-transparent" />
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromLeft(0.15 * (i + 1))}
                className="relative pl-10 pb-8 last:pb-0"
              >
                <div className="absolute left-[9px] top-1 w-[14px] h-[14px] rounded-full border-2 border-orange-500 bg-[#000000] z-10" />
                <div className="p-5 rounded-2xl border border-[#ffffff08] bg-[#000000] hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(255,106,0,0.08)] transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <span className="text-[11px] text-orange-300 border border-orange-500/25 px-2 py-0.5 rounded-full tracking-wide">{edu.period}</span>
                    <span className="text-[11px] text-orange-200 font-semibold">{edu.detail}</span>
                  </div>
                  <h4 className="text-white font-semibold text-[15px] mt-1 leading-snug">{edu.degree}</h4>
                  <p className="text-gray-500 text-[13px] mt-1">{edu.institute}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <motion.h3
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromRight(0.2)}
            className="text-[22px] font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <BriefcaseIcon className="w-5 h-5 text-orange-400" />
            </span>
            Experience
          </motion.h3>

          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-400 via-orange-400/40 to-transparent" />
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromRight(0.15 * (i + 1))}
                className="relative pl-10 pb-8 last:pb-0"
              >
                <div className="absolute left-[9px] top-1 w-[14px] h-[14px] rounded-full border-2 border-orange-400 bg-[#000000] z-10" />
                <div className="p-5 rounded-2xl border border-[#ffffff08] bg-[#000000] hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(255,106,0,0.08)] transition-all duration-300">
                  <span className="text-[11px] text-orange-300 border border-orange-500/25 px-2 py-0.5 rounded-full tracking-wide">{exp.period}</span>
                  <h4 className="text-white font-semibold text-[15px] mt-2">{exp.role}</h4>
                  <p className="text-orange-300/70 text-[13px] mt-0.5 mb-3">{exp.company}</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-gray-400 text-[13px]">
                        <span className="text-orange-400 mt-1 text-[10px]">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
