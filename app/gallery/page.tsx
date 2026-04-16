import type { Metadata } from 'next'
import { GalleryPage } from "@/components/gallery-page"

export const metadata: Metadata = {
  title: 'Gallery – Photos & Videos | ItsMe Hookah & Tattoo Bali',
  description: 'Browse photos and videos from ItsMe Hookah & Tattoo – premium shisha lounge and tattoo studio in Bali. See our hookah setups, tattoo work, and lounge atmosphere.',
  alternates: {
    canonical: 'https://itsmebali.com/gallery',
  },
  openGraph: {
    title: 'Gallery – ItsMe Hookah & Tattoo Bali',
    description: 'Photos and videos from ItsMe Hookah & Tattoo – premium shisha lounge and tattoo studio in Bali.',
    url: 'https://itsmebali.com/gallery',
    type: 'website',
  },
}

export default function Gallery() {
  return <GalleryPage />
}
