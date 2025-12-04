'use client'

import NewsService from '@/service/news-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/common/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/common/ui/form'
import { Input } from '@/components/common/ui/input'
import { Textarea } from '@/components/common/ui/textarea'
import {
  createNewsSchema,
  TypeCreateNewsSchema,
} from '@/schemas/create-news.schema'
import { useNewsStore } from '@/store/news.store'

interface CreateNewsFormProps {
  onCancel: () => void
}

export default function CreateNewsForm({ onCancel }: CreateNewsFormProps) {
  const { addNews } = useNewsStore()

  const [newsImage, setNewsImage] = useState<File>()

  const form = useForm<TypeCreateNewsSchema>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: {
      title: '',
      description: '',
      image: undefined,
    },
  })

  const titleLength = useWatch({
    control: form.control,
    name: 'title',
    defaultValue: '',
  })

  const descLength = useWatch({
    control: form.control,
    name: 'description',
    defaultValue: '',
  })

  async function onSubmit(values: TypeCreateNewsSchema) {
    if (!newsImage) return

    try {
      const createdNews = await NewsService.createNews(values, newsImage)

      toast.success(`Successfully created news: ${values.title}`)
      addNews(createdNews.data)

      onCancel()
    } catch (e) {
      if (e instanceof Error) {
        toast.error('Error', { description: e.message })
      }
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>News title:</FormLabel>
                <FormControl>
                  <Input
                    accept="image/*"
                    type="file"
                    className="pr-14"
                    {...field}
                    value={undefined}
                    onChange={e => {
                      setNewsImage(e.target.files?.[0])
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
            name="image"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>News title:</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="pr-10"
                      {...field}
                    />
                    <span className="text-muted-foreground absolute top-0 right-2 translate-y-1 text-xs">
                      {titleLength.length}/64
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
            name="title"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>News title:</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      className="pr-14"
                      {...field}
                    />
                    <span className="text-muted-foreground absolute top-0 right-4 translate-y-2 text-xs">
                      {descLength.length}/2550
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
            name="description"
          />
          <div className="flex gap-x-3">
            <Button
              type="submit"
              className="w-full"
            >
              Create
            </Button>
            <Button
              type="button"
              className="w-full"
              variant="secondary"
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
