# ISI — Struktur Lengkap Project itsme-compro

> Project ini adalah website **company profile** menggunakan **Next.js 16**, **TypeScript**, **TailwindCSS v4**, dan komponen UI dari **shadcn/ui** (Radix UI).

---

## 📁 Struktur Direktori

```
itsme-compro-main/
├── app/                        # Next.js App Router (routing utama)
│   ├── layout.tsx              # Root layout: font, metadata, theme provider
│   ├── page.tsx                # Halaman utama (/) — screen state manager
│   ├── globals.css             # CSS global (Tailwind base, variabel warna)
│   └── gallery/
│       └── page.tsx            # Halaman galeri (/gallery) — wrapper ke gallery-page.tsx
│
├── components/                 # Komponen UI custom (halaman & section)
│   ├── header.tsx              # Navbar / header (logo, nav links, tombol bahasa, dark mode)
│   ├── hero-section.tsx        # Section hero / banner utama halaman home
│   ├── about-section.tsx       # Section "About Us"
│   ├── menu-section.tsx        # Section menu hookah / shisha + harga
│   ├── tattoo-section.tsx      # Section layanan tato
│   ├── locations-section.tsx   # Section daftar lokasi cabang
│   ├── location-marquee.tsx    # Ticker/marquee animasi nama lokasi
│   ├── photo-gallery.tsx       # Komponen gallery foto
│   ├── video-gallery.tsx       # Komponen gallery video
│   ├── gallery-page.tsx        # Komposisi halaman /gallery (foto + video)
│   ├── footer.tsx              # Footer (kontak, sosmed, copyright)
│   ├── screen-wrapper.tsx      # Wrapper animasi transisi antar screen (Framer Motion)
│   ├── back-button.tsx         # Tombol "Kembali" untuk navigasi antar screen
│   ├── language-context.tsx    # Context React untuk toggle bahasa ID/EN
│   ├── theme-provider.tsx      # Provider dark/light mode (next-themes)
│   └── ui/                     # Komponen shadcn/ui (Radix UI wrappers)
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── dialog.tsx
│       ├── tabs.tsx
│       ├── badge.tsx
│       ├── toast.tsx / toaster.tsx / sonner.tsx
│       └── ... (komponen shadcn lainnya)
│
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts           # Deteksi apakah viewport mobile
│   └── use-toast.ts            # State management toast notification
│
├── lib/
│   └── utils.ts                # Helper: fungsi `cn()` (clsx + tailwind-merge)
│
├── styles/
│   └── globals.css             # CSS global alternatif
│
├── public/                     # Aset statis (langsung dapat diakses via URL)
│   ├── images/                 # Gambar konten section (12 file)
│   │   ├── hero-hookah.jpg
│   │   ├── location-canggu.jpg
│   │   ├── location-seminyak.jpg
│   │   ├── location-ubud.jpg
│   │   ├── location-uluwatu.jpg
│   │   ├── shisha-classic.jpg
│   │   ├── shisha-fruit.jpg
│   │   ├── shisha-premium.jpg
│   │   ├── tattoo-blackwork.jpg
│   │   ├── tattoo-fine-line.jpg
│   │   ├── tattoo-realism.jpg
│   │   └── tattoo-traditional.jpg
│   ├── gallery/                # Foto untuk galeri (6 file)
│   │   └── photo1.jpg … photo6.jpg
│   ├── videos/                 # Video untuk galeri (10 file)
│   │   └── video1.mp4 … video10.mp4
│   ├── icon.svg
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   └── placeholder-*.jpg/.png/.svg
│
├── next.config.mjs             # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi PostCSS (untuk Tailwind)
├── tsconfig.json               # Konfigurasi TypeScript
├── components.json             # Konfigurasi shadcn/ui CLI
├── package.json                # Dependensi & scripts npm
├── pnpm-lock.yaml              # Lockfile pnpm
└── .gitignore
```

---

## 🗂 Pemetaan Screen → File

