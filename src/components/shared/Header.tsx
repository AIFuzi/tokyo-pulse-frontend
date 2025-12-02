import { Bell, Search, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/common/ui/button'
import Container from '@/components/Container'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 items-center border-b border-dashed border-zinc-500/10 bg-white/65 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-muted-foreground flex items-center gap-x-3">
          <Search className="cursor-pointer transition-colors hover:text-black" />
          <Bell className="cursor-pointer transition-colors hover:text-black" />
        </div>
        <div>
          <Link href="/">
            <h1 className="hover:text-muted-foreground text-3xl font-black transition-colors">
              TokyoPulse
            </h1>
          </Link>
        </div>
        <div className="flex gap-x-3">
          <Link href="/signup">
            <Button>
              <User /> SignUp
            </Button>
          </Link>
          <Button variant="outline">Subscribe</Button>
        </div>
      </Container>
    </header>
  )
}
