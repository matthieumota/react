import { useState } from 'react';

function State3() {
    const [textExample, setTextExample] = useState('baba');
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setTextExample(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <div>
                <p>Voici un input qui est lié au state textExample</p>
                <input value={textExample} onChange={handleChange} />
                <p>Voici sa valeur {textExample}</p>
            </div>
            <div>
                <p>
                    Créer un input de type texte qui permettra de saisir un texte et qui aura pour valeur le texte du state
                </p>
                <input value={text} onChange={(e) => handleTextChange(e)} />
                <p>
                    Créer une fonction "handleTextChange" qui sera déclenchée à chaque fois que le texte changera. Cette fonction sera appelée avec le déclencheur onChange de l'input
                </p>
                <p>Afficher la valeur de texte ici : {text}</p>
            </div>
        </div>
    )
}

export default State3;
