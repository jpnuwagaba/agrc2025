import * as React from "react"

import { cn } from "@/lib/utils"

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
          variant === "default" && "bg-primary text-white hover:bg-primary/90 hover:text-white",
          variant === "destructive" && "bg-destructive text-white hover:bg-destructive/90 hover:text-white",
          variant === "outline" && "bg-transparent border border-input hover:bg-accent hover:text-white",
          variant === "secondary" && "bg-secondary text-white hover:bg-secondary/80 hover:text-white",
          variant === "ghost" && "hover:bg-accent hover:text-white",
          size === "default" && "px-4 py-2",
          size === "sm" && "px-3 py-1.5 rounded-md",
          size === "lg" && "px-8 py-3 rounded-md",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"
