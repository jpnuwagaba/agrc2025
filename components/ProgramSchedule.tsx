import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const transformedScheduleData = [
  {
    date: "July 30, 2025",
    schedule: [
      {
        time: "",
        title: "Program to be posted soon",
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
        time: "",
        title: "Program to be posted soon",
        speaker: "",
        location: "",
        type: "general",
      },
    ],
  },
  {
    date: "August 1, 2025",
    schedule: [
      {
        time: "",
        title: "Program to be posted soon",
        speaker: "",
        location: "",
        type: "general",
      },
    ],
  },
]

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
            <Button className="bg-pigment_green hover:bg-pigment_green-600 text-white">
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
        <Tabs defaultValue="day1">
          <TabsList className="mb-4 grid grid-cols-3 sm:flex sm:flex-wrap">
            <TabsTrigger value="day1" className="text-xs sm:text-sm">
              Day 1 (Jul 30)
            </TabsTrigger>
            <TabsTrigger value="day2" className="text-xs sm:text-sm">
              Day 2 (Jul 31)
            </TabsTrigger>
            <TabsTrigger value="day3" className="text-xs sm:text-sm">
              Day 3 (Aug 1)
            </TabsTrigger>
          </TabsList>

          {transformedScheduleData.map((day, dayIndex) => (
            <TabsContent key={dayIndex} value={`day${dayIndex + 1}`} className="space-y-4">
              {day.schedule.map((session, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg border border-muted-foreground/20 bg-muted/10 flex justify-center items-center"
                >
                  <h3 className="text-xl font-bold text-center text-pigment_green">{session.title}</h3>
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
