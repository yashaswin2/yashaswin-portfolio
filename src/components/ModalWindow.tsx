"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  pageUrl: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  title,
  content,
  pageUrl,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const router = useRouter();

  const handleMinimize = () => {
    setIsMinimized(true);
    // Reset after animation
    setTimeout(() => setIsMinimized(false), 500);
  };

  const handleMaximize = () => {
    // Navigate to full page using Next.js router
    router.push(pageUrl);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isMinimized ? 0.1 : 1,
              opacity: isMinimized ? 0 : 1,
              y: isMinimized ? 100 : 0,
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            className="bg-black border-2 border-green-500 rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-green-500">
              {/* macOS-style controls */}
              <div className="flex space-x-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                  title="Close"
                />
                <button
                  onClick={handleMinimize}
                  className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
                  title="Minimize"
                />
                <button
                  onClick={handleMaximize}
                  className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                  title="Maximize/Open Full Page"
                />
              </div>

              {/* Window Title */}
              <div className="text-green-400 font-mono text-sm">{title}</div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="text-green-400 hover:text-green-200 text-xl"
              >
                ×
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)] bg-black">
              <div className="text-green-400 font-mono">{content}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWindow;
