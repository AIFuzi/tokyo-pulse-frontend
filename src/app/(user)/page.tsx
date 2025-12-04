import Container from '@/components/Container'
import CategorySelector from '@/components/shared/CategorySelector'
import NewsList from '@/components/shared/NewsList'

export default function Home() {
  return (
    <Container className="mb-10">
      <CategorySelector />
      <NewsList />
    </Container>
  )
}
