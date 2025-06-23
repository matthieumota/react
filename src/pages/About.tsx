import type { Book as BookType } from '@/components/Book'
import useFetch from '@/hooks/useFetch'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

function About() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string>()
  const { data: books, loading, error } = useFetch<BookType[]>(
    `http://localhost:3000/books?q=${search}`,
  )
  const navigate = useNavigate()
  const goToBook = () => navigate(`/livre/${selected}`)

  useEffect(() => {
    if (!books) return

    const randomBook = books[Math.floor(Math.random() * books.length)]
    setSelected(randomBook.id.toString())
  }, [books])

  const selectedBook = useMemo(() => {
    console.log('Calcul du selectedBook')
    return books?.find(b => b.id === Number(selected))
  }, [selected])

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">A propos</h1>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />

      {/*books && <select className="border border-gray-300 rounded-md py-1 px-2 w-full"
        value={selected?.id}
        onChange={(event) => setSelected(books.find(b => b.id === Number(event.target.value)))}
      >
        {books.map(b =>
          <option key={b.id} value={b.id}>{b.title}</option>
        )}
      </select>*/}

      {books && <select className="border border-gray-300 rounded-md py-1 px-2 w-full"
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      >
        {books.map(b =>
          <option key={b.id} value={b.id}>{b.title}</option>
        )}
      </select>}

      {selectedBook && <>
        <h2>Vous allez vous rendre sur le livre {selectedBook.title}</h2>
        <button onClick={goToBook}>Aller sur le livre</button>
      </>}

      {JSON.stringify(loading)}
      {JSON.stringify(error)}
    </>
  )
}

export default About
