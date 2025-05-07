"use client"

import { cn } from "@/lib/utils"
import {
  IconArrowUp,
  IconBrandGithub,
  IconMenu2,
  IconX,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { ModeToggle } from "../mode-toggle"
import { Logo } from "../svg/logo"
import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

const links = [
  {
    title: "All",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
    isComingSoon: true,
  },
  {
    title: "About",
    href: "/about",
    isComingSoon: true,
  },
]

const pathNameDisableHeaderScroll = [""]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const pathname = usePathname()

  const isDisableHeaderScroll = pathNameDisableHeaderScroll.includes(pathname)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (isDisableHeaderScroll) {
      setIsScrolled(false)
      return
    }

    if (currentScrollY === 0) {
      setIsScrolled(false)
    } else if (currentScrollY > 0) {
      setIsScrolled(true)
    }

    lastScrollY.current = currentScrollY
  }, [isDisableHeaderScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll, isDisableHeaderScroll])

  return (
    <>
      <header
        className={cn(
          "top-8 sm:top-10 z-50",
          !isDisableHeaderScroll && "sticky"
        )}
      >
        <div
          className={cn(
            "mx-auto flex justify-between gap-10 items-center transition-all duration-500 p-4 z-50",
            isScrolled
              ? "bg-white/90 backdrop-blur-md md:p-6 dark:bg-zinc-900/90 xl:w-[90%] shadow-lg shadow-black/5 dark:shadow-white/5 -translate-y-8 md:rounded-2xl border border-gray-200/20 dark:border-gray-700/20"
              : "bg-transparent w-full xl:w-[70%]"
          )}
        >
          <div className="flex items-center gap-2">
            <Logo className="size-14 hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex-1 items-center gap-6 justify-center hidden sm:flex">
            {links.map((link) => (
              <HeaderLink
                key={link.title}
                title={link.title}
                href={link.href}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={"https://github.com/Kyoz004"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <IconBrandGithub className="text-gray-700 dark:text-gray-300" />
            </a>
            <ModeToggle />

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 sm:hidden"
                >
                  <IconMenu2 />
                  <span className="sr-only">Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="min-h-dvh">
                <DrawerHeader className="flex justify-between">
                  <DrawerTitle className="flex items-center gap-2">
                    <Logo className="size-14" />
                    dolyanhkiet.id.vn
                  </DrawerTitle>
                  <DrawerClose
                    asChild
                    className="self-end -translate-y-14 z-50"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="size-8"
                    >
                      <IconX />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="px-6 flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="flex items-center gap-2 font-medium text-xl"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {link.title}
                      {link.isComingSoon && (
                        <span className="text-sm bg-blue-300/10 text-blue-500 px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>

      {isDisableHeaderScroll && <ScrollToTopButton />}
    </>
  )
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999]"
    >
      <Button
        variant="outline"
        size="icon"
        className="size-12 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md border-none shadow-lg shadow-purple-500/20 dark:shadow-blue-500/20 rounded-full p-2 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-blue-500/30 transition-all duration-300"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <IconArrowUp className="text-white" />
      </Button>
    </motion.div>
  )
}

const HeaderLink = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-xl",
        isActive
          ? "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 shadow-sm"
          : "text-neutral-500 dark:text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
      )}
    >
      <span className="relative z-10">{title}</span>
      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl" />
      )}
    </Link>
  )
}
