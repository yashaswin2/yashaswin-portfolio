"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "CSS/Tailwind", level: 95 },
  { name: "Git", level: 90 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="mb-8">
        <div className="command-line mb-4">ls -la /skills</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ascii-art text-center mb-8"
        >
          {`            _    _    _    _    _    _    _

   ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
   ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
   ███████╗█████╔╝ ██║██║     ██║     ███████╗
   ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
   ███████║██║  ██╗██║███████╗███████╗███████║
   ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

            _    _    _    _    _    _    _`}
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="command-line">cat skills.txt</div>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-l-2 border-green-500 pl-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-400">{skill.name}</span>
              <span className="text-green-300 text-sm">[{skill.level}%]</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-fill"
              ></motion.div>
            </div>
            <div className="text-green-300 text-xs mt-1">
              Progress: [
              {Array(Math.floor(skill.level / 10))
                .fill("█")
                .join("")}
              {Array(10 - Math.floor(skill.level / 10))
                .fill("░")
                .join("")}
              ]
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="command-line">
          echo &quot;Technologies I work with&quot;
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "CSS",
            "Git",
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-green-500 p-3 text-center hover:bg-green-900/20 transition-colors"
            >
              <span className="text-green-400 text-sm">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
