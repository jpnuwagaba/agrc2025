"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import OverviewTab from "./tabs/OverviewTab"
import ProgramTab from "./tabs/ProgramTab"
import CallForAbstractsTab from "./tabs/CallForAbstractsTab"
import VenueTab from "./tabs/VenueTab"

export default function TabsNavigation() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "program", label: "Program" },
    { value: "call-for-abstracts", label: "Call for Abstracts" },
    { value: "venue", label: "Venue" },
  ]

  return (
    <div className="w-full">
      {/* Mobile dropdown */}
      <div className="md:hidden mb-4">
        <Select onValueChange={setActiveTab} defaultValue={activeTab}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a tab" />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab.value} value={tab.value}>
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tabs for larger screens */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="hidden md:grid w-full grid-cols-2 lg:grid-cols-4 mb-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-sm lg:text-base">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="program">
          <ProgramTab />
        </TabsContent>
        <TabsContent value="call-for-abstracts">
          <CallForAbstractsTab />
        </TabsContent>
        <TabsContent value="venue">
          <VenueTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
