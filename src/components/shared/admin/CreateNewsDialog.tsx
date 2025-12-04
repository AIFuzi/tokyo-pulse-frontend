'use client'

import { PropsWithChildren, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/ui/dialog'
import CreateNewsForm from '@/components/forms/admin/CreateNewsForm'

export default function CreateNewsDialog({ children }: PropsWithChildren) {
  const [setIsOpen, setSetIsOpen] = useState(false)

  return (
    <Dialog
      open={setIsOpen}
      onOpenChange={setSetIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create news?</DialogTitle>
          <DialogDescription>Create new news</DialogDescription>
        </DialogHeader>
        <CreateNewsForm onCancel={() => setSetIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
