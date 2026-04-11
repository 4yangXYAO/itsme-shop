"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

/* ─── Data ─────────────────────────────────────────────── */
const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
  "/videos/video7.mp4",
  "/videos/video8.mp4",
  "/videos/video9.mp4",
  "/videos/video10.mp4",
]

const photos = [
  { src: "/gallery/photo1.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo2.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo3.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo4.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo5.jpg", alt: "ItsMe Hookah & Tattoo" },
  { src: "/gallery/photo6.jpg", alt: "ItsMe Hookah & Tattoo" },
]

/* ─── Video Card ────────────────────────────────────────── */
function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause(); setPlaying(false) }
    else { videoRef.current.play(); setPlaying(true) }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div
      className="relative group aspect-[9/16] bg-black overflow-hidden cursor-pointer"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onEnded={() => setPlaying(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
          {playing
            ? <Pause className="w-6 h-6 text-white fill-white" />
            : <Play className="w-6 h-6 text-white fill-white ml-1" />}
        </div>
      </div>
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors"
        aria-label="Toggle mute"
      >
        {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
      </button>
    </div>
  )
}

/* ─── Main Gallery Page ─────────────────────────────────── */
export function GalleryPage() {
  const { t } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const prev = () => setSelectedIndex((i) => (i != null ? (i - 1 + photos.length) % photos.length : 0))
  const next = () => setSelectedIndex((i) => (i != null ? (i + 1) % photos.length : 0))

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* ── Video Gallery ── */}
        <section>
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              {t("Our Vibe", "Suasana Kami")}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
              {t("Video Gallery", "Galeri Video")}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {t(
                "Click any video to play. Tap the volume icon to unmute.",
                "Klik video untuk memutar. Tap ikon suara untuk membuka suara."
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {videos.map((src, idx) => (
              <VideoCard key={idx} src={src} />
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="flex items-center gap-6">
          <div className="flex-1 border-t border-border" />
          <span className="text-primary text-2xl">✦</span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* ── Photo Gallery ── */}
        <section className="pb-12">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              {t("The Space", "Tempat Kami")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
              {t("Photo Gallery", "Galeri Foto")}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {t(
                "A look inside ItsMe Hookah & Tattoo. Click any photo to enlarge.",
                "Intip suasana di ItsMe. Klik foto untuk memperbesar."
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Lightbox ── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-3xl max-h-[85vh] mx-16"
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
          <button
            className="absolute right-4 w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
