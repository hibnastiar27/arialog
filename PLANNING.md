# Rencana Eksperimen WebDev — Arialog

Dokumen ini jadi "playground" untuk eksperimen supaya kamu makin handal sebagai web
developer. Semua idenya disesuaikan dengan kondisi project ini sekarang, bukan ide
generik.

## 1. Tujuan & Prinsip

Arialog awalnya portfolio + blog pribadi. Jadikan ini **lab eksperimen**, dengan
prinsip:

- **Belajar lewat praktik nyata** — setiap fitur harus benar-benar hidup di production, bukan cuma demo.
- **Ukur, jangan asal** — ada metrik (performa, aksesibilitas, DX) untuk tiap eksperimen.
- **Inkremental** — jangan refactor besar sekaligus; kerjakan per fase, satu eksperimen satu waktu.
- **Siap di-rollback** — eksperimen yang gagal boleh dibuang, jangan takut "merusak" project (pakai git branch).

## 2. Kondisi Saat Ini (Baseline)

| Area | Status |
| --- | --- |
| Framework | Next.js 15 App Router + TypeScript + Tailwind (v3) |
| Struktur | Route groups: `(portfolio)`, `(blog)`, `(admin)` |
| Blog | Data hardcoded di `src/constants/blogData.ts`, markdown dirender `react-markdown` |
| i18n | Manual via `src/context/LanguageContext.tsx` (EN/ID) |
| Tema | `next-themes` (light/dark) |
| Animasi | `framer-motion` |
| UI | Campuran `@heroui/react` (HeroUI) + Tailwind custom |
| Testing | Belum ada |
| CI/CD | Belum ada |

## 3. Bank Ide Eksperimen

Legenda tingkat kesulitan: 🟢 mudah · 🟡 menengah · 🔴 menantang.
Dampak belajar: ⭐ (kecil) — ⭐⭐⭐ (besar).

### A. Fondasi & Arsitektur

- [ ] **Migrasi blog ke MDX / Content Collections** 🟡 ⭐⭐⭐
  Ganti `blogData.ts` jadi file `.mdx` di `src/content/`, render dengan
  `next-mdx-remote` atau Content Collections. Belajar content layer, syntax
  highlighting, custom component di markdown.
- [ ] **Design system sendiri** 🟡 ⭐⭐⭐
  Definisikan token (warna, spacing, radius, typography) di `tailwind.config.ts`,
  bikin komponen primitif (`Button`, `Badge`, `Card`) lalu ganti sebagian besar
  `@heroui/react` dengan komponen custom. Belajar komponen reusable & dokumentasi.
- [ ] **Validasi data dengan Zod** 🟢 ⭐⭐
  Semua `src/constants/*.ts` di-validasi skemanya biar data tidak pernah salah bentuk.
- [ ] **Route Handler + Server Actions** 🟡 ⭐⭐⭐
  Bikin API kecil (misal `/api/views`, form kontak) memakai Route Handler dan Server
  Actions. Belajar server-client boundary di App Router.

### B. Performa

- [ ] **Font self-host & variable** 🟢 ⭐⭐
  Pakai `next/font`, atur `font-display` dan subset. Hilangkan font yang di-fetch runtime.
- [ ] **Optimasi gambar** 🟢 ⭐⭐
  Tambahkan `placeholder="blur"`, `blurDataURL`, format modern (AVIF/WebP), dan
  `sizes` yang benar di semua `next/image`. Cek config di `next.config.ts`.
- [ ] **ISR / SSG / PPR untuk blog** 🟡 ⭐⭐⭐
  Coba `generateStaticParams`, `revalidate`, `dynamic = "force-static"`, hingga
  Partial Prerendering. Belajar strategi rendering Next.js secara nyata.
- [ ] **Streaming + Suspense** 🟡 ⭐⭐
  Pecah halaman jadi beberapa `Suspense` boundary dengan `loading.tsx` / skeleton,
  biar konten muncul bertahap.
- [ ] **Bundle analyzer & code-splitting** 🟢 ⭐⭐
  Pasang `@next/bundle-analyzer`, temukan chunk besar, pecah dengan `dynamic import`.
- [ ] **Core Web Vitals** 🟡 ⭐⭐⭐
  Audit LCP/CLS/INP dengan Lighthouse, perbaiki satu per satu. Belajar metrik
  performa web sungguhan.

### C. Interaktivitas & Animasi

- [ ] **Page transition** 🟡 ⭐⭐⭐
  Animasi perpindahan halaman dengan View Transitions API atau `framer-motion`
  (layoutId, AnimatePresence).
- [ ] **Scroll-driven animation** 🟡 ⭐⭐
  Parallax, reveal saat scroll, progress bar baca artikel di halaman blog detail.
- [ ] **Command palette (Ctrl+K)** 🟡 ⭐⭐⭐
  Palette global untuk navigasi cepat (buka halaman, ganti tema, cari artikel).
- [ ] **Micro-interaction & custom cursor** 🟢 ⭐
  Hover states, focus ring, cursor custom yang rapi (jangan ganggu aksesibilitas).
- [ ] **3D / WebGL** 🔴 ⭐⭐⭐
  Pakai `react-three-fiber` untuk showcase project atau hero section interaktif.

### D. Data & Konten

