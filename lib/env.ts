export const validateEnv = () => {
  const requiredEnvVars = [
    { name: "NEXT_PUBLIC_SUPABASE_URL", value: process.env.NEXT_PUBLIC_SUPABASE_URL },
    { name: "NEXT_PUBLIC_SUPABASE_ANON_KEY", value: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY },
    { name: "RESEND_API_KEY", value: process.env.RESEND_API_KEY },
    { name: "NEXT_PUBLIC_SANITY_PROJECT_ID", value: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID },
    { name: "NEXT_PUBLIC_SANITY_DATASET", value: process.env.NEXT_PUBLIC_SANITY_DATASET },
  ]

  const missingEnvVars = requiredEnvVars.filter((env) => !env.value)

  if (missingEnvVars.length > 0) {
    console.warn("⚠️ Missing environment variables:")
    missingEnvVars.forEach((env) => {
      console.warn(`  - ${env.name}`)
    })
    console.warn("The application will use fallback values or mock implementations.")
  } else {
    console.log("✅ All required environment variables are set.")
  }

  return {
    isComplete: missingEnvVars.length === 0,
    missingVars: missingEnvVars.map((env) => env.name),
  }
}
