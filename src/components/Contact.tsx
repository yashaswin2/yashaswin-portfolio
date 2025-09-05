"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
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
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current!,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
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
    <section id="contact" className="py-20">
      <div className="mb-8">
        <div className="command-line mb-4">cat contact.txt</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ascii-art text-center mb-8"
        >
          {`            _    _    _    _    _    _    _

   ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
   ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
   ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
   ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
   ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
    ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝

            _    _    _    _    _    _    _`}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="command-line">
            echo &quot;Contact Information&quot;
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-green-300 mr-4">📧</span>
              <span className="text-green-400">yashaswin@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-4">🐙</span>
              <a
                href="https://github.com/puranikyashaswinsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                github.com/puranikyashaswinsharma
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-4">💼</span>
              <a
                href="https://linkedin.com/in/puranikyashaswinsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                linkedin.com/in/puranikyashaswinsharma
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-green-300 mr-4">🐦</span>
              <a
                href="https://twitter.com/puranikyashaswinsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                @puranikyashaswinsharma
              </a>
            </div>
          </div>

          <div className="mt-8">
            <div className="command-line">echo &quot;System Status&quot;</div>
            <div className="text-green-400 text-sm mt-2">
              Status: [██████████] Online
              <br />
              Response Time: &lt; 24 hours
              <br />
              Location: Remote
              <br />
              Timezone: UTC+5:30
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="command-line">read -p &quot;Name: &quot; name</div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full bg-transparent border-b border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 py-2"
          />

          <div className="command-line">read -p &quot;Email: &quot; email</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border-b border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 py-2"
          />

          <div className="command-line">
            read -p &quot;Message: &quot; message
          </div>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full bg-transparent border border-green-500 text-green-400 placeholder-green-600 focus:outline-none focus:border-green-300 p-2 resize-none"
          ></textarea>

          {status && (
            <div className="command-line">
              {status.includes("successfully")
                ? "echo 'Message sent successfully!'"
                : "echo 'Error: Failed to send message'"}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "sendmail -s 'Portfolio Contact'"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
