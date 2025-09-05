"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Show computer for 3 seconds, then terminal for 3 seconds
    const timer1 = setTimeout(() => {
      setShowTerminal(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {!showTerminal ? (
        // BIG COMPUTER ANIMATION
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* HUGE COMPUTER ICON */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-8"
          >
            🖥️
          </motion.div>

          {/* BIG TEXT */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl font-bold text-green-400 mb-4"
          >
            PuranikYashaswinOS
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl text-green-300"
          >
            Initializing System...
          </motion.p>

          {/* PROGRESS BAR */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="mt-8 w-96 h-4 bg-gray-700 rounded-full mx-auto overflow-hidden"
          >
            <div className="h-full bg-green-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      ) : (
        // BIG TERMINAL ANIMATION
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl mx-4"
        >
          <div className="bg-black border-4 border-green-500 rounded-lg p-8 shadow-2xl">
            {/* TERMINAL HEADER */}
            <div className="flex items-center mb-6 pb-4 border-b-2 border-green-500">
              <div className="w-6 h-6 bg-red-500 rounded-full mr-4"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full mr-4"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full mr-4"></div>
              <span className="text-green-300 text-xl font-bold">
                puranikyashaswinsharma@portfolio:~$
              </span>
            </div>

            {/* TERMINAL CONTENT */}
            <div className="space-y-4 font-mono text-lg">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="text-green-300 mr-4">$</span>
                <span className="text-green-400">
                  Initializing PuranikYashaswinOS v1.0.0...
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center"
              >
                <span className="text-green-300 mr-4">$</span>
                <span className="text-green-400">
                  Loading portfolio services...
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-center"
              >
                <span className="text-green-300 mr-4">$</span>
                <span className="text-green-400">System ready!</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-2 text-green-400"
                >
                  █
                </motion.span>
              </motion.div>

              {/* COMPLETION MESSAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="mt-8 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-5xl mb-4"
                >
                  ⚡
                </motion.div>
                <h2 className="text-3xl font-bold text-green-300 mb-2">
                  System Boot Complete
                </h2>
                <p className="text-xl text-green-400">
                  Welcome to P. Yashaswin Sharma&apos;s Portfolio
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingScreen;
