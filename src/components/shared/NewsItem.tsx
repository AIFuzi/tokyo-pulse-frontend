import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/common/ui/button'
import { Skeleton } from '@/components/common/ui/skeleton'

interface NewsItemProps {
  id: string
  title: string
  description: string
  date: string
  image: string
  drawSeparator: boolean
}

export default function NewsItem({
  title,
  id,
  date,
  description,
  drawSeparator,
  image,
}: NewsItemProps) {
  return (
    <Link
      href={`/news/${id}`}
      className="transition-all hover:opacity-80"
    >
      <h2 className="text-muted-foreground">{date}</h2>
      <h1 className="text-2xl">{title}</h1>
      <div className="line-clamp-3">{description}</div>
      <Image
        className="rounded border"
        src={image}
        width={840}
        height={320}
        alt={title}
      />
      {drawSeparator && (
        <div className="mt-2 w-full border-b-2 border-dashed" />
      )}
    </Link>
  )
}

export function NewsItemSkeleton() {
  return (
    <div className="mt-2 mb-2 w-1/2 space-y-4 border-b border-dashed">
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-32 w-full" />
    </div>
  )
}
