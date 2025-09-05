"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website built with React and Node.js.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
  },
];

const ProjectsModalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="ascii-art text-center mb-4">
          {`   ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
   ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
   ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
   ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
   ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
   ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝`}
        </div>
      </div>

      <div className="space-y-4">
        <div className="command-line">cat projects.txt</div>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-green-500 p-3 hover:bg-green-900/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-green-400 text-sm font-bold">
                {project.title}
              </h3>
              <div className="flex space-x-1">
                <a
                  href={`https://github.com/puranikyashaswinsharma/project${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100"
                >
                  <FaGithub size={12} />
                </a>
                <a
                  href={`https://project${index + 1}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
            <p className="text-green-300 text-xs mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-green-200 text-xs border border-green-400 px-1 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-green-400 text-xs">
              Status: [████████░░] 80% Complete
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
        <div className="command-line">echo "More projects available on GitHub"</div>
        <a
          href="https://github.com/puranikyashaswinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors text-sm"
        >
          View All Projects →
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectsModalContent;
