import { type NextRequest, NextResponse } from "next/server"
import { sanityClient } from "@/lib/sanity"

export async function POST(request: NextRequest) {
  try {
    const { query, params = {} } = await request.json()

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    const data = await sanityClient.fetch(query, params)

    return NextResponse.json({ data })
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
    return NextResponse.json({ error: "Failed to fetch data from Sanity" }, { status: 500 })
  }
}
