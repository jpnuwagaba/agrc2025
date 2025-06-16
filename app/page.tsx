"use client"

import { useState } from "react"
import Hero from "@/components/Hero"
import SubscribeToNewsletter from "@/components/SubscribeToNewsletter"
import SecondaryNavbar from "@/components/SecondaryNavbar"
import OverviewContent from "@/components/OverviewContent"
import { ProgramSchedule } from "@/components/ProgramSchedule"
import Call4Abstracts from "@/components/Call4Abstracts"
import VenueContent from "@/components/VenueContent"
import CountdownTimer from "@/components/CountdownTimer"
import WorkshopsContent from "@/components/WorkshopsContent"
import PublicDialogueContent from "@/components/PublicDialogueContent"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />
      case "workshops":
        return <WorkshopsContent />
      case "program":
        return <ProgramSchedule />
      case "call-for-abstracts":
        return <Call4Abstracts />
      case "public-dialogue":
        return <PublicDialogueContent />
      case "venue":
        return <VenueContent />
      default:
        return null
    }
  }

  return (
    <div>
      <Hero />
      <div className="mb-8">
        <SubscribeToNewsletter />
      </div>
      <div className="container mb-12">
        <section className="py-12 bg-gray-200 text-pigment_green rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <CountdownTimer targetDate="2025-08-01T00:00:00" />
            </div>
          </div>
        </section>
      </div>
      <div id="secondary-nav">
        <SecondaryNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="container mx-auto mt-8 mb-16">{renderContent()}</div>
    </div>
  )
}
