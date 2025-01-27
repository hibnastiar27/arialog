import type { Metadata } from "next"
import "@/app/global.css"
import NavbarComponent from "@/components/NavbarComponent";

export const metadata: Metadata = {
    title: 'Belajar Next JS'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className="dark text-foreground bg-background">
                <NavbarComponent />
                {children}
            </body>
        </html>
    )
}