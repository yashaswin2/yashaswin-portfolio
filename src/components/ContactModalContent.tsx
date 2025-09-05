"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactModalContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY",
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="ascii-art text-center mb-4">
          {`   ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
   ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
   ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
   ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
   ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
    ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝`}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="command-line mb-3">echo "Contact Information"</div>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-green-300 mr-3 text-sm">📧</span>
              <span className="text-cyan-400 text-sm">
                puranikyashaswinsharma@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-3 text-sm">🐙</span>
              <a
                href="https://github.com/puranikyashaswinsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-sm"
              >
                github.com/puranikyashaswinsharma
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-3 text-sm">💼</span>
              <a
                href="https://linkedin.com/in/puranikyashaswinsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-sm"
              >
                linkedin.com/in/puranikyashaswinsharma
              </a>
            </div>
          </div>

          <div className="mt-6">
            <div className="command-line">echo "System Status"</div>
            <div className="text-green-400 text-xs mt-2">
              Status: [██████████] Online
              <br />
              Response Time: &lt; 24 hours
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="command-line text-xs">read -p "Name: " name</div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full bg-transparent border-b border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 py-1 text-sm"
          />

          <div className="command-line text-xs">read -p "Email: " email</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border-b border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 py-1 text-sm"
          />

          <div className="command-line text-xs">
            read -p "Message: " message
          </div>
          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full bg-transparent border border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 p-2 resize-none text-sm"
          ></textarea>

          {status && (
            <div className="command-line text-xs">
              {status.includes("successfully")
                ? "echo Message sent successfully!"
                : "echo Error: Failed to send message"}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-1 transition-colors disabled:opacity-50 text-sm"
          >
            {isLoading ? "Sending..." : "sendmail -s Portfolio Contact"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactModalContent;
