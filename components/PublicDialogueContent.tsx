"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Mic } from "lucide-react"
import Link from "next/link"

export default function PublicDialogueContent() {
  const panelists = [
    {
      name: "Dr. Ivan Bamweyana",
      title: "Lecturer & Researcher, Makerere University",
      image:
        "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/dialogue_panelists/bamweyana-LPghpDPmGzteQj1Mp6Ms0m3Xf6fjQw.png",
      role: "panelist",
    },
    {
      name: "Ms. Martha Mugarura",
      title: "Assistant Commissioner, Urban Development – MLHUD",
      image:
        "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/dialogue_panelists/martha-AvWcyyb5BuVYx3raFUs94UlcG8MfiW.jpg",
      role: "panelist",
    },
    {
      name: "Ms. Joanita Babirye",
      title: "Co-founder, Girls For Climate Action & UN Women Youth Action Coalition Leader",
      image:
        "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/dialogue_panelists/Joanita-photo-IwBLJFZZ5Y56cPFi4IREmQ7sNUzF9l.jpg",
      role: "panelist",
    },
    {
      name: "Dr. Agnes Mwasumbi",
      title: "Lecturer, Ardhi University",
      image:
        "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/dialogue_panelists/mwasumbi-2yEdTk15p8WCsxc0IvA4RTPWWQAkxK.png",
      role: "panelist",
    },
    {
      name: "Mr. Allan Mugisha Turyahikayo",
      title: "Managing Partner, S-M Cathan Property Consult Ltd",
      image:
        "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/dialogue_panelists/mugisha-BBMWdveRwrLMEwW2ayQVIB5fovKfyY.jpg",
      role: "moderator",
    },
  ]

  const keyTopics = [
    "Implementation challenges of National Land Policies across Eastern Africa",
    "Harmonization of land laws and regulations in the region",
    "Technology adoption in land administration systems",
    "Community participation in land governance",
    "Gender equality in land rights and ownership",
    "Sustainable land use planning and management",
    "Cross-border land management issues",
    "Capacity building needs in land administration",
  ]

  return (
    <div id="public-dialogue-content" className="pt-4">
      <div className="space-y-12">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white rounded-xl p-8 md:p-12 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1677051286730-7624b8d5bed5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark_green/80 to-pigment_green/80 rounded-xl"></div>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              July 30, 2025
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">National Public Dialogue</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-white/90">
              Can Land Administration Systems Adapt to the Impacts of Climate Change While Promoting Sustainability?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>14:00 - 17:00 Hrs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>Fairway Hotel, Kampala</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="h-4 w-4" />
                <span>Open to Public</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div>
          <div>
            <h2 className="text-2xl font-bold text-dark_green mb-4">About the Dialogue</h2>
            <p className="text-gray-700 mb-4">
              The National Public Dialogue is a critical component of the Joint AGRC and EALAN Conference 2025, focusing
              on "Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land
              Administration." This session brings together policymakers, practitioners, researchers, and community
              representatives to discuss the gaps and challenges in implementing National Land Policies across Eastern
              Africa.
            </p>
            <p className="text-gray-700 mb-6">
              The dialogue aims to bridge the gap between policy formulation and implementation, highlighting real-world
              challenges and proposing actionable recommendations for improving land governance and geo-enablement in
              the region.
            </p>
            <div className="bg-pigment_green/10 p-4 rounded-lg border border-pigment_green/20">
              <h3 className="font-semibold text-pigment_green mb-2">Key Objectives</h3>
              <ul className="text-sm space-y-1">
                <li>• Identify common challenges in land policy implementation</li>
                <li>• Share best practices and lessons learned</li>
                <li>• Develop regional cooperation strategies</li>
                <li>• Engage communities in policy dialogue</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Panelists Section */}
        <div className="">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-dark_green mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-pigment_green" />
              Distinguished Panelists & Moderator
            </h2>
            <p className="text-gray-600">Leading experts and policymakers from across Eastern Africa</p>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {panelists.map((panelist, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg overflow-hidden border ${
                    panelist.role === "moderator"
                      ? "border-chili_red shadow-lg ring-2 ring-chili_red/20"
                      : "border-gray-200"
                  }`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={panelist.image || "/placeholder.svg"}
                      alt={panelist.name}
                      className="w-full h-full object-cover shadow-none"
                    />
                    {panelist.role === "moderator" && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-chili_red text-white border-0 text-xs">
                          <Mic className="h-3 w-3 mr-1" />
                          Moderator
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3
                      className={`font-bold mb-2 leading-tight text-base ${
                        panelist.role === "moderator" ? "text-chili_red" : "text-dark_green"
                      }`}
                    >
                      {panelist.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs">{panelist.title}</p>
                    {panelist.role === "moderator" && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs border-chili_red text-chili_red">
                          Panel Moderator
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration and Contact */}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pigment_green/10 to-dark_green/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark_green mb-4">Join the Conversation</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your voice matters in shaping the future of land governance in Eastern Africa. Participate in this important
            dialogue and contribute to meaningful policy discussions.
          </p>
          <div className="flex justify-center">
            <Link href="/registration">
              <Button className="bg-pigment_green hover:bg-pigment_green/90 text-white">Register Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
