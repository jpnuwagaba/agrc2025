import * as React from "react"

import { cn } from "@/lib/utils"
import * as DialogPrimitive from "@radix-ui/react-dialog"

const Sheet = DialogPrimitive.Root

const SheetTrigger = DialogPrimitive.Trigger

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, side = "right", ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-10 data-[state=closed]:slide-out-to-right-10 data-[state=closed]:slide-out-to-top-10 data-[state=closed]:slide-out-to-bottom-10 data-[state=open]:slide-in-from-left-10 data-[state=open]:slide-in-from-right-10 data-[state=open]:slide-in-from-top-10 data-[state=open]:slide-in-from-bottom-10",
        side === "top" &&
          "border-b border-muted data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
        side === "bottom" &&
          "border-t border-muted data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
        side === "left" &&
          "border-r border-muted data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",
        side === "right" &&
          "border-l border-muted data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M18 6 6 18" />
          <path d="M6 6 18 18" />
        </svg>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetContent }
