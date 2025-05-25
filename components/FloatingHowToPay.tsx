"use client"

import { useState, useEffect } from "react"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingHowToPay() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Button
      asChild
      className="fixed bottom-4 right-20 p-3 bg-chili_red hover:bg-chili_red-600 text-white rounded-full shadow-lg transition-opacity duration-300 z-40"
      aria-label="How to Pay"
    >
      <Link className="flex flex-row gap-3" href="/how-to-pay">
        <CreditCard className="h-5 w-5" />
        <span>How to pay</span>
      </Link>
    </Button>
  )
}
