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

const SkillsModalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="ascii-art text-center mb-4">
          {`   ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
   ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
   ███████╗█████╔╝ ██║██║     ██║     ███████╗
   ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
   ███████║██║  ██╗██║███████╗███████╗███████║
   ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝`}
        </div>
      </div>

      <div className="space-y-3">
        <div className="command-line">cat skills.txt</div>
        {skills.slice(0, 6).map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-green-500 pl-3"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-green-400 text-sm">{skill.name}</span>
              <span className="text-green-300 text-xs">[{skill.level}%]</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
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
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <div className="command-line">echo "Technologies I work with"</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-green-500 p-2 text-center hover:bg-green-900/20 transition-colors"
            >
              <span className="text-green-400 text-xs">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsModalContent;