Project ini menggunakan sistem **multi-screen** yang dikelola di `app/page.tsx`. Setiap screen merupakan komponen terpisah yang ditampilkan via `screen-wrapper.tsx` dengan animasi slide horizontal.

| Screen / Halaman          | File Utama                          | Aset Terkait                           |
|---------------------------|-------------------------------------|----------------------------------------|
| Root Layout               | `app/layout.tsx`                    | —                                      |
| Home (semua section)      | `app/page.tsx`                      | —                                      |
| Galeri (/gallery)         | `app/gallery/page.tsx`              | —                                      |
| Header / Navbar           | `components/header.tsx`             | `public/icon.svg`                      |
| Hero Banner               | `components/hero-section.tsx`       | `public/images/hero-hookah.jpg`        |
| About Us                  | `components/about-section.tsx`      | —                                      |
| Menu Hookah / Shisha      | `components/menu-section.tsx`       | `public/images/shisha-*.jpg`           |
| Layanan Tato              | `components/tattoo-section.tsx`     | `public/images/tattoo-*.jpg`           |
| Lokasi Cabang             | `components/locations-section.tsx`  | `public/images/location-*.jpg`         |
| Ticker Lokasi             | `components/location-marquee.tsx`   | —                                      |
| Galeri Foto               | `components/photo-gallery.tsx`      | `public/gallery/photo1-6.jpg`          |
| Galeri Video              | `components/video-gallery.tsx`      | `public/videos/video1-10.mp4`          |
| Halaman Gallery (compose) | `components/gallery-page.tsx`       | foto + video di atas                   |
| Footer                    | `components/footer.tsx`             | —                                      |
| Animasi Transisi Screen   | `components/screen-wrapper.tsx`     | —                                      |
| Tombol Kembali            | `components/back-button.tsx`        | —                                      |
| Bahasa ID/EN              | `components/language-context.tsx`   | —                                      |
| Dark / Light Mode         | `components/theme-provider.tsx`     | —                                      |

---

## ⚙️ Tech Stack

| Kategori        | Teknologi                                      |
|-----------------|------------------------------------------------|
| Framework       | Next.js 16 (App Router)                        |
| Bahasa          | TypeScript 5.7                                 |
| Styling         | TailwindCSS v4                                 |
| UI Components   | shadcn/ui (Radix UI primitives)                |
| Icons           | Lucide React                                   |
| Animasi         | Framer Motion                                  |
| Carousel        | Embla Carousel                                 |
| Form            | React Hook Form + Zod                          |
| Theme           | next-themes                                    |
| Analytics       | @vercel/analytics                              |
| Package Manager | pnpm                                           |

---

## 🔑 File Penting untuk Kustomisasi

| Kebutuhan                        | File yang Perlu Diedit                               |
|----------------------------------|------------------------------------------------------|
| Warna / tema global              | `app/globals.css` (CSS variables)                    |
| Metadata / SEO                   | `app/layout.tsx`                                     |
| Konten halaman utama             | `app/page.tsx`                                       |
| Kelola navigasi multi-screen     | `app/page.tsx` + `components/screen-wrapper.tsx`     |
| Tombol kembali antar screen      | `components/back-button.tsx`                         |
| Ubah teks / bahasa               | `components/language-context.tsx` + tiap komponen   |
| Tambah / ubah menu hookah        | `components/menu-section.tsx`                        |
| Ubah layanan tato                | `components/tattoo-section.tsx`                      |
| Ubah lokasi cabang               | `components/locations-section.tsx`                   |
| Tambah foto galeri               | `public/gallery/` + `components/photo-gallery.tsx`  |
| Tambah video galeri              | `public/videos/` + `components/video-gallery.tsx`   |
| Ubah komponen UI dasar           | `components/ui/*.tsx`                                |
| Konfigurasi Next.js              | `next.config.mjs`                                    |

---

## 🚀 Cara Menjalankan

```bash
# Install dependensi
pnpm install

# Mode development
pnpm dev

# Build production
pnpm build

# Jalankan production
pnpm start
```

> Buka `http://localhost:3000` di browser.
