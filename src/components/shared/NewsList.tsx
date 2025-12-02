'use client'

import { TotalNewsModel } from '@/models/news/total-news.model'
import NewsService from '@/service/news-service'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { ScrollArea } from '@/components/common/ui/scroll-area'
import NewsItem, { NewsItemSkeleton } from '@/components/shared/NewsItem'

export default function NewsList() {
  const [news, setNews] = useState<TotalNewsModel>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true)

        const response = await NewsService.getAllNews(1, 10)
        setNews(response.data)
      } catch (e) {
        if (e instanceof Error) {
          toast.error('Failed to fetch news', { description: e.message })
        }
      } finally {
        setIsLoading(false)
      }
    }

    void fetchNews()
  }, [])

  return (
    <div className="w-full border-r border-l">
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-5 text-3xl font-semibold">Latest news</h1>
        {isLoading ? (
          Array.from({ length: 10 }).map((_, i) => <NewsItemSkeleton key={i} />)
        ) : (
          <ScrollArea className="m-5">
            {news?.news.map(news => (
              <NewsItem
                key={news.id}
                id={news.id}
                title={news.title}
                description={news.description}
                date={news.createdAt}
                image={`${process.env.NEXT_PUBLIC_S3_SERVER}/${news.image}`}
                drawSeparator={true}
              />
            ))}
          </ScrollArea>
        )}
      </div>
    </div>
  )
}
