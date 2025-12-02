import { PropsWithChildren } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/ui/card'

interface AuthWrapperProps {
  title: string
  description: string
}

export default function AuthWrapper({
  children,
  title,
  description,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-1/3">
        <CardHeader className="items-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
