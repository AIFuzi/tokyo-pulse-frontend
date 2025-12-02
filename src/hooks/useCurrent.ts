import { UserModel } from '@/models/auth/user.model'
import { AuthService } from '@/service/auth-service'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

export function useCurrent() {
  const { isAuth } = useAuth()

  const [user, setUser] = useState<UserModel>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    async function getUser() {
      if (!isAuth) return

      setIsLoading(true)
      try {
        const response = await AuthService.getCurrentUser()

        setUser(response.data)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }

    void getUser()
  }, [])

  return { user, isLoading, error }
}
