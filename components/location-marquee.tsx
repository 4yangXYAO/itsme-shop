"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-context"

export function LocationMarquee() {
  const { t } = useLanguage()
  const marqueeRef = useRef<HTMLDivElement>(null)

  const marqueeItems = [
    { text: t("OPEN 24 HOURS", "BUKA 24 JAM"), highlight: true },
    { text: "HOOKAH LOUNGE", highlight: false },
    { text: "TATTOO STUDIO", highlight: false },
    { text: "ALL OF BALI", highlight: false },
    { text: "DALUNG, BADUNG", highlight: false },
    { text: "CIA HOUSE", highlight: false },
  ]

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed
      if (position <= -marquee.scrollWidth / 2) {
        position = 0
      }
      marquee.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-8 bg-secondary overflow-hidden border-y border-border">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-12 mx-12">
            <span className={`font-serif text-xl md:text-2xl tracking-[0.15em] ${item.highlight ? "text-primary" : "text-foreground"}`}>
              {item.text}
            </span>
            <span className="text-primary text-2xl">•</span>
          </div>
        ))}
      </div>
    </section>
  )
}
