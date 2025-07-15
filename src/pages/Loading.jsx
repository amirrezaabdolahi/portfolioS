"use client";

import { motion } from "motion/react";

function LoadingThreeDotsPulse() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Positive = left to right
        staggerDirection: 1,
      },
    },
  };

  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="animate"
      animate="animate"
      className="container"
    >
      <motion.div variants={dotVariants} animate="pulse" className="dot" />
      <motion.div variants={dotVariants} animate="pulse" className="dot" />
      <motion.div variants={dotVariants} animate="pulse" className="dot" />
      <StyleSheet />
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff0088;
          will-change: transform;
        }
      `}
    </style>
  );
}

export default LoadingThreeDotsPulse;
