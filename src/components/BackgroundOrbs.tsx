import React from 'react';
import { motion } from 'motion/react';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#030014]">
      {/* Orb 1: Cyan/Blue */}
      <motion.div
        className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen"
        initial={{ x: "10vw", y: "10vh" }}
        animate={{
          x: ["10vw", "70vw", "40vw", "10vw"],
          y: ["10vh", "60vh", "10vh", "80vh", "10vh"],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orb 2: Purple/Pink */}
      <motion.div
        className="absolute w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
        initial={{ x: "80vw", y: "80vh" }}
        animate={{
          x: ["80vw", "20vw", "60vw", "80vw"],
          y: ["80vh", "20vh", "70vh", "30vh", "80vh"],
          scale: [1, 0.8, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
