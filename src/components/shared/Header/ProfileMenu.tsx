'use client'

import { AuthService } from '@/service/auth-service'
import { User } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/common/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu'
import { Skeleton } from '@/components/common/ui/skeleton'
import { useAuth } from '@/hooks/useAuth'
import { useCurrent } from '@/hooks/useCurrent'

export default function ProfileMenu() {
  const { exit } = useAuth()
  const { user, isLoading } = useCurrent()

  async function logout() {
    try {
      await AuthService.logout()
      exit()
    } catch (e) {
      if (e instanceof Error) {
        toast.error('Logout error', { description: e.message })
      }
    }
  }

  return isLoading ? (
    <Skeleton className="h-10 w-32" />
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <User />
          <span>{user?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Admin panel</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
