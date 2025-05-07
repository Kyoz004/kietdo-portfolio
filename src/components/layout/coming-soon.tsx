"use client"

import { useEffect, useState } from "react"
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { Logo } from "../svg/logo"
import { useRouter } from "next/navigation"
import { FullScreen } from "../full-screen"

export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <FullScreen className="flex-col">
      <Terminal>
        <TypingAnimation>> pnpm dlx dolyanhkiet@ai-web init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Setting up AI integration framework. Using Python.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Configuring Flask for backend development.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Integrating TensorFlow for machine learning models.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Implementing CAPTCHA solving module.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Building API endpoints for external services.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Developing image diagnosis with camera input.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Optimizing machine learning models for performance.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Setting up responsive design with Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Adding real-time processing capabilities.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ {pageName}:</span>
          <span className="pl-2">- Coming Soon: AI-powered web platform</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! AI web platform initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          Launching soon at kald.vn
        </TypingAnimation>
      </Terminal>

      <div className="flex mt-10 justify-center text-center ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo className="size-5" />
          <span>Back to home</span>
        </HoverBorderGradient>
      </div>
    </FullScreen>
  )
}