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

export const metadata: Metadata = {
  title: 'ItsMe Shisha & Tattoo – Premium Shisha Lounge & Tattoo Studio in Dalung, Badung | Buka 24 Jam',
  description: 'ItsMe Shisha & Tattoo — destinasi premium shisha dan tattoo terbaik di Bali. Buka 24 jam di Perumahan Graha Tibung Sari, Dalung, Badung (Cia House). Shisha Buy 2 Get 1 Free. Tattoo mulai IDR 350K.',
  icons: {
    icon: '/icon/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
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
