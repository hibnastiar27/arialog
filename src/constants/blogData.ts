export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'memahami-react-server-components',
    title: 'Memahami React Server Components',
    excerpt: 'Pelajari bagaimana React Server Components mengubah cara kita membangun aplikasi React dan meningkatkan performa secara signifikan.',
    date: '10 Juni 2026',
    readTime: '5 mnt baca',
    category: 'Rekayasa',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    content: `
# Memahami React Server Components

React Server Components (RSC) adalah paradigma baru dalam ekosistem React yang memungkinkan komponen di-render sepenuhnya di server. Ini merupakan perubahan fundamental dari bagaimana kita biasanya membangun aplikasi SPA (Single Page Application) yang *client-heavy*.

> "Server Components memungkinkan pengembang untuk membangun aplikasi yang menjangkau bagian server dan klien, menggabungkan interaktivitas yang kaya dari aplikasi sisi klien dengan kinerja yang ditingkatkan dari rendering sisi server."

## Mengapa Kita Membutuhkan RSC?

Sebelum RSC, kita sering kali harus memilih antara *Server-Side Rendering* (SSR) yang cepat untuk SEO tapi berat di awal, atau *Client-Side Rendering* (CSR) yang interaktif tapi lambat saat inisialisasi (*First Load*).

Dengan RSC, kita mendapatkan yang terbaik dari keduanya:
1. **Bundle Size Lebih Kecil**: Library raksasa seperti \`date-fns\` atau \`markdown-it\` yang berjalan di Server Component **tidak akan dikirim** ke browser pengguna!
2. **Akses Data Langsung**: Komponen server dapat langsung melakukan *query* ke database dengan aman tanpa melalui lapisan API eksternal.
3. **Pemisahan Konteks yang Jelas**: Hanya komponen yang butuh interaktivitas (*onClick*, *useState*) yang di-render di sisi klien.

## Bagaimana Cara Kerjanya di Next.js?

Pada Next.js App Router, setiap komponen secara *default* adalah Server Component. Jika Anda butuh state atau *event listener*, Anda cukup menambahkan \`"use client"\` di baris teratas file tersebut.

\`\`\`tsx
// Ini adalah Server Component (default)
import db from '@/lib/db';

export default async function DaftarArtikel() {
  const artikel = await db.article.findMany();
  
  return (
    <div>
      {artikel.map(a => <h2 key={a.id}>{a.judul}</h2>)}
    </div>
  );
}
\`\`\`

## Kesimpulan
RSC bukanlah fitur yang akan menggantikan komponen klien, melainkan pelengkap yang sangat kuat. Memahami kapan harus menggunakan komponen server dan kapan harus menggunakan komponen klien adalah kunci menuju arsitektur web modern yang optimal.
    `
  },
  {
    slug: 'menguasai-transisi-tailwind-css',
    title: 'Menguasai Transisi Tailwind CSS',
    excerpt: 'Pembahasan mendalam tentang cara membuat animasi yang halus, elegan, dan berkinerja tinggi menggunakan kelas utilitas Tailwind CSS.',
    date: '5 Juni 2026',
    readTime: '7 mnt baca',
    category: 'Desain',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    content: `
# Menguasai Transisi Tailwind CSS

Membangun antarmuka pengguna tidak sekadar tentang bagaimana sesuatu terlihat, tapi juga bagaimana sesuatu *terasa*. Animasi mikro dan transisi yang halus memainkan peran penting dalam menciptakan pengalaman yang natural dan responsif.

## Dasar Transisi

Di Tailwind, Anda dapat mengaktifkan transisi CSS dasar menggunakan kelas \`transition\`.

Secara default, kelas \`transition\` akan menganimasikan perubahan pada properti seperti:
- Warna teks (\`text-color\`)
- Warna latar (\`bg-color\`)
- Warna batas (\`border-color\`)
- *Opacity*
- Transformasi (skala, translasi, rotasi)

### Contoh Sederhana

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">
  Klik Saya
</button>
\`\`\`

Pada kode di atas, perubahan warna latar belakang dari biru terang ke biru gelap saat di-hover akan memakan waktu 300 milidetik, menciptakan efek yang jauh lebih nyaman daripada perubahan mendadak.

## Kurva *Easing*

Selain durasi, kurva *easing* (*timing function*) menentukan bagaimana kecepatan animasi berubah dari waktu ke waktu.
- \`ease-linear\`: Kecepatan konstan
- \`ease-in\`: Mulai lambat, lalu cepat
- \`ease-out\`: Mulai cepat, lalu melambat (sering digunakan untuk elemen yang *masuk* ke layar)
- \`ease-in-out\`: Lambat di awal dan akhir

Untuk membuat interaksi yang terasa sangat organik, bereksperimenlah dengan kombinasi durasi yang cepat (misal \`duration-150\`) dan kurva \`ease-out\`.
    `
  },
  {
    slug: 'seni-desain-web-minimalis',
    title: 'Seni Desain Web Minimalis',
    excerpt: 'Mengeksplorasi bagaimana kesederhanaan dapat memberikan dampak yang lebih besar dalam ekosistem pengembangan web modern.',
    date: '28 Mei 2026',
    readTime: '10 mnt baca',
    category: 'Seni',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
    content: `
# Seni Desain Web Minimalis

Dalam lanskap digital yang penuh dengan distraksi visual—notifikasi yang berkedip, *banner* pop-up, animasi mencolok—menerapkan desain minimalis terasa seperti menghirup udara segar.

> Kesederhanaan adalah kecanggihan tertinggi. — Leonardo da Vinci

## Ruang Kosong (White Space)

Banyak pemula yang merasa "takut" pada ruang kosong. Mereka merasa harus mengisi setiap piksel layar dengan informasi, gambar, atau elemen navigasi. Padahal, *white space* (atau *negative space*) adalah instrumen paling krusial dalam desain.

Ruang kosong:
- **Mengarahkan fokus**: Tanpa distraksi di sekitarnya, mata pengguna secara otomatis akan tertuju pada elemen kunci, seperti pesan utama (Headline) atau tombol aksi (Call to Action).
- **Meningkatkan keterbacaan**: Jarak antar baris teks (*line-height*) dan jarak antar paragraf sangat menentukan apakah artikel Anda akan dibaca sampai habis atau langsung ditutup.
- **Memberikan nuansa premium**: Pernahkah Anda memperhatikan *website* dari merek-merek mewah? Hampir semuanya sangat lapang dan didominasi ruang kosong.

## Palet Warna Terbatas

Daripada menggunakan 5 warna berbeda, cobalah batasi palet Anda:
1. **Warna Dominan**: Biasanya putih, *off-white*, atau abu-abu gelap untuk *dark mode*.
2. **Warna Teks**: Hitam pudar (seperti \`#111\` atau \`#333\`) untuk keterbacaan optimal tanpa membuat mata lelah.
3. **Satu Warna Aksen**: Hanya gunakan ini untuk interaksi (link, tombol *hover*, badge khusus).

## Kesimpulan

Minimalisme bukan berarti "miskin fitur". Minimalisme adalah tentang mengeliminasi hal-hal yang tidak penting agar hal-hal yang penting dapat benar-benar bersinar.
    `
  },
];
