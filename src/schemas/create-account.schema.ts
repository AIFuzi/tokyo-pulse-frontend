import { z } from 'zod'

export const createAccountSchema = z.object({
  name: z.string().min(2).max(24),
  login: z.string().min(2).max(24),
  password: z.string().min(8),
})

export type TypeCreateAccountSchema = z.infer<typeof createAccountSchema>
