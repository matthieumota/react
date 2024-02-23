import { useState } from 'react';

let nextId = 3;

function List() {
    // State (mes variables...)
    const [users, setUsers] = useState([
        { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
        { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
        { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
    ]);
    const [newUser, setNewUser] = useState({ id: null, name: '', avatar: '' });

    // Mes fonctions (qui manipulent le state mais pas que)
    const add = () => {
        setUsers([ ...users, { ...newUser, id: ++nextId, avatar: 'https://i.pravatar.cc/150?u=' + newUser.name } ]);
        setNewUser({ ...newUser, name: '' }); // On vide le champ
    }

    const remove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const handleChange = (event) => {
        // On crée un nouvel objet à partir d'un objet existant (...newUser)
        // et le name qu'on ajoute va remplacer le name existant dans l'objet
        setNewUser({ ...newUser, name: event.target.value });
    }

    // Le rendu HTML où je vais utiliser mes states et mes fonctions
    return (
        <>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <img width={50} src={user.avatar} alt={user.name} />
                        <button onClick={() => remove(user.id)}>X</button>
                    </li>
                )}
            </ul>

            <input type="text" value={newUser.name} onChange={(event) => handleChange(event)} />
            <button onClick={add} disabled={newUser.name.length === 0}>Ajouter</button>
        </>
    );
}

export default List;
