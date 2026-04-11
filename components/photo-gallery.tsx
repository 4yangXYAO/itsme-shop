"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const photos = [
  { src: "/gallery/photo1.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo2.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo3.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo4.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo5.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo6.jpg", alt: "ItsMe Hookah & Tattoo" },
]

export function PhotoGallery() {
  const { t } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (idx: number) => setSelectedIndex(idx)
  const closeLightbox = () => setSelectedIndex(null)
  const prev = () => setSelectedIndex((i) => (i != null ? (i - 1 + photos.length) % photos.length : 0))
  const next = () => setSelectedIndex((i) => (i != null ? (i + 1) % photos.length : 0))

  return (
    <section id="photos" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            {t("The Space", "Tempat Kami")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            {t("Photo Gallery", "Galeri Foto")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            {t(
              "A look inside the unique ambiance of ItsMe Hookah & Tattoo.",
              "Intip suasana unik di ItsMe Hookah & Tattoo."
            )}
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              width={1200}
              height={900}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  )
}
