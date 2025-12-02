'use client'

import { AuthService } from '@/service/auth-service'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
import { Spinner } from '@/components/common/ui/spinner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, TypeLoginSchema } from '@/schemas/login.schema'

export default function LoginForm() {
  const router = useRouter()
  const { auth } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  })

  const { isValid } = form.formState

  async function onSubmit(values: TypeLoginSchema) {
    setIsLoading(true)

    try {
      await AuthService.login(values)
      toast.success('Login successful')

      auth()
      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Login error', { description: error.message })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthWrapper
      title="Login"
      description="Login for more news"
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
                <FormDescription>Your password</FormDescription>
              </FormItem>
            )}
            name="password"
          />
          <Link href="/signup">
            <Button
              className="w-full"
              variant="link"
            >
              No account?
            </Button>
          </Link>
          <Button
            type="submit"
            className="w-full"
            disabled={!isValid || isLoading}
          >
            {isLoading ? (
              <>
                <Spinner />
                <span>Please wait</span>
              </>
            ) : (
              'Login'
            )}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
