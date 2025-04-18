import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero skeleton */}
      <div className="mb-12">
        <Skeleton className="h-[400px] w-full rounded-2xl mb-8" />
      </div>

      {/* Newsletter skeleton */}
      <div className="mb-12">
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>

      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <Skeleton className="h-8 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          <Skeleton className="h-8 w-1/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-6" />

          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-8 w-1/2 mb-4" />
          <Skeleton className="h-[200px] w-full rounded-lg mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
