import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-pigment_green mb-4">404</h1>
        <h2 className="text-2xl font-bold text-dark_green mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-pigment_green hover:bg-pigment_green-600 text-white">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
