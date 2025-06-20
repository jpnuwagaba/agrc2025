import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

// Helper function for using the current logged in user account
export const useCurrentUser = async () => {
  return sanityClient.fetch(`*[_type == "user" && _id == $id][0]`, {
    id: `drafts.${sanityClient.config().token?.split(".")[0]}`,
  })
}
