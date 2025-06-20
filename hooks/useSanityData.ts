"use client"

import { useState, useEffect } from "react"
import { sanityClient } from "@/lib/sanity"

interface UseSanityDataOptions<T> {
  query: string
  params?: Record<string, any>
  initialData?: T
}

export function useSanityData<T>({ query, params = {}, initialData }: UseSanityDataOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await sanityClient.fetch<T>(query, params)
        setData(result)
        setError(null)
      } catch (err) {
        console.error("Error fetching data from Sanity:", err)
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query, JSON.stringify(params)])

  return { data, isLoading, error }
}
