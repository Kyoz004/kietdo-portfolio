import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Kiet Do",
  description:
    "Learn more about Kiet Do - Software Engineer, full-stack developer, and technology enthusiast.",
  keywords: [
    "Kiet Do",
    "About Kiet",
    "Software Engineer",
    "Full-stack Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Kiet Do",
    description:
      "Discover the story and journey of Kiet Do in the world of software engineering.",
    url: "https://dolyanhkiet.id.vn/about",
    siteName: "Kiet Do",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://dolyanhkiet.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kiet Do",
    description:
      "Learn more about Kiet Do - Software Engineer and technology enthusiast.",
    // images: ["https://dolyanhkiet.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://dolyanhkiet.id.vn/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
