import { type FormEvent, useEffect, useRef, useState } from 'react'
import { type Book } from '@components/Book'
import Button from '@ui/Button'
import clsx from 'clsx'
import { AUTHORS, cn } from '@/utils'

type BookFormProps = {
  book: Book
  onCancel: () => void
  onChange: (book: Book) => void
  onSave: () => void
}

function BookForm({ book, onCancel, onChange, onSave }: BookFormProps) {
  const [localBook, setLocalBook] = useState(book)
  const oldTitle = useRef(book.title)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    console.log('Le composant est monté ou le state a changé')
  })

  useEffect(() => {
    console.log('Le composant est monté')
  }, [])

  useEffect(() => {
    console.log(`Le livre choisi a changé`, localBook)
  }, [localBook])

  useEffect(() => {
    const timer = setInterval(() => console.log('tick'), 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      return
    }

    alert('Erreur')
  }, [errors])

  useEffect(() => {
    console.log('NOUVELLE VALEUR', localBook)
    console.log(oldTitle.current, localBook.title)
    if (oldTitle.current !== localBook.title) {
      console.log('Le titre a changé')
    }

    return () => {
      console.log('ANCIENNE VALEUR', localBook)
      oldTitle.current = localBook.title
    }
  }, [localBook.title])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const book = { ...localBook, [event.target.name]: event.target.value }
    setLocalBook(book)
    onChange(book)
  }

  const handleCancel = () => {
    onCancel()
  }

  const handleSave = (event: FormEvent) => {
    event.preventDefault()

    setErrors({})

    const errors: Record<string, string> = {}

    if (!localBook.title) {
      errors.title = 'Le titre est obligatoire'
    }

    if (!Array.from(AUTHORS).includes(localBook.author)) {
      errors.author = `L'auteur est incorrect`
    }

    if (!localBook.year) {
      errors.year = `L'année est obligatoire`
    }

    if (localBook.year < 1900 || localBook.year > 2023) {
      errors.year = `L'année n'est pas correcte`
    }

    if (!localBook.image || !localBook.image.startsWith('http')) {
      errors.image = `L'url n'est pas correcte`
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    onSave()
  }

  return (
    <form onSubmit={handleSave}>
      <div className="mb-2">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          className={clsx('border border-gray-300 rounded-md py-1 px-2 w-full', errors.title && 'border-red-500')}
          value={localBook.title}
          name="title"
          onChange={handleChange}
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-2">
        <label htmlFor="author" className={cn(errors.author && 'text-red-500')}>Auteur</label>
        <select
          id="author"
          className={cn('border border-gray-300 rounded-md py-1 px-2 w-full', errors.author && 'border-red-500')}
          value={localBook.author}
          name="author"
          onChange={handleChange}
        >
          <option value="" disabled>Choisir un auteur</option>
          {Array.from(AUTHORS).map(author => (
            <option key={author} value={author}>{author}</option>
          ))}
        </select>
        {errors.author && <p className="text-red-500">{errors.author}</p>}
      </div>

      <div className="mb-2">
        <label htmlFor="year">Année</label>
        <input
          id="year"
          type="number"
          className={clsx('border border-gray-300 rounded-md py-1 px-2 w-full', errors.year && 'border-red-500')}
          value={localBook.year}
          name="year"
          onChange={handleChange}
        />
        {errors.year && <p className="text-red-500">{errors.year}</p>}
      </div>

      <div className="mb-2">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          className={clsx('border border-gray-300 rounded-md py-1 px-2 w-full', errors.image && 'border-red-500')}
          value={localBook.image}
          name="image"
          onChange={handleChange}
        />
        {errors.image && <p className="text-red-500">{errors.image}</p>}
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button title="Annuler" onClick={handleCancel} className="bg-red-500 hover:bg-red-800" type="button">
          Annuler
        </Button>
        <Button title="Sauvegarder">
          Sauvegarder
        </Button>
      </div>
    </form>
  )
}

export default BookForm
