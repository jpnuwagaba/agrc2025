"use client"

import Link from "next/link"
import { YoutubeIcon } from "lucide-react"
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6"
import { useEffect } from "react"

export default function Footer() {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charSet = "utf-8"
    document.body.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <footer className="bg-dark_green text-timberwolf p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Left Column - Conference Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-2">Joint AGRC and EALAN Conference 2025</h2>
              <p className="text-sm">Makerere University, Kampala, Uganda</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex rounded-lg overflow-hidden">
                <Link
                  href="/registration"
                  className="bg-pigment_green text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-pigment_green/90 transition-colors"
                >
                  <span className="font-semibold">Register</span>
                  <span className="text-lg">→</span>
                </Link>
                <Link
                  href="#"
                  className="bg-white text-dark_green px-6 py-3 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <YoutubeIcon className="h-5 w-5" />
                  <span className="font-semibold">LiveStream</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Social Media Feed */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media Feed</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Social Media Feed Components */}
              <div>
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Makerere University in conjunction with East African Land Administration Network is organizing a
                    Joint AGRC and EALAN Conference 2025 on the theme; Geo-Enablement for Sustainable Development:
                    Harnessing Innovation in Geomatics and Land Administration. Submit abstracts before the…{" "}
                    <a href="https://t.co/bacYAG46Rv">pic.twitter.com/bacYAG46Rv</a>
                  </p>
                  &mdash; Makerere University (@Makerere){" "}
                  <a href="https://twitter.com/Makerere/status/1892470572631593128?ref_src=twsrc%5Etfw">
                    February 20, 2025
                  </a>
                </blockquote>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://x.com/Mak_Geomatics"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pigment_green transition-colors"
                aria-label="Follow us on X"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/groups/9841076/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pigment_green transition-colors"
                aria-label="Join our LinkedIn group"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links - Separate Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center space-x-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="flex flex-col md:flex-row items-center space-x-3">
            <li>
              <Link
                href="/"
                className="hover:text-pigment_green border-b border-transparent hover:border-pigment_green pb-1 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-pigment_green border-b border-transparent hover:border-pigment_green pb-1 transition-colors"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                href="/registration"
                className="hover:text-pigment_green border-b border-transparent hover:border-pigment_green pb-1 transition-colors"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-pigment_green border-b border-transparent hover:border-pigment_green pb-1 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 mt-6 border-t border-white/10 text-center">
          <p className="text-sm">&copy; 2025 Joint AGRC and EALAN Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
