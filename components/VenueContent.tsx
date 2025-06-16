"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Plane,
  Bus,
  Building,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
  Info,
} from "lucide-react"

export default function VenueContent() {
  // Accommodation options
  const accommodations = [
    {
      name: "Makerere University Guest House",
      description: "On-campus accommodation with convenient access to conference venues",
      distance: "On campus",
      priceRange: "$80-120 per night",
      amenities: ["Free Wi-Fi", "Breakfast included", "Air conditioning", "Conference rates available"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCzRkUvHYFiDUd7-3KihQTdmH3CcKBBHsqA&s",
      bookingLink: "#",
    },
    {
      name: "Kampala Serena Hotel",
      description: "Luxury 5-star hotel in the heart of Kampala",
      distance: "3 km from venue",
      priceRange: "$150-250 per night",
      amenities: ["Swimming pool", "Restaurant", "Spa", "Business center", "Conference rates available"],
      image: "https://media-cdn.tripadvisor.com/media/photo-s/11/bc/97/7c/kampala-serena-hotel.jpg",
      bookingLink: "#",
    },
    {
      name: "Metropole Hotel Kampala",
      description: "Modern hotel with excellent amenities",
      distance: "2 km from venue",
      priceRange: "$100-180 per night",
      amenities: ["Free Wi-Fi", "Restaurant", "Fitness center", "Conference rates available"],
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49199532.jpg?k=0db8ba1bc1f296fbac68711c0d65e34dcdc749f45e866e7b5a1e97a162338ea0&o=&hp=1",
      bookingLink: "#",
    },
    {
      name: "Fairway Hotel & Spa",
      description: "Comfortable hotel with garden setting",
      distance: "4 km from venue",
      priceRange: "$90-150 per night",
      amenities: ["Swimming pool", "Restaurant", "Spa services", "Conference rates available"],
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/190958535.jpg?k=a6b3c30849018868a8c73a9916db12d911b0b06fc6597423090e6b62012e6fb7&o=&hp=1",
      bookingLink: "#",
    },
  ]

  // Transportation options
  const transportationOptions = [
    {
      type: "From Airport",
      icon: <Plane className="h-8 w-8 text-pigment_green" />,
      options: [
        {
          name: "Airport Taxi",
          description:
            "Official airport taxis are available outside the arrivals terminal. The journey to Kabira Country Club takes approximately 45 minutes, depending on traffic.",
          cost: "Approx. $25-35 USD",
          tips: "Ensure you use official airport taxis with proper identification.",
        },
        {
          name: "Airport Shuttle",
          description: "Pre-booked shuttle services are available from Entebbe International Airport to Kampala.",
          cost: "Approx. $15-25 USD per person",
          tips: "Book in advance through your hotel or conference registration.",
        },
        {
          name: "Car Rental",
          description: "Several car rental companies operate at the airport if you prefer to drive yourself.",
          cost: "Varies by company and vehicle type",
          tips: "International driving permit recommended.",
        },
      ],
    },
    {
      type: "Local Transportation",
      icon: <Bus className="h-8 w-8 text-pigment_green" />,
      options: [
        {
          name: "Boda Boda (Motorcycle Taxi)",
          description: "A popular and quick way to navigate Kampala's traffic. Available throughout the city.",
          cost: "Approx. $1-3 USD per trip within Kampala",
          tips: "Negotiate the fare before starting your journey. Helmets are recommended.",
        },
        {
          name: "Taxi (Special Hire)",
          description: "Private taxis can be arranged for single trips or hired for the day.",
          cost: "Approx. $5-10 USD per trip within Kampala",
          tips: "Agree on the fare before starting your journey.",
        },
        {
          name: "Matatu (Minibus)",
          description: "Shared minibuses that follow specific routes throughout Kampala.",
          cost: "Less than $1 USD per trip",
          tips: "Crowded but authentic local experience. Ask locals for help with routes.",
        },
      ],
    },
    {
      type: "Conference Shuttle",
      icon: <Car className="h-8 w-8 text-pigment_green" />,
      options: [
        {
          name: "Daily Shuttle Service",
          description: "Complimentary shuttle service between partner hotels and the conference venue.",
          schedule: "Runs every 30 minutes from 7:00 AM to 7:00 PM during conference days.",
          tips: "Check the shuttle schedule at your hotel's reception or the conference information desk.",
        },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section with Featured Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqe2eil01zv0swHtiCEKe6vrX7D0djVgX74DbmxP3bQFCQ78Pw9tTVsacWwNOzkQSdAR-8pgFULzJNDXohW_DTYBY7ELEKiACCeGnX0pJDRWMq2VelPh0UoDjBdxHDLefW4SQ=s1360-w1360-h1020-rw"
          alt="Kabira Country Club"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kabira Country Club</h1>
          <p className="text-xl mb-4">Kampala, Uganda</p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30">
              <Calendar className="h-4 w-4 mr-1" />
              July 31 - August 1, 2025
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30">
              <Clock className="h-4 w-4 mr-1" />
              9:00 AM - 5:00 PM Daily
            </Badge>
          </div>
        </div>
      </div>

      {/* Location and Map Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-pigment_green" />
            Location Details
          </CardTitle>
          <CardDescription>Find your way to the AGRC2025 EALAN Conference venue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark_green">Venue Address</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-pigment_green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Kabira Country Club</p>
                    <p className="text-muted-foreground">Bukoto - Kisaasi Road</p>
                    <p className="text-muted-foreground">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-pigment_green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Contact Phone</p>
                    <p className="text-muted-foreground">+256 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-pigment_green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">venue@agrc2025ealan.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-dark_green">About the Venue</h3>
                <p className="text-sm mb-4">
                  Kabira Country Club is a premier venue located in the serene environment of Bukoto, offering excellent
                  conference facilities with a blend of modern amenities and natural beauty. The club features
                  well-equipped meeting rooms, beautiful gardens, recreational facilities, and professional services,
                  making it an ideal location for international conferences and events.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://kabiracountryclub.com/" target="_blank" className="flex items-center gap-2">
                    Visit Kabira Country Club Website <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[400px] rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7412741259064!2d32.6123456!3d0.3567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080b33f1f%3A0x7cc225a89b3c4bc!2sKabira%20Country%20Club!5e0!3m2!1sen!2sus!4v1647886100000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kabira Country Club Map"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button className="bg-pigment_green hover:bg-pigment_green-600 text-white">
              <Navigation className="mr-2 h-4 w-4" /> Get Directions
            </Button>
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" /> Campus Map
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transportation Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-pigment_green" />
            Transportation
          </CardTitle>
          <CardDescription>Options for getting to and around the conference venue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="airport" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="airport" className="text-sm">
                From Airport
              </TabsTrigger>
              <TabsTrigger value="local" className="text-sm">
                Local Transport
              </TabsTrigger>
              <TabsTrigger value="shuttle" className="text-sm">
                Conference Shuttle
              </TabsTrigger>
            </TabsList>

            {transportationOptions.map((transportType, index) => (
              <TabsContent
                key={index}
                value={
                  transportType.type === "From Airport"
                    ? "airport"
                    : transportType.type === "Local Transportation"
                      ? "local"
                      : "shuttle"
                }
              >
                <div className="flex items-center gap-3 mb-6">
                  {transportType.icon}
                  <h3 className="text-xl font-semibold text-dark_green">{transportType.type}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {transportType.options.map((option, optIndex) => (
                    <Card key={optIndex} className="border-l-4 border-l-pigment_green h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{option.name}</CardTitle>
                        {"cost" in option && <CardDescription>{option.cost}</CardDescription>}
                        {"schedule" in option && <CardDescription>{option.schedule}</CardDescription>}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4">{option.description}</p>
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                          <p className="text-sm font-medium text-dark_green">Tip:</p>
                          <p className="text-sm">{option.tips}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Accommodations Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-pigment_green" />
            Accommodations
          </CardTitle>
          <CardDescription>Recommended hotels and lodging options near the conference venue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((accommodation, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                      <CardDescription>{accommodation.distance}</CardDescription>
                    </div>
                    <Badge className="bg-pigment_green text-white">{accommodation.priceRange}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm mb-3">{accommodation.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-dark_green hover:bg-dark_green/90 text-white">
                    <Link href={accommodation.bookingLink}>
                      Book Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="p-6 border border-dashed border-dark_green/30 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-4 text-dark_green">Conference Special Rates</h3>
            <p className="mb-4">
              All listed accommodations offer special rates for AGRC2025 EALAN Conference attendees. Use the code{" "}
              <span className="font-bold">AGRC2025</span> when booking to receive the discounted rate.
            </p>
            <div className="bg-pigment_green/5 p-4 rounded-md border border-pigment_green/20">
              <h4 className="font-semibold text-dark_green mb-2">Need Assistance with Accommodation?</h4>
              <p className="text-sm mb-3">
                Our conference team can help you find and book suitable accommodation based on your preferences and
                budget.
              </p>
              <Button variant="outline" asChild>
                <Link href="mailto:accommodation@agrc2025ealan.org" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  accommodation@agrc2025ealan.org
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Local Attractions */}
      <Card>
        <CardHeader>
          <CardTitle>Explore Kampala</CardTitle>
          <CardDescription>Make the most of your visit by exploring these local attractions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Uganda Museum",
                distance: "3 km from venue",
                description: "Discover Uganda's cultural and natural history",
                image: "https://utb.go.ug/wp-content/uploads/2024/07/Monument_at_Uganda_Museum.jpg",
              },
              {
                name: "Kasubi Tombs",
                distance: "5 km from venue",
                description: "UNESCO World Heritage site and burial grounds of Buganda kings",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5EkKtM6KQc6NndbsnFzcOV0TJ4jC8H70Vw&s",
              },
              {
                name: "Gadaffi National Mosque",
                distance: "4 km from venue",
                description: "Impressive mosque with panoramic views of Kampala",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Aerial_view_of_the_Gaddafi_mosque_in_Uganda.jpg",
              },
              {
                name: "Ndere Cultural Centre",
                distance: "7 km from venue",
                description: "Traditional dance and music performances",
                image:
                  "https://www.gorillatrekkingugandafromkigali.com/wp-content/uploads/2021/09/GPJNews_Uganda_AA_Nderecentre_67_web-920x612-1.jpg",
              },
            ].map((attraction, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-32 relative">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-dark_green">{attraction.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{attraction.distance}</p>
                  <p className="text-xs">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="#" className="flex items-center gap-2">
              View Kampala Travel Guide <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Weather Information */}
      <div className="bg-gradient-to-r from-dark_green to-pigment_green text-white rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Weather in Kampala</h2>
            <p className="mb-4">
              July-August in Kampala is generally mild and comfortable with average temperatures between 17°C (63°F) and
              27°C (81°F).
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Light rain showers are common, so bringing an umbrella is recommended</li>
              <li>• Mornings and evenings can be cool, so pack a light jacket</li>
              <li>• Conference venues are air-conditioned, so a light sweater may be useful</li>
            </ul>
          </div>
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm">Average High</p>
              <p className="text-3xl font-bold">27°C</p>
              <p className="text-xs">(81°F)</p>
            </div>
            <div className="h-12 w-0.5 bg-white/30"></div>
            <div className="text-center">
              <p className="text-sm">Average Low</p>
              <p className="text-3xl font-bold">17°C</p>
              <p className="text-xs">(63°F)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
