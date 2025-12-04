import Link from 'next/link'
import { Button } from '@/components/common/ui/button'
import Container from '@/components/Container'
import ProfileMenu from '@/components/shared/Header/ProfileMenu'

export default function AdminHeader() {
  return (
    <div className="sticky top-0 z-10 h-16 border-r border-b border-l bg-white/60 p-2 backdrop-blur-xs">
      <Container className="flex h-full items-center justify-between">
        <Link href="/">
          <Button variant="link">Go to main</Button>
        </Link>
        <h1 className="text-3xl font-bold">Tokyo Pulse admin panel</h1>
        <div>
          <ProfileMenu />
        </div>
      </Container>
    </div>
  )
}
