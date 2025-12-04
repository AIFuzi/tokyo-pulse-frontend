import { create } from 'zustand/react'
import { NewsTypes } from '@/store/news.types'

export const useNewsStore = create<NewsTypes>(set => ({
  news: null,
  setNews: news => set({ news }),
  addNews: item =>
    set(state =>
      state.news
        ? {
            news: {
              ...state.news,
              news: [item, ...state.news.news],
              total: state.news.total + 1,
            },
          }
        : { news: { news: [item], total: 1 } },
    ),
}))
