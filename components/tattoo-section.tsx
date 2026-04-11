"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const WHATSAPP_NUMBER = "6281234567890"

const tattooStyles = [
  {
    name: { en: "Small Tattoo", id: "Tattoo Kecil" },
    description: {
      en: "Perfect for your first ink or adding to your collection",
      id: "Cocok untuk tato pertama atau menambah koleksimu",
    },
    image: "/images/tattoo-fine-line.jpg",
    startingPrice: "Start From IDR 350.000",
  },
  {
    name: { en: "Arm Tattoo (Tangan)", id: "Tattoo Tangan" },
    description: {
      en: "Sleeves, forearm, bicep, and hand designs",
      id: "Lengan, lengan bawah, bisep, dan tangan",
    },
    image: "/images/tattoo-blackwork.jpg",
    startingPrice: "Start From IDR 500.000",
  },
  {
    name: { en: "Leg Tattoo (Kaki)", id: "Tattoo Kaki" },
    description: {
      en: "Thigh, calf, and ankle artwork",
      id: "Paha, betis, dan pergelangan kaki",
    },
    image: "/images/tattoo-traditional.jpg",
    startingPrice: "Start From IDR 500.000",
  },
  {
    name: { en: "Full Back", id: "Full Back" },
    description: {
      en: "Large-scale masterpiece covering your entire back",
      id: "Mahakarya skala besar yang menutupi seluruh punggung",
    },
    image: "/images/tattoo-realism.jpg",
    startingPrice: "IDR 3.000.000",
  },
]

export function TattooSection() {
  const { lang, t } = useLanguage()

  const WHATSAPP_LINK_TATTOO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t(
      "Hi ItsMe Hookah & Tattoo! I would like to book a tattoo consultation.",
      "Halo ItsMe Hookah & Tattoo! Saya ingin konsultasi tattoo."
    )
  )}`

  return (
    <section id="tattoo" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            {t("Body Art Studio", "Studio Seni Tato")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            {t("Tattoo Pricelist", "Harga Tattoo")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            {t(
              "Our artists specialize in various styles — from traditional Balinese to contemporary designs.",
              "Artist kami ahli dalam berbagai gaya — dari tradisional Bali hingga kontemporer."
            )}
          </p>
        </div>

        {/* Tattoo Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tattooStyles.map((style) => (
            <div
              key={style.name.en}
              className="group relative overflow-hidden bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={style.image}
                  alt={lang === "en" ? style.name.en : style.name.id}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      {lang === "en" ? style.name.en : style.name.id}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 max-w-xs">
                      {lang === "en" ? style.description.en : style.description.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-serif text-lg md:text-xl">
                      {style.startingPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <div className="mt-20 bg-card p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                {t("Ready to Get Inked?", "Siap Dapat Tato?")}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-xl">
                {t(
                  "Book a consultation with our artists via WhatsApp to discuss your design. Walk-ins welcome.",
                  "Reservasi konsultasi dengan artist kami via WhatsApp. Walk-in juga diterima."
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 uppercase tracking-[0.2em] text-sm px-8 py-6"
                asChild
              >
                <a href={WHATSAPP_LINK_TATTOO} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("Book via WhatsApp", "Booking via WhatsApp")}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] text-sm px-8 py-6 bg-transparent"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  {t("View Portfolio", "Lihat Portfolio")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
