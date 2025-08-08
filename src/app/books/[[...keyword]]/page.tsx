import LinkedBookDetails from '@/components/LinkedBookDetails'
import { getBooksByKeyword } from '@/lib/getter'

interface BookResultProps {
  params: Promise<{
    keyword?: string[]
  }>
}

export default async function BookResult({
  params,
}: BookResultProps) {
  const { keyword = ['React'] } = await params
  const searchKeyword = keyword.join(' ')
  const books = await getBooksByKeyword(searchKeyword)
  return (
    <div>
      {books.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </div>
  )
}
