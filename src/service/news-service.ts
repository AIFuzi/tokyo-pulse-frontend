import { api } from '@/api/api'
import { NewsModel } from '@/models/news/news.model'
import { TotalNewsModel } from '@/models/news/total-news.model'
import { AxiosResponse } from 'axios'
import { TypeCreateNewsSchema } from '@/schemas/create-news.schema'

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

  static async createNews(
    dto: TypeCreateNewsSchema,
    image: File,
  ): Promise<AxiosResponse<NewsModel>> {
    const formData = new FormData()
    formData.append('title', dto.title)
    formData.append('description', dto.description)
    formData.append('image', image)

    return api.post('/news/create', formData)
  }
}
