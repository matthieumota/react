import { useState } from 'react';

function StateChallenge() {
    const [animals, setAnimals] = useState([
        {
            name: 'Trolilo',
            type: 'troll'
        },
        {
            name: 'Sheep sheep',
            type: 'poisson'
        },
        {
            name: 'Donald Trump',
            type: 'orange'
        }
    ]);
    const [newAnimalType, setNewAnimalType] = useState('');
    const [newAnimalName, setNewAnimalName] = useState('');

    const handleChangeType = (e) => {
        setNewAnimalType(e.target.value);
    }

    const handleChangeName = (e) => {
        setNewAnimalName(e.target.value);
    }

    const saveAnimal = () => {
        setAnimals([ ...animals, {
            name: newAnimalName,
            type: newAnimalType
        } ]);

        setNewAnimalName('');
        setNewAnimalType('');
    }

    return (
        <div>
            <ul>
                <li>
                    Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.
                    <ul>
                        {animals.map((animal, index) =>
                            <li key={index}>{animal.name} de type {animal.type}</li>
                        )}
                    </ul>
                </li>
                <li>
                    Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
                    <input type="text" value={newAnimalType} onChange={(e) => handleChangeType(e)} />
                </li>
                <li>
                    Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
                    <input type="text" value={newAnimalName} onChange={(e) => handleChangeName(e)} />
                </li>
                <li>
                    Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
                    {JSON.stringify({ newAnimalName, newAnimalType })}
                    {newAnimalName.length > 0 && newAnimalType.length > 0 &&
                        <button onClick={saveAnimal}>Sauvegarder</button>
                    }
                </li>
                <li>
                    Remplir la fonction saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
                    que la fonction mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
                    la fonction vide les champs newAnimalType et newAnimalName.
                </li>
                <li>Bon courage !</li>
            </ul>
        </div>
    )
}

export default StateChallenge;
