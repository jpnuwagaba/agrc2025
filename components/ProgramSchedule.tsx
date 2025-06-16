"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// Remove this import
// import PreConferenceWorkshops from "./PreConferenceWorkshops"

const transformedScheduleData = [
  {
    date: "July 30, 2025",
    schedule: [
      {
        time: "",
        title: "Pre-Conference Workshops",
        speaker: "",
        location: "",
        type: "general",
      },
    ],
  },
  {
    date: "July 31, 2025",
    schedule: [
      {
        time: "8:00 - 9:00",
        title: "Registration",
        speaker: "Conference Secretariat",
        location: "Main Lobby",
        type: "registration",
      },
      {
        time: "9:00 - 10:00",
        title: "Official Opening Ceremony",
        speaker: "Chair: Dr. Ronald Ssengendo",
        location: "Main Hall",
        type: "opening",
        details: [
          "9:00 – 9:10: Opening Remarks by HOD - Dr. Lydia Mazzi Kayondo",
          "9:10 – 9:20: Remarks by Dean SBE - Prof. Anthony Gidudu",
          "9:20 – 9:30: Remarks by Principal CEDAT - Prof. Moses Musinguzi",
          "9:30 – 9:40: Remarks by Vice Chancellor",
          "9:40 – 10:00: Official Opening by Chief Guest - Hon. Judith Nalule Nabakooba (MLHUD)",
        ],
      },
      {
        time: "10:00 - 10:40",
        title: "Group Photo & Exhibition Tour",
        speaker: "",
        location: "Exhibition Area",
        type: "break",
      },
      {
        time: "10:40 - 12:00",
        title: "Plenary Session 1",
        speaker: "Chair: Dr. Lydia Mazzi Kayondo",
        location: "Main Hall",
        type: "plenary",
        details: [
          "10:40 – 11:10: Earth Observation Applications for Environmental Sustainability - Prof. Timothy Dube (University of the Western Cape)",
          "11:10 – 11:40: Dr. Upendo Chamuriho Matotola (Ministry of Lands, Housing and Human Settlements Development, Tanzania)",
          "11:40 – 12:00: Q & A",
        ],
      },
      {
        time: "12:00 - 13:00",
        title: "Parallel Sessions 1",
        speaker: "",
        location: "Multiple Rooms",
        type: "parallel",
        details: [
          "EALAN Session (Chairs: Dr. Lilian Oryema) - Papers 1-3 + Q&A",
          "AGRC Session (Chairs: Dr. Allan Mazimwe) - Papers 1-3 + Q&A",
        ],
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break",
        speaker: "",
        location: "Hotel Restaurant",
        type: "break",
      },
      {
        time: "14:00 - 15:15",
        title: "Parallel Sessions 2",
        speaker: "",
        location: "Multiple Rooms",
        type: "parallel",
        details: [
          "EALAN Session 2 (Chair: Dr. David Siriba) - Papers 1-4 + Q&A",
          "AGRC Session 2 (Chair: Dr. Diana Rose Abeho) - Papers 1-4 + Q&A",
        ],
      },
      {
        time: "15:15 - 15:45",
        title: "Tea Break",
        speaker: "",
        location: "Hotel Lounge",
        type: "break",
      },
      {
        time: "16:00 - 17:00",
        title: "Parallel Sessions 3",
        speaker: "",
        location: "Multiple Rooms",
        type: "parallel",
        details: [
          "EALAN Session 3 (Chair: Dr. Fredrick Magina) - Papers 1-3 + Q&A",
          "AGRC Session 3 (Chair: Ms. Hilda Nyamwiza) - Papers 1-3 + Q&A",
        ],
      },
    ],
  },
  {
    date: "August 1, 2025",
    schedule: [
      {
        time: "9:00 - 10:20",
        title: "Plenary Session 2",
        speaker: "Chair: Dr. Brian Makabayi",
        location: "Main Hall",
        type: "plenary",
        details: [
          "9:00 – 9:30: Land Governance as a catalyst for Sustainable Urban Development - Dr. Pamela Durán-Díaz (IHS, Erasmus University Rotterdam)",
          "9:30 – 10:00: Land Administration and Policy Reforms in Uganda - Simon Peter Mwesigye (UN-Habitat)",
          "10:00 – 10:20: Q & A",
        ],
      },
      {
        time: "10:20 - 11:00",
        title: "Health Break",
        speaker: "",
        location: "Hotel Lounge",
        type: "break",
      },
      {
        time: "11:00 - 13:00",
        title: "Parallel Sessions 4",
        speaker: "",
        location: "Multiple Rooms",
        type: "parallel",
        details: [
          "EALAN Session 4 (Chair: Dr. Mireille Biraro) - Papers 1-6 + Q&A",
          "AGRC Session 4 (Chair: Dr. John Richard Otukei) - Papers 1-6 + Q&A",
        ],
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break",
        speaker: "",
        location: "Hotel Restaurant",
        type: "break",
      },
      {
        time: "14:00 - 16:00",
        title: "EALAN AGM & AGRC Session 5",
        speaker: "",
        location: "Multiple Rooms",
        type: "parallel",
        details: [
          "EALAN Annual General Meeting (Chair: Dr. Lydia Mazzi Kayondo)",
          "AGRC Session 5 (Chair: Dr. Ivan Bamweyana) - Papers 1-6 + Q&A",
        ],
      },
      {
        time: "16:00 - 16:30",
        title: "Tea Break",
        speaker: "",
        location: "Hotel Lounge",
        type: "break",
      },
      {
        time: "16:30 - 17:00",
        title: "Closing Session",
        speaker: "Chair: Dr. Ronald Ssengendo",
        location: "Main Hall",
        type: "closing",
        details: [
          "16:00 – 16:15: Remarks by HOD - Dr. Lydia Mazzi Kayondo",
          "16:15 – 16:30: Remarks by EALAN Chair",
          "16:30 – 17:00: Closing Remarks by Deputy Principal CEDAT - Prof. Maria Kizito Kasule",
        ],
      },
    ],
  },
]

