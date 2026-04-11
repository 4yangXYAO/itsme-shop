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

const navItems: { screen: Screen; labelEn: string; labelId: string }[] = [
  { screen: "menu", labelEn: "Hookah", labelId: "Hookah" },
  { screen: "tattoo", labelEn: "Tattoo", labelId: "Tattoo" },
  { screen: "gallery", labelEn: "Gallery", labelId: "Galeri" },
  { screen: "locations", labelEn: "Location", labelId: "Lokasi" },
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

  function handleNav(screen: Screen) {
    onNavigate(screen)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/40 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/30 px-6 py-4 lg:px-12">
      <nav className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation - Left */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, 2).map(({ screen, labelEn, labelId }) => (
            <button
              key={screen}
              onClick={() => handleNav(screen)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors border-b-2 pb-0.5 ${activeScreen === screen
                ? "text-primary border-primary"
                : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                }`}
            >
              {t(labelEn, labelId)}
            </button>
          ))}
        </div>

        {/* Logo - Center */}
        <button
          onClick={() => handleNav("home")}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <span className="font-serif text-xl lg:text-2xl tracking-wider text-foreground">
            ITSME <span className="text-primary">HOOKAH</span> &amp;{" "}
            <span className="text-primary">TATTOO</span>
          </span>
        </button>

        {/* Desktop Navigation - Right */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.slice(2).map(({ screen, labelEn, labelId }) => (
            <button
              key={screen}
              onClick={() => handleNav(screen)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors border-b-2 pb-0.5 ${activeScreen === screen
                ? "text-primary border-primary"
                : "text-foreground hover:text-primary border-transparent hover:border-primary/50"
                }`}
            >
              {t(labelEn, labelId)}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="text-sm uppercase tracking-[0.15em] border border-border hover:border-primary hover:text-primary px-3 py-1.5 transition-colors"
            aria-label="Toggle language"
          >
            {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] bg-green-600 text-white hover:bg-green-700 px-4 py-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile: Language toggle + WA */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-xs uppercase border border-border hover:border-primary hover:text-primary px-2 py-1.5 transition-colors"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
          <Button
            size="sm"
            className="bg-green-600 text-white hover:bg-green-700 uppercase tracking-wider text-xs"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              WA
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/90 supports-[backdrop-filter]:bg-black/60 supports-[backdrop-filter]:backdrop-blur-md">
          <div className="flex flex-col h-full">
            {/* Top Action Bar */}
            <div className="flex items-center justify-between px-6 py-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="font-serif text-lg tracking-wider text-foreground">
                ITSME <span className="text-primary">HOOKAH</span> &amp; <span className="text-primary">TATTOO</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="text-xs uppercase border border-border hover:border-primary hover:text-primary px-2 py-1.5 transition-colors"
                >
                  {lang === "id" ? "EN" : "ID"}
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white hover:bg-green-700 px-3 py-1.5 text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4" /> WA
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 pt-8 pb-10">
              {navItems.map(({ screen, labelEn, labelId }) => (
                <button
                  key={screen}
                  onClick={() => handleNav(screen)}
                  className={`text-xl uppercase tracking-[0.18em] leading-relaxed transition-colors font-serif ${activeScreen === screen
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {t(labelEn, labelId)}
                </button>
              ))}

              {/* About link in mobile only */}
              <button
                onClick={() => handleNav("about")}
                className={`text-xl uppercase tracking-[0.18em] leading-relaxed transition-colors font-serif ${activeScreen === "about"
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
    </header>
  )
}
