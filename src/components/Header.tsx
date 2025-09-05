"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ModalWindow from "./ModalWindow";
import AboutModalContent from "./AboutModalContent";
import SkillsModalContent from "./SkillsModalContent";
import ProjectsModalContent from "./ProjectsModalContent";
import ContactModalContent from "./ContactModalContent";

const Header: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const router = useRouter();

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black border-b border-green-500 py-4 px-6"
    >
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-green-400 font-bold text-lg"
        >
          puranikyashaswinsharma@portfolio:~
        </motion.div>
        <nav className="flex space-x-6">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Blog",
            "GitHub",
            "Contact",
          ].map((item) => {
            if (item === "Blog") {
              return (
                <motion.button
                  key={item}
                  onClick={() => router.push("/blog")}
                  whileHover={{ scale: 1.05 }}
                  className="text-green-400 hover:text-green-200 transition-colors cursor-pointer text-sm"
                >
                  {item}
                </motion.button>
              );
            } else if (item === "GitHub") {
              return (
                <motion.a
                  key={item}
                  href="https://github.com/puranikyashaswinsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-green-400 hover:text-green-200 transition-colors text-sm"
                >
                  {item}
                </motion.a>
              );
            } else if (item === "Home") {
              return (
                <motion.button
                  key={item}
                  onClick={() => router.push("/")}
                  whileHover={{ scale: 1.05 }}
                  className="text-green-400 hover:text-green-200 transition-colors cursor-pointer text-sm"
                >
                  {item}
                </motion.button>
              );
            } else {
              return (
                <motion.button
                  key={item}
                  onClick={() => setActiveModal(item.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  className="text-green-400 hover:text-green-200 transition-colors cursor-pointer text-sm"
                >
                  {item}
                </motion.button>
              );
            }
          })}
        </nav>

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
      </div>
    </motion.header>
  );
};

export default Header;
