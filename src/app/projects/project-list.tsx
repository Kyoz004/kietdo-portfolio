"use client"

import Image from "next/image"
import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export function ProjectCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} techStack={card.techStack} />
  ))

  return (
    <div className="my-10">
      <Carousel items={cards} />
    </div>
  )
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Explore my innovative projects.
              </span>{" "}
              Discover the technologies and solutions I’ve developed, from AI-driven systems to automation tools.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Project mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

const data = [
  {
    category: "AI Sentiment Analysis",
    title: "AI-driven News Sentiment Analysis Platform",
    src: "/images/mockup/ai_sentiment_analysis_mockup.png",
    content: <DummyContent />,
    techStack: ["Python", "Flask", "PostgreSQL", "Docker"],
  },
  {
    category: "Medical Imaging",
    title: "Brain Tumor Detection Using Deep Learning",
    src: "/images/mockup/brain_tumor_detection_mockup.png",
    content: <DummyContent />,
    techStack: ["React", "Flask", "TensorFlow"],
  },
  {
    category: "Web Automation",
    title: "Web Automation System (Crawler App)",
    src: "/images/mockup/crawler_app_mockup.png",
    content: <DummyContent />,
    techStack: ["Selenium WebDriver", "Jenkins", "Python"],
  },
  {
    category: "Upcoming AI Platform",
    title: "AI-powered Web Platform",
    src: "/images/mockup/ai_web_platform_mockup.png",
    content: <DummyContent />,
    techStack: ["Python", "Flask", "TensorFlow", "Tailwind CSS"],
  },
  {
    category: "Online Bookstore",
    title: "TurnipBook-Store",
    src: "/images/mockup/turnipbook_store_mockup.png",
    content: <DummyContent />,
    techStack: ["React", "Flask", "PostgreSQL"],
  },
]