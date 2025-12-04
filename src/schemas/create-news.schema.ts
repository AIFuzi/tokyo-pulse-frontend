import { z } from 'zod'

export const createNewsSchema = z.object({
  title: z.string().min(2).max(24),
  description: z.string().min(2).max(2550),
  image: z.file().optional(),
})

export type TypeCreateNewsSchema = z.infer<typeof createNewsSchema>
