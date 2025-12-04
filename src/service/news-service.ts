import { api } from '@/api/api'
import { NewsModel } from '@/models/news/news.model'
import { TotalNewsModel } from '@/models/news/total-news.model'
import { AxiosResponse } from 'axios'

export default class NewsService {
  static async getAllNews(
    page: number,
    limit: number,
  ): Promise<AxiosResponse<TotalNewsModel>> {
    return api.get(`/news?page=${page}&limit=${limit}`)
  }

  static async getOne(id: string): Promise<AxiosResponse<NewsModel>> {
    return api.get(`/news/${id}`)
  }

  static async deleteNews(id: string) {
    return api.delete(`/news/delete/${id}`)
  }
}
