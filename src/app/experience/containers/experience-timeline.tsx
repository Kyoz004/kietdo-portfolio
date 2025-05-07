// import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "October 2024 - April 2025",
    content: (
      <div>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Software Development Engineer at Advanced Technology & Equipment Company Limited
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Part-time remote position developing automation systems and AI solutions.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
            ✅ Built web automation system using Selenium WebDriver (Headless Chrome) with Jenkins CI/CD pipelines
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
            ✅ Developed ETL pipelines using Python (Pandas, PostgreSQL) with automated data validation
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
            ✅ Created AI Camera System with computer vision solutions using deep learning frameworks
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Implemented real-time object detection and recognition algorithms optimized for edge devices
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/experience/digital-fortress.jpg"
            alt="Advanced Technology & Equipment project screenshot"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full shadow-md"
          />
        </div> */}
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Van Lang University
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Data Science & Engineering (October 2022 - 2026) • GPA: 3.2/4.0
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
            ✅ 10% Tuition Scholarship (2023-2024)
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
            ✅ Microsoft Office Specialist (MOS) Excel Certification
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ English B2 Level (University Graded)
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Projects",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            AI-driven News Sentiment Analysis Platform
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Full-stack sentiment analysis system for real-time analysis of news articles.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Architected and developed using Python, Flask, PostgreSQL, and Docker
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Implemented advanced NLP pipelines for real-time sentiment analysis
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Engineered scalable PostgreSQL architecture with SQLite migration scripts
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Created interactive analytics dashboard for sentiment trends
            </div>
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            <a href="https://github.com/Kyoz004/AI-driven-News-Sentiment-Analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Source Code</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Brain Tumor Detection Using Deep Learning
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Medical imaging system for detecting and classifying brain tumors from MRI scans.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Developed high accuracy system using Xception CNN architecture
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Implemented transfer learning with ImageNet weights and advanced data augmentation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-2">
              ✅ Built full-stack web application using React, Flask, and TensorFlow
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Deployed model with Git LFS for efficient distribution
            </div>
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            <a href="https://github.com/Kyoz004/DeepLearning-BrainTumor-Classifier" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Source Code</a>
            <span className="mx-2">•</span>
            <a href="https://www.kaggle.com/code/kietdo104/xception-finetuned-brainmritumor-classifier" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Kaggle Notebook</a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Technical Skills",
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Python", "JavaScript", "Java", "Dart", "PHP"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Django", "React", "Node.js", "Flask", "Laravel", "HTML/CSS", "TailwindCSS", "Bootstrap"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Data Technologies
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {["PostgreSQL", "MongoDB", "Neo4j", "Dataiku", "Streamlit"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            DevOps & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Docker", "Jenkins", "Git", "RESTful APIs", "Socket.IO", "Flutter"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function ExperienceTimeline() {
  return (
    <div className="w-full h-full">
      <Timeline data={data} />
    </div>
  );
}
