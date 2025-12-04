import { Bell, Search } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/Container'
import AuthMenu from '@/components/shared/Header/AuthMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 items-center border-b border-dashed border-zinc-500/10 bg-white/65 backdrop-blur-sm">
      <Container className="relative flex h-16 items-center justify-between">
        <div className="flex items-center gap-x-3 text-black">
          <Search className="hover:text-muted-foreground cursor-pointer transition-colors" />
          <Bell className="hover:text-muted-foreground cursor-pointer transition-colors" />
        </div>
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <h1 className="hover:text-muted-foreground text-3xl font-black transition-colors">
            TokyoPulse
          </h1>
        </Link>
        <AuthMenu />
      </Container>
    </header>
  )
}
