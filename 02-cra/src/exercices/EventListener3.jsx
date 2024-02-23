import { useState } from 'react';

function EventListener3() {
    const [animal, setAnimal] = useState('Ronron');
    const [notes, setNotes] = useState([1, 10, 15, 19, 20]);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const displayText = (value) => {
        alert(value);
    }

    const removeLastElement = () => {
        setNotes(notes.slice(0, -1));
    }

    return (
        <div>
            <div>
                <p>Créer une fonction displayText qui prend en paramètre une chaîne de caractère</p>
                <p>Créer un bouton qui envoie la valeur de state de animal en paramètre, et qui appelle la fonction displayText</p>
                <button onClick={() => displayText(animal)}>Afficher</button>
            </div>
            <div>
                <p>Créer un bouton qui va retirer le dernier élément de la liste des notes</p>
                <p>Il faut que le bouton appelle une fonction removeLastElement, qui va retirer le dernier élément des notes.</p>
                <p>
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop">
                        Documentation sur l'utilisation de array.pop
                    </a>
                </p>
                {notes.map((note, index) => <p key={index}>{note}</p>)}
                <button onClick={() => removeLastElement()}>Retirer le dernier</button>
            </div>
            <div>
                <p>Créer un bouton qui va afficher ou non cette image en changeant la valeur de isDisplayed</p>
                <p>Il faut que le bouton appelle une fonction changeImageDisplay, qui va changer le state de isDisplayed</p>
                {isDisplayed && <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500" alt="airbnb" />}
                <button onClick={() => setIsDisplayed(!isDisplayed)}>
                    {!isDisplayed ? 'Afficher' : 'Cacher'}
                </button>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default EventListener3;
