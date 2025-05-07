"use client"

import {
  type AnimationVariant,
  TextAnimate,
} from "@/components/magicui/text-animate"
import { Compare } from "@/components/ui/compare"
import { Cover } from "@/components/ui/cover"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { memo, useEffect, useState } from "react"

const texts = [
  "Software Developer",
  "AI Enthusiast",
  "Backend Developer",
  "Data Analyst",
  "Python Developer",
  "NLP Learner",
  "Tech Explorer",
];


const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
  "glowingText",
  "typewriter",
  "gradientShift",
  "bounceIn",
  "flipIn",
  "rotateIn",
]

export const MyUniverse = () => {
  const [currentText, setCurrentText] = useState(texts[0])
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0])
  const [animationDuration, setAnimationDuration] = useState(0.3)

  useEffect(() => {
    // Select premium animations for a more professional look
    const premiumAnimations = [
      "glowingText",
      "gradientShift",
      "bounceIn",
      "flipIn",
      "typewriter",
      "rotateIn",
      "blurInUp",
      "scaleUp"
    ] as AnimationVariant[];

    const interval = setInterval(() => {
      // Update text with smooth transitions
      setCurrentText((prev) => {
        const textIndex = texts.indexOf(prev)
        if (textIndex === texts.length - 1) {
          return texts[0]
        }
        return texts[textIndex + 1]
      })
      
      // Choose a premium animation for professional effect
      const randomAnimation = premiumAnimations[Math.floor(Math.random() * premiumAnimations.length)];
      setCurrentAnimation(randomAnimation);
      
      // Adjust animation duration based on the animation type for optimal effect
      if (randomAnimation === "typewriter" || randomAnimation === "gradientShift") {
        setAnimationDuration(0.5);
      } else if (randomAnimation === "bounceIn" || randomAnimation === "flipIn") {
        setAnimationDuration(0.4);
      } else {
        setAnimationDuration(0.3);
      }
    }, 4000) // Slightly longer interval for better readability
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-20 px-2 md:px-6">
      <div className="flex-1 relative w-full lg:w-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
          <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
          Explore the world I am building, one line at a time.
        </motion.div>
        <div className="flex flex-row gap-4 items-center my-4 lg:my-0 lg:block">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 dark:text-zinc-300 text-zinc-700 text-center lg:text-left">
            Hello<span className="lg:hidden">,</span>
          </motion.h1>

          <Title />
        </div>

        {/* Responsive positioning for floating elements with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-3 py-2 hidden sm:block absolute top-8 left-16 sm:left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block"
          >
            Where Data Meets Code
          </motion.span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-3 py-2 hidden sm:block absolute top-24 right-4 sm:right-10 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="inline-block"
          >
            Clean Code
          </motion.span>
        </motion.div>

        {/* <div className="px-3 py-2 hidden sm:block absolute bottom-36 right-2 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
        </div> */}

        <motion.div
          layout
          className={cn(
            "inline-block py-1.5 px-3 sm:px-4 text-base sm:text-lg md:text-xl font-bold my-5 rounded-lg",
            "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
            "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)]",
            "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
            "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
          )}
        >
          <TextAnimate
            duration={animationDuration}
            animation={currentAnimation}
            by="word"
            startOnView={false}
            className="whitespace-nowrap text-black dark:text-white font-medium"
          >
            {currentText}
          </TextAnimate>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 my-6 md:my-10 font-bold text-center lg:text-left">
          <motion.div
            animate={{ color: ["#3b82f6", "#8b5cf6", "#3b82f6"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-block"
          >
            Python Developer 🐍 | Java Developer ☕
          </motion.div>
          <br />{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-normal italic block mt-2">
            Crafting robust data solutions and efficient algorithms with clean, maintainable code 💻✨
          </motion.span>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <CompareDemo />
      </div>
    </div>
  )
}

export function CompareDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="w-full border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <Compare
        firstImage="/images/slides1.png"
        secondImage="/images/slides2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] w-full"
        slideMode="hover"
      />
    </motion.div>
  )
}

export const Title = memo(() => {
  return (
    <motion.h1 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700 text-center lg:text-left">
      I&apos;m <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Cover>
          <motion.span
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0)", 
                "0 0 15px rgba(59, 130, 246, 0.3)", 
                "0 0 5px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kiet Do
          </motion.span>
        </Cover>
      </motion.span>
    </motion.h1>
  )
})

Title.displayName = "Title"
