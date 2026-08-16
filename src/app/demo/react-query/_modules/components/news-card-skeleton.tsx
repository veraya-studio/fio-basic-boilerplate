'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function NewsCardSkeleton() {
  return (
    <Card size="sm">
      <Skeleton className="h-48 w-full rounded-none" />
      <CardContent className="flex flex-col gap-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-3 w-1/3" />
      </CardContent>
    </Card>
  )
}

export default NewsCardSkeleton