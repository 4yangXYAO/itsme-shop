# ISI — Struktur Lengkap Project web_shop_01

> Project ini adalah website **company profile** menggunakan **Next.js 16**, **TypeScript**, **TailwindCSS v4**, dan komponen UI dari **shadcn/ui** (Radix UI).

---

## 📁 Struktur Direktori

```
web_shop_01/
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
│   ├── shisha-order-builder.tsx # Komponen builder untuk order shisha
│   └── ui/                     # Komponen shadcn/ui (Radix UI wrappers)
│       ├── accordion.tsx       # Komponen accordion
│       ├── alert-dialog.tsx    # Komponen dialog alert
│       ├── alert.tsx           # Komponen alert
│       ├── aspect-ratio.tsx    # Komponen aspect ratio
│       ├── avatar.tsx          # Komponen avatar
│       ├── badge.tsx           # Komponen badge
│       ├── breadcrumb.tsx      # Komponen breadcrumb
│       ├── button-group.tsx    # Komponen button group
│       ├── button.tsx          # Komponen button
│       ├── calendar.tsx        # Komponen calendar
│       ├── card.tsx            # Komponen card
│       ├── carousel.tsx        # Komponen carousel
│       ├── chart.tsx           # Komponen chart
│       ├── checkbox.tsx        # Komponen checkbox
│       ├── collapsible.tsx     # Komponen collapsible
│       ├── command.tsx         # Komponen command
│       ├── context-menu.tsx    # Komponen context menu
│       ├── dialog.tsx          # Komponen dialog
│       ├── drawer.tsx          # Komponen drawer
│       ├── dropdown-menu.tsx   # Komponen dropdown menu
│       ├── empty.tsx           # Komponen empty state
│       ├── field.tsx           # Komponen field
│       ├── form.tsx            # Komponen form
│       ├── hover-card.tsx      # Komponen hover card
│       ├── input-group.tsx     # Komponen input group
│       ├── input-otp.tsx       # Komponen input OTP
│       ├── input.tsx           # Komponen input
│       ├── item.tsx            # Komponen item
│       ├── kbd.tsx             # Komponen kbd (keyboard)
│       ├── label.tsx           # Komponen label
│       ├── menubar.tsx         # Komponen menubar
│       ├── navigation-menu.tsx # Komponen navigation menu
│       ├── pagination.tsx      # Komponen pagination
│       ├── popover.tsx         # Komponen popover
│       ├── progress.tsx        # Komponen progress
│       ├── radio-group.tsx     # Komponen radio group
│       ├── resizable.tsx       # Komponen resizable
│       ├── scroll-area.tsx     # Komponen scroll area
│       ├── select.tsx          # Komponen select
│       ├── separator.tsx       # Komponen separator
│       ├── sheet.tsx           # Komponen sheet
│       ├── sidebar.tsx         # Komponen sidebar
│       ├── skeleton.tsx        # Komponen skeleton
│       ├── slider.tsx          # Komponen slider
│       ├── sonner.tsx          # Komponen sonner toast
│       ├── spinner.tsx         # Komponen spinner
│       ├── switch.tsx          # Komponen switch
│       ├── table.tsx           # Komponen table
│       ├── tabs.tsx            # Komponen tabs
│       ├── textarea.tsx        # Komponen textarea
│       ├── toast.tsx           # Komponen toast
│       ├── toaster.tsx         # Komponen toaster
│       ├── toggle-group.tsx    # Komponen toggle group
│       ├── toggle.tsx          # Komponen toggle
│       ├── tooltip.tsx         # Komponen tooltip
│       ├── use-mobile.tsx      # Hook untuk deteksi mobile
│       └── use-toast.ts        # Hook untuk toast management
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
│   ├── assets/                 # Folder untuk aset tambahan
│   ├── images/                 # Gambar konten section
│   ├── gallery/                # Foto untuk galeri
│   └── videos/                 # Video untuk galeri
│
├── next-env.d.ts               # Type definitions Next.js
├── next.config.mjs             # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi PostCSS (untuk Tailwind)
├── tsconfig.json               # Konfigurasi TypeScript
├── components.json             # Konfigurasi shadcn/ui CLI
├── package.json                # Dependensi & scripts npm
├── README.md                   # Dokumentasi project
└── .gitignore
```

