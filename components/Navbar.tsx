"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const secondaryNav = document.querySelector("#secondary-nav")
      const mainNav = document.querySelector("nav")
      if (secondaryNav && mainNav) {
        const secondaryNavTop = secondaryNav.getBoundingClientRect().top
        const mainNavHeight = mainNav.getBoundingClientRect().height
        setIsScrolled(window.scrollY > 10)
        setIsHidden(secondaryNavTop <= mainNavHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white text-dark_green transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
      style={{
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 lg:space-y-0 px-4">
        <div className="flex flex-col items-start">
          <div className="flex space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrclogo-hzFgeUHH5ah7eBGyHomjp6kOBfYblP.png"
              alt="AGRC Logo"
              width={80}
              height={80}
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ealan%20logo%20new-pHr958gISQrLg5zdSsH6gOHh5daZo7.png"
              alt="EALAN Logo"
              width={80}
              height={80}
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6e3QXzMXNbuD3sISdjiAkYZb92KrMt.png"
              alt="MAK Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex rounded-lg overflow-hidden">
            <Link
              href={pathname === "/registration" ? "/" : "/registration"}
              className="bg-pigment_green text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-pigment_green/90 transition-colors"
            >
              <span className="font-semibold">{pathname === "/registration" ? "Back to Main Page" : "Register"}</span>
            </Link>
            <Link
              href={pathname === "/how-to-pay" ? "/" : "/how-to-pay"}
              className="bg-chili_red text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-chili_red/90 transition-colors"
            >
              <span className="font-semibold">{pathname === "/how-to-pay" ? "Back to Main Page" : "How to Pay"}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
