import { NewsModel } from '@/models/news/news.model'
import NewsService from '@/service/news-service'
import { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/Container'

interface PageProps {
  params: { id: string } | Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  let title = 'News | Tokyo Pulse'

  try {
    const response = await NewsService.getOne(id)
    title = `${response.data.title} | Tokyo Pulse`
  } catch {}

  return {
    title: title,
    description: 'News | Tokyo Pulse',
  }
}

export default async function OneNewsPage({ params }: PageProps) {
  const { id } = await params
  let news: NewsModel | null = null

  try {
    const response = await NewsService.getOne(id)

    news = response.data
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
  }

  return (
    news && (
      <Container>
        <div className="mt-10 flex flex-col items-center">
          <div className="flex gap-x-3">
            <span className="text-muted-foreground font-semibold">
              12 april 2025
            </span>
            <span className="font-semibold">Author: _NAME_</span>
          </div>
          <div className="mt-2 mb-2 w-1/2">
            <h1 className="text-center text-4xl font-bold">{news.title}</h1>
            <div className="mt-4 mb-8 border-b" />
          </div>
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_SERVER}/${news.image}`}
              alt={news.title}
              width={960}
              height={420}
              className="rounded border"
            />
          </div>
          <div className="flex w-1/2 text-2xl font-semibold">
            {news.description}
          </div>
        </div>
      </Container>
    )
  )
}
