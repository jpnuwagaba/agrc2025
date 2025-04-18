import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { NewsletterConfirmationEmail } from "@/emails/newsletter-confirmation"

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY || ""
const isValidApiKey = resendApiKey && resendApiKey.startsWith("re_")
const resend = isValidApiKey ? new Resend(resendApiKey) : null // Don't initialize if key is invalid

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Send email using Resend
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: "AGRC2025 EALAN Conference <newsletter@agrc2025ealan.com>",
          to: [email],
          subject: "Welcome to the AGRC2025 EALAN Conference Newsletter",
          react: NewsletterConfirmationEmail({
            name: name || "",
            email: email,
            date: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          }),
        })

        if (error) {
          console.error("Newsletter email sending error:", error)
          return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true, data })
      } catch (error: any) {
        console.error("Newsletter email sending error:", error)
        return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
      }
    } else {
      console.warn("Skipping newsletter email send: Invalid or missing Resend API key")
      // Return success anyway so the subscription process can continue
      return NextResponse.json({
        success: true,
        warning: "Email not sent due to configuration issue. Please check your Resend API key.",
      })
    }
  } catch (error: any) {
    console.error("Server error:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
