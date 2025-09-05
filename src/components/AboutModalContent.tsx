"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutModalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="ascii-art text-center mb-4">
          {`   █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ███╗   ███╗███████╗
   ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ████╗ ████║██╔════╝
   ███████║██████╔╝██║   ██║██║   ██║   ██║       ██╔████╔██║█████╗
   ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ██║╚██╔╝██║██╔══╝
   ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ██║ ╚═╝ ██║███████╗
   ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ╚═╝     ╚═╝╚══════╝`}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="command-line mb-4">display profile.jpg</div>
          <Image
            src="/profile-photo.jpg"
            alt="P. Yashaswin Sharma"
            width={200}
            height={200}
            className="w-full max-w-xs mx-auto border border-green-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="command-line">
            echo &quot;About Puranik Yashaswin Sharma&quot;
          </div>
          <p className="text-green-400 text-sm">
            I&apos;m Puranik Yashaswin Sharma, a passionate software engineer
            with a love for creating innovative solutions and building
            exceptional user experiences. With expertise in full-stack
            development, I enjoy working with modern technologies to bring ideas
            to life.
          </p>

          <div className="command-line">echo &quot;My Journey&quot;</div>
          <p className="text-green-400 text-sm">
            My journey in tech has been driven by curiosity and a desire to
            solve complex problems. I thrive in collaborative environments and
            am always eager to learn new technologies and methodologies.
          </p>

          <div className="command-line">cat stats.txt</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-green-500 p-2">
              <div className="text-green-300 text-xs">Experience:</div>
              <div className="text-green-400 text-sm">3+ Years</div>
            </div>
            <div className="border border-green-500 p-2">
              <div className="text-green-300 text-xs">Projects:</div>
              <div className="text-green-400 text-sm">50+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutModalContent;
