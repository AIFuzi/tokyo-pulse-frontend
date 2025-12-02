export interface NewsModel {
  id: string
  title: string
  description: string
  image: string
  viewCount: number
  userId: string
  createdAt: string
  updatedAt: string
  author?: {
    name: string
  }
}
