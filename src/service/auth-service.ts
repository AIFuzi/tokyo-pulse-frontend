import { api } from '@/api/api'
import { TypeCreateAccountSchema } from '@/schemas/create-account.schema'
import { TypeLoginSchema } from '@/schemas/login.schema'

export class AuthService {
  static async login(dto: TypeLoginSchema) {
    return api.post('auth/login', dto)
  }

  static async register(dto: TypeCreateAccountSchema) {
    return api.post('auth/register', dto)
  }
}
