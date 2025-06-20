import { createClient, type ClientConfig } from "@sanity/client"

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: false,
  // Use the auth token to bypass CORS restrictions
  token: process.env.SANITY_AUTH_TOKEN,
  perspective: "published",
  ignoreBrowserTokenWarning: true, // Suppress browser token warnings in development
}

const client = createClient(config)

export default client
