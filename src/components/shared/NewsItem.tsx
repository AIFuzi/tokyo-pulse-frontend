import Image from 'next/image'
import Link from 'next/link'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/common/ui/alert-dialog'
import { Button } from '@/components/common/ui/button'
import { Skeleton } from '@/components/common/ui/skeleton'

interface NewsItemProps {
  id: string
  title: string
  description: string
  date: string
  image: string
  drawSeparator: boolean
  drawDeleteButton: boolean
  onConfirm: () => void
}

export default function NewsItem({
  title,
  id,
  date,
  description,
  drawSeparator,
  image,
  drawDeleteButton,
  onConfirm,
}: NewsItemProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-muted-foreground">{date}</h2>
      <Link
        href={`/news/${id}`}
        className="hover:opacity-50"
      >
        <h1 className="text-2xl font-semibold">{title}</h1>
      </Link>
      <div className="line-clamp-2 w-1/2">{description}</div>
      <Image
        className="rounded border"
        src={image}
        width={840}
        height={320}
        alt={title}
      />
      {drawDeleteButton && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              className="mt-2 text-white"
            >
              Show Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete news?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onConfirm()}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {drawSeparator && (
        <div className="mt-2 w-full border-b-2 border-dashed" />
      )}
    </div>
  )
}

export function NewsItemSkeleton() {
  return (
    <div className="mt-2 mb-2 w-1/2 space-y-4 border-b border-dashed">
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-32 w-full" />
    </div>
  )
}
