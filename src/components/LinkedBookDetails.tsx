import Link from 'next/link'
import BookDetails from './BookDetails'

type LinkedBookDetailsProps = {
  index: number
  book: ApiBook | ReviewBook
}

export default function LinkedBookDetails({
  index,
  book,
}: LinkedBookDetailsProps) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  )
}
