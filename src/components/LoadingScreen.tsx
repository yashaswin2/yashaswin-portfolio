"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<"zoom" | "terminal" | "complete">("zoom");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [error] = useState<string | null>(null);

  console.log("LoadingScreen render - stage:", stage, "progress:", progress);

  const terminalCommands = useMemo(
    () => [
      "Initializing PuranikYashaswinOS v1.0.0...",
      "Loading kernel modules...",
      "Mounting filesystem...",
      "Starting portfolio services...",
      "Connecting to GitHub API...",
      "Loading project data...",
      "Initializing contact protocols...",
      "Compiling React components...",
      "Optimizing bundle size...",
      "System ready. Welcome to Puranik Yashaswin Sharma's Portfolio.",
    ],
    [],
  );

  useEffect(() => {
    console.log("LoadingScreen useEffect - initializing zoom stage");

    // Stage 1: Computer zoom animation (3 seconds)
    const zoomTimer = setTimeout(() => {
      console.log("Zoom stage complete, moving to terminal stage");
      setStage("terminal");
    }, 3000);

    return () => {
      console.log("Cleaning up zoom timer");
      clearTimeout(zoomTimer);
    };
  }, []);

  useEffect(() => {
    if (stage === "terminal") {
      console.log("Terminal stage started");

      let lineIndex = 0;
      const terminalTimer = setInterval(() => {
        if (lineIndex < terminalCommands.length) {
          console.log("Adding terminal line:", lineIndex);
          setTerminalLines((prev) => [...prev, terminalCommands[lineIndex]]);
          setProgress(((lineIndex + 1) / terminalCommands.length) * 100);
          lineIndex++;
        } else {
          console.log("All terminal lines complete");
          clearInterval(terminalTimer);
          setProgress(100);

          // Wait 2.5 seconds then complete
          setTimeout(() => {
            console.log("Setting stage to complete");
            setStage("complete");

            // Wait for exit animation then call onComplete
            setTimeout(() => {
              console.log("Calling onComplete");
              onComplete();
            }, 800);
          }, 2500);
        }
      }, 350);

      return () => {
        console.log("Cleaning up terminal timer");
        clearInterval(terminalTimer);
      };
    }
  }, [stage, onComplete, terminalCommands]);

  // Fallback error display
  if (error) {
    console.log("Error in LoadingScreen:", error);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <div className="text-center text-red-400">
          <div className="text-2xl mb-4">⚠️</div>
          <div className="text-lg mb-2">Loading Error</div>
          <div className="text-sm">{error}</div>
          <button
            onClick={() => {
              console.log("Error continue button clicked");
              setTimeout(() => onComplete(), 500);
            }}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Continue
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {stage !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Matrix-style background */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 font-mono text-xs"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: window.innerHeight + 20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </motion.div>
            ))}
          </div>

          {/* Computer Screen Zoom Animation */}
          <AnimatePresence>
            {stage === "zoom" && (
              <motion.div
                initial={{ scale: 0.1, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 1.3, opacity: 0, rotateY: 90 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Computer Screen */}
                <div className="w-96 h-64 bg-gray-800 border-4 border-gray-600 rounded-lg relative overflow-hidden shadow-2xl">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-black rounded flex items-center justify-center">
                    <motion.div
                      className="text-green-400 font-mono text-sm text-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <motion.div
                        className="mb-2 text-2xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🖥️
                      </motion.div>
                      <div>PuranikYashaswinOS</div>
                      <div className="text-xs mt-1">Loading...</div>
                      <motion.div
                        className="mt-2 w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <motion.div
                          className="h-full bg-green-400"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 rounded pointer-events-none"></div>
                </div>

                {/* Computer Base */}
                <motion.div
                  className="w-48 h-8 bg-gray-700 mx-auto rounded-b-lg border-2 border-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                ></motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Terminal Animation */}
          <AnimatePresence>
            {stage === "terminal" && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-3xl mx-4"
              >
                <div className="bg-black border-2 border-green-500 rounded-lg p-6 font-mono text-green-400 shadow-2xl relative overflow-hidden">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-green-400 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34, 197, 94, 0)",
                        "0 0 20px rgba(34, 197, 94, 0.5)",
                        "0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Terminal Header */}
                  <div className="flex items-center mb-4 pb-2 border-b border-green-500 relative z-10">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-300">
                      puranikyashaswinsharma@portfolio:~$
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 relative z-10">
                    <div className="flex justify-between text-xs text-green-300 mb-1">
                      <span>Loading...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="space-y-2 min-h-64 relative z-10">
                    {terminalLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center"
                      >
                        <span className="text-green-300 mr-2">$</span>
                        <span className="text-green-400">{line}</span>
                        {index === terminalLines.length - 1 &&
                          terminalLines.length < terminalCommands.length && (
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="ml-1"
                            >
                              █
                            </motion.span>
                          )}
                      </motion.div>
                    ))}

                    {/* Completion message */}
                    {terminalLines.length === terminalCommands.length && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 text-center"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-2xl mb-2"
                        >
                          ⚡
                        </motion.div>
                        <div className="text-green-300 font-bold">
                          System Boot Complete
                        </div>
                        <div className="text-green-400 text-sm mt-1">
                          Welcome to P. Yashaswin Sharma&apos;s Portfolio
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
