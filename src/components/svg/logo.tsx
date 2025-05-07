import React from "react";
import { motion } from "framer-motion";

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: { 
      y: 0,
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: [1, 1.2, 1],
      y: [0, -3, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.95],
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      className={`${className || ""} dark:fill-white fill-black cursor-pointer`}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      {["K", "A", "L", "D"].map((letter, i) => (
        <motion.text
          key={i}
          x={2 + i * 20} // Giảm từ 5 thành 2 để dịch sang trái
          y="28"
          fontFamily="'Arial', sans-serif"
          fontSize="24"
          fontWeight="bold"
          letterSpacing="1"
          className="dark:fill-white fill-black"
          variants={letterVariants}
        >
          {letter}
        </motion.text>
      ))}
    </motion.svg>
  );
};