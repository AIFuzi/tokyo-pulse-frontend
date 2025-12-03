import { Metadata } from 'next'
import Container from '@/components/Container'
import LoginForm from '@/components/forms/auth/LoginForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login | Tokyo Pulse',
    description: 'Login | Tokyo Pulse',
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default function LoginPage() {
  return (
    <Container className="h-screen">
      <LoginForm />
    </Container>
  )
}
