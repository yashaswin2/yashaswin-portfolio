"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModalWindow from "./ModalWindow";
import AboutModalContent from "./AboutModalContent";
import SkillsModalContent from "./SkillsModalContent";
import ProjectsModalContent from "./ProjectsModalContent";
import ContactModalContent from "./ContactModalContent";

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date().toLocaleString());

    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="py-20">
      <div className="text-center">
        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-4 border border-green-500 bg-green-900/20"
        >
          <p className="text-green-300 text-sm italic">
            &quot;Code is poetry written in logic, and every great developer is
            both artist and engineer.&quot;
          </p>
        </motion.div>

        {/* ASCII Art */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="ascii-art text-center mb-8"
        >
          {`                _    _    _    _    _    _    _    _    _    _    _    _


      ██████╗ ██╗   ██╗██████╗   █████╗ ███╗   ██╗██╗██╗  ██╗
      ██╔══██╗██║   ██║██╔══██╗ ██╔══██╗████╗  ██║██║██║ ██╔╝
      ██████╔╝██║   ██║██████╔╝ ███████║██╔██╗ ██║██║█████╔╝
      ██╔═══╝ ██║   ██║██╔══██╗ ██╔══██║██║╚██╗██║██║██╔═██╗
      ██║     ╚██████╔╝██║  ██╗ ██║  ██║██║ ╚████║██║██║  ██╗
      ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝

      ██╗   ██╗ █████╗ ███████╗██╗  ██╗ █████╗ ███████╗██╗   ██╗██╗███╗   ██╗
      ╚██╗ ██╔╝██╔══██╗██╔════╝██║  ██║██╔══██╗██╔════╝██║   ██║██║████╗  ██║
       ╚████╔╝ ███████║███████╗███████║███████║███████╗██║ █╗ ██║██║██╔██╗ ██║
        ╚██╔╝  ██╔══██║╚════██║██╔══██║██╔══██║╚════██║██║███╗██║██║██║╚██╗██║
         ██║   ██║  ██║███████║██║  ██║██║  ██║███████║╚███╔███╔╝██║██║ ╚████║
         ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚══╝

      ███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗
      ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
      ███████╗███████║███████║██████╔╝██╔████╔██║███████║
      ╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
      ███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝

                _    _    _    _    _    _    _    _    _    _    _    _`}
        </motion.div>

        {/* Email Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl text-cyan-400 glow-text mb-2">
            puranikyashaswinsharma@gmail.com
          </h2>
          <p className="text-green-400 text-sm">
            Last login: {mounted ? currentTime : "Loading..."}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Force reload the page with loading animation
              window.location.href =
                window.location.pathname + "?forceLoad=true";
            }}
            className="mt-2 px-3 py-1 text-xs border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors"
          >
            🔄 Reload System
          </motion.button>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="command-line mb-4">ls -la /projects</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <button
              onClick={() => setActiveModal("about")}
              className="project-item hover:text-green-300"
            >
              About
            </button>
            <button
              onClick={() => setActiveModal("skills")}
              className="project-item hover:text-green-300"
            >
              Skills
            </button>
            <button
              onClick={() => setActiveModal("projects")}
              className="project-item hover:text-green-300"
            >
              Projects
            </button>
            <button
              onClick={() => setActiveModal("contact")}
              className="project-item hover:text-green-300"
            >
              Contact
            </button>
          </div>
        </motion.div>

        {/* System Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-left max-w-md mx-auto"
        >
          <div className="command-line">uname -a</div>
          <p className="text-green-400 text-xs mb-4">
            PuranikYashaswinOS 1.0.0 x86_64 GNU/Linux
          </p>
          <div className="command-line">whoami</div>
          <p className="text-green-400 text-xs mb-4">
            puranik yashaswin sharma
          </p>
          <div className="command-line">pwd</div>
          <p className="text-green-400 text-xs">
            /home/puranikyashaswinsharma/portfolio
          </p>
        </motion.div>
      </div>

      {/* Modal Windows */}
      <ModalWindow
        isOpen={activeModal === "about"}
        onClose={() => setActiveModal(null)}
        title="About - puranikyashaswinsharma@portfolio"
        content={<AboutModalContent />}
        pageUrl="/about"
      />

      <ModalWindow
        isOpen={activeModal === "skills"}
        onClose={() => setActiveModal(null)}
        title="Skills - puranikyashaswinsharma@portfolio"
        content={<SkillsModalContent />}
        pageUrl="/skills"
      />

      <ModalWindow
        isOpen={activeModal === "projects"}
        onClose={() => setActiveModal(null)}
        title="Projects - puranikyashaswinsharma@portfolio"
        content={<ProjectsModalContent />}
        pageUrl="/projects"
      />

      <ModalWindow
        isOpen={activeModal === "contact"}
        onClose={() => setActiveModal(null)}
        title="Contact - puranikyashaswinsharma@portfolio"
        content={<ContactModalContent />}
        pageUrl="/contact"
      />
    </section>
  );
};

export default Hero;
