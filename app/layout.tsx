import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/components/language-context'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const BASE_URL = 'https://itsmebali.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ItsMe Hookah & Tattoo Bali – Shisha Lounge & Tattoo Studio | Open 24 Hours',
    template: '%s | ItsMe Hookah & Tattoo Bali',
  },
  description: 'ItsMe Hookah & Tattoo — premium shisha lounge and custom tattoo studio in Bali. Open 24 hours at Perumahan Graha Tibung Sari No. 7, Dalung, Badung. Shisha delivery all Bali. Tattoo from IDR 350K. WhatsApp +62 822 6647 5348.',
  keywords: [
    'hookah bali', 'shisha bali', 'shisha dalung', 'shisha badung', 'hookah delivery bali',
    'tattoo bali', 'tattoo dalung', 'tattoo studio bali', 'tattoo murah bali',
    'itsme hookah', 'itsme tattoo', 'itsme bali', 'itsmebali',
    'shisha 24 jam bali', 'hookah 24 jam', 'lounge shisha bali',
    'bali tattoo studio', 'custom tattoo bali', 'shisha delivery dalung',
    'shisha buy 2 get 1', 'shisha graha tibung sari',
  ],
  authors: [{ name: 'ItsMe Hookah & Tattoo', url: BASE_URL }],
  creator: 'ItsMe Hookah & Tattoo',
  publisher: 'ItsMe Hookah & Tattoo',
  category: 'entertainment',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'id-ID': BASE_URL,
      'en-US': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'ItsMe Hookah & Tattoo Bali',
    title: 'ItsMe Hookah & Tattoo Bali – Premium Shisha Lounge & Tattoo Studio | Open 24/7',
    description: 'Premium shisha lounge and custom tattoo studio in Bali. Open 24 hours. Delivery all Bali. Tattoo from IDR 350K. Located at Perumahan Graha Tibung Sari, Dalung, Badung.',
    images: [
      {
        url: '/assets/hero-hookah-bg.png',
        width: 1200,
        height: 630,
        alt: 'ItsMe Hookah & Tattoo – Premium Shisha Lounge & Tattoo Studio Bali',
      },
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ItsMe Hookah & Tattoo Bali | Open 24 Hours',
    description: 'Premium shisha lounge and custom tattoo studio in Bali. Open 24/7. Delivery all Bali. Tattoo from IDR 350K.',
    images: ['/assets/hero-hookah-bg.png'],
    site: '@its_me_shisha',
    creator: '@its_me_shisha',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: '',   // add Google Search Console verification token here when available
  },
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Dalung, Badung, Bali',
    'geo.position': '-8.6244;115.175',
    'ICBM': '-8.6244, 115.175',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

// ── Structured Data (JSON-LD) ──────────────────────────────────────────────
// Covers SEO (LocalBusiness), GEO (entity-rich data), AEO (FAQPage)

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'ItsMe Hookah & Tattoo',
  alternateName: ['ItsMe Shisha Bali', 'ItsMe Tattoo Bali', 'Its Me Shisha Rental & Tattoo Studio'],
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  image: [`${BASE_URL}/assets/hero-hookah-bg.png`, `${BASE_URL}/assets/hero-hookah.png`],
  description: 'ItsMe Hookah & Tattoo is a premium shisha lounge and custom tattoo studio in Bali, Indonesia. Open 24 hours every day. Offering shisha delivery throughout Bali and custom tattoo services starting from IDR 350,000.',
  telephone: ['+62-822-6647-5348', '+62-813-3993-180'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Perumahan Graha Tibung Sari No. 7',
    addressLocality: 'Dalung',
    addressRegion: 'Badung, Bali',
    postalCode: '80361',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.6244,
    longitude: 115.175,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  servesCuisine: 'Shisha / Hookah',
  priceRange: 'IDR 100.000 – IDR 3.000.000',
  currenciesAccepted: 'IDR',
  paymentAccepted: 'Cash, Transfer Bank, QRIS',
  sameAs: [
    'https://www.instagram.com/its_me_shisha',
    'https://www.instagram.com/its_me_tatto_',
    `https://wa.me/6282266475348`,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ItsMe Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Shisha / Hookah',
          description: 'Premium shisha service with imported tobacco. Buy 2 Get 1 Free promotion. Delivery available throughout Bali.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          price: '100000',
          description: 'Starting price per hookah session',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Tattoo',
          description: 'Custom tattoo design by professional artists. Styles include fine line, blackwork, traditional, and realism. Small to full back tattoo available.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          price: '350000',
          description: 'Starting price for small tattoo',
        },
      },
    ],
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -8.6244,
      longitude: 115.175,
    },
    geoRadius: '50000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'ItsMe Hookah & Tattoo Bali',
  description: 'Official website of ItsMe Hookah & Tattoo – premium shisha lounge and tattoo studio in Bali, open 24 hours.',
  inLanguage: ['id-ID', 'en-US'],
  publisher: {
    '@id': `${BASE_URL}/#business`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// AEO: FAQ schema — helps AI assistants and answer engines extract direct answers
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the opening hours of ItsMe Hookah & Tattoo Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ItsMe Hookah & Tattoo is open 24 hours a day, 7 days a week. We never close.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is ItsMe Hookah & Tattoo located in Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ItsMe Hookah & Tattoo is located at Perumahan Graha Tibung Sari No. 7, Dalung, Badung, Bali, Indonesia (also known as Cia House / ItsMe Studio). Coordinates: -8.6244, 115.175.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a tattoo cost at ItsMe Tattoo Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tattoo prices at ItsMe start from IDR 350,000 for small tattoos. Arm and leg tattoos start from IDR 500,000. A full back tattoo starts from IDR 3,000,000. Walk-ins are welcome and consultations can be booked via WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ItsMe Hookah & Tattoo offer shisha delivery in Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ItsMe offers shisha delivery throughout all of Bali. Standard delivery is free within the Dalung area. Additional delivery fees apply for Ubud, Jimbaran, Nusa Dua, and Uluwatu (+IDR 150,000). Orders are placed via WhatsApp at +62 822 6647 5348.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shisha flavors are available at ItsMe Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ItsMe offers a wide selection of shisha flavors including Signature flavors (e.g. Tropina Mint, Berry Fusion), Single flavors (Mint, Kiwi, Blueberry, and more), Mix flavors (Love66, Havana, etc.), and Darkside flavors (Dark Passion, etc.). A Buy 2 Get 1 Free promotion is available on select packages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I order shisha from ItsMe Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can order shisha from ItsMe Bali by sending a WhatsApp message to +62 822 6647 5348. Use the online order builder at itsmebali.com to select your package and flavors, then send a pre-filled order message directly to WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the contact number for ItsMe Hookah & Tattoo Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ItsMe Hookah & Tattoo can be reached at +62 822 6647 5348 or +62 813 3993 180 via WhatsApp or phone call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ItsMe Bali have an Instagram account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Follow @its_me_shisha on Instagram for shisha updates and @its_me_tatto_ for tattoo portfolio and updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I walk in for a tattoo at ItsMe Bali without an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, walk-ins are welcome at ItsMe Tattoo Studio. You can also book a consultation in advance via WhatsApp to discuss your design with the artist.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tattoo styles are available at ItsMe Tattoo Bali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ItsMe Tattoo artists specialize in various styles including fine line, blackwork, traditional (including Balinese), realism, and contemporary custom designs.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
