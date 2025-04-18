"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              We're sorry, but an error occurred while loading this page. Our team has been notified.
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-pigment_green hover:bg-pigment_green-600 text-white"
            >
              Try again
            </Button>
            <Button onClick={() => (window.location.href = "/")} variant="outline" className="mt-2">
              Go to homepage
            </Button>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
