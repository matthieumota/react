import Button from '@ui/Button'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import Counter from '@components/Counter'
import { AUTHORS, cn } from '@/utils'
import Clock from './Clock'
import { Link } from 'react-router'

export type Book = {
  id: number
  title: string
  author: string
  year: number
  image?: string
}

type BookProps = {
  book: Book
  active?: boolean
  selected?: boolean
  onSelect: () => void
  onRemove: () => void
  onSave: (book: Book) => void
}

function Book({
  book,
  active = true,
  selected = false,
  onSelect,
  onRemove,
  onSave
}: BookProps) {
  const [like, setLike] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [localBook, setLocalBook] = useState(book)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSee = () => {
    onSelect()
  }

  const handleRemove = () => {
    onRemove()
  }

  const toggleEdit = () => {
    setEditMode(!editMode)

    if (!editMode) {
      setLocalBook(book)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLocalBook({ ...localBook, [event.target.name]: event.target.value })
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

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    onSave(localBook)
    setEditMode(false)
  }

  if (!active) return

  if (editMode) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <div className="p-4">
          {JSON.stringify(errors)}
          <form onSubmit={handleSave}>
            <div className="mb-2">
              <label htmlFor="title" className={cn(errors.title && 'text-red-500')}>Titre</label>
              {/*<Input name="title" error={errors.title} value={localBook.title} onChange={handleChange} />*/}
              <input
                id="title"
                type="text"
                className={cn('border border-gray-300 rounded-md py-1 px-2 w-full', errors.title && 'border-red-500')}
                value={localBook.title}
                name="title"
                onChange={handleChange}
              />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="author" className={cn(errors.author && 'text-red-500')}>Auteur</label>
              {/*<Choice options={Array.from(AUTHORS)} />*/}
              <select
                id="author"
                className={cn('border border-gray-300 rounded-md py-1 px-2 w-full', errors.author && 'border-red-500')}
                value={localBook.author}
                name="author"
                onChange={handleChange}
              >
                {Array.from(AUTHORS).map(author => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
              {errors.author && <p className="text-red-500">{errors.author}</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="year" className={cn(errors.year && 'text-red-500')}>Année</label>
              <input
                id="year"
                type="number"
                className={cn('border border-gray-300 rounded-md py-1 px-2 w-full', errors.year && 'border-red-500')}
                value={localBook.year}
                name="year"
                onChange={handleChange}
              />
              {errors.year && <p className="text-red-500">{errors.year}</p>}
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button title="Annuler" onClick={toggleEdit} className="bg-red-500 hover:bg-red-800" type="button">
                Annuler
              </Button>
              <Button title="Sauvegarder">
                Sauvegarder
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {book.image && <img
        src={book.image}
        alt={`Couverture de ${book.title}`}
        className="w-full h-64 object-cover"
      /> || 'Pas dimage'}
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{book.title}</h1>
        <h2 className="text-md text-gray-600 mb-2">{book.author}</h2>
        <p className="text-sm text-gray-500 mb-2">Publié en {book.year}</p>

        <Button onClick={handleSee} className={cn({
          'bg-green-500': selected
        })}>Voir</Button>
        <Button onClick={() => {
          setLike(like => like + 1)
          setLike(like => like + 1)
          setLike(like => like + 1)
        }} title={`() => setLike(${like} + 1)`}>
          ❤️‍🔥
          {like > 0 && <>({like})</>}
        </Button>
        <Button title="Supprimer" onClick={handleRemove} className="bg-red-500 hover:bg-red-800">
          🗑️
        </Button>
        <Button title="Modifier" onClick={toggleEdit}>
          Modifier
        </Button>
        <Link to={`/livre/${book.id}`} className="inline-block bg-blue-500 hover:bg-blue-800 text-white py-1.5 px-4 rounded-md duration-300 disabled:opacity-50">
          Visiter
        </Link>

        {like > 1 && <Clock />}

        {/*<Counter />
        <Counter initialValue={5} />
        <Counter initialValue={10} maxValue={15} />*/}
      </div>
    </div>
  )
}

export default Book
