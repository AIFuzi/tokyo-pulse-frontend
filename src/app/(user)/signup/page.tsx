import { Metadata } from 'next'
import Container from '@/components/Container'
import SignUpForm from '@/components/forms/auth/SignUpForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SignUp | Tokyo Pulse',
    description: 'SignUp | Tokyo Pulse',
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default function SignUpPage() {
  return (
    <Container className="h-screen">
      <SignUpForm />
    </Container>
  )
}
