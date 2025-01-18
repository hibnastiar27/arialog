import type { Metadata } from "next"
import "@/app/global.css"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
    title: 'Belajar Next JS'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}