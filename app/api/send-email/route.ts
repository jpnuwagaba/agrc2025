import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY || ""
const isValidApiKey = resendApiKey && resendApiKey.startsWith("re_")
const resend = isValidApiKey ? new Resend(resendApiKey) : null // Don't initialize if key is invalid

export async function POST(request: NextRequest) {
  try {
    const { formData, referenceNumber } = await request.json()

    if (!formData || !referenceNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Ensure additionalPeople exists
    const safeFormData = {
      ...formData,
      additionalPeople: formData.additionalPeople || [],
    }

    // Calculate total amount
    const calculateTotal = () => {
      let total
      let currency

      if (safeFormData.ticketType === "East African") {
        total = 350000
        currency = "UGX"
      } else {
        total = 120
        currency = "USD"
      }

      return {
        total,
        currency,
        formatted: currency === "UGX" ? `${currency} ${total.toLocaleString()}` : `${currency} ${total}`,
      }
    }

    const { formatted } = calculateTotal()

    // Send email using Resend
    if (resend) {
      try {
        // Create a simple HTML email instead of using React components
        const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            h1 { color: #333; font-size: 24px; margin-bottom: 20px; }
            h2 { color: #333; font-size: 20px; margin-top: 30px; }
            .box { background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .details { background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 20px 0; border: 1px solid #eaeaea; }
            .section-title { color: #38a347; font-weight: bold; margin-bottom: 10px; }
            .row { display: flex; margin: 8px 0; }
            .label { width: 40%; color: #666; }
            .value { width: 60%; }
            .important { color: #e13622; font-weight: bold; }
            .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
            .button { background-color: #38a347; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Registration Successful</h1>
            </div>
            
            <p>Dear ${safeFormData.prefix || ""} ${safeFormData.firstName} ${safeFormData.lastName},</p>
            
            <p>Thank you for registering for the <strong>AGRC2025 EALAN Conference</strong>. Your registration has been successfully received. Please complete your registration by making payment using the instructions below.</p>
            
            <div class="box">
              <div class="row">
                <div class="label">Registration Number:</div>
                <div class="value"><strong>${referenceNumber}</strong></div>
              </div>
              <div class="row">
                <div class="label">Registration Date:</div>
                <div class="value"><strong>${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</strong></div>
              </div>
            </div>
            
            <h2>Registration Summary</h2>
            
            <div class="details">
              <div class="section-title">Personal Information</div>
              <div class="row">
                <div class="label">Name:</div>
                <div class="value">${safeFormData.prefix || ""} ${safeFormData.firstName} ${safeFormData.lastName}</div>
              </div>
              <div class="row">
                <div class="label">Email:</div>
                <div class="value">${safeFormData.email}</div>
              </div>
              <div class="row">
                <div class="label">Phone:</div>
                <div class="value">${safeFormData.countryCode} ${safeFormData.phone}</div>
              </div>
              ${
                safeFormData.organization
                  ? `
              <div class="row">
                <div class="label">Organization:</div>
                <div class="value">${safeFormData.organization}</div>
              </div>
              `
                  : ""
              }
              <div class="row">
                <div class="label">Nationality:</div>
                <div class="value">${safeFormData.nationality}</div>
              </div>
            </div>
            
            <div class="details">
              <div class="section-title">Registration Details</div>
              <div class="row">
                <div class="label">Ticket Type:</div>
                <div class="value">${safeFormData.ticketType}</div>
              </div>
              <div class="row">
                <div class="label">Total Amount:</div>
                <div class="value"><strong>${formatted}</strong></div>
              </div>
            </div>
            
            <div class="details">
              <h2>Next Steps: Complete Your Payment</h2>
              <p class="important">To complete your registration, please make your payment using one of the following methods:</p>
              
              <div class="section-title">Bank Transfer</div>
              <div class="row">
                <div class="label">Bank:</div>
                <div class="value">Standard Chartered Bank</div>
              </div>
              <div class="row">
                <div class="label">Account Name:</div>
                <div class="value">Makerere University College of Engineering, Design, Art and Technology</div>
              </div>
              <div class="row">
                <div class="label">Account Number:</div>
                <div class="value">8705612273400</div>
              </div>
              <div class="row">
                <div class="label">Swift Code:</div>
                <div class="value">SCBLUGKA</div>
              </div>
              <div class="row">
                <div class="label">Physical Branch:</div>
                <div class="value">Speke Road</div>
              </div>
              <p><strong>Important:</strong> Please include your full name and "AGRC2025 Registration" in the payment reference.</p>
              
              <hr style="margin: 20px 0; border-color: #eaeaea;">
              
              <div class="section-title">Mobile Money (Ugandans Only)</div>
              <p><strong>Pay using MoMo Pay on MTN:</strong></p>
              <div class="row">
                <div class="label">Step 1:</div>
                <div class="value">Dial *165*3#</div>
              </div>
              <div class="row">
                <div class="label">Step 2:</div>
                <div class="value">Use Merchant ID: 514578</div>
              </div>
              <div class="row">
                <div class="label">Step 3:</div>
                <div class="value">Use Reference: Agrc2025ealan <Name></div>
              </div>
              <div class="row">
                <div class="label">Registered to:</div>
                <div class="value">Nazziwa Flavia</div>
              </div>
              <p><strong>Important:</strong> Please include your name in the payment reference.</p>
            </div>
            
            <div style="background-color: #fff8f8; padding: 15px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffcccc;">
              <p class="important"><strong>IMPORTANT:</strong> After making your payment, please send proof of payment (screenshot or photo) to <a href="mailto:registration@agrc2025ealan.com">registration@agrc2025ealan.com</a></p>
              <p>Include your full name, registration number (${referenceNumber}), and the email address you used for registration.</p>
              <p>Your registration will be confirmed once we receive and verify your payment. You will receive a final confirmation email with your registration details.</p>
            </div>
            
            <hr style="margin: 20px 0; border-color: #eaeaea;">
            
            <div class="footer">
              <p>If you have any questions or need assistance, please contact us at <a href="mailto:registration@agrc2025ealan.com">registration@agrc2025ealan.com</a></p>
              <p>© 2025 AGRC2025 EALAN Conference. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
        `

        const { data, error } = await resend.emails.send({
          from: "AGRC2025 EALAN Conference <registration@agrc2025ealan.com>",
          to: [safeFormData.email],
          subject: "AGRC2025 EALAN Conference - Registration Confirmation",
          html: emailHtml,
        })

        if (error) {
          console.error("Email sending error:", error)
          return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true, data })
      } catch (error: any) {
        console.error("Email sending error:", error)
        return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
      }
    } else {
      console.warn("Skipping email send: Invalid or missing Resend API key")
      // Return success anyway so the registration process can continue
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
