"use client"

import { Gift, AlertCircle, Bike } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { ShishaOrderBuilder } from "@/components/shisha-order-builder"

export function MenuSection() {
  const { lang, t } = useLanguage()

  return (
    <section id="menu" className="bg-background overflow-x-hidden">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden bg-neutral-950 flex items-end">
        {/* Layered CSS ambient background */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 30% 70%, oklch(0.45 0.12 55 / 0.35) 0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 70% 40%, oklch(0.35 0.10 80 / 0.25) 0%, transparent 65%),
              radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.15 0.05 60 / 0.6) 0%, transparent 80%),
              linear-gradient(160deg, oklch(0.10 0.02 80) 0%, oklch(0.06 0 0) 60%)
            `,
          }}
        />
        {/* Subtle texture dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Golden decorative line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="mx-4 text-primary/20 font-serif text-5xl select-none">✦</div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        {/* Overlay gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        {/* Hero text */}
        <div className="relative z-10 w-full px-6 pb-8 md:pb-10 max-w-7xl mx-auto">
          <span className="text-primary uppercase tracking-[0.35em] text-xs">
            {t("Premium Experience", "Pengalaman Premium")}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 leading-tight">
            {t("Shisha Menu", "Menu Shisha")}
          </h1>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* ── Promo Banner ─────────────────────────────────────────────────── */}
        <div className="bg-primary/10 border border-primary/30 p-4 sm:p-5 mb-10 sm:mb-14 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-1">
            <Gift className="w-5 h-5 text-primary" />
            <span className="font-serif text-lg sm:text-xl md:text-2xl text-primary">
              {t("Special Promo!", "Promo Spesial!")}
            </span>
          </div>
          <p className="text-foreground text-sm sm:text-base md:text-lg font-medium">
            {t("cek cek")}
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            {t("Valid everyday, no minimum order", "Berlaku setiap hari, tidak ada minimum order")}
          </p>
        </div>

        {/* ── Section Intro ─────────────────────────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-primary uppercase tracking-[0.3em] text-xs sm:text-sm">
            {t("Build Your Order", "Buat Pesananmu")}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mt-2 sm:mt-3">
            {t("Choose & Order via WhatsApp", "Pilih & Pesan via WhatsApp")}
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-3 text-sm sm:text-base max-w-xl mx-auto">
            {t(
              "Select your package and flavors below, then tap Order to send us a pre-filled message.",
              "Pilih paket dan rasa di bawah, lalu tap Pesan untuk kirim pesan langsung ke kami."
            )}
          </p>
        </div>

        {/* ── Interactive Order Builder ────────────────────────────────────── */}
        <div className="overflow-x-auto">
          <ShishaOrderBuilder />
        </div>

        {/* ── Additional Notes ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
          <div className="border border-border bg-secondary/20 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <AlertCircle className="w-5 h-5 text-primary shrink-0" />
              <h3 className="font-serif text-lg sm:text-xl text-foreground">
                {t("Additional Information", "Informasi Tambahan")}
              </h3>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              {[
                { en: "Extra 1 portion flavor: +Rp100.000", id: "Tambah 1 porsi rasa: +Rp100.000" },
                { en: "Extra charcoal (carkol): +Rp50.000", id: "Tambah arang (carkol): +Rp50.000" },
                { en: "Delivery to Ubud, Jimbaran, Nusa Dua, Uluwatu: +Rp150.000", id: "Delivery ke Ubud, Jimbaran, Nusa Dua, Uluwatu: +Rp150.000" },
                { en: "Open 24 Hours — Delivery Available", id: "Buka 24 Jam — Delivery Tersedia" },
              ].map((note, idx, arr) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary mt-0.5">—</span>
                  <span className={idx === arr.length - 1 ? "text-primary font-medium" : ""}>
                    {lang === "en" ? note.en : note.id}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-border">
              <Bike className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                {t(
                  "Delivery coverage: Ubud · Jimbaran · Nusa Dua · Uluwatu",
                  "Area delivery: Ubud · Jimbaran · Nusa Dua · Uluwatu"
                )}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
