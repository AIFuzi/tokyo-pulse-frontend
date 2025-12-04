import { PropsWithChildren } from 'react'
import AdminHeader from '@/components/shared/admin/AdminHeader'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  )
}
