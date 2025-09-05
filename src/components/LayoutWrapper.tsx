"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("LayoutWrapper: Starting loading animation");

    // Let LoadingScreen handle the timing completely
    // No timer here to avoid conflicts
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-black"></div>;
  }

  const handleLoadingComplete = () => {
    console.log("LayoutWrapper: LoadingScreen onComplete called");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </>
  );
};

export default LayoutWrapper;
