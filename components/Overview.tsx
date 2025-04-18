import Image from "next/image"

export default function Overview() {
  return (
    <section className="bg-timberwolf text-dark_green py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">About the Conference</h2>
          <div className="space-y-4">
            <p className="text-lg text-dark_green/90">
              The joint AGRC and EALAN Conference 2025 brings together experts in Geomatics and Land Administration from
              Eastern Africa and beyond. This unique forum offers academia, researchers, and practitioners the
              opportunity to showcase their work, interact, and engage in peer review [^7].
            </p>
            <p className="text-lg text-dark_green/90">
              Our theme, "Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land
              Administration," emphasizes the crucial role of spatial data in addressing global challenges and achieving
              the UN Sustainable Development Goals [^7].
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auditorium.jpg-VDiEVbfM9mbHrXUAZhlE4rXAQKRrO6.jpeg"
            alt="Conference Venue"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
