import {
  AlertDialogContent,
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/common/ui/alert-dialog'
import { Button } from '@/components/common/ui/button'

interface DeleteConfirmDialogProps {
  onConfirm: () => void
}

export default function DeleteConfirmDialog({
  onConfirm,
}: DeleteConfirmDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete news</Button>
      </AlertDialogTrigger>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete news?</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogContent>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onConfirm()}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
