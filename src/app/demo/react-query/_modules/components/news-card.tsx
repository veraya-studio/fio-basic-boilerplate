'use client'

import AppImageFallback from "@/components/base/app-image-fallback"
import { H3, P } from "@/components/base/app-typography"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  contentSnippet: string
  isoDate: string
  image: { large: string; small: string }
}
function NewsCard({
  title,
  contentSnippet,
  isoDate,
  image,
}: NewsCardProps) {
  const date = new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Card size="sm" className="group">
      <div className="relative aspect-video w-full overflow-hidden">
        <AppImageFallback
          src={image.large}
          placeholderSrc={image.small}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <CardContent className="flex flex-col gap-2">
        <H3 className="line-clamp-2 text-base font-medium leading-snug">
          {title}
        </H3>
        <P variant="muted" className="line-clamp-2 text-sm">
          {contentSnippet}
        </P>
        <time className="text-xs text-muted-foreground" dateTime={isoDate}>
          {date}
        </time>
      </CardContent>
    </Card>
  )
}

export default NewsCard