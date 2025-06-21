import { NextResponse } from "next/server"
import { supabase } from "@/supabase/client"

export async function GET() {
  try {
    // Check if Supabase is properly configured
    const isMockClient = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let registrations: any[] = []

    if (isMockClient) {
      // Mock data for development
      registrations = [
        {
          id: "1",
          registration_date: new Date().toISOString(),
          ticket_type: "East African",
          prefix: "Dr.",
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
          organization: "University of Example",
          nationality: "Uganda",
          country_code: "+256",
          phone: "712345678",
          industry_sector: "Academia",
          gender: "Male",
        },
        {
          id: "2",
          registration_date: new Date(Date.now() - 86400000).toISOString(),
          ticket_type: "Non-East African",
          prefix: "Prof.",
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@example.com",
          organization: "International Institute",
          nationality: "United States",
          country_code: "+1",
          phone: "5551234567",
          industry_sector: "Research",
          gender: "Female",
        },
      ]
    } else {
      // Fetch from Supabase
      const { data, error } = await supabase
        .from("registration_main")
        .select("*")
        .order("registration_date", { ascending: false })

      if (error) {
        console.error("Error fetching registrations:", error)
        return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
      }

      registrations = data || []
    }

    // Generate CSV content
    const headers = [
      "ID",
      "Registration Date",
      "Ticket Type",
      "Prefix",
      "First Name",
      "Last Name",
      "Email",
      "Organization",
      "Nationality",
      "Country Code",
      "Phone",
      "Industry Sector",
      "Gender",
    ]

    const csvContent = [
      headers.join(","),
      ...registrations.map((reg) =>
        [
          reg.id || "",
          reg.registration_date || "",
          reg.ticket_type || "",
          reg.prefix || "",
          reg.first_name || "",
          reg.last_name || "",
          reg.email || "",
          `"${(reg.organization || "").replace(/"/g, '""')}"`, // Escape quotes in organization names
          reg.nationality || "",
          reg.country_code || "",
          reg.phone || "",
          reg.industry_sector || "",
          reg.gender || "",
        ].join(","),
      ),
    ].join("\n")

    // Create response with CSV headers
    const response = new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="agrc2025-registrations-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    })

    return response
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
