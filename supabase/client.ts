import { createClient } from "@supabase/supabase-js"

// Access the environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a mock Supabase client for when credentials are missing
const createMockClient = () => {
  console.warn("Using mock Supabase client due to missing credentials")

  // Return a mock client with the same API shape but non-functional
  return {
    from: () => ({
      select: () => ({
        eq: () => ({
          limit: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
      insert: () => Promise.resolve({ data: null, error: null }),
    }),
    auth: {
      getSession: () => Promise.resolve({ data: null, error: null }),
    },
  }
}

// Create the Supabase client with fallback to mock client
export const supabase =
  !supabaseUrl || !supabaseAnonKey
    ? createMockClient()
    : createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })

// Log configuration status
if (typeof window !== "undefined") {
  console.log("Supabase configuration status:", {
    urlConfigured: !!supabaseUrl,
    keyConfigured: !!supabaseAnonKey,
    usingMockClient: !supabaseUrl || !supabaseAnonKey,
  })
}
