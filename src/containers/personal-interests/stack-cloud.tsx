"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"

// Programming Languages
const programmingLanguages = [
  "javascript",
  "python",
  "java",
  "mysql", // for SQL
  "html5",
  "css3",
  "dart", // Added Dart
  "php",  // Added PHP
]

// Frameworks & Libraries
const frameworks = [
  "react",
  "nodedotjs", // for Node.js
  "django",
  "tailwindcss",
  "flask",      // Added Flask
  "laravel",    // Added Laravel
  "bootstrap",  // Added Bootstrap
  "flutter",    // Added Flutter for mobile development
]

// Tools & Platforms
const tools = [
  "git",
  "docker",
  "googlecloud", // for GCP
  "githubactions", // for CI/CD
  "jenkins",       // Added Jenkins
  "rest",          // Representing RESTful APIs
  "socketdotio",   // Added Socket.IO
  "postgresql",    // Added PostgreSQL
  "mongodb",       // Added MongoDB
  "neo4j",         // Added Neo4j
  "dataiku",       // Added Dataiku
  "streamlit",     // Added Streamlit
]

// Combine all skills
const slugs = [
  ...programmingLanguages,
  ...frameworks,
  ...tools,
]

export function StackCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="scale-75">
        <IconCloud images={images} />
      </div>
    </div>
  )
}