import { useEffect, useState } from 'react'
import Book, { type Book as BookType } from '@components/Book'
import axios, { AxiosError } from 'axios'
import BookForm from '@/components/BookForm'
import Button from '@/components/ui/Button'

let nextId = 11

function Home() {
    const [selectedBook, setSelectedBook] = useState<BookType>()
    const [showForm, setShowForm] = useState(false)
    const [newBook, setNewBook] = useState<BookType>({
        id: 0,
        title: '',
        author: '',
        year: 0,
        image: '',
    })

    const [books, setBooks] = useState<BookType[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        setLoading(true)

        axios.get('http://localhost:3000/books').then(response => {
            setBooks(response.data)
        }).catch((e: AxiosError) =>
            setError(e.status?.toString() ?? 'Api non disponible')
        ).finally(() => setTimeout(() => setLoading(false), 0))
    }, [])

    // useEffect(() => {
    //   const books = localStorage.getItem('books')
    //   if (books) {
    //     console.log('1', JSON.parse(books))
    //     setBooks(JSON.parse(books))
    //   }
    // }, [])

    // // Permet de savoir si le composant est déjà monté ou non
    // const isMounted = useRef(false)

    // useEffect(() => {
    //   if (!isMounted.current) {
    //     isMounted.current = true
    //     return
    //   }

    //   console.log('2', books)
    //   localStorage.setItem('books', JSON.stringify(books))
    // }, [books])

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const handleAddBook = () => {
        setBooks([
        ...books,
        { ...newBook, id: nextId++ }
        ])
        setNewBook({ id: 0, title: '', author: '', year: 0, image: '' })
        toggleForm()
    }

    const handleRemoveBook = (book: BookType) => {
        setBooks(books.filter(b => b.id !== book.id))
    }

    const handleUpdateBook = (book: BookType) => {
        setBooks(books.map(b => b.id === book.id ? book : b))

        if (selectedBook?.id === book.id) {
        setSelectedBook(book)
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Bookorama</h1>

            {selectedBook && <div className="flex justify-center mb-4">
                <div className="w-1/3">
                    <Book
                        key={selectedBook.id}
                        book={selectedBook}
                        onSelect={() => setSelectedBook(undefined)}
                        onRemove={() => {
                            handleRemoveBook(selectedBook)
                            setSelectedBook(undefined)
                        }}
                        selected
                        onSave={handleUpdateBook}
                    />
                </div>
            </div>}

            {loading && (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
                    <span className="ml-4 text-blue-500 font-medium">Chargement des livres...</span>
                </div>
            )}

            {!loading && error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-xl mx-auto mb-4">
                    <strong className="font-bold">Erreur :</strong>
                    <span className="block sm:inline ml-1">{error}</span>
                </div>
            )}

            <div className="grid grid-cols-4 gap-4">
                {!loading && books.map(book =>
                    <Book
                        key={book.id}
                        book={book}
                        selected={selectedBook?.id === book.id}
                        onSelect={() => setSelectedBook(selectedBook?.id === book.id ? undefined : book)}
                        onRemove={() => handleRemoveBook(book)}
                        onSave={handleUpdateBook}
                    />
                )}
            </div>

            {true && <div className="text-center py-10">
                <Button onClick={toggleForm}>
                    Ajouter un livre
                </Button>
            </div>}

            {showForm && <div className="fixed h-screen w-full top-0 left-0 flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-black/50" onClick={toggleForm}></div>
                <div className="bg-white w-2xl relative z-10 p-8 rounded-lg shadow-md">
                    <pre>{JSON.stringify(newBook, null, 2)}</pre>
                    <BookForm
                        book={newBook}
                        onCancel={toggleForm}
                        onChange={(book: BookType) => setNewBook(book)}
                        onSave={handleAddBook}
                    />
                </div>
            </div>}
        </>
    )
}

export default Home
