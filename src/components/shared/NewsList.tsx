'use client'

import { TotalNewsModel } from '@/models/news/total-news.model'
import NewsService from '@/service/news-service'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { ScrollArea } from '@/components/common/ui/scroll-area'
import NewsItem, { NewsItemSkeleton } from '@/components/shared/NewsItem'
import NewsPagination from '@/components/shared/NewsPagination'
import { useCurrent } from '@/hooks/useCurrent'
import { useNewsStore } from '@/store/news.store'

export default function NewsList() {
  const { user, isLoading: isUserLoading } = useCurrent()
  const { news, setNews } = useNewsStore()

  const [isLoading, setIsLoading] = useState(true)

  const currentPage = Number(useSearchParams().get('page') ?? 1)

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true)

        const response = await NewsService.getAllNews(currentPage ?? 1, 10)
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
  }, [currentPage])

  async function deleteNews(id: string) {
    if (!news) return

    try {
      await NewsService.deleteNews(id)

      const upd_news: TotalNewsModel = {
        news: news.news.filter(i => i.id !== id),
        total: news?.total - 1,
      }

      toast.success('Successfully deleted', {
        description: `news with id: ${id} deleted`,
      })
      setNews(upd_news)
    } catch (e) {
      if (e instanceof Error) {
        toast.error('Failed to delete news!', { description: e.message })
      }
    }
  }

  return (
    <div className="w-full border-r border-l">
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-5 text-3xl font-semibold">Latest news</h1>
        {isLoading && isUserLoading ? (
          Array.from({ length: 10 }).map((_, i) => <NewsItemSkeleton key={i} />)
        ) : (
          <div>
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
                  drawDeleteButton={
                    user !== undefined && user!.role?.role === 'ADMIN'
                  }
                  onConfirm={() => deleteNews(news.id)}
                />
              ))}
            </ScrollArea>
            <NewsPagination
              total={Math.ceil((news?.total ?? 0) / 10)}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  )
}
