import { ScrollArea } from '@/components/common/ui/scroll-area'
import NewsItem from '@/components/shared/NewsItem'

export default function NewsList() {
  return (
    <div className="w-full border-r border-l">
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-5 text-3xl font-semibold">Latest news</h1>
        <ScrollArea className="m-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <NewsItem
              drawSeparator={i < 5 - 1}
              date="12 april 2025"
              title="News title"
              image="http://localhost:9000/tokyo-pulse/1693cbe3-9d33-4d89-984c-d4ac5a79e364.webp"
              description="generated awd;lkawdkawl;kdlawkdlkwaldkawkdawlkd;lwagenerated awd;lkawdkawl;kdlawkdlkwaldkawkdawlkd;lwa"
              key={i}
            />
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
