import { NextResponse } from "next/server"
import { supabase } from "@/supabase/client"

export async function GET() {
  try {
    // Check if Supabase is properly configured
    const isMockClient = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (isMockClient) {
      // Return mock data for development
      const mockRegistrations = [
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
          registration_date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
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

      return NextResponse.json({
        registrations: mockRegistrations,
        total: mockRegistrations.length,
        isMockData: true,
      })
    }

    // Fetch from Supabase
    const { data: registrations, error } = await supabase
      .from("registration_main")
      .select("*")
      .order("registration_date", { ascending: false })

    if (error) {
      console.error("Error fetching registrations:", error)
      return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
    }

    return NextResponse.json({
      registrations: registrations || [],
      total: registrations?.length || 0,
      isMockData: false,
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
