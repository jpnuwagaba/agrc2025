"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText, CheckCircle, ArrowRight, Download, File, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Call4Abstracts() {
  // Topics of interest based on the conference theme
  const topics = [
    {
      category: "Geospatial Technologies and Applications",
      topics: [
        "Remote Sensing and Earth Observation",
        "GIS and Mapping Solutions",
        "Location-Based Services",
        "Spatial Data Infrastructure",
        "Web-based Geospatial Applications",
      ],
    },
    {
      category: "Surveying and Measurement",
      topics: [
        "Modern Survey Techniques",
        "GNSS Technologies",
        "Photogrammetry and LiDAR",
        "Engineering Surveys",
        "Cadastral Surveying",
      ],
    },
    {
      category: "Land Management and Administration",
      topics: [
        "Land Registration Systems",
        "Land Tenure and Rights",
        "Land Policy and Governance",
        "Digital Land Administration",
        "Property Valuation",
      ],
    },
    {
      category: "Development and Natural Resource Management",
      topics: [
        "Sustainable Land Use",
        "Environmental Conservation",
        "Urban and Rural Development",
        "Resource Allocation and Planning",
        "Climate Change Adaptation",
      ],
    },
    {
      category: "Spatial Information and Planning",
      topics: [
        "Spatial Data Analysis",
        "Urban Planning",
        "Infrastructure Planning",
        "Land Use Planning",
        "Decision Support Systems",
      ],
    },
    {
      category: "History and Evolution of Surveying",
      topics: [
        "Traditional Survey Methods",
        "Evolution of Survey Equipment",
        "Historical Mapping Techniques",
        "Indigenous Land Management",
        "Professional Development",
      ],
    },
    {
      category: "Innovative Technologies in Land Management",
      topics: [
        "Blockchain in Land Administration",
        "Artificial Intelligence Applications",
        "Big Data Analytics",
        "3D Cadastre",
        "Smart Cities Solutions",
      ],
    },
  ]

  // Important dates
  const importantDates = [
    {
      date: "February 28, 2025",
      event: "Abstract Submission Opens",
      icon: <Calendar className="h-5 w-5 text-pigment_green" />,
    },
    {
      date: "April 30, 2025",
      event: "Abstract Submission Deadline",
      icon: <Clock className="h-5 w-5 text-pigment_green" />,
    },
    {
      date: "May 31, 2025",
      event: "Notification of Acceptance",
      icon: <CheckCircle className="h-5 w-5 text-pigment_green" />,
    },
    {
      date: "June 30, 2025",
      event: "Full Paper Submission",
      icon: <FileText className="h-5 w-5 text-pigment_green" />,
    },
    { date: "July 30, 2025", event: "Conference Begins", icon: <Calendar className="h-5 w-5 text-pigment_green" /> },
  ]

  // Submission guidelines
  const guidelines = [
    "Abstracts should be no more than 300 words",
    "Include 3-5 keywords related to your research",
    "Clearly state the research objectives, methodology, and key findings",
    "Use Times New Roman, 12pt font, single-spaced",
    "Submit in PDF format only",
    "Include author name(s), affiliation(s), and contact information",
    "Indicate the preferred presentation format (oral or poster)",
    "Specify the topic category from the list of topics of interest",
  ]

  // Review process steps
  const reviewProcess = [
    {
      step: "Initial Screening",
      description:
        "All abstracts undergo an initial screening to ensure they meet the basic requirements and fall within the conference scope.",
    },
    {
      step: "Peer Review",
      description:
        "Each abstract is reviewed by at least two members of the scientific committee based on relevance, originality, and scientific merit.",
    },
    {
      step: "Decision Making",
      description: "The scientific committee makes final decisions on acceptance based on reviewer recommendations.",
    },
    {
      step: "Notification",
      description:
        "Authors are notified of the decision by May 31, 2025. Accepted abstracts will receive further instructions for full paper submission.",
    },
    {
      step: "Publication",
      description:
        "Accepted papers will be published in the conference proceedings and selected papers may be considered for publication in partner journals.",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-dark_green text-white rounded-xl p-6 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Abstracts</h1>
          <p className="text-lg mb-4">
            Share your research and innovations at the AGRC2025 EALAN Conference. Submit your abstract by April 30,
            2025.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-lg mb-2">Two Ways to Submit Your Abstract:</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="bg-white text-dark_green rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <span>Use our online submission form</span>
              </div>
              <div className="hidden md:block text-2xl">or</div>
              <div className="md:hidden text-lg my-1">OR</div>
              <div className="flex items-center gap-2">
                <div className="bg-white text-dark_green rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <span>
                  Email your abstract to <strong>agrc.ealan2025@mak.ac.ug</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-chili_red hover:bg-chili_red/90 text-white">
              <Link
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrc2025_call4abstracts_18.02.2025_10.10AM%20%281%29.jpg-WPfp7Yak9xiVgy7QOn18CHRUF653Uz.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <File size={20} />
                Download Flyer
              </Link>
            </Button>
            <Button asChild className="bg-pigment_green hover:bg-pigment_green/90 text-white">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScprAGZohDnbchCtiO6mazJEmK1ONqgKHiJgCHEPKK6E28FCQ/viewform?usp=header"
                target="_blank"
                className="flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Online Submission Form
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="mailto:agrc.ealan2025@mak.ac.ug" className="flex items-center gap-2">
                <Mail size={18} />
                Email Submission
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Content Sections in Linear Order */}
      <div className="space-y-16">
        {/* Topics of Interest */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-dark_green mb-4">Topics of Interest</h2>
            <p className="text-gray-600 mb-6">
              We welcome abstracts on the following topics related to Geomatics and Land Administration:
            </p>
            <ul className="space-y-3">
              {[
                "Geospatial Technologies and Applications",
                "Surveying and Measurement",
                "Land Management and Administration",
                "Development and Natural Resource Management",
                "Spatial Information and Planning",
                "History and Evolution of Surveying",
                "Innovative Technologies in Land Management",
              ].map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-pigment_green shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-8 max-w-2xl">
              The above list is not exhaustive. We welcome innovative research that aligns with the conference theme:
              "Geo-Enablement for Sustainable Development: Harnessing Innovation in Geomatics and Land Administration"
            </p>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 aspect-square w-full max-w-md mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research%20bg.jpg-njt6j1cTWaHuGwbXeMYD18Yu1k1qbO.jpeg"
                alt="Geospatial mapping visualization showing urban layout"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Other sections should follow the same pattern - replace Card with section */}
        <section className="">
          <h2 className="text-2xl font-bold text-dark_green mb-4">Submission Guidelines</h2>
          <p className="text-gray-600 mb-8">
            Please follow these guidelines when preparing and submitting your abstract
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark_green">Abstract Requirements</h3>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pigment_green shrink-0 mt-0.5" />
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-dark_green">Abstract Template</h3>
              <p className="mb-4">
                To ensure consistency, please use our abstract template. The template includes formatting guidelines and
                sections for:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pigment_green" />
                  <span>Title</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pigment_green" />
                  <span>Author(s) and affiliation(s)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pigment_green" />
                  <span>Keywords</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pigment_green" />
                  <span>Abstract body</span>
                </li>
              </ul>
              <Link target="_blank" href="https://1drv.ms/w/c/e62566b834b73a8b/EYSyN4z15-1OtipcLCnrFc8BFNrHHH3yuW95YLijbbsFOw?e=Z0PTVN">
                <Button className="w-full">
                Download Template <Download className="ml-2 h-4 w-4" />
              </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="">
          <h2 className="text-2xl font-bold text-dark_green mb-4">Abstract Submission</h2>
          <p className="text-gray-600 mb-8">
            Follow these steps to submit your abstract for the AGRC2025 EALAN Conference
          </p>

          {/* Submission Methods Box */}
          <div className="bg-pigment_green/10 rounded-lg p-6 mb-8 border border-pigment_green/20">
            <h3 className="text-xl font-bold text-dark_green mb-4">Two Submission Methods Available</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pigment_green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-lg">Online Submission Form</h4>
                </div>
                <p className="mb-4">
                  Complete our online form with your details and upload your abstract as a PDF file.
                </p>
                <Button asChild className="w-full bg-pigment_green hover:bg-pigment_green/90 text-white">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScprAGZohDnbchCtiO6mazJEmK1ONqgKHiJgCHEPKK6E28FCQ/viewform?usp=header"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Submit via Form
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pigment_green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-lg">Email Submission</h4>
                </div>
                <p className="mb-4">Send your abstract as a PDF attachment directly to our conference email address.</p>
                <Button asChild className="w-full" variant="outline">
                  <Link href="mailto:agrc.ealan2025@mak.ac.ug" className="flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Email to agrc.ealan2025@mak.ac.ug
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-lg">
              <div className="pb-2 p-4">
                <div className="w-10 h-10 rounded-full bg-dark_green text-white flex items-center justify-center mb-2">
                  1
                </div>
                <h3 className="text-lg font-semibold">Prepare</h3>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Prepare your abstract according to the guidelines and using the provided template.
                </p>
                <Button variant="outline" className="w-full">
                  Download Template
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg">
              <div className="pb-2 p-4">
                <div className="w-10 h-10 rounded-full bg-dark_green text-white flex items-center justify-center mb-2">
                  2
                </div>
                <h3 className="text-lg font-semibold">Register</h3>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Register on our conference management system if you haven't already to have your slot kept in the
                  records.
                </p>
                <Button variant="outline" className="w-full">
                  <Link href="/registration">Register</Link>
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg">
              <div className="pb-2 p-4">
                <div className="w-10 h-10 rounded-full bg-dark_green text-white flex items-center justify-center mb-2">
                  3
                </div>
                <h3 className="text-lg font-semibold">Submit</h3>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Choose your preferred submission method (online form or email) and submit your abstract.
                </p>
                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-pigment_green hover:bg-pigment_green/90 text-white" asChild size="sm">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScprAGZohDnbchCtiO6mazJEmK1ONqgKHiJgCHEPKK6E28FCQ/viewform?usp=header"
                      target="_blank"
                    >
                      Submit via Form
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="sm" asChild>
                    <Link href="mailto:agrc.ealan2025@mak.ac.ug">Submit via Email</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 border border-dashed border-dark_green/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-dark_green">Need Assistance?</h3>
            <p className="mb-4">
              If you encounter any issues during the submission process or have questions about your abstract, please
              contact our support team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <Link href="mailto:agrc.ealan2025@mak.ac.ug" className="flex items-center gap-2">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  agrc.ealan2025@mak.ac.ug
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="tel:+256123456789" className="flex items-center gap-2">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +256 123 456 789
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="">
          <h2 className="text-2xl font-bold text-dark_green mb-4">Review & Acceptance Process</h2>
          <p className="text-gray-600 mb-8">
            Understanding how abstracts are evaluated and selected for the conference
          </p>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {reviewProcess.map((process, index) => (
                <div key={index} className="relative">
                  {/* Connector line for all but the last item */}
                  {index < reviewProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-pigment_green/50 z-0"></div>
                  )}

                  <div className="h-full bg-timberwolf/30 rounded-lg p-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-dark_green text-white flex items-center justify-center mb-3 mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-center mb-2 text-dark_green">{process.step}</h3>
                    <p className="text-sm text-center">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-pigment_green/10 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4 text-dark_green">Evaluation Criteria</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { criteria: "Relevance", description: "Alignment with conference theme and topics" },
                  { criteria: "Originality", description: "Novel contribution to the field" },
                  { criteria: "Methodology", description: "Sound research methods and approach" },
                  { criteria: "Impact", description: "Potential significance and applications" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-pigment_green mb-2">{item.criteria}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full p-4 bg-dark_green/5 rounded-lg mt-8">
            <h3 className="font-semibold mb-2 text-dark_green">Publication Opportunities</h3>
            <p className="text-sm mb-4">
              All accepted papers will be published in the conference proceedings. Selected high-quality papers may be
              invited for publication in special issues of partner journals.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-dark_green text-white">Conference Proceedings</Badge>
              <Badge className="bg-dark_green text-white">Special Journal Issues</Badge>
              <Badge className="bg-dark_green text-white">Digital Repository</Badge>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-dark_green to-pigment_green text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Share Your Research?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join researchers and practitioners from around the world at the AGRC2025 EALAN Conference. Submit your
          abstract today and be part of advancing Geomatics and Land Administration.
        </p>

        <div className="bg-white/10 rounded-lg p-4 max-w-2xl mx-auto mb-6">
          <h3 className="font-semibold text-xl mb-3">Submit Your Abstract</h3>
          <p className="mb-3">Choose your preferred submission method:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Option 1: Online Form</h4>
              <Button asChild className="w-full bg-white text-dark_green hover:bg-white/90">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScprAGZohDnbchCtiO6mazJEmK1ONqgKHiJgCHEPKK6E28FCQ/viewform?usp=header"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Submit via Form
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Option 2: Email Submission</h4>
              <Button asChild className="w-full bg-white text-dark_green hover:bg-white/90">
                <Link href="mailto:agrc.ealan2025@mak.ac.ug" className="flex items-center justify-center gap-2">
                  <Mail size={18} />
                  agrc.ealan2025@mak.ac.ug
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
          <Link href="mailto:agrc.ealan2025@mak.ac.ug">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
}
