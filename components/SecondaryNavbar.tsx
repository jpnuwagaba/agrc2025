"use client"

import { useState, useEffect, useRef } from "react"

interface SecondaryNavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function SecondaryNavbar({ activeTab, setActiveTab }: SecondaryNavbarProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mainNav = document.querySelector("nav")

    // Get the height of the navbar for scroll calculations
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height)
    }

    const handleScroll = () => {
      if (navRef.current && mainNav) {
        const mainNavHeight = mainNav.getBoundingClientRect().height
        const navTop = navRef.current.getBoundingClientRect().top
        setIsSticky(navTop <= mainNavHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "workshops",
      label: "Workshops",
    },
    {
      id: "public-dialogue",
      label: "Public Dialogue",
    },
    {
      id: "program",
      label: "Program",
    },
    {
      id: "call-for-abstracts",
      label: "Call for Abstracts",
    },
    {
      id: "venue",
      label: "Venue",
    },
  ]

  return (
    <div ref={navRef} className="relative mb-20">
      <nav
        className={`w-full transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-md" : ""}`}
        style={{ top: isSticky ? "0" : "auto" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b border-gray-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)

                // Calculate offset to account for navbar height
                const offset = isSticky ? navHeight + 20 : 20 // Add extra padding

                // Get the position of the content area
                const contentArea = document.getElementById(`${item.id}-content`)
                if (contentArea) {
                  const contentPosition = contentArea.getBoundingClientRect().top + window.scrollY - offset

                  // Scroll to content with offset
                  window.scrollTo({
                    top: contentPosition,
                    behavior: "smooth",
                  })
                } else {
                  // Fallback to previous behavior if content area not found
                  const navPosition = navRef.current?.getBoundingClientRect().top || 0
                  const scrollPosition = window.scrollY + navPosition - (isSticky ? navHeight : 0)
                  window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                  })
                }
              }}
              className={`${
                activeTab === item.id
                  ? "bg-pigment_green text-white font-bold"
                  : "bg-timberwolf text-dark_green hover:bg-timberwolf/80"
              } py-4 px-3 md:px-6 flex items-center justify-center gap-2 transition-colors ${
                navItems.indexOf(item) % 2 === 0 ? "border-r border-gray-200" : ""
              }`}
            >
              <span className="text-sm md:text-base">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Spacer div that appears when navbar is sticky to prevent content jumping */}
      {isSticky && <div style={{ height: `${navHeight}px` }} aria-hidden="true" />}
    </div>
  )
}
