"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Speakers from "@/components/Speakers"
import { useState } from "react"
import KeyDates from "@/components/KeyDates"
import { File, Quote, Users } from "lucide-react"

export default function OverviewContent() {
  const [datesModalOpen, setDatesModalOpen] = useState(false)

  // Update the committeeMembers object with the provided images
  const committeeMembers = {
    chair: {
      name: "Dr. Lydia Mazzi Kayondo-Ndandiko",
      role: "Conference Chairperson",
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%2021.04.20-ZUo3tGSZE2kXySyNxCIy65IsJlg9pM.jpeg",
      institution: "Makerere University",
    },
    advisoryBoard: [
      {
        name: "Prof. Moses Musinguzi",
        role: "Advisory Board",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rZfmbl2dfH9uN5S4GiH0gKtPJOVU8H.png",
        institution: "Makerere University",
      },
      {
        name: "Prof. Anthony Gidudu",
        role: "Advisory Board",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WAcIGrKpehXZiCJqwWIyLmZEkpIeZT.png",
        institution: "Makerere University",
      },
      {
        name: "Prof. John Kiema",
        role: "Advisory Board",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WEW7HL6XcbaRSZ8B3CW7gij6kpS5Ml.png",
        institution: "University of Nairobi",
      },
      {
        name: "Dr. Agnes Mwasumbi",
        role: "Advisory Board",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IOKHkIxby0aSY590o8r2dPwOC90u2p.png",
        institution: "Ardhi University",
      },
    ],
    members: [
      {
        name: "Dr. Brian Makabayi",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qJsCKpgR36Z14rOuin6HeSubh0dAs6.png",
        institution: "Makerere University",
      },
      {
        name: "Dr. Diana Abeho",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abeho.jpg-hyvEpJ8jlPEGMfi2jthw74k91sAbme.jpeg",
        institution: "Makerere University",
      },
      {
        name: "Dr. Ivan Bamweyana",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DdDIhGxZQLxheJ1Ry1KGPEYKonfKPf.png",
        institution: "Makerere University",
      },
      {
        name: "Dr. Ronald Ssengendo",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8pFhLrIwEYcy8oWwT9j2cdyaJ7JG4q.png",
        institution: "Makerere University",
      },
      {
        name: "Dr. Allan Mazimwe",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tUOKgKbU4wVHbaMqG7OoJLmwbv3zcb.png",
        institution: "Makerere University",
      },
      {
        name: "Dr. Lilian Oryema",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yyhFisMrL8UbWu04Nj4vN0LfnU8pNv.png",
        institution: "Makerere University",
      },
      {
        name: "Mr. Kamoga Joseph",
        role: "Committee Member",
        photo:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240530-WA0019.jpg-BhkTshQ93nImO5FPfMHpWDGlhi9Jln.jpeg",
        institution: "Makerere University",
      },
      {
        name: "Ms. Hilda Nyamwizi",
        role: "Committee Member",
        photo:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-18%20at%2010.14.23.jpg-McrvDslr9uWpypdLiWkUF0OULLkOnE.jpeg",
        institution: "Makerere University",
      },
      {
        name: "Ms. Naziiwa Flavia",
        role: "Committee Member",
        photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flavia.jpg-FYbj7FE0hVuqtWrCiLPMtVCLrtIqe7.jpeg",
        institution: "Makerere University",
      },
    ],
  }

  // Update the Conference Chair section with Dr. Lydia Mazzi Kayondo's information
  const chairSection = (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-xl font-bold mb-10 text-dark_green text-center">Message from Conference Chair</h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-pigment_green">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%2021.04.20-ZUo3tGSZE2kXySyNxCIy65IsJlg9pM.jpeg"
                alt="Dr. Lydia Mazzi Kayondo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-dark_green">Dr. Lydia Mazzi Kayondo</h3>
            <p className="text-gray-600">Conference Chair</p>
            <p className="text-sm text-gray-500">Makerere University</p>
          </div>

          <div className="md:col-span-2 bg-timberwolf/30 p-6 rounded-xl relative">
            <Quote className="absolute text-pigment_green/20 w-16 h-16 -top-6 -left-6" />
            <h3 className="text-xl font-semibold mb-4 text-dark_green">
              Welcome Message from the Chair, Local Organizing Committee
            </h3>

            <p className="mb-4 text-dark_green/90">
              Welcome to the official website of the Joint AGRC and EALAN Conference 2025! It is both my personal honor
              and our collective privilege to host this prestigious event on behalf of Makerere University's Department
              of Geomatics and Land Management.
            </p>

            <p className="mb-4 text-dark_green/90">
              This year marks a historic milestone as we bring together the 8th Advances in Geomatics Research
              Conference (AGRC) and the 14th Eastern Africa Land Administration Network (EALAN) Conference as a joint
              event for the first time, thereby, fostering interdisciplinary collaboration and knowledge exchange in
              Geomatics and Land Administration.
            </p>

            <p className="mb-4 text-dark_green/90">
              This is a must-attend event that will make your 2025 truly remarkable. Expect a week-long series of
              activities from July 28th to August 1st 2025 including pre-conference workshops, a national dialogue and
              the main conference.
            </p>

            <p className="mb-4 text-dark_green/90">
              Our theme, "Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land
              Administration," highlights the transformative role of geospatial technologies in shaping a sustainable
              future. We are preparing a unique platform for researchers, policymakers, industry leaders, and
              professionals to discuss advancements in geospatial sciences, land governance, environmental
              sustainability and technology-driven solutions for global challenges.
            </p>

            <div className="mb-4 text-dark_green/90">
              <p className="font-semibold">Look out for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Engaging Discussions: Thought-provoking sessions with experts and policymakers shaping the future of
                  Geomatics and Land Administration.
                </li>
                <li>
                  Cutting-Edge Research: Showcasing innovations in geospatial technology, remote sensing, and land
                  management.
                </li>
                <li>
                  Networking Opportunities: Expanding regional and global collaborations across academia, industry, and
                  government institutions.
                </li>
                <li>
                  Practical Solutions: Translating research into policy recommendations and actionable strategies
                  aligned with the UN Sustainable Development Goals (SDGs).
                </li>
              </ul>
            </div>

            <p className="mb-4 text-dark_green/90">
              I extend a warm invitation to all participants to engage actively on this platform. Your insights,
              research, and collaborations will be instrumental in advancing knowledge and driving impactful change in
              our fields.
            </p>

            <p className="mb-4 text-dark_green/90">
              I would like to express my sincere gratitude to our esteemed speakers, panellists, sponsors, and
              organizing teams for their dedication to making this event a reality. Together, we can leverage geospatial
              innovations to build sustainable, resilient, and well-governed communities.
            </p>

            <p className="text-dark_green/90">
              We look forward to welcoming you in person to Kampala, Uganda for an engaging, memorable, enriching
              experience filled with networking and inspiration.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="font-semibold text-dark_green">Dr. Lydia Mazzi Kayondo-Ndandiko</p>
              <p className="text-dark_green/90">Chair, Local Organizing Committee</p>
              <p className="text-dark_green/90">Joint AGRC and EALAN Conference 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Sponsor logos in the specified order: EU, BMZ, GIZ, RVO, UN-Habitat, GLTN, ST-I, EAGLECORs, SURVNET, then the rest
  const sponsorLogos = [
    // EU
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/EU_Co-funded-removebg-preview-YTNSNnFqcrU7QdAph4KrmOh6cptSvx.png",
    // BMZ
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/BMZ-removebg-preview-8FTovf5PTw40sb31R4EPLf7XXkaWgX.png",
    // GIZ
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/GIZ_logo-removebg-preview-cGySFaImkyXYeQqkdqW2cJ8hvep7kA.png",
    // RVO (Netherlands)
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/RVO_Logo_online_ex_pos_en-Q56MCMOdBxffSXnos9sn7tTEl2RXCO.png",
    // UN Habitat
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-removebg-preview-3V82NUVy4A9vmGt41JkWqO0TF8D26G.png",
    // GLTN
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GLTN_LOGO_rgb_300dpi-removebg-preview-nHcSGSDLoyiEUOjA41eO1w96qLq24U.png",
    // ST-I
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/STI-LOGO-jiwZaFjPfANVcEYJWZQbTNeiBq51cK.png",
    // EagleCORS
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/Eaglecors_Logo_Finale-DsxBe1EKfT9cBylWE879Xgp0MYGmBS.png",
    // SURVNET
    "https://fstj3yewzk8k0t1q.public.blob.vercel-storage.com/cropped-SURVNET-LOGO-zgTZ25naiE01TVRfkiJs2aPoex94hW.webp",
    // Rest of the sponsors
    // Makerere University
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6e3QXzMXNbuD3sISdjiAkYZb92KrMt.png",
    // Surveyors Registration Board
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SRB-Logo-kwlVnu6qVNRgiNhrEulqRvbB9oOu6W.png",
    // Institution of Surveyors of Uganda
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISU-Logo-1-NUptP4w128c9mI6PvKR5ZFFsVldlSe.png",
  ]

  // New Conference Organization section with faces
  const conferenceOrganizationSection = (
    <section className="py-16 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="uppercase text-xl font-bold mb-4 text-dark_green text-center">Conference Organization</h2>
          <div className="flex items-center justify-center gap-2 text-pigment_green">
            <Users size={24} />
            <p className="text-lg">Meet the team behind AGRC2025 EALAN Conference</p>
          </div>
        </div>

        {/* Conference Chair */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-8 text-center text-dark_green border-b border-pigment_green/30 pb-2">
            Conference Chairing Committee
          </h3>
          <div className="flex justify-center">
            <div className="flex flex-col items-center max-w-xs">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-pigment_green">
                <Image
                  src={committeeMembers.chair.photo || "/placeholder.svg"}
                  alt={committeeMembers.chair.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl text-center font-bold text-pigment_green">{committeeMembers.chair.name}</h4>
              <p className="text-gray-600">{committeeMembers.chair.role}</p>
              <p className="text-sm text-gray-500">{committeeMembers.chair.institution}</p>
            </div>
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-8 text-center text-dark_green border-b border-pigment_green/30 pb-2">
            Advisory Board
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {committeeMembers.advisoryBoard.map((member, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3 border-2 border-pigment_green/70">
                  <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-pigment_green text-center">{member.name}</h4>
                <p className="text-sm text-gray-500 text-center">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Members */}
        <div>
          <h3 className="text-lg font-semibold mb-8 text-center text-dark_green border-b border-pigment_green/30 pb-2">
            Committee Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {committeeMembers.members.map((member, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-pigment_green/50">
                  <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-md font-semibold text-pigment_green text-center">{member.name}</h4>
                <p className="text-xs text-gray-500 text-center">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Committee List Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-chili_red hover:bg-chili_red/90 text-white">
            <File className="mr-2 h-4 w-4" /> Download Full Committee List
          </Button>
        </div>
      </div>
    </section>
  )

  return (
    <div className="space-y-16">
      {/* About the Conference - New Grid Layout */}
      <section className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col space-y-5">
          <div>
            <h2 className="uppercase text-xl font-bold mb-6 text-dark_green">About the Conference</h2>
            <p className="text-lg text-dark_green/90 mb-4">
              The Joint 8th Advances in Geomatics Research Conference (AGRC) and 14th Eastern Africa Land Administration
              Network (EALAN) Conference unites experts in Geomatics and Land Administration to facilitate the exchange
              of knowledge among academia, researchers, and practitioners. Centered around the theme "Geo-Enablement for
              Sustainable Development," the conference highlights the importance of spatial data in tackling global
              challenges and advancing the UN Sustainable Development Goals.
            </p>
            <p className="text-lg text-dark_green/90 mb-4">
              For the first time, these two prestigious conferences will be held together, providing a unique
              opportunity for cross-disciplinary dialogue and collaboration. Researchers and innovators are invited to
              submit abstracts by April 30, 2025, for presentations on sustainable development at the conference.
            </p>
          </div>
          <div className="flex">
            <Button asChild className="bg-chili_red hover:bg-chili_red/90 text-white px-8 py-3 text-md lg:text-lg">
              <Link
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrc2025_announcement_poster_17.02.2025_10.07AM%20%281%29.jpg-PvktVTLErVGcrKxdHG0TTCU3R61QRP.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <span className="mr-2 text-lg">
                  <File size="20px" />
                </span>
                Conference Flyer
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column - 2x2 Grid */}
        <div className="grid grid-cols-2 grid-rows-2 h-auto aspect-square">
          {/* Register Box */}
          <div className="bg-pigment_green flex items-center justify-center">
            <Button asChild variant="link" className="text-white text-xl font-bold no-underline hover:no-underline">
              <Link href="/registration">
                Register Here
                <span className="ml-2 text-lg rotate-45">→</span>
              </Link>
            </Button>
          </div>

          {/* Image with Overlay */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_4203.jpg-cB7MpRecbjeAy5mwlUJwB48dr0O6rm.jpeg"
              alt="Conference speaker presenting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pigment_green/40"></div>
          </div>

          {/* Image with Overlay */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3621.jpg-IUESUwRK1UeH3pJXzECdrRdZnPeDXV.jpeg"
              alt="Conference attendee in auditorium"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pigment_green/40"></div>
          </div>

          {/* Location Box */}
          <div className="bg-dark_green p-4 flex flex-col justify-center text-white">
            <div className="flex flex-col items-start md:items-center space-y-2">
              <p className="font-bold text-xl">Makerere University</p>
              <p>Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="py-8">
        <KeyDates />
      </section>

      {/* Speakers Section */}
      <Speakers />

      {/* Organizers */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hosted by column */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-6">Hosted by:</h3>
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6e3QXzMXNbuD3sISdjiAkYZb92KrMt.png"
                  alt="Makerere University Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center font-medium text-dark_green">
                Makerere University Department of Geomatics and Land Management
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-pigment_green hover:text-pigment_green/90 hover:bg-transparent mt-2"
                asChild
              >
                <Link href="https://mak.ac.ug" target="_blank" className="flex items-center gap-1">
                  Website
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
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              </Button>
            </div>

            {/* In collaboration with column */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-6">In collaboration with:</h3>
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ealan%20logo%20new-pHr958gISQrLg5zdSsH6gOHh5daZo7.png"
                  alt="EALAN Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center font-medium text-dark_green">Eastern African Land Network Administration</p>
              <Button
                variant="ghost"
                size="sm"
                className="text-pigment_green hover:text-pigment_green/90 hover:bg-transparent mt-2"
                asChild
              >
                <Link href="https://ealan-network.org" target="_blank" className="flex items-center gap-1">
                  Website
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
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <h2 className="uppercase text-xl font-bold mb-6 text-dark_green">sponsors</h2>

            {/* Add call for sponsorship */}
            <div className="max-w-2xl text-center mb-10">
              <p className="text-lg mb-4">
                Become a sponsor of the AGRC2025 EALAN Conference and showcase your organization to experts in Geomatics
                and Land Administration from across Eastern Africa and beyond.
              </p>
              <p className="mb-6">
                We offer various sponsorship packages with benefits including logo placement, exhibition space, speaking
                opportunities, and more.
              </p>
              <Button asChild className="bg-pigment_green hover:bg-pigment_green-600 text-white">
                <Link href="mailto:sponsors@agrc2025ealan.org">Become a Sponsor</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsorLogos.map((logo, index) => (
              <div key={index} className="w-32 h-32 relative">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt="Sponsor logo"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Conference Chair */}
      {chairSection}

      {/* Conference Organization - New Section with Faces */}
      {conferenceOrganizationSection}
    </div>
  )
}
