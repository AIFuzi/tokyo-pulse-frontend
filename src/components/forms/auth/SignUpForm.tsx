'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import AuthWrapper from '@/components/AuthWrapper'
import { Button } from '@/components/common/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/common/ui/form'
import { Input } from '@/components/common/ui/input'
import {
  createAccountSchema,
  TypeCreateAccountSchema,
} from '@/schemas/create-account.schema'

export default function SignUpForm() {
  const form = useForm<TypeCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      login: '',
      name: '',
      password: '',
    },
  })

  const { isValid } = form.formState

  function onSubmit(values: TypeCreateAccountSchema) {
    console.log(values)
  }

  return (
    <AuthWrapper
      title="SignUp"
      description="SignUp for more news"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="JaneDoe"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your public display name</FormDescription>
              </FormItem>
            )}
            name="name"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Login</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="@JaneDoe"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your private name</FormDescription>
              </FormItem>
            )}
            name="login"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your public display name</FormDescription>
              </FormItem>
            )}
            name="password"
          />
          <Link href="/login">
            <Button
              className="w-full"
              variant="link"
            >
              Do you have an account?
            </Button>
          </Link>
          <Button
            type="submit"
            className="w-full"
            disabled={!isValid}
          >
            SignUp
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
