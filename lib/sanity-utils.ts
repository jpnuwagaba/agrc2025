import { sanityClient, urlFor } from "./sanity"

// Function to verify Sanity connection
export async function verifySanityConnection() {
  try {
    // Simple query to check if we can connect to Sanity
    const result = await sanityClient.fetch(`*[_type == "sanity.imageAsset"][0...1]`)
    return { success: true, message: "Successfully connected to Sanity" }
  } catch (error) {
    console.error("Sanity connection error:", error)
    return {
      success: false,
      message: "Failed to connect to Sanity. Please check your environment variables and network connection.",
    }
  }
}

// Helper function to safely use urlFor with proper typing
export function getSanityImageUrl(image: any) {
  if (!image || !image.asset) {
    return null
  }

  try {
    return urlFor(image).url()
  } catch (error) {
    console.error("Error generating Sanity image URL:", error)
    return null
  }
}

// Function to format a Sanity date string
export function formatSanityDate(dateString: string, options: Intl.DateTimeFormatOptions = {}) {
  if (!dateString) return ""

  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      ...options,
    })
  } catch (error) {
    console.error("Error formatting date:", error)
    return dateString // Return the original string if formatting fails
  }
}
