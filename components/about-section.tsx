"use client"

import { useLanguage } from "@/components/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-8">
          {t("Smoke & Ink Culture", "Budaya Asap & Tinta")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          {t(
            "At ItsMe Hookah & Tattoo, we unite two timeless art forms under one roof. Our premium hookah selection is crafted from quality imported tobacco, while our skilled tattoo artists bring your visions to life with custom designs that tell your story.",
            "Di ItsMe Hookah & Tattoo, kami menyatukan dua seni abadi dalam satu atap. Pilihan hookah premium kami menggunakan tembakau impor berkualitas, sementara artist tattoo kami yang berpengalaman mewujudkan visi kamu menjadi karya seni di tubuh."
          )}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t(
            "Located at Perumahan Graha Tibung Sari, Dalung, Badung (Cia House), we're open 24 hours. Drop by anytime or book a tattoo consultation via WhatsApp!",
            "Berlokasi di Perumahan Graha Tibung Sari, Dalung, Badung (Cia House), kami buka 24 jam. Datang kapan saja atau booking konsultasi tattoo via WhatsApp!"
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl text-primary">24H</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 block">
              {t("Open Daily", "Buka Setiap Hari")}
            </span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl text-primary">Buy 2</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 block">
              {t("Get 1 Free Shisha", "Gratis 1 Shisha")}
            </span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl text-primary">350K</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 block">
              {t("Tattoo Start From", "Tattoo Mulai Dari")}
            </span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl text-primary">3JT</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 block">
              {t("Full Back Tattoo", "Tattoo Full Back")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
