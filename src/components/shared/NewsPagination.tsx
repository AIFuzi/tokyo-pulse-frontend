'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/common/ui/pagination'

interface NewsPaginationProps {
  currentPage: number
  total: number
}

export default function NewsPagination({
  total,
  currentPage,
}: NewsPaginationProps) {
  const [selectedPage, setSelectedPage] = useState(currentPage ?? 1)

  const router = useRouter()

  function previousPage() {
    if (selectedPage <= 1) return

    setCurrentPage(selectedPage - 1)
  }

  function nextPage() {
    if (selectedPage >= total) return

    setCurrentPage(selectedPage + 1)
  }

  function setCurrentPage(page: number) {
    setSelectedPage(page)

    router.push(`/?page=${page}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => previousPage()} />
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => setCurrentPage(i + 1)}
              className={`${selectedPage == i + 1 && 'bg-zinc-300'} `}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => nextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
