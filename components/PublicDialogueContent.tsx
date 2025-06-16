"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function PublicDialogueContent() {
  const panelists = [
    {
      name: "Hon. Judith Nalule Nabakooba",
      title: "Minister of Lands, Housing and Urban Development",
      country: "Uganda",
      role: "Keynote Speaker",
    },
    {
      name: "Dr. Agnes Nkundwe Mwasumbi",
      title: "Senior Lecturer & EALAN Coordinator",
      country: "Tanzania",
      role: "Panelist",
    },
    {
      name: "Prof. John Bosco Kyalo Kiema",
      title: "Department of Geospatial & Space Technology",
      country: "Kenya",
      role: "Panelist",
    },
    {
      name: "Dr. Upendo Chamuriho Matotola",
      title: "Director of Real Estate",
      country: "Tanzania",
      role: "Panelist",
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
        <div className="grid md:grid-cols-2 gap-8">
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

          <div>
            <h2 className="text-2xl font-bold text-dark_green mb-4">Discussion Topics</h2>
            <div className="space-y-3">
              {keyTopics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-pigment_green text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panelists Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-pigment_green" />
              Distinguished Panelists
            </CardTitle>
            <CardDescription>Leading experts and policymakers from across Eastern Africa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {panelists.map((panelist, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-dark_green">{panelist.name}</h3>
                    <Badge
                      className={
                        panelist.role === "Keynote Speaker" ? "bg-chili_red text-white" : "bg-pigment_green text-white"
                      }
                    >
                      {panelist.role}
                    </Badge>
                  </div>
                  <p className="text-gray-700 text-sm mb-1">{panelist.title}</p>
                  <p className="text-gray-600 text-sm">{panelist.country}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-pigment_green" />
              Dialogue Schedule
            </CardTitle>
            <CardDescription>July 30, 2025 | 14:00 - 17:00 Hrs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "14:00 - 14:15", activity: "Welcome and Opening Remarks", speaker: "Conference Chair" },
                {
                  time: "14:15 - 14:45",
                  activity: "Keynote Address: Land Policy Implementation Challenges",
                  speaker: "Distinguished Speaker",
                },
                {
                  time: "14:45 - 15:30",
                  activity: "Panel Discussion: Regional Perspectives on Land Policy Gaps",
                  speaker: "Eastern Africa Experts",
                },
                { time: "15:30 - 15:45", activity: "Tea Break", speaker: "" },
                {
                  time: "15:45 - 16:30",
                  activity: "Open Floor Discussion: Community and Stakeholder Input",
                  speaker: "Moderated Q&A",
                },
                { time: "16:30 - 16:50", activity: "Synthesis and Recommendations", speaker: "Panel Moderator" },
                { time: "16:50 - 17:00", activity: "Closing Remarks", speaker: "EALAN Chair" },
              ].map((session, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-gray-100 rounded-lg"
                >
                  <Badge variant="outline" className="font-mono text-sm w-fit">
                    {session.time}
                  </Badge>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-dark_green">{session.activity}</h4>
                    {session.speaker && <p className="text-sm text-gray-600">{session.speaker}</p>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Registration and Contact */}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pigment_green/10 to-dark_green/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark_green mb-4">Join the Conversation</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your voice matters in shaping the future of land governance in Eastern Africa. Participate in this important
            dialogue and contribute to meaningful policy discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pigment_green hover:bg-pigment_green/90 text-white">Register Now</Button>
            <Button
              variant="outline"
              className="border-dark_green text-dark_green hover:bg-dark_green hover:text-white"
            >
              Download Program
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
