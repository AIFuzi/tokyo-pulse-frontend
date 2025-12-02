import { api } from '@/api/api'
import { UserModel } from '@/models/auth/user.model'
import { AxiosResponse } from 'axios'
import { TypeCreateAccountSchema } from '@/schemas/create-account.schema'
import { TypeLoginSchema } from '@/schemas/login.schema'

export class AuthService {
  static async login(dto: TypeLoginSchema) {
    return api.post('auth/login', dto)
  }

  static async register(dto: TypeCreateAccountSchema) {
    return api.post('auth/register', dto)
  }

  static async logout() {
    return api.post('auth/logout')
  }

  static async getCurrentUser(): Promise<AxiosResponse<UserModel>> {
    return api.get('/auth/user')
  }
}
