import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Kiet Do Portfolio",
  description:
    "Explore Kiet Do's portfolio – a skilled Python Developer specializing in data science, machine learning, and backend development. Showcasing innovative projects, Python expertise, and high-performance applications.",
  keywords: [
    "Python Developer",
    "Data Scientist",
    "Java Engineer",
    "Kiet Do Portfolio",
    "Software Development",
    "Machine Learning",
    "Data Engineering",
    "AI Development",
    "Backend Technologies",
  ],
  openGraph: {
    title: "Kiet Do Portfolio",
    description:
      "Discover Kiet Do's expertise in Python Development, Data Science, and Machine Learning. View projects, case studies, and technical skills.",
    url: "https://dolyanhkiet.id.vn",
    type: "website",
    // images: [
    //   {
    //     url: ".png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Kiet Do Portfolio",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiet Do Portfolio",
    description:
      "Explore Kiet Do's frontend projects and expertise in React, and modern web development.",
    // images: [
    //   ".png",
    // ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
