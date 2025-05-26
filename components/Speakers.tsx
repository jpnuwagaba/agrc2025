"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const speakers = [
  {
    name: "Dr. Pamela Durán-Díaz",
    title: "Senior Planning Specialist and Assistant Professor",
    institution: "IHS",
    university: "Erasmus University Rotterdam",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%2016.17.09-CqnsGTkC5e6NWhahhC6Em8KvWy1fYh.jpeg",
    topic: "Land Governance as a catalyst for Sustainable Urban Development",
  },
  {
    name: "Simon Peter Mwesigye",
    title: "Land Tenure Specialist",
    institution: "Global Land Tool Network",
    university: "UN-Habitat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eJ3SI00RkhGAYGPW7NRPVMv4nHM0Ph.png",
    topic: "Land Administration and Policy Reforms in Uganda",
  },
  {
    name: "Dr. Upendo Chamuriho Matotola",
    title: "Director of Real Estate",
    institution: "Ministry of Lands, Housing and Human Settlements Development",
    university: "Deputy Project Coordinator, World Bank-financed Land Tenure Improvement Project",
    image: "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/Upendo-uhSmiAahjMftDLCq0Txn1mezJg3xU0.jpeg",
    topic: "Harnessing innovation to strengthen Land administration in Tanzania",
  },
  {
    name: "Prof. Timothy Dube",
    title: "Director, Institute for Water Studies",
    institution: "Geospatial Science for Water Resources",
    university: "University of the Western Cape",
    image:
      "https://res.cloudinary.com/dhshd7umk/image/upload/v1744981397/agrc2025ealan/7TH%20ADVANCES%20CONFERENCE%20PHOTOS/dube_sunync.jpg",
    topic: "Earth Observation Applications for Environmental Sustainability",
  },
]

export default function Speakers() {
  return (
    <section className="py-16">
      <div className="mx-auto">
        <h2 className="uppercase text-xl font-bold mb-10 text-dark_green text-center">Keynote Speakers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square relative">
                <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-dark_green">{speaker.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>
                <p className="text-sm text-gray-600 mb-1">{speaker.institution}</p>
                <p className="text-sm text-gray-600 mb-3">{speaker.university}</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm font-medium text-pigment_green">Speaking on:</p>
                  <p className="text-sm text-gray-700">{speaker.topic}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
