import { createClient } from "@sanity/client"

// Authenticated client for server-side operations
export const authenticatedSanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

// Public client for client-side operations
export const publicSanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: true,
})

// Helper function to verify webhook secret
export function verifyWebhookSecret(secret: string | null): boolean {
  if (!process.env.SANITY_WEBHOOK_SECRET) {
    return true // No secret configured, allow access
  }
  return secret === process.env.SANITY_WEBHOOK_SECRET
}
