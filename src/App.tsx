import Author from '@components/Author'
import { Link, Outlet } from 'react-router'

function App() {
  const authors = [
    {
      id: '029e8020-b294-44de-9961-1bd4ac36d699',
      name: 'J.K. Rowling',
      birthday: new Date('1965-07-31')
    },
    {
      id: 'bde74a0e-b646-4528-a244-ed1a69b4bf42',
      name: 'J.R.R. Tolkien',
      birthday: '1892-03-01',
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <nav className="flex gap-4">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A propos</Link>
        </nav>

        <Outlet />

        <div className="grid grid-cols-2 gap-4 py-16">
          {authors.map((author) => 
            <Author key={author.id} author={author} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
