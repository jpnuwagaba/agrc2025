"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Update the Personal Information section with country code selector and Job Title field
// First add these imports at the top of the file, after the existing imports
import { supabase } from "@/supabase/client"

export default function RegistrationPage() {
  // Simplified form data
  const [formData, setFormData] = useState({
    // Ticket Type
    ticketType: "",

    // Personal Information
    prefix: "",
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    nationality: "",
    countryCode: "+256", // Default to Uganda
    phone: "",
    industrySector: "",
    gender: "",
    additionalPeople: [], // Add this to avoid undefined errors
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState<"success" | "error" | "">("")

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Other",
  ]

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Check if email already exists in the database
  const checkEmailExists = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from("registration_main")
        .select("email")
        .eq("email", email.toLowerCase().trim())
        .limit(1)

      if (error) {
        console.error("Error checking email:", error)
        return false // Proceed with registration if we can't check
      }

      return data && data.length > 0
    } catch (error) {
      console.error("Error in email check:", error)
      return false // Proceed with registration if we can't check
    }
  }

  // Simplified form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.ticketType) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setAlertMessage("")
    setAlertType("")

    try {
      // Check if Supabase is properly configured
      const isMockClient = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!isMockClient) {
        // Check if email already exists
        const emailExists = await checkEmailExists(formData.email)

        if (emailExists) {
          setAlertType("error")
          setAlertMessage(
            "This email address has already been registered. Please use a different email or contact the registration team for assistance.",
          )
          setIsSubmitting(false)
          return
        }

        // Prepare the registrant data
        const registrationData = {
          registration_date: new Date().toISOString(),
          ticket_type: formData.ticketType,
          prefix: formData.prefix,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email.toLowerCase().trim(),
          organization: formData.organization,
          nationality: formData.nationality,
          country_code: formData.countryCode,
          phone: formData.phone,
          industry_sector: formData.industrySector,
          gender: formData.gender,
        }

        try {
          // Insert the registrant
          const { error: registrantError } = await supabase.from("registration_main").insert([registrationData])

          if (registrantError) {
            console.error("Error inserting registrant:", registrantError)
            console.error("Attempted to insert data:", registrationData)

            // Check if the error is due to duplicate email (unique constraint violation)
            if (registrantError.code === "23505" || registrantError.message?.includes("unique constraint")) {
              setAlertType("error")
              setAlertMessage(
                "This email address has already been registered. Please use a different email or contact the registration team for assistance.",
              )
              setIsSubmitting(false)
              return
            } else {
              setAlertType("error")
              setAlertMessage("Registration failed. Please try again later.")
            }
          } else {
            setAlertType("success")
            setAlertMessage("Registration submitted successfully!")

            // Generate a reference number
            const referenceNumber = `AGRC-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`

            // Send confirmation email
            try {
              const emailData = {
                ...formData,
                // Ensure these fields exist to prevent errors in the email template
                additionalPeople: [],
                preConferenceWorkshop: null,
                willAttendPublicDialogue: null,
                mainConferenceDay: null,
              }

              await fetch("/api/send-email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  formData: emailData,
                  referenceNumber,
                }),
              })
              console.log("Confirmation email sent successfully")
            } catch (emailError) {
              console.error("Failed to send confirmation email:", emailError)
            }

            // Wait 2 seconds before showing the success page
            setTimeout(() => {
              setIsSubmitted(true)
            }, 2000)
          }
        } catch (dbError) {
          console.error("Database operation error:", dbError)
          console.error("Attempted to insert data:", registrationData)
        }
      } else {
        console.log("Using mock mode - registration data not saved to database")
        console.log("Registration data:", {
          name: `${formData.prefix} ${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          ticketType: formData.ticketType,
        })

        // Show success message in mock mode
        setAlertType("success")
        setAlertMessage("Registration submitted successfully! (Mock Mode)")
        setTimeout(() => {
          setIsSubmitted(true)
        }, 2000)
      }
    } catch (error) {
      console.error("Registration error:", error)
      setAlertType("error")
      setAlertMessage("We couldn't process your registration at this time. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Validate form
  const isFormValid = () => {
    return (
      formData.ticketType &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.nationality &&
      formData.phone
    )
  }

  // Success message after submission
  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-pigment_green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pigment_green"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-pigment_green mb-4">Registration Complete!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for registering for the AGRC2025 EALAN Conference. Your registration has been submitted
            successfully.
          </p>
          <p className="text-md text-gray-600 max-w-2xl mx-auto mt-4">
            A confirmation email with payment instructions has been sent to your email address.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild className="bg-pigment_green hover:bg-pigment_green/90 text-white px-8 py-3">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark_green mb-4">Registration</h1>
        <p className="text-lg text-dark_green/80 max-w-3xl mx-auto">
          Join us at the AGRC2025 EALAN Conference to connect with experts, share knowledge, and explore innovations in
          Geomatics and Land Administration.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Ticket Type</CardTitle>
            <CardDescription>Choose the appropriate ticket type based on your location</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.ticketType}
              onValueChange={(value) => handleRadioChange("ticketType", value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div
                className={cn(
                  "border rounded-lg p-6 cursor-pointer",
                  formData.ticketType === "East African"
                    ? "border-pigment_green bg-pigment_green/5"
                    : "hover:border-pigment_green",
                )}
              >
                <RadioGroupItem value="East African" id="east-african" className="sr-only" />
                <Label htmlFor="east-african" className="flex flex-col cursor-pointer">
                  <span className="font-bold text-lg mb-1">East African</span>
                  <span className="text-sm text-gray-600 mb-2">For residents of East African countries</span>
                  <span className="text-lg font-semibold text-pigment_green">UGX 350,000</span>
                </Label>
              </div>

              <div
                className={cn(
                  "border rounded-lg p-6 cursor-pointer",
                  formData.ticketType === "Non-East African"
                    ? "border-pigment_green bg-pigment_green/5"
                    : "hover:border-pigment_green",
                )}
              >
                <RadioGroupItem value="Non-East African" id="non-east-african" className="sr-only" />
                <Label htmlFor="non-east-african" className="flex flex-col cursor-pointer">
                  <span className="font-bold text-lg mb-1">Non-East African</span>
                  <span className="text-sm text-gray-600 mb-2">For international participants</span>
                  <span className="text-lg font-semibold text-dark_green">USD 120</span>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Please provide your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="prefix">Prefix</Label>
                <Select value={formData.prefix} onValueChange={(value) => handleSelectChange("prefix", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                    <SelectItem value="Prof.">Prof.</SelectItem>
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Eng.">Eng.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="firstName" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Last Name
                </Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="organization">Company/Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="nationality" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Nationality
              </Label>
              <Select
                value={formData.nationality}
                onValueChange={(value) => handleSelectChange("nationality", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your nationality" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="phone" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Mobile Phone
              </Label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label htmlFor="countryCode">Country Code</Label>
                  <Input
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    placeholder="+256"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="7XXXXXXXX"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="industrySector">Industry Sector</Label>
              <Select
                value={formData.industrySector}
                onValueChange={(value) => handleSelectChange("industrySector", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Academia">Academia</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Private Sector">Private Sector</SelectItem>
                  <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {alertMessage && (
          <div
            className={`p-4 rounded-md mb-6 ${
              alertType === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {alertType === "success" ? (
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{alertMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="bg-pigment_green hover:bg-pigment_green-600 text-white px-8 py-3"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Processing...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="bg-dark_green text-white rounded-xl p-6 md:p-8 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need Assistance?</h2>
            <p className="mb-4">
              Our registration team is here to help with any questions or special requirements you may have.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>registration@agrc2025ealan.com</span>
              </li>
            </ul>
          </div>
          <Button asChild className="bg-white text-dark_green hover:bg-white/90">
            <Link href="mailto:registration@agrc2025ealan.com">Contact Registration Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
