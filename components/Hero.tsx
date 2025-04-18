import Link from "next/link"
import { Calendar, MapPin, YoutubeIcon as YouTube } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <div id="hero" className="container mx-auto px-4 pt-20 pb-8 md:py-8">
      {/* Hero Section */}
      <div
        className="relative rounded-2xl overflow-hidden mb-8  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auditorium.jpg-VDiEVbfM9mbHrXUAZhlE4rXAQKRrO6.jpeg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-dark_green/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Joint AGRC and EALAN Conference 2025
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl mb-6 max-w-2xl">
            Theme: Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land
            Administration
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              July 31 - Aug 1 2025
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              Kampala, Uganda
            </Badge>
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
                className="bg-chili_red text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-chili_red/90 transition-colors"
              >
                <YouTube className="h-5 w-5" />
                <span className="font-semibold">LiveStream</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
