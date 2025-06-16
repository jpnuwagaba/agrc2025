"use client"

import PreConferenceWorkshops from "./PreConferenceWorkshops"

export default function WorkshopsContent() {
  return (
    <div id="workshops-content" className="pt-4">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark_green mb-4">Pre-Conference Workshops</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for specialized training sessions before the main conference. These workshops provide in-depth
            knowledge and hands-on experience in key areas of Geomatics and Land Administration.
          </p>
        </div>

        {/* Pre-Conference Workshops Component */}
        <PreConferenceWorkshops />
      </div>
    </div>
  )
}
