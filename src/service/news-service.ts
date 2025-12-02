import { api } from '@/api/api'
import { TotalNewsModel } from '@/models/news/total-news.model'
import { AxiosResponse } from 'axios'

export default class NewsService {
  static async getAllNews(
    page: number,
    limit: number,
  ): Promise<AxiosResponse<TotalNewsModel>> {
    return api.get(`/news?page=${page}&limit=${limit}`)
  }
}