- [ ] **Headless CMS** 🟡 ⭐⭐⭐
  Sambungkan blog ke Sanity/Contentful (atau git-based CMS) biar nulis artikel tanpa
  edit kode.
- [ ] **SEO lengkap** 🟢 ⭐⭐
  `generateMetadata` dinamis per artikel, Open Graph image, `sitemap.ts`, `robots.ts`,
  JSON-LD.
- [ ] **RSS feed** 🟢 ⭐
  Bikin `rss.xml` untuk blog.
- [ ] **View counter & reaksi** 🟡 ⭐⭐⭐
  Hitung views artikel pakai edge function + penyimpanan (Vercel KV / Turso / Neon).
- [ ] **Komentar blog** 🔴 ⭐⭐
  Sistem komentar ringan (misal GitHub Discussions atau database sendiri).

### E. Rekayasa UX

- [ ] **i18n dengan next-intl** 🟡 ⭐⭐⭐
  Ganti `LanguageContext` manual jadi solusi i18n yang benar (routing locale, plural,
  formatting). Ini upgrade besar dari pendekatan sekarang.
- [ ] **Sistem tema lebih dalam** 🟢 ⭐
  Deteksi `prefers-color-scheme`, accent color yang bisa dipilih, persist pilihan.
- [ ] **Audit aksesibilitas** 🟡 ⭐⭐⭐
  Keyboard navigation, ARIA, `prefers-reduced-motion`, contrast ratio, focus
  management. Jadikan seluruh halaman lolos axe/WAVE.
- [ ] **Form kontak yang benar** 🟢 ⭐⭐
  `react-hook-form` + `zod`, validasi, status loading/error, honeypot anti-spam.

### F. Kualitas & DevOps

- [ ] **Unit & component testing** 🟡 ⭐⭐⭐
  Vitest + React Testing Library untuk komponen penting.
- [ ] **E2E testing** 🟡 ⭐⭐⭐
  Playwright untuk alur utama (buka portfolio → blog → baca artikel → ganti tema).
- [ ] **Lint/format otomatis** 🟢 ⭐
  Prettier + ESLint + Husky + lint-staged biar commit selalu bersih.
- [ ] **CI/CD** 🟡 ⭐⭐⭐
  GitHub Actions: typecheck, lint, test, lalu deploy preview di Vercel.
- [ ] **Observability** 🟡 ⭐⭐
  Analytics (Vercel Analytics / Plausible) + error tracking (Sentry).
- [ ] **TypeScript lebih strict** 🟢 ⭐
  Naikkan `strict` flags di `tsconfig.json`, hilangkan `any`.

### G. Unik / Fun

- [ ] **Widget GitHub / Spotify / Last.fm** 🟡 ⭐
  Tampilkan status live (lagu diputar, commit terakhir, kontribusi GitHub).
- [ ] **Grain + gradient mesh background** 🟢 ⭐
  Tekstur noise dan gradient mesh untuk nuansa visual unik.
- [ ] **Easter egg** 🟢 ⭐
  Konami code, route tersembunyi, atau animasi spesial.
- [ ] **Visitor map / aktivitas real-time** 🔴 ⭐⭐
  Visualisasi pengunjung atau aktivitas dengan edge streaming.

## 4. Roadmap Rekomendasi

Urutan ini saya sarankan biar tiap fase punya fondasi yang mendukung fase berikutnya.

### Fase 1 — Fondasi Solid
Bikin dasar yang rapi sebelum fitur mewah.
1. Design system & komponen primitif
2. Migrasi blog ke MDX / Content Collections
3. SEO lengkap (metadata, sitemap, OG image)
4. Font self-host & optimasi gambar
5. Testing dasar (Vitest + RTL) + lint/format otomatis

### Fase 2 — Performa & DX
1. ISR/SSG/PPR untuk blog
2. Streaming + Suspense
3. Bundle analyzer & code-splitting
4. TypeScript strict + CI/CD dasar

### Fase 3 — Interaksi & UX
1. i18n dengan next-intl
2. Page transition + scroll animation
3. Audit aksesibilitas menyeluruh
4. Command palette (Ctrl+K)

### Fase 4 — Data Nyata
1. Headless CMS atau git-based CMS
2. View counter + reaksi artikel
3. RSS feed + komentar

### Fase 5 — Observability & Skala
1. Analytics + Sentry
2. E2E Playwright
3. Core Web Vitals pass (Lighthouse 90+)

### Fase 6 — Fun & Unik
1. 3D/WebGL showcase
2. Widget live (GitHub/Spotify)
3. Easter egg & grain/gradient mesh

## 5. Rekomendasi Mulai (3 Teratas)

Kalau cuma bisa mulai dari 3 hal, saya sarankan:

1. **Migrasi blog ke MDX** — paling terasa dampaknya, langsung upgrade cara kamu
   mengelola konten.
2. **Design system + komponen primitif** — fondasi untuk semua eksperimen UI berikutnya.
3. **Testing + lint/format otomatis** — membiasakan workflow profesional sejak awal.

## 6. Cara Pakai Dokumen Ini

- Centang `[ ]` jadi `[x]` saat eksperimen selesai.
- Satu branch git per eksperimen, merge saat sudah stabil.
- Catat hasil (metrik sebelum/sesudah) di sini atau di commit message.
- Jangan menumpuk: selesaikan 1–2 eksperimen per fase, baru lanjut.
