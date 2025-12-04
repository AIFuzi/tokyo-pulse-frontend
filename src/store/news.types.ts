import { TotalNewsModel } from '@/models/news/total-news.model'

export interface NewsTypes {
  news: TotalNewsModel | null
  setNews: (news: TotalNewsModel) => void
  addNews: (item: TotalNewsModel['news'][number]) => void
}
