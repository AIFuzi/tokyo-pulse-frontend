import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Admin panel | Tokyo Pulse',
    description: 'Admin panel | Tokyo Pulse',
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default function Page() {
  return <div>Admin panel</div>
}
