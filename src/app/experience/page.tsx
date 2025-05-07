import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Do Ly Anh Kiet",
  description:
    "Explore the professional journey of Do Ly Anh Kiet - Software Development Engineer with experience in data science, machine learning, and backend development.",
  openGraph: {
    title: "Experience | Do Ly Anh Kiet",
    description:
      "Software Development Engineer with hands-on experience in data science, machine learning, and backend development.",
    url: "https://dolyanhkiet.id.vn/experience",
    siteName: "Do Ly Anh Kiet",
    images: [
      // {
      //   url: "https://dolyanhkiet.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Do Ly Anh Kiet Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Do Ly Anh Kiet",
    description:
      "Check out Do Ly Anh Kiet's past work and achievements in software development.",
    //   images: ["https://dolyanhkiet.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://dolyanhkiet.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}