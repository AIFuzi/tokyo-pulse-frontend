import { NewsModel } from '@/models/news/news.model'

export interface TotalNewsModel {
  news: NewsModel[]
  total: number
}
