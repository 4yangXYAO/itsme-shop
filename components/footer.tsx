"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import type { Screen } from "@/app/page"

const WHATSAPP_NUMBER = "6281234567890"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

interface FooterProps {
  activeScreen: Screen
  onNavigate: (screen: Screen) => void
}

export function Footer({ activeScreen, onNavigate }: FooterProps) {
  const { t } = useLanguage()

  function handleNav(screen: Screen) {
    onNavigate(screen)
  }

  return (
    <footer className="py-16 px-6 lg:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-serif text-2xl tracking-wider text-foreground">
              ITSME <span className="text-primary">SHISHA</span> &amp; <span className="text-primary">TATTOO</span>
            </span>
            <p className="text-muted-foreground mt-4 max-w-md">
              {t(
                "Premium shisha lounge and custom tattoo studio in Bali. Open 24 hours at Perumahan Graha Tibung Sari, Dalung, Badung (Cia House).",
                "Lounge shisha premium dan studio tattoo custom di Bali. Buka 24 jam di Perumahan Graha Tibung Sari, Dalung, Badung (Cia House)."
              )}
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com/its_me_shisha_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram Shisha"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/its_me_tatto_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram Tattoo"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-foreground mb-6">
              {t("Quick Links", "Navigasi")}
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNav("menu")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("Shisha Menu", "Menu Shisha")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("gallery")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("Gallery", "Galeri")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("tattoo")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("Tattoo Pricelist", "Harga Tattoo")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("locations")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("Location", "Lokasi")}
                </button>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-foreground mb-6">
              {t("Contact & Location", "Kontak & Lokasi")}
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                <div className="hover:text-primary transition-colors">
                    <div>+62 822 6647 5348</div>
                    <div>+62 813 3993 180</div>
                </div>

                </Link>
              </li>
              <li>Perumahan Graha Tibung Sari No. 7</li>
              <li>Dalung, Badung (ItsMe Studio)</li>
              <li className="text-primary font-medium">
                {t("Open 24 Hours", "Buka 24 Jam")}
              </li>
              <li className="pt-2 border-t border-border">
                <Link
                  href="https://instagram.com/its_me_shisha_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @its_me_shisha
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/its_me_tatto_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @its_me_tatto_
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ItsMe Hookah &amp; Tattoo.{" "}
            {t("All rights reserved.", "Hak cipta dilindungi.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
