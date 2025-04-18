import { Calendar, AlertCircle, FileText, CheckCircle, Users, CalendarClock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function KeyDates() {
  const dates = [
    {
      title: "Registration Opens",
      date: "February 2025",
      icon: <Calendar className="h-4 w-4 text-pigment_green" />,
    },
    {
      title: "Call for Abstracts Opens",
      date: "3rd February 2025",
      icon: <CalendarClock className="h-4 w-4 text-pigment_green" />,
    },
    {
      title: "Abstract Submission Deadline",
      date: "30th April 2025",
      icon: <FileText className="h-4 w-4 text-pigment_green" />,
    },
    {
      title: "Acceptance of Abstracts",
      date: "31st May 2025",
      icon: <CheckCircle className="h-4 w-4 text-pigment_green" />,
    },
    {
      title: "Full Paper Submission Deadline",
      date: "30th June 2025",
      icon: <FileText className="h-4 w-4 text-pigment_green" />,
    },
    {
      title: "Conference Dates",
      date: "30th July - 1st August 2025",
      icon: <Users className="h-4 w-4 text-pigment_green" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-xl font-bold text-dark_green mb-12">Key Dates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pigment_green" />

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div key={index} className="flex items-center gap-6 relative">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 z-10 border-2 border-pigment_green">
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h3 className="font-bold text-dark_green">{item.title}</h3>
                    <p className="text-pigment_green font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="space-y-6">
            <div className="border border-pigment_green rounded-xl overflow-hidden bg-pigment_green/5">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/images/visa-application.png"
                  alt="Visa application documents including passport, boarding passes and application form"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-pigment_green mt-0.5" />
                  <div>
                    <h3 className="text-dark_green font-bold text-lg">Important VISA Information</h3>
                    <p className="my-3">
                      International participants requiring visas should begin their application process as soon as
                      possible.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm ml-2 mb-4">
                      <li>Registration confirmation is required for visa application</li>
                      <li>Early registration is recommended to allow sufficient processing time</li>
                      <li>Visa processing may take several weeks</li>
                    </ul>
                    <Button asChild className="bg-pigment_green hover:bg-pigment_green/90 text-white w-full">
                      <Link
                        href="https://visas.immigration.go.ug/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        Uganda VISA Application Portal
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <Calendar className="h-4 w-4" />
              <AlertTitle>Registration Fees</AlertTitle>
              <AlertDescription className="mt-2">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>East Africans: 350,000 UGX</li>
                  <li>Others: $120</li>
                  <li>
                    Registration includes access to pre-conference workshops, conference sessions, materials, and meals
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  )
}