const getSessionTypeColor = (type: string) => {
  switch (type) {
    case "plenary":
      return "bg-pigment_green text-white"
    case "parallel":
      return "bg-chili_red text-white"
    case "opening":
      return "bg-blood_red text-white"
    case "closing":
      return "bg-blood_red text-white"
    case "break":
      return "bg-timberwolf text-black"
    case "registration":
      return "bg-black text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

const getSessionTypeIcon = (type: string) => {
  switch (type) {
    case "plenary":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )
    case "parallel":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      )
    case "break":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    default:
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )
  }
}

export function ProgramSchedule() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Conference Program</CardTitle>
            <CardDescription>Plan your AGRC2025 EALAN experience</CardDescription>
          </div>
          <div className="w-full md:w-auto">
            <Button
              className="bg-pigment_green hover:bg-pigment_green-600 text-white"
              onClick={() => {
                window.open(
                  "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/AGRC-EALAN%202025%20PROGRAM-EQMLNgMeNgoDJm9IZJdOz1Fyh2O3to.pdf",
                  "_blank",
                )
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="day2">
          {/* Update the TabsList to only show main conference days */}
          <TabsList className="mb-4 grid grid-cols-2 sm:flex sm:flex-wrap">
            <TabsTrigger value="day2" className="text-xs sm:text-sm">
              Day 1 (Jul 31)
            </TabsTrigger>
            <TabsTrigger value="day3" className="text-xs sm:text-sm">
              Day 2 (Aug 1)
            </TabsTrigger>
          </TabsList>

          {/* Remove the workshops TabsContent */}
          {/* <TabsContent value="workshops">
            <PreConferenceWorkshops />
          </TabsContent> */}

          {/* Update the map to start from index 1 (skip workshops day) */}
          {transformedScheduleData.slice(1).map((day, dayIndex) => (
            <TabsContent key={dayIndex} value={`day${dayIndex + 2}`} className="space-y-4">
              {day.schedule.map((session, index) => (
                <div
                  key={index}
                  className="border border-muted-foreground/20 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0">
                        {session.time && (
                          <Badge variant="outline" className="font-mono text-sm">
                            {session.time}
                          </Badge>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start gap-3 mb-2">
                          <Badge className={`${getSessionTypeColor(session.type)} flex items-center gap-1`}>
                            {getSessionTypeIcon(session.type)}
                            {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900 flex-grow">{session.title}</h3>
                        </div>

                        {session.speaker && (
                          <p className="text-sm text-pigment_green font-medium mb-1">{session.speaker}</p>
                        )}

                        {session.location && (
                          <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {session.location}
                          </p>
                        )}

                        {session.details && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-md">
                            <ul className="space-y-1 text-sm text-gray-700">
                              {session.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <span className="text-pigment_green mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      {/* Cultural Activity */}
      <div className="container mx-auto px-4 py-6">
        <div className="mt-12 bg-gradient-to-r from-pigment_green/10 to-pigment_green/5 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2 relative h-64 md:h-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ndere-cultural-center.jpg-Yx9Ht9Iy9Yd9Yx9Ht9Iy9Yd9"
                alt="Ndere Cultural Center performance"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.gorillatrekkingugandafromkigali.com/wp-content/uploads/2021/09/GPJNews_Uganda_AA_Nderecentre_67_web-920x612-1.jpg"
                }}
              />
            </div>
            <div className="md:col-span-3 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pigment_green"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-xl font-bold text-dark_green">Cultural Evening</h3>
              </div>
              <h4 className="text-2xl font-bold text-pigment_green mb-4">Visit to Ndere Cultural Center</h4>
              <p className="mb-4">
                Join us for an unforgettable evening of traditional Ugandan music, dance, and cuisine at the renowned
                Ndere Cultural Center. This special event offers a perfect opportunity to experience Uganda's rich
                cultural heritage while networking with fellow conference attendees.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pigment_green"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>July 31, 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pigment_green"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>6:30 PM - 9:30 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pigment_green"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Transportation Provided</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-pigment_green/20">
                <h5 className="text-sm font-semibold text-pigment_green mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pigment_green"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  Pricing Information
                </h5>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">Entrance (Ugandans):</span>
                    <span className="font-bold text-pigment_green">UGX 50,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">Entrance (Non-Ugandans):</span>
                    <span className="font-bold text-pigment_green">UGX 95,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">Buffet:</span>
                    <span className="font-bold text-pigment_green">UGX 60,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">Soft Drinks:</span>
                    <span className="font-bold text-pigment_green">UGX 4,000</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-pigment_green hover:bg-pigment_green/90 text-white">Add to My Schedule</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProgramSchedule
