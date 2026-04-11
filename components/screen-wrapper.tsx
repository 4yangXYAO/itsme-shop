"use client"

import { motion } from "framer-motion"
import { BackButton } from "@/components/back-button"

interface ScreenWrapperProps {
  title: string
  subtitle?: string
  onBack: () => void
  direction: number
  screenKey: string
  children: React.ReactNode
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

const transition = {
  duration: 0.38,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
}

export function ScreenWrapper({
  title,
  subtitle,
  onBack,
  direction,
  screenKey,
  children,
}: ScreenWrapperProps) {
  return (
    <motion.div
      key={screenKey}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      className="min-h-screen bg-background will-change-transform pt-[65px]"
    >
      {/* Sticky back bar — sits just below the fixed header */}
      <div className="sticky top-[65px] z-40 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <BackButton onClick={onBack} />
          <div>
            <span className="font-serif text-lg tracking-wider text-foreground">
              ITSME{" "}
              <span className="text-primary">{title.toUpperCase()}</span>
            </span>
            {subtitle && (
              <p className="text-xs text-muted-foreground tracking-widest">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Screen content — pt-0 because the sticky bar is inside this wrapper,
          sections already have their own py-24 */}
      <div>{children}</div>
    </motion.div>
  )
}
