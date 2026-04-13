"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LocationMarquee } from "@/components/location-marquee"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { TattooSection } from "@/components/tattoo-section"
import { LocationsSection } from "@/components/locations-section"
import { GalleryPage } from "@/components/gallery-page"
import { Footer } from "@/components/footer"
import { ScreenWrapper } from "@/components/screen-wrapper"

export type Screen = "home" | "menu" | "tattoo" | "gallery" | "locations" | "about"

const slideTransition = {
  duration: 0.38,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home")
  const [direction, setDirection] = useState(1)

  function navigate(target: Screen) {
    setDirection(target === "home" ? -1 : 1)
    setScreen(target)
  }

  function goBack() {
    navigate("home")
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed header always rendered on top */}
      <Header activeScreen={screen} onNavigate={navigate} />

      <AnimatePresence mode="wait" custom={direction}>
        {screen === "home" && (
          <motion.main
            key="home"
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? "-30%" : "100%",
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({
                x: dir > 0 ? "-30%" : "100%",
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="min-h-screen bg-background will-change-transform"
          >
            <HeroSection onNavigate={navigate} />
            <LocationMarquee />
            <AboutSection />
            <Footer activeScreen={screen} onNavigate={navigate} />
          </motion.main>
        )}

        {screen === "menu" && (
          <ScreenWrapper
            key="menu"
            screenKey="menu"
            
            title="Menu"
            subtitle="Hookah & Shisha Selection"
            onBack={goBack}
            direction={direction}
            
          >
            <LocationMarquee /> 
            <MenuSection />
          </ScreenWrapper>
        )}

        {screen === "tattoo" && (
          <ScreenWrapper
            key="tattoo"
            screenKey="tattoo"
            title="Tattoo"
            subtitle="Body Art Studio"
            onBack={goBack}
            direction={direction}
          >
            <TattooSection />
          </ScreenWrapper>
        )}

        {screen === "gallery" && (
          <ScreenWrapper
            key="gallery"
            screenKey="gallery"
            title="Gallery"
            subtitle="Photos & Videos"
            onBack={goBack}
            direction={direction}
          >
            <GalleryPage />
          </ScreenWrapper>
        )}

        {screen === "locations" && (
          <ScreenWrapper
            key="locations"
            screenKey="locations"
            title="Location"
            subtitle="Find Us"
            onBack={goBack}
            direction={direction}
          >
            <LocationsSection />
          </ScreenWrapper>
        )}

        {screen === "about" && (
          <ScreenWrapper
            key="about"
            screenKey="about"
            title="About"
            subtitle="Our Story"
            onBack={goBack}
            direction={direction}
          >
            <AboutSection />
          </ScreenWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}
