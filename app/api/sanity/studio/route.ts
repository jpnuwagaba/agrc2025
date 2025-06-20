import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

export async function GET(request: NextRequest) {
  try {
    // Verify the webhook secret if provided
    const webhookSecret = request.headers.get("x-webhook-secret")

    if (process.env.SANITY_WEBHOOK_SECRET && webhookSecret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Test connection to Sanity
    const result = await client.fetch('*[_type == "sanity.imageAsset"][0]')

    return NextResponse.json({
      success: true,
      message: "Sanity connection successful",
      hasToken: !!process.env.SANITY_AUTH_TOKEN,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    })
  } catch (error) {
    console.error("Sanity connection error:", error)
    return NextResponse.json(
      {
        error: "Failed to connect to Sanity",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query, params = {} } = await request.json()

    // Verify the webhook secret
    const webhookSecret = request.headers.get("x-webhook-secret")

    if (process.env.SANITY_WEBHOOK_SECRET && webhookSecret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    const data = await client.fetch(query, params)
    return NextResponse.json({ data })
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch data from Sanity",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
