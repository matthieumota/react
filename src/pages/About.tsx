import type { Book as BookType } from '@/components/Book'
import useFetch from '@/hooks/useFetch'
import { useState } from 'react'

function About() {
  const [search, setSearch] = useState('')
  const { data: books, loading, error } = useFetch<BookType[]>(
    `http://localhost:3000/books?q=${search}`,
  )

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">A propos</h1>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />

      {JSON.stringify(books)}
      {JSON.stringify(loading)}
      {JSON.stringify(error)}
    </>
  )
}

export default About
