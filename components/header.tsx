"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import type { Screen } from "@/app/page"

const WHATSAPP_NUMBER = "6281234567890"

interface HeaderProps {
  activeScreen: Screen
  onNavigate: (screen: Screen) => void
}

const navItems: { screen: Screen; labelEn: string; labelId: string; sectionId?: string }[] = [
  { screen: "menu", labelEn: "Hookah", labelId: "Hookah", sectionId: "shisha" },
  { screen: "tattoo", labelEn: "Tattoo", labelId: "Tattoo", sectionId: "tattoo" },
  { screen: "gallery", labelEn: "Gallery", labelId: "Galeri", sectionId: "galeri" },
  { screen: "locations", labelEn: "Location", labelId: "Lokasi", sectionId: "lokasi" },
  { screen: "home", labelEn: "Reservation", labelId: "Reservasi", sectionId: "reservasi" },
]

export function Header({ activeScreen, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t(
      "Hi ItsMe Hookah & Tattoo! I would like to make a reservation.",
      "Halo ItsMe Hookah & Tattoo! Saya ingin membuat reservasi."
    )
  )}`

  function handleScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  function handleNav(screen: Screen, sectionId?: string) {
    if (sectionId) {
      handleScrollToSection(sectionId)
    }
    onNavigate(screen)
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/40 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/30 px-3 sm:px-6 py-3 sm:py-4 lg:px-12 w-full overflow-x-hidden">
      {/* Desktop Navigation Layout */}
      <nav className="hidden lg:flex items-center justify-between max-w-full">
        {/* Desktop Navigation - Left */}
        <div className="flex items-center gap-8">
          {navItems.slice(0, 2).map(({ screen, labelEn, labelId }) => (
            <button
              key={screen}
              onClick={() => handleNav(screen)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors border-b-2 pb-0.5 whitespace-nowrap ${activeScreen === screen
                ? "text-primary border-primary"
                : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                }`}
            >
              {t(labelEn, labelId)}
            </button>
          ))}
        </div>

        {/* Desktop Logo - Center */}
        <button
          onClick={() => handleNav("home")}
          className="flex-shrink-0"
        >
          <span className="font-serif text-2xl tracking-wider text-foreground whitespace-nowrap">
            ITSME <span className="text-primary">HOOKAH</span> &amp;{" "}
            <span className="text-primary">TATTOO</span>
          </span>
        </button>

        {/* Desktop Navigation - Right */}
        <div className="flex items-center gap-6">
          {navItems.slice(2).map(({ screen, labelEn, labelId }) => (
            <button
              key={screen}
              onClick={() => handleNav(screen)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors border-b-2 pb-0.5 whitespace-nowrap ${activeScreen === screen
                ? "text-primary border-primary"
                : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                }`}
            >
              {t(labelEn, labelId)}
            </button>
          ))}

          {/* Desktop Language Toggle */}
          <button
            onClick={toggleLang}
            className="text-sm uppercase tracking-[0.15em] border border-border hover:border-primary hover:text-primary px-3 py-1.5 transition-colors whitespace-nowrap"
            aria-label="Toggle language"
          >
            {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
          </button>

          {/* Desktop WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] bg-green-600 text-white hover:bg-green-700 px-4 py-2 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Mobile Navigation Layout */}
      <nav className="lg:hidden flex items-center justify-between gap-2 w-full min-h-[44px] relative z-50">
        {/* Mobile: Menu Button */}
                {/* Mobile: Menu Button */}
        <button
          onClick={() => {
            const newState = !isMenuOpen
            setIsMenuOpen(newState)
            
            // Tutup modal shisha menu kalau hamburger dibuka
            if (newState) {
              window.dispatchEvent(new Event("mobileMenuOpen"))
            }
          }}
          className="flex-shrink-0 text-foreground hover:text-primary transition-colors p-1 relative z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
         

        {/* Mobile: Logo (Compact) */}
        <button
          onClick={() => handleNav("home")}
          className="flex-1 min-w-0 px-2 text-center flex-shrink"
        >
          <span className="font-serif text-xs sm:text-sm md:text-base tracking-wider text-foreground line-clamp-2">
            ITSME <span className="text-primary">HOOKAH</span> &amp; <span className="text-primary">TATTOO</span>
          </span>
        </button>

        {/* Mobile: Language toggle + WA (Compact) */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button
            onClick={toggleLang}
            className="text-xs uppercase border border-border hover:border-primary hover:text-primary px-1.5 sm:px-2 py-1 sm:py-1.5 transition-colors whitespace-nowrap text-[10px] sm:text-xs"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
          <Button
            size="sm"
            className="bg-green-600 text-white hover:bg-green-700 uppercase tracking-wider text-xs px-2 sm:px-3 h-8 sm:h-9"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-0.5 sm:gap-1">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">WA</span>
            </a>
          </Button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu Overlay - Outside Header */}
    {isMenuOpen && (
      <div
        className="lg:hidden fixed inset-0 z-40 bg-black/95 supports-[backdrop-filter]:bg-black/60 supports-[backdrop-filter]:backdrop-blur-md"
        style={{ top: "60px" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false)
          }
        }}
      >
    <div className="flex flex-col h-screen">
      {/* Top Menu Title Bar */}
      

      {/* Menu Items */}
      <div
        className="flex flex-col items-center justify-center flex-1 gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:pt-8 pb-8 sm:pb-10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {navItems.map(({ screen, labelEn, labelId, sectionId }) => (
          <button
            key={screen}
            onClick={() => handleNav(screen, sectionId)}
            className={`text-lg sm:text-xl uppercase tracking-[0.18em] leading-relaxed transition-colors font-serif ${
              activeScreen === screen
                ? "text-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            {t(labelEn, labelId)}
          </button>
        ))}

        <button
          onClick={() => handleNav("about")}
          className={`text-lg sm:text-xl uppercase tracking-[0.18em] leading-relaxed transition-colors font-serif ${
            activeScreen === "about"
              ? "text-primary"
              : "text-foreground hover:text-primary"
          }`}
        >
          {t("About", "Tentang")}
        </button>
      </div>
    </div>
  </div>
  )}
  </>
  )
}
