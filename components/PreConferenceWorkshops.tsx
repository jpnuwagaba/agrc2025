"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WorkshopDetails, type Workshop } from "./WorkshopDetails"

// Workshop data
const workshopsData: Workshop[] = [
  {
    id: "ffpla",
    title: "Fit-for-Purpose Land Administration Pre-conference Stakeholder Workshop",
    description: [
      "Land administration plays a crucial role in sustainable development, social equity, and economic growth. However, conventional land administration systems are often complex, time-consuming, and expensive, making them inaccessible for many communities, particularly in developing regions. Fit-for-Purpose Land Administration (FFPLA) provides an innovative and cost-effective approach to land tenure security by adopting flexible, inclusive, and participatory methodologies that align with local needs and capacities.",
      "The Fit-for-Purpose Land Administration framework was first conceptualized by the International Federation of Surveyors (FIG), the World Bank, and UN-Habitat's Global Land Tool Network (GLTN). It provides a pragmatic solution to land tenure and land governance issues by advocating for affordable, inclusive, scalable, and sustainable land administration systems. Unlike conventional cadastral approaches, which rely on high-accuracy spatial data and lengthy processes, FFPLA adopts progressive, participatory, and locally adaptable methodologies that allow for incremental improvements over time.",
      "This stakeholder workshop aims to bring together key players in land administration, including government agencies, civil society organizations, development partners, academia, and the private sector, to discuss the implementation of FFPLA in ensuring tenure security and efficient land management. The workshop will explore practical tools, policy considerations, and capacity-building needs to enhance the adoption and operationalization of FFPLA.",
    ],
    objectives: [
      "To create awareness and deepen understanding of Fit-for-Purpose Land Administration principles and their relevance to national and regional land administration frameworks.",
      "To identify challenges, opportunities, and best practices for implementing FFPLA approaches in different contexts.",
      "To facilitate knowledge exchange among stakeholders on innovative solutions for securing land rights, particularly for marginalized groups.",
      "To explore strategies for strengthening institutional frameworks, policies, and legal structures to support FFPLA implementation.",
      "To develop actionable recommendations for integrating FFPLA into national land administration programs and policies.",
    ],
    outcomes: [
      "A shared understanding of FFPLA concepts and their practical applications.",
      "A comprehensive analysis of the existing challenges and gaps in conventional land administration systems.",
      "Policy recommendations for integrating FFPLA into national and local land administration frameworks.",
      "Strengthened partnerships among key stakeholders for collaborative action and future engagements.",
      "A roadmap for piloting or scaling up FFPLA initiatives within different jurisdictions.",
    ],
    participants: [
      "Government representatives (Ministry of Lands, Housing, and Urban Development, land commissions, and local authorities).",
      "Development partners and donor agencies supporting land governance initiatives.",
      "Civil society organizations and community-based organizations working on land rights.",
      "Academia and research institutions specializing in land administration and governance.",
      "Private sector actors involved in land surveying, GIS, and technology solutions.",
      "Traditional leaders and representatives of indigenous communities.",
    ],
    days: [
      {
        date: "July 28, 2025",
        sessions: [
          { time: "8:00 am - 9:00 am", activity: "Arrival and Registration of Participants", facilitator: "MAK-GLM" },
          { time: "9:00 am - 9:10 am", activity: "Introduction of participants", facilitator: "MAK-GLM" },
          { time: "9:10 am - 9:30 am", activity: "Welcome Remarks", facilitator: "MAK-GLM" },
          {
            time: "9:30 am - 9:40 am",
            activity: "Objectives and expected outcomes of the Workshop",
            facilitator: "MAK-GLM",
          },
          { time: "9:40 am - 10:00 am", activity: "Official opening of training", facilitator: "To be identified" },
          { time: "10:00 am - 10:30 am", activity: "Tea Break & Group Photo", facilitator: "MAK-GLM" },
          {
            time: "10:30 am - 11:00 am",
            activity: "Introduction to Fit-for-Purpose Land Administration",
            facilitator: "Prof Moses Musinguzi",
          },
          {
            time: "11:00 am - 11:30 am",
            activity: "Fit For Purpose Land Administration Country Implementation Strategy",
            facilitator: "Ms Naome Kabanda",
          },
          {
            time: "11:30 am - 12:00 am",
            activity: "The Global Context Fit-for-Purpose Land Administration",
            facilitator: "Mr. Simon Peter Mwesigye",
          },
          { time: "12:00 am - 1:00 pm", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          { time: "1:00 pm – 2:00 pm", activity: "Lunch Break", facilitator: "MAK-GLM" },
          {
            time: "2:00 pm - 2:45 pm",
            activity: "Rural Community-based Land Registration – process and lessons – Makerere",
            facilitator: "Dr. Brian Makabayi",
          },
          {
            time: "2:45 pm - 3:30 pm",
            activity: "Rural Community-based Land Registration – process and lessons – IIRR",
            facilitator: "Ms. Pamela Nyamutoka Katooro",
          },
          {
            time: "3:30 pm - 4:15 pm",
            activity: "Rural Community-based Land Registration – process and lessons - UCOBAC",
            facilitator: "Mr. Katusime Mark",
          },
          { time: "4:15 pm - 5:00 pm", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          { time: "5:00 pm", activity: "Departure", facilitator: "MAK-GLM" },
        ],
      },
      {
        date: "July 29, 2025",
        sessions: [
          { time: "8:00 am - 9:00 am", activity: "Arrival and Registration of Participants", facilitator: "MAK-GLM" },
          {
            time: "9:00 am - 9:30 am",
            activity: "Gender issues in land registration and land use planning",
            facilitator: "Ms. Frances Birungi-Odongo",
          },
          { time: "9:30 am - 10:00 am", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          { time: "10:00 am - 10:30 am", activity: "Tea Break", facilitator: "MAK-GLM" },
          {
            time: "10:30 am - 11:00 am",
            activity: "Integration of FFPLA data into the National Land Information System",
            facilitator: "Mr. Kambugu William",
          },
          {
            time: "11:00 am - 11:30 am",
            activity: "Participatory Tenure responsive land use planning – context of highly fragmented land.",
            facilitator: "Ms. Amanda Ngabirano",
          },
          {
            time: "11:30 am - 12:00 pm",
            activity: "Land tenure and land management in Urban Context – Informal settlements and Slums",
            facilitator: "Act together to be identified.",
          },
          { time: "12:00 pm - 1:00 pm", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          { time: "1:00 pm – 2:00 pm", activity: "Lunch Break", facilitator: "MAK-GLM" },
          {
            time: "2:00 pm - 2:30 pm",
            activity: "Participatory Tenure responsive land use planning – context of Refugees",
            facilitator: "Mr. Muwanguzi Douglas",
          },
          {
            time: "2:30 pm - 3:00 pm",
            activity:
              "Participatory Wetland Use Planning and Management – Lessons from Community-Based Wetland Management Planning Processes.",
            facilitator: "Ms. Jordana Wamboga",
          },
          {
            time: "3:00 pm - 4:00 pm",
            activity: "Participatory Tenure responsive land use planning – Country Strategy",
            facilitator: "Mr Kaganzi Emmanuel, Commissioner of Land Use Planning MLHUD",
          },
          { time: "4:00 pm - 5:00 pm", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          {
            time: "4:00 pm - 5:00 pm",
            activity:
              "Action Planning: Development of a roadmap for integrating FFPLA into national strategies, Way forward and closure",
            facilitator: "MAK-GLM",
          },
          { time: "5:00 pm", activity: "Departure", facilitator: "MAK-GLM" },
        ],
      },
      {
        date: "July 30, 2025",
        sessions: [
          { time: "8:00 am - 9:00 am", activity: "Arrival and Registration of Participants", facilitator: "MAK-GLM" },
          {
            time: "9:00 am - 9:30 am",
            activity: "Rural Community-based Land Registration – process and lessons - GIZ",
            facilitator: "Mr. Daniel Kirumira",
          },
          { time: "9:30 am - 10:00 am", activity: "Question and Answer Session", facilitator: "MAK-GLM" },
          { time: "10:00 am - 10:30 am", activity: "Tea Break", facilitator: "MAK-GLM" },
          {
            time: "10:30 am - 11:30 am",
            activity: "Group Assignment on each of the objectives",
            facilitator: "MAK-GLM",
          },
          { time: "11:30 am - 12:30 pm", activity: "Groups present feedback", facilitator: "MAK-GLM" },
          {
            time: "12:30 pm - 1:00 pm",
            activity:
              "Action Planning: Development of a roadmap for integrating FFPLA into national strategies, Way forward and closure",
            facilitator: "MAK-GLM",
          },
          { time: "1:00 pm – 2:00 pm", activity: "Lunch Break", facilitator: "MAK-GLM" },
          { time: "2:00 pm", activity: "Departure", facilitator: "MAK-GLM" },
        ],
      },
    ],
    contactPerson: {
      name: "Dr. Lydia Mazzi Kayondo",
      title: "Workshop Coordinator",
      organization: "Makerere University",
      email: "lydia.mazzi@mak.ac.ug",
      phone: "+256 772 123456",
    },
    venue: "Makerere University, School of Built Environment",
    registrationLink: "#",
  },
  {
    id: "gnss",
    title: "Multi-Constellation GNSS for Land Surveyors and Other Technical Professionals",
    description: [
      "This pre-conference workshop emphasizes the fundamentals of multi-constellation GNSS. The workshop begins with an overview of GNSS followed by presentations on each of the GNSSs in operation and/or development today. The workshop then highlights the main error sources and how to minimise them and then delves into the GNSS positioning techniques that are applicable in surveying and other fields.",
      "A big part of the workshop will include practical sessions and hands-on training in various GNSS positioning techniques including static positioning, Network RTK using CORs, PPP, etc. Participants will get an overview of reference systems (national, regional and global), recent advances in GNSS PNT and an introduction to height datums and geoid models.",
    ],
    objectives: [
      "To provide comprehensive understanding of multi-constellation GNSS fundamentals",
      "To present detailed overview of each GNSS in operation and development",
      "To identify main error sources in GNSS and methods to minimize them",
      "To demonstrate various GNSS positioning techniques applicable in surveying",
      "To provide hands-on training in static positioning, Network RTK, and PPP techniques",
    ],
    outcomes: [
      "Enhanced understanding of multi-constellation GNSS systems",
      "Practical skills in various GNSS positioning techniques",
      "Knowledge of reference systems at national, regional and global levels",
      "Understanding of recent advances in GNSS PNT technology",
      "Familiarity with height datums and geoid models",
    ],
    participants: [
      "Land surveyors and surveying professionals",
      "GIS specialists and spatial data professionals",
      "Engineering professionals working with positioning systems",
      "Academic researchers in geospatial technologies",
      "Government officials involved in spatial data infrastructure",
      "Technical professionals requiring precise positioning knowledge",
    ],
    days: [
      {
        date: "July 28, 2025",
        sessions: [{ time: "TBD", activity: "Workshop schedule to be announced", facilitator: "TBD" }],
      },
      {
        date: "July 29, 2025",
        sessions: [{ time: "TBD", activity: "Workshop schedule to be announced", facilitator: "TBD" }],
      },
      {
        date: "July 30, 2025",
        sessions: [{ time: "TBD", activity: "Workshop schedule to be announced", facilitator: "TBD" }],
      },
    ],
    contactPerson: {
      name: "Dr Ronald Ssengendo",
      title: "Workshop Coordinator",
      organization: "Makerere University",
      phone: "+256784614675",
    },
    venue: "To be announced",
  },
  {
    id: "uav",
    title: "UAV Applications in Land Administration and Sustainable Development",
    description: [
      "Join UAV experts and professionals for hands-on training in drone operations, aerial mapping, and photogrammetry, with real-world applications in land governance and sustainable development.",
      "This comprehensive workshop will provide participants with practical skills in UAV technology applications for land administration, covering everything from flight operations to data processing and analysis. The workshop emphasizes real-world applications that support sustainable development goals and effective land governance.",
      "Participants will engage in field demonstrations, hands-on training sessions, and learn about the latest innovations in UAV technology for geospatial applications. The workshop also covers important aspects of policy, regulation, and ethical considerations in drone use for land administration purposes.",
    ],
    objectives: [
      "To provide hands-on training in drone flight operations and planning",
      "To demonstrate aerial data capture techniques and GNSS integration",
      "To teach photogrammetry and 3D modeling using UAV data",
      "To explore UAV applications in land, agriculture, and infrastructure",
      "To discuss policy, regulation, and ethical considerations in drone use",
      "To promote community-driven geospatial innovation using UAV technology",
    ],
    outcomes: [
      "Practical skills in UAV flight operations and mission planning",
      "Understanding of aerial data capture and processing techniques",
      "Knowledge of photogrammetry and 3D modeling workflows",
      "Awareness of regulatory and ethical frameworks for UAV operations",
      "Experience with field demonstrations and data processing labs",
      "Network of UAV professionals and practitioners in the region",
    ],
    participants: [
      "UAV pilots and drone operators",
      "App developers working with geospatial applications",
      "Students in geomatics, surveying, and related fields",
      "Government officers involved in land administration",
      "Researchers in geospatial technologies and remote sensing",
      "Policymakers working on drone regulations and land governance",
      "Community stakeholders interested in geospatial innovation",
    ],
    days: [
      {
        date: "July 25, 2025",
        sessions: [
          { time: "8:00 AM", activity: "Workshop registration and introduction", facilitator: "Dr. Dianah Rose Abeho" },
          { time: "TBD", activity: "Detailed schedule to be announced", facilitator: "TBD" },
        ],
      },
      {
        date: "July 26, 2025",
        sessions: [
          { time: "8:00 AM", activity: "Hands-on UAV operations training", facilitator: "TBD" },
          { time: "TBD", activity: "Detailed schedule to be announced", facilitator: "TBD" },
        ],
      },
      {
        date: "July 27, 2025",
        sessions: [
          { time: "8:00 AM", activity: "Field demonstrations and data processing", facilitator: "TBD" },
          { time: "TBD", activity: "Detailed schedule to be announced", facilitator: "TBD" },
        ],
      },
    ],
    contactPerson: {
      name: "Dr. Dianah Rose Abeho",
      title: "Workshop Coordinator",
      organization: "Makerere University",
      phone: "+256 776 139601",
    },
    venue: "To be announced",
    registrationLink: "#",
  },
  // Additional workshops can be added here in the future
]

export function PreConferenceWorkshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null)

  const workshop = selectedWorkshop ? workshopsData.find((w) => w.id === selectedWorkshop) : null

  return (
    <div className="space-y-8">
      {!selectedWorkshop ? (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-pigment_green">Pre-Conference Workshops</h2>
              <p className="text-gray-600">
                July 28-30, 2025 | Specialized training sessions before the main conference
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workshopsData.map((workshop) => (
              <Card
                key={workshop.id}
                className="overflow-hidden hover:shadow-md transition-shadow border-pigment_green/20"
              >
                <CardHeader className="bg-gradient-to-r from-pigment_green/10 to-transparent">
                  <Badge className="w-fit mb-2 bg-pigment_green text-white">July 28-30, 2025</Badge>
                  <CardTitle>{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 line-clamp-3 mb-4">{workshop.description[0]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {workshop.id === "ffpla" && (
                      <>
                        <Badge variant="outline" className="bg-gray-50">
                          Land Administration
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Stakeholder Workshop
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          FFPLA
                        </Badge>
                      </>
                    )}
                    {workshop.id === "gnss" && (
                      <>
                        <Badge variant="outline" className="bg-gray-50">
                          GNSS
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Positioning
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Surveying
                        </Badge>
                      </>
                    )}
                    {workshop.id === "uav" && (
                      <>
                        <Badge variant="outline" className="bg-gray-50">
                          UAV/Drones
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Aerial Mapping
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Photogrammetry
                        </Badge>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
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
                      <span className="text-sm text-gray-600">{workshop.venue}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="border-pigment_green text-pigment_green hover:bg-pigment_green hover:text-white bg-transparent"
                      onClick={() => setSelectedWorkshop(workshop.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-pigment_green hover:text-pigment_green/80 hover:bg-pigment_green/5 p-0"
              onClick={() => setSelectedWorkshop(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to All Workshops
            </Button>
          </div>

          {workshop && <WorkshopDetails workshop={workshop} />}
        </div>
      )}
    </div>
  )
}

export default PreConferenceWorkshops
