import { PropsWithChildren } from 'react'
import Header from '@/components/shared/Header'

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
