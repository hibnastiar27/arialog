import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Fraunces } from "next/font/google";

import { Providers } from "@/context/ThemeProvider";
import "./global.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", // Buat CSS variable untuk Tailwind
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aria[log]",
  icons: "/img/profile.png",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="font-spaceGrotesk antialiased selection:bg-pink-500 selection:text-white overflow-y-scroll">
        <Providers>{children}</Providers>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "122f4c64cdbc49b28648c6b94e2dda03"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
