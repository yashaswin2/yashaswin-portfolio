"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="mb-8">
        <div className="command-line mb-4">cat about.txt</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ascii-art text-center mb-8"
        >
          {`            _    _    _    _    _    _    _

   █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ███╗   ███╗███████╗
   ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ████╗ ████║██╔════╝
   ███████║██████╔╝██║   ██║██║   ██║   ██║       ██╔████╔██║█████╗
   ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ██║╚██╔╝██║██╔══╝
   ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ██║ ╚═╝ ██║███████╗
   ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ╚═╝     ╚═╝╚══════╝

            _    _    _    _    _    _    _`}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="command-line mb-4">display profile.jpg</div>
          <Image
            src="/profile-photo.jpg"
            alt="P. Yashaswin Sharma"
            width={300}
            height={300}
            className="w-full max-w-sm mx-auto border border-green-500"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="command-line">echo &quot;About Yashaswin&quot;</div>
          <p className="text-green-400 mb-4">
            I&apos;m P. Yashaswin Sharma, a passionate software engineer with a
            love for creating innovative solutions and building exceptional user
            experiences. With expertise in full-stack development, I enjoy
            working with modern technologies to bring ideas to life.
          </p>

          <div className="command-line">echo &quot;My Journey&quot;</div>
          <p className="text-green-400 mb-4">
            My journey in tech has been driven by curiosity and a desire to
            solve complex problems. I thrive in collaborative environments and
            am always eager to learn new technologies and methodologies.
          </p>

          <div className="command-line">cat stats.txt</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-green-500 p-3">
              <div className="text-green-300 text-sm">Experience:</div>
              <div className="text-green-400">3+ Years</div>
            </div>
            <div className="border border-green-500 p-3">
              <div className="text-green-300 text-sm">Projects:</div>
              <div className="text-green-400">50+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
