"use client"

import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

const WHATSAPP_NUMBER = "6281234567890"
const GOOGLE_MAPS_LINK = "https://maps.google.com/?q=Perumahan+Graha+Tibung+Sari+Dalung+Badung"

export function LocationsSection() {
  const { t } = useLanguage()

  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t(
      "Hi ItsMe Hookah & Tattoo! I am on my way to your location.",
      "Halo ItsMe Hookah & Tattoo! Saya sedang menuju lokasi kalian."
    )
  )}`

  return (
    <section id="locations" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            {t("Visit Us", "Kunjungi Kami")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-4">
            {t("Our Location", "Lokasi Kami")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Experience the finest shisha and custom tattoos at our location in Dalung, Badung.",
              "Nikmati shisha terbaik dan tattoo custom di lokasi kami di Dalung, Badung."
            )}
          </p>
        </div>

        {/* Location Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border overflow-hidden">
            {/* Embedded Map */}
            <div className="relative h-80 md:h-96 overflow-hidden bg-secondary/20">
              <iframe
                src="https://maps.google.com/maps?q=Perumahan+Graha+Tibung+Sari+Dalung+Badung&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ItsMe Hookah & Tattoo Location"
                className="w-full h-full grayscale"
              />
              {/* 24 Hours Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2">
                <span className="text-sm uppercase tracking-wider font-medium">
                  {t("Open 24 Hours", "Buka 24 Jam")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                ItsMe Hookah &amp; Tattoo
              </h3>

              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-lg">
                    Perumahan Graha Tibung Sari, Dalung, Badung
                  </p>
                  <p className="text-muted-foreground">(Cia House)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-foreground text-lg">
                  {t("Open 24 Hours, Every Day", "Buka 24 Jam, Setiap Hari")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 uppercase tracking-[0.2em] text-sm px-8 py-6"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("Chat on WhatsApp", "Chat di WhatsApp")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.2em] text-sm px-8 py-6 bg-transparent"
                  asChild
                >
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    {t("Get Directions", "Petunjuk Arah")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-card border border-border p-6 text-center">
            <span className="text-primary font-serif text-2xl block mb-2">Delivery</span>
            <p className="text-muted-foreground text-sm">
              {t("Throughout", "Seluruh")}
            </p>
            <p className="text-foreground mt-1">
              {t("Bali", "Bali")}
            </p>
          </div>
          <div className="bg-card border border-border p-6 text-center">
            <span className="text-primary font-serif text-2xl block mb-2">Tattoo</span>
            <p className="text-muted-foreground text-sm">
              {t("Starting From", "Mulai Dari")}
            </p>
            <p className="text-foreground mt-1">IDR 350.000</p>
          </div>
          <div className="bg-card border border-border p-6 text-center">
            <span className="text-primary font-serif text-2xl block mb-2">
              {t("Hours", "Jam")}
            </span>
            <p className="text-muted-foreground text-sm">
              {t("We Never Close", "Kami Tidak Pernah Tutup")}
            </p>
            <p className="text-foreground mt-1">24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
