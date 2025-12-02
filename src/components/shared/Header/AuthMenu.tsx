'use client'

import { User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/common/ui/button'
import ProfileMenu from '@/components/shared/Header/ProfileMenu'
import { useAuth } from '@/hooks/useAuth'

export default function AuthMenu() {
  const { isAuth } = useAuth()

  return (
    <div className="flex items-center gap-x-3">
      {isAuth ? (
        <ProfileMenu />
      ) : (
        <Link href="/signup">
          <Button>
            <User /> SignUp
          </Button>
        </Link>
      )}
      <Button variant="outline">Subscribe</Button>
    </div>
  )
}
