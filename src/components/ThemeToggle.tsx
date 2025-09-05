"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <FaMoon className="text-gray-800 dark:text-gray-200" size={20} />
        ) : (
          <FaSun className="text-gray-800 dark:text-gray-200" size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
