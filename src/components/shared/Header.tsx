import { Bell, Search } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/Container'
import AuthMenu from '@/components/shared/Header/AuthMenu'

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
        <AuthMenu />
      </Container>
    </header>
  )
}
