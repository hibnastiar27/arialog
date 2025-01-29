import type { Metadata } from "next"
import "@/app/global.css"
import NavbarComponent from "@/components/NavbarComponent";
import { Providers } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: 'Belajar Next JS'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}