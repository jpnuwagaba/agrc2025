import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export interface WorkshopFacilitator {
  name: string
  title?: string
  organization?: string
  email?: string
  phone?: string
}

export interface WorkshopSession {
  time: string
  activity: string
  facilitator: string | WorkshopFacilitator
}

export interface WorkshopDay {
  date: string
  sessions: WorkshopSession[]
}

export interface Workshop {
  id: string
  title: string
  subtitle?: string
  description: string[]
  objectives: string[]
  outcomes: string[]
  participants: string[]
  days: WorkshopDay[]
  contactPerson: WorkshopFacilitator
  venue?: string
  registrationLink?: string
}

export function WorkshopDetails({ workshop }: { workshop: Workshop }) {
  return (
    <Card className="border-pigment_green/20">
      <CardHeader className="bg-gradient-to-r from-pigment_green/10 to-transparent">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-pigment_green text-white">Pre-Conference Workshop</Badge>
              <Badge variant="outline" className="border-pigment_green/30">
                July 28-30, 2025
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">{workshop.title}</CardTitle>
            {workshop.subtitle && (
              <CardDescription className="text-base md:text-lg">{workshop.subtitle}</CardDescription>
            )}
          </div>
          {workshop.registrationLink && (
            <Button className="bg-pigment_green hover:bg-pigment_green/90 text-white">Register for Workshop</Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-pigment_green mb-3">Introduction</h3>
              <div className="space-y-4">
                {workshop.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pigment_green mb-3">Workshop Schedule</h3>
              <Tabs defaultValue="day1" className="w-full">
                <TabsList className="mb-4 grid grid-cols-3">
                  {workshop.days.map((day, idx) => (
                    <TabsTrigger key={idx} value={`day${idx + 1}`}>
                      Day {idx + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {workshop.days.map((day, dayIdx) => (
                  <TabsContent key={dayIdx} value={`day${dayIdx + 1}`}>
                    <div className="mb-3 flex items-center gap-2">
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
                        className="text-pigment_green"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span className="font-medium">{day.date}</span>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Time
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Activity
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Facilitator
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {day.sessions.map((session, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="px-4 py-3 text-sm text-gray-900 font-medium">{session.time}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{session.activity}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">
                                {typeof session.facilitator === "string"
                                  ? session.facilitator
                                  : session.facilitator.name}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-pigment_green mb-3">Workshop Details</h3>

              <div className="space-y-4">
                {workshop.venue && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Venue</h4>
                    <p className="text-gray-900 flex items-center gap-2">
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
                      {workshop.venue}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Contact Person</h4>
                  <p className="text-gray-900 font-medium">Dr Ronald Ssengendo</p>
                  {workshop.contactPerson.title && (
                    <p className="text-gray-700 text-sm">{workshop.contactPerson.title}</p>
                  )}
                  {workshop.contactPerson.organization && (
                    <p className="text-gray-700 text-sm">{workshop.contactPerson.organization}</p>
                  )}

                  {workshop.contactPerson.phone && (
                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pigment_green"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <a href={`tel:+256784614675`} className="hover:text-pigment_green">
                        +256784614675
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="objectives">
                <AccordionTrigger className="text-lg font-semibold text-pigment_green">
                  Workshop Objectives
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {workshop.objectives.map((objective, idx) => (
                      <li key={idx} className="text-gray-700">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="outcomes">
                <AccordionTrigger className="text-lg font-semibold text-pigment_green">
                  Expected Outcomes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {workshop.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-gray-700">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="participants">
                <AccordionTrigger className="text-lg font-semibold text-pigment_green">
                  Target Participants
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {workshop.participants.map((participant, idx) => (
                      <li key={idx} className="text-gray-700">
                        {participant}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
