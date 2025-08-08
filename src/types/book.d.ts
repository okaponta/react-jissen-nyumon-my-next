type Book = {
  id: string
  image: string
  title: string
  price: number
  author: string
  publisher: string
  published: string
}

type ApiBook = Book

type ReviewBook = Book & {
  read: Date
  memo: string
}
