"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavigationButtonProps {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
}

export function NavigationButton({ className, variant = "default", size = "default" }: NavigationButtonProps) {
  const router = useRouter()
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const handleClick = () => {
    if (isHomePage) {
      router.push("/registration")
    } else {
      router.push("/")
    }
  }

  return (
    <Button
      className={cn("flex items-center justify-center gap-2", className)}
      variant={variant}
      size={size}
      onClick={handleClick}
    >
      {isHomePage ? (
        <>
          Register
          <span className="text-lg">→</span>
        </>
      ) : (
        <>
          Back to main page
          <span className="text-lg">←</span>
        </>
      )}
    </Button>
  )
}
