export interface UserModel {
  name: string
  login: string
  role?: {
    role: string
  }
}
