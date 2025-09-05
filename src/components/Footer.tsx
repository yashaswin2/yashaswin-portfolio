"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-green-500 mt-12">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="command-line mb-4">cat footer.txt</div>
          <div className="ascii-art text-center">
            {`            _    _    _    _    _    _    _

   ██████╗ ██╗   ██╗ █████╗ ███████╗██╗  ██╗ █████╗ ███████╗██╗    ██╗██╗███╗   ██╗
   ██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝██║  ██║██╔══██╗██╔════╝██║    ██║██║████╗  ██║
   ██████╔╝ ╚████╔╝ ███████║███████╗███████║███████║███████╗██║ █╗ ██║██║██╔██╗ ██║
   ██╔═══╝   ╚██╔╝  ██╔══██║╚════██║██╔══██║██╔══██║╚════██║██║███╗██║██║██║╚██╗██║
   ██║        ██║   ██║  ██║███████║██║  ██║██║  ██║███████║╚███╔███╔╝██║██║ ╚████║
   ╚═╝        ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚══╝

            _    _    _    _    _    _    _`}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="command-line">
            echo &quot;System Information&quot;
          </div>
          <div className="text-green-400 text-sm space-y-1">
            <p>OS: PuranikYashaswinOS v1.0.0</p>
            <p>Kernel: Portfolio Kernel 1.0</p>
            <p>
              Uptime:{" "}
              {typeof window !== "undefined"
                ? Math.floor((Date.now() / 1000 / 60 / 60 / 24) % 100)
                : "42"}{" "}
              days
            </p>
            <p>Memory: 1337 MB / 2048 MB</p>
            <p>CPU: Intel Core i7-9750H @ 2.60GHz</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="command-line">ls -la /social</div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/puranikyashaswinsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/puranikyashaswinsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/puranikyashaswinsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:puranikyashaswinsharma@gmail.com"
              className="text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="command-line">date</div>
          <p className="text-green-400 text-sm">
            {typeof window !== "undefined"
              ? new Date().toLocaleString()
              : "Loading..."}
          </p>
          <div className="command-line mt-4">
            {`echo "© ${
              typeof window !== "undefined" ? new Date().getFullYear() : "2024"
            } P. Yashaswin Sharma. All rights reserved."`}
          </div>
          <p className="text-green-400 text-xs mt-2">
            Built with ❤️ using Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
