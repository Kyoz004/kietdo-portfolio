"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react"
import { ElementType } from "react"

type AnimationType = "text" | "word" | "character" | "line"
export type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"
  | "glowingText"
  | "typewriter"
  | "gradientShift"
  | "bounceIn"
  | "flipIn"
  | "rotateIn"

interface TextAnimateProps extends MotionProps {
  /**
   * The text content to animate
   */
  children: string
  /**
   * The class name to be applied to the component
   */
  className?: string
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The duration of the animation
   */
  duration?: number
  /**
   * Custom motion variants for the animation
   */
  variants?: Variants
  /**
   * The element type to render
   */
  as?: ElementType
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean
  /**
   * Whether to animate only once
   */
  once?: boolean
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
}

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.3 },
      },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        y: -20,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        y: 20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        x: -20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        x: 20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 300,
          },
        },
      },
      exit: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 300,
          },
        },
      },
      exit: {
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  glowingText: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, textShadow: "0 0 0px rgba(59, 130, 246, 0)" },
      show: {
        opacity: 1,
        textShadow: [
          "0 0 0px rgba(59, 130, 246, 0)",
          "0 0 10px rgba(59, 130, 246, 0.5)",
          "0 0 20px rgba(59, 130, 246, 0.3)",
          "0 0 10px rgba(59, 130, 246, 0.5)",
          "0 0 0px rgba(59, 130, 246, 0)",
        ],
        transition: {
          opacity: { duration: 0.3 },
          textShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        },
      },
      exit: {
        opacity: 0,
        textShadow: "0 0 0px rgba(59, 130, 246, 0)",
        transition: { duration: 0.3 },
      },
    },
  },
  typewriter: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, width: "0%" },
      show: {
        opacity: 1,
        width: "100%",
        transition: {
          width: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.01 },
        },
      },
      exit: {
        opacity: 0,
        width: "0%",
        transition: {
          width: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.01, delay: 0.5 },
        },
      },
    },
  },
  gradientShift: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, color: "rgba(59, 130, 246, 0)" },
      show: {
        opacity: 1,
        color: [
          "rgba(59, 130, 246, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(236, 72, 153, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(59, 130, 246, 1)",
        ],
        transition: {
          opacity: { duration: 0.3 },
          color: { duration: 3, repeat: Infinity, repeatType: "reverse" },
        },
      },
      exit: {
        opacity: 0,
        color: "rgba(59, 130, 246, 0)",
        transition: { duration: 0.3 },
      },
    },
  },
  bounceIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.3, y: 20 },
      show: {
        opacity: 1,
        scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
        y: 0,
        transition: {
          opacity: { duration: 0.3 },
          scale: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
          y: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        scale: 0.3,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  flipIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: 90, y: 20 },
      show: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: {
          opacity: { duration: 0.3 },
          rotateX: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        rotateX: 90,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  rotateIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -45, scale: 0.5 },
      show: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          opacity: { duration: 0.3 },
          rotate: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.5, ease: "easeOut" },
        },
      },
      exit: {
        opacity: 0,
        rotate: 45,
        scale: 0.5,
        transition: { duration: 0.3 },
      },
    },
  },
}

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion.create(Component)

  let segments: string[] = []
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/)
      break
    case "character":
      segments = children.split("")
      break
    case "line":
      segments = children.split("\n")
      break
    case "text":
    default:
      segments = [children]
      break
  }

  const finalVariants = variants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              opacity: { duration: 0.01, delay },
              delayChildren: delay,
              staggerChildren: duration / segments.length,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              staggerChildren: duration / segments.length,
              staggerDirection: -1,
            },
          },
        },
        item: variants,
      }
    : animation
    ? {
        container: {
          ...defaultItemAnimationVariants[animation].container,
          show: {
            ...defaultItemAnimationVariants[animation].container.show,
            transition: {
              delayChildren: delay,
              staggerChildren: duration / segments.length,
            },
          },
          exit: {
            ...defaultItemAnimationVariants[animation].container.exit,
            transition: {
              staggerChildren: duration / segments.length,
              staggerDirection: -1,
            },
          },
        },
        item: defaultItemAnimationVariants[animation].item,
      }
    : { container: defaultContainerVariants, item: defaultItemVariants }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container as Variants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              by === "character" && "",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  )
}
