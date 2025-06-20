export type Author = {
  id: string
  name: string
  birthday: string | Date
}

type AuthorProps = {
  author: Author
}

function Author({ author }: AuthorProps) {
    const birthdate = new Date(author.birthday).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const calculateAge = () => {
        const today = new Date()
        const birthday = new Date(author.birthday)
        let age = today.getFullYear() - birthday.getFullYear()

        if (today.getMonth() < birthday.getMonth() ||
            (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
        ) {
            age -= 1
        }

        return age
    }

    const age = calculateAge()

    return (
        <div className="p-4 bg-white rounded-2xl shadow-md">
            <p className="text-xl font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">Né(e) le {birthdate}</p>
            {age < 100 ?
                <p className="text-sm text-gray-500">A {age} ans</p>
            : <p className="text-sm text-gray-500">A plus de 100 ans</p>}
        </div>
    )
}

export default Author
