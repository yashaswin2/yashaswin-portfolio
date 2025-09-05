"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website built with React and Node.js.",
    image: "https://via.placeholder.com/400x300?text=E-commerce+Platform",
    github: "https://github.com/puranikyashaswinsharma/project1",
    live: "https://project1.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "https://via.placeholder.com/400x300?text=Task+Management+App",
    github: "https://github.com/puranikyashaswinsharma/project2",
    live: "https://project2.com",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with data visualization.",
    image: "https://via.placeholder.com/400x300?text=Weather+Dashboard",
    github: "https://github.com/puranikyashaswinsharma/project3",
    live: "https://project3.com",
    technologies: ["React", "D3.js", "API"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mb-8">
        <div className="command-line mb-4">ls -la /projects</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ascii-art text-center mb-8"
        >
          {`            _    _    _    _    _    _    _

   ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
   ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
   ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
   ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
   ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
   ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝

            _    _    _    _    _    _    _`}
        </motion.div>
      </div>

      <div className="space-y-6">
        <div className="command-line">cat projects.txt</div>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border border-green-500 p-4 hover:bg-green-900/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-green-400 text-lg font-bold">
                {project.title}
              </h3>
              <div className="flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>
            <p className="text-green-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-green-200 text-xs border border-green-400 px-2 py-1"
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
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="command-line">
          echo &quot;More projects available on GitHub&quot;
        </div>
        <a
          href="https://github.com/puranikyashaswinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors"
        >
          View All Projects →
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
