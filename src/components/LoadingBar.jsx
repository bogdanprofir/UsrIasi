import React from 'react';
import { motion } from 'framer-motion';

const LoadingBar = () => {
  const barVariants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1,
        ease: 'circIn',
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial" // Adding exit for smooth removal if needed
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#002A59] px-4 py-24"
    >
      <motion.div
        transition={{
          staggerChildren: 0.25,
          delayChildren: 0.1, // Add a slight delay between children for better effect
        }}
        variants={{
          animate: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex gap-2"
      >
        <motion.div
          variants={barVariants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={barVariants}
          className="h-12 w-2 bg-white"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingBar;
