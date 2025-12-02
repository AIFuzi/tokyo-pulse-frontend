import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand/react'
import { AuthStoreTypes } from '@/store/auth.types'

export const authStore = create(
  persist<AuthStoreTypes>(
    set => ({
      isAuth: false,
      setIsAuth: (value: boolean) => set({ isAuth: value }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
