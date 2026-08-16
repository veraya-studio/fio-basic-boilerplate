'use client'

import { useNewsFetcher } from '@/lib/api/news/news.hook'
import { H1, P, Span } from '@/components/base/app-typography'
import NewsCardSkeleton from './_modules/components/news-card-skeleton'
import NewsCard from './_modules/components/news-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ReactQueryDemoPage() {
  const { useGetNews } = useNewsFetcher()
  const { data, isLoading } = useGetNews()

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 flex flex-col gap-4 text-center">
        <H1>Tanstack React Query Example</H1>
        <P variant="muted" className="text-lg">
          This starter uses @tanstack/react-query for efficient server state management.
        </P>

        <Link href="/" className='flex items-center justify-center gap-2 hover:underline'>
          <ArrowLeft size={18} className='text-primary' />
          <Span>Back to home</Span>
        </Link>
      </header>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.data.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      )}
    </div>
  )
}