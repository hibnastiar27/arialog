import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'

import NavbarComponent from "@/components/NavbarComponent";
import { Providers } from "@/context/ThemeProvider";
import "./global.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Buat CSS variable untuk Tailwind
})


export const metadata: Metadata = {
  title: 'Aria[log]',
  icons: '/img/profile.jpg'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={spaceGrotesk.variable}
      suppressHydrationWarning>
      <body className="font-spaceGrotesk selection:bg-pink-500 selection:text-white overflow-y-scroll">
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}