---

## 🗂 Pemetaan Screen → File

Project ini menggunakan sistem **multi-screen** yang dikelola di `app/page.tsx`. Setiap screen merupakan komponen terpisah yang ditampilkan via `screen-wrapper.tsx` dengan animasi slide horizontal.

| Screen / Halaman          | File Utama                              | Deskripsi                                      |
|---------------------------|-----------------------------------------|------------------------------------------------|
| Root Layout               | `app/layout.tsx`                        | Layout induk dengan metadata & theme provider  |
| Home (semua section)      | `app/page.tsx`                          | Halaman utama dengan state manager multi-screen|
| Galeri (/gallery)         | `app/gallery/page.tsx`                  | Halaman galeri                                 |
| Header / Navbar           | `components/header.tsx`                 | Navbar dengan navigation & language toggle     |
| Hero Banner               | `components/hero-section.tsx`           | Section hero / banner utama                    |
| About Us                  | `components/about-section.tsx`          | Section "About Us"                             |
| Menu Hookah / Shisha      | `components/menu-section.tsx`           | Section menu & harga shisha                    |
| Layanan Tato              | `components/tattoo-section.tsx`         | Section layanan tattoo                         |
| Lokasi Cabang             | `components/locations-section.tsx`      | Section daftar lokasi cabang                   |
| Ticker Lokasi             | `components/location-marquee.tsx`       | Animasi marquee nama lokasi                    |
| Galeri Foto               | `components/photo-gallery.tsx`          | Komponen gallery foto dari `public/gallery/`   |
| Galeri Video              | `components/video-gallery.tsx`          | Komponen gallery video dari `public/videos/`   |
| Halaman Gallery (compose) | `components/gallery-page.tsx`           | Komposisi halaman /gallery                     |
| Shisha Order Builder      | `components/shisha-order-builder.tsx`   | Builder untuk custom order shisha              |
| Footer                    | `components/footer.tsx`                 | Footer (kontak, sosmed, copyright)             |
| Animasi Transisi Screen   | `components/screen-wrapper.tsx`         | Wrapper animasi slide antar screen             |
| Tombol Kembali            | `components/back-button.tsx`            | Tombol navigasi kembali                        |
| Bahasa ID/EN              | `components/language-context.tsx`       | Context provider untuk multi-bahasa            |
| Dark / Light Mode         | `components/theme-provider.tsx`         | Provider untuk dark/light mode                 |

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

| Kebutuhan                        | File yang Perlu Diedit                                       |
|----------------------------------|--------------------------------------------------------------|
| Warna / tema global              | `app/globals.css` (CSS variables)                            |
| Metadata / SEO                   | `app/layout.tsx`                                             |
| Konten halaman utama             | `app/page.tsx`                                               |
| Kelola navigasi multi-screen     | `app/page.tsx` + `components/screen-wrapper.tsx`             |
| Tombol kembali antar screen      | `components/back-button.tsx`                                 |
| Ubah teks / bahasa               | `components/language-context.tsx` + tiap komponen            |
| Tambah / ubah menu hookah        | `components/menu-section.tsx`                                |
| Custom order builder shisha      | `components/shisha-order-builder.tsx`                        |
| Ubah layanan tato                | `components/tattoo-section.tsx`                              |
| Ubah lokasi cabang               | `components/locations-section.tsx`                           |
| Tambah foto galeri               | `public/gallery/` + `components/photo-gallery.tsx`           |
| Tambah video galeri              | `public/videos/` + `components/video-gallery.tsx`            |
| Ubah komponen UI dasar           | `components/ui/*.tsx`                                        |
| Konfigurasi Next.js              | `next.config.mjs`                                            |
| Custom hooks                     | `hooks/use-*.ts`                                             |

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
