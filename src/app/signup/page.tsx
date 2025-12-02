import { Metadata } from 'next'

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

export default function Page() {
  return <div>SignUp</div>
}
