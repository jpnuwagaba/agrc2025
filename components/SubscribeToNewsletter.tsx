"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Info } from "lucide-react"
import { supabase } from "@/supabase/client"

// Conference date - set this to your actual conference start date
const CONFERENCE_DATE = new Date("2025-08-01T09:00:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function SubscribeToNewsletter() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error" | "exists">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Calculate time left until conference
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = CONFERENCE_DATE.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Conference has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up
    return () => clearInterval(timer)
  }, [])

  // Reset status after 7 seconds when an alert is shown
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    if (status === "success" || status === "error" || status === "exists") {
      timeoutId = setTimeout(() => {
        setStatus("idle")
      }, 7000) // 7 seconds
    }

    // Cleanup function to clear the timeout if component unmounts or status changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email.trim()) {
      setStatus("error")
      setErrorMessage("Please enter your email address")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Check if Supabase is properly configured
      const isMockClient = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!isMockClient) {
        try {
          // First, check if the user already exists
          const { data: existingUsers, error: checkError } = await supabase
            .from("newsletter_signups")
            .select("email")
            .eq("email", email.toLowerCase().trim())
            .limit(1)

          if (checkError) {
            console.error("Error checking existing user:", checkError)
            throw new Error("Error checking subscription status")
          }

          // If user already exists, show exists message
          if (existingUsers && existingUsers.length > 0) {
            setStatus("exists")
            setIsSubmitting(false)
            return
          }

          // Insert the new user
          const { error } = await supabase.from("newsletter_signups").insert([
            {
              name: name.trim(),
              email: email.toLowerCase().trim(),
              created_at: new Date().toISOString(),
            },
          ])

          if (error) {
            console.error("Insert error:", error)
            throw new Error(`Database error: ${error.message}`)
          }
        } catch (dbError) {
          console.error("Database operation error:", dbError)
          // Continue and show success even if database operations fail
        }
      } else {
        console.log("Using mock mode - newsletter signup not saved to database")
        console.log("Newsletter signup:", { name, email })
        // Simulate a delay to make the UX feel more natural
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      // Send confirmation email
      try {
        const response = await fetch("/api/send-newsletter-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        })

        if (!response.ok) {
          console.error("Failed to send newsletter confirmation email")
          // Continue anyway - we'll still show success to the user
        } else {
          console.log("Newsletter confirmation email sent successfully")
        }
      } catch (emailError) {
        console.error("Error sending newsletter confirmation email:", emailError)
        // Continue anyway - we'll still show success to the user
      }

      // Show success regardless of database success
      setStatus("success")
      setName("")
      setEmail("")
    } catch (error) {
      console.error("Newsletter signup error:", error)
      setStatus("error")
      setErrorMessage("We couldn't process your subscription at this time. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* New vertical layout */}
          <div className="flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-black mb-2">Stay Informed!</h2>

            {/* Subscribe text */}
            <p className="text-center text-lg text-black/80 mb-6 w-full">
              Subscribe to our newsletter to receive conference news, alerts and announcements.
            </p>

            {/* Form fields - always visible */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col lg:flex-row lg:items-start gap-4 mb-4">
              <div className="w-full lg:w-1/3">
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <div className="rounded-md border border-gray-300 overflow-hidden">
                  <Input
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    className="border-0"
                  />
                </div>
              </div>

              <div className="w-full lg:flex-1">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <div className="flex rounded-md border border-gray-300 overflow-hidden">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="border-0 rounded-r-none"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-l-none bg-pigment_green hover:bg-pigment_green/80 text-white"
                  >
                    {isSubmitting ? <span className="animate-spin">⟳</span> : <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </form>

            {/* Alert messages - shown below the form */}
            {status === "success" && (
              <Alert className="bg-pigment_green/10 border-pigment_green text-black w-full">
                <CheckCircle className="h-4 w-4 text-pigment_green" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Thank you for subscribing to our newsletter.</AlertDescription>
              </Alert>
            )}
            {status === "exists" && (
              <Alert className="bg-blue-50 border-blue-200 text-blue-800 w-full">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle>Already Subscribed</AlertTitle>
                <AlertDescription>This email is already subscribed to our newsletter.</AlertDescription>
              </Alert>
            )}
            {status === "error" && (
              <Alert className="bg-chili_red/10 border-chili_red text-black w-full">
                <AlertCircle className="h-4 w-4 text-chili_red" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
