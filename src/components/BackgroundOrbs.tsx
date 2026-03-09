import React from 'react';
import { motion } from 'motion/react';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#030014]">
      {/* Orb 1: Cyan/Blue */}
      <motion.div
        className="absolute top-[20%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2: Purple/Pink */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 120, -40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
