import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { validateEnv } from "@/lib/env"
import FloatingHowToPay from "@/components/FloatingHowToPay"

// Validate environment variables during build/startup
if (typeof window === "undefined") {
  validateEnv()
}

// Load Inter font with proper subsets
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
})

export const metadata: Metadata = {
  title: "Joint AGRC and EALAN Conference 2025",
  description:
    "Joint 8th Advances in Geomatics Research Conference (AGRC) and 14th Eastern Africa Land Administration Network (EALAN) Conference 2025 - Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land Administration",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrclogo-hzFgeUHH5ah7eBGyHomjp6kOBfYblP.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrclogo-hzFgeUHH5ah7eBGyHomjp6kOBfYblP.png",
  },
  openGraph: {
    type: "website",
    siteName: "Joint AGRC and EALAN Conference 2025",
    title: "Joint AGRC and EALAN Conference 2025",
    description:
      "Joint 8th Advances in Geomatics Research Conference (AGRC) and 14th Eastern Africa Land Administration Network (EALAN) Conference - Geo-Enablement for Sustainable Development",
    url: "https://agrc2025ealan.com",
    images: [
      {
        url: "https://raw.githubusercontent.com/jpnuwagaba/agrc2023/refs/heads/main/public/assets/auditorium.jpg",
        width: 1200,
        height: 630,
        alt: "Joint AGRC and EALAN Conference 2025 Venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint AGRC and EALAN Conference 2025",
    description:
      "Joint 8th Advances in Geomatics Research Conference (AGRC) and 14th Eastern Africa Land Administration Network (EALAN) Conference - Geo-Enablement for Sustainable Development",
    images: [
      {
        url: "https://raw.githubusercontent.com/jpnuwagaba/agrc2023/refs/heads/main/public/assets/auditorium.jpg",
        width: 1200,
        height: 630,
        alt: "Joint AGRC and EALAN Conference 2025 Venue",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">{children}</main>
        <Footer />
        <FloatingHowToPay />
        <ScrollToTop />
      </body>
    </html>
  )
}
