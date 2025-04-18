"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { NavigationButton } from "@/components/NavigationButton"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 lg:space-y-0">
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

        <div className="flex items-center">
          <NavigationButton className="bg-pigment_green hover:bg-pigment_green-600 text-white w-40 h-12 rounded-md" />
        </div>
      </div>
    </nav>
  )
}
