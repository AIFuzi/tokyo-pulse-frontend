import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

export default function Container({
  children,
  className,
}: PropsWithChildren<ContainerProps>) {
  return <div className={cn('mr-24 ml-24', className)}>{children}</div>
}